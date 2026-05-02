import type { ConfigEnv } from '@agrimetrics/services';

import { QUICK_SEARCH_RESOURCE_TYPE_FILTERS, QUICK_SEARCH_STUDY_PERIOD_FILTERS } from './mocks/quick-search-filters';
import { environmentConfig } from '../../config/environmentConfig';
import { Credentials } from '../../interfaces/auth';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { IFilterFlags } from '../../interfaces/searchPayload.interface';
import {
  CatalogServiceInstance,
  FileDownloadUrlResponse,
  FileManagementFile,
  FileManagementServiceInstance,
  HeadersMap,
  IAggregationOptions,
  IResources,
  ISearchResponse,
  ISearchResults,
  NaturalCapitalTheme,
  SearchDataWithOptionalFiles,
} from '../../interfaces/searchResponse.interface';
import { getUrlAndAuthHeader } from '../../utils/authHeader';
import { defaultFilterOptions } from '../../utils/constants';
import { formatSearchResponse, transformSearchResponse } from '../../utils/formatSearchResponse';
import { isEmpty } from '../../utils/isEmpty';
import { generateSearchQuery } from '../../utils/queryBuilder';
import { ISearchFiltersProcessed } from '../../utils/searchFilters';

let catalogServicePromise: Promise<CatalogServiceInstance> | null = null;

let fileManagementServicePromise: Promise<FileManagementServiceInstance> | null = null;

const getServicesConfigKey = (): ConfigEnv => {
  return environmentConfig.env === 'live' ? 'defraLive' : 'defraTest';
};

const isStringField = (value: object, key: string): boolean => {
  return Object.prototype.toString.call(Reflect.get(value, key)) === '[object String]';
};

const isNullableStringField = (value: object, key: string): boolean => {
  const fieldValue = Reflect.get(value, key);
  return fieldValue === null || Object.prototype.toString.call(fieldValue) === '[object String]';
};

const hasDataSetId = (
  searchData: SearchDataWithOptionalFiles,
): searchData is SearchDataWithOptionalFiles & {
  dataSet: { id: string };
} => {
  const dataSetId = searchData.dataSet?.id;
  return Object.prototype.toString.call(dataSetId) === '[object String]' && String(dataSetId).trim().length > 0;
};

const isObject = (value: object | null | undefined): value is object => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

const isMoreInfoSearchItem = (value: object): value is SearchDataWithOptionalFiles => {
  if (!('id' in value)) {
    return false;
  }

  const id = Reflect.get(value, 'id');
  return Object.prototype.toString.call(id) === '[object String]' && String(id).trim().length > 0;
};

const isResource = (value: object): value is IResources => {
  if (!('url' in value) || !('type' in value) || !('name' in value) || !('language' in value)) {
    return false;
  }

  const hasUrl = isStringField(value, 'url');
  const hasType = isStringField(value, 'type');
  const hasName = isStringField(value, 'name');
  const hasLanguage = isNullableStringField(value, 'language');
  return hasUrl && hasType && hasName && hasLanguage;
};

const isFileManagementFile = (value: object): value is FileManagementFile => {
  if (!('name' in value) || !('type' in value)) {
    return false;
  }

  const hasValidFileUri = !('fileURI' in value) || isStringField(value, 'fileURI');
  return isStringField(value, 'name') && isStringField(value, 'type') && hasValidFileUri;
};

const getResourceFiles = (value: object): IResources[] => {
  if (!('files' in value)) {
    return [];
  }

  const filesCandidate = value.files;
  if (!Array.isArray(filesCandidate)) {
    return [];
  }

  return filesCandidate.flatMap((file): IResources[] => {
    if (!isObject(file)) {
      return [];
    }

    if (isResource(file)) {
      return [file];
    }

    if (!isFileManagementFile(file)) {
      return [];
    }

    return [
      {
        url: file.fileURI ?? '',
        type: file.type,
        name: file.name,
        language: null,
      },
    ];
  });
};

const hasValidFileDownloadUrl = (payload: { url?: string }): payload is FileDownloadUrlResponse => {
  return Boolean(payload.url?.trim());
};

const isNaturalCapitalThemeArray = (payload: NaturalCapitalTheme[] | undefined): payload is NaturalCapitalTheme[] => {
  return Array.isArray(payload);
};

const getCatalogService = async (): Promise<CatalogServiceInstance> => {
  if (!catalogServicePromise) {
    catalogServicePromise = import('@agrimetrics/services').then(({ CatalogService }) => {
      return new CatalogService(getServicesConfigKey());
    });
  }

  return catalogServicePromise;
};

const getFileManagementService = async (): Promise<FileManagementServiceInstance> => {
  if (!fileManagementServicePromise) {
    fileManagementServicePromise = import('@agrimetrics/services').then(({ FileManagementService }) => {
      return new FileManagementService(getServicesConfigKey());
    });
  }

  return fileManagementServicePromise;
};

const requireUrl = (value: string | undefined, name: string): string => {
  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
};

const getSearchResults = async (
  searchFieldsObject: ISearchPayload,
  credentials: Credentials,
  filters: ISearchFiltersProcessed,
  isMapResults: boolean = false,
  // isQuickSearchJourney: boolean = false, // TODO: We may need to add this back in, which is why I've left it.
): Promise<ISearchResults> => {
  try {
    if (Object.keys(searchFieldsObject.fields).length) {
      const payload = generateSearchQuery(searchFieldsObject, filters);

      const searchApiUrl = requireUrl(environmentConfig.searchApiUrl, 'SEARCH_API');
      const { url, authHeader } = getUrlAndAuthHeader(searchApiUrl);

      const headers: HeadersMap = {};

      // Prefer basic auth if the URL contained credentials; fall back to JWT otherwise.
      if (authHeader) {
        headers.Authorization = authHeader;
      } else if (credentials) {
        headers.Authorization = `Bearer ${credentials.jwt}`;
      }

      const agmApiResponse = await fetch(`${url}?sortBy=${searchFieldsObject?.sort ?? 'most_relevant'}`, {
        method: 'POST',
        ...(Object.keys(headers).length ? { headers } : {}),
        body: JSON.stringify(payload),
      });

      if (!agmApiResponse.ok) {
        throw new Error(`Error fetching results: ${agmApiResponse.statusText}`);
      }

      const searchData: ISearchResponse = await agmApiResponse.json();

      const transformedResults: ISearchResults = transformSearchResponse(searchData, isMapResults);

      return transformedResults;
    } else {
      return Promise.resolve({ total: 0, items: [], hasSpatialData: false });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error fetching results: ${message}`);
  }
};

const getSearchResultsCount = async (parent: string, credentials: Credentials): Promise<{ totalResults: number }> => {
  try {
    if (!isEmpty(parent)) {
      const categoryResultCountApiUrl = requireUrl(
        environmentConfig.categoryResultCountApiUrl,
        'CATEGORY_RESULT_COUNT_API',
      );
      const { url, authHeader } = getUrlAndAuthHeader(categoryResultCountApiUrl);

      const headers: HeadersMap = {};

      if (authHeader) {
        headers.Authorization = authHeader;
      } else if (credentials) {
        headers.Authorization = `Bearer ${credentials.jwt}`;
      }

      const agmApiResponse = await fetch(`${url}`, {
        method: 'POST',
        ...(Object.keys(headers).length ? { headers } : {}),
        body: JSON.stringify(parent.split(',')),
      });

      if (!agmApiResponse.ok) {
        throw new Error(`Error fetching category record count results: ${agmApiResponse.statusText}`);
      }

      const categoryCountData = await agmApiResponse.json();

      return { totalResults: categoryCountData?.totalDocumentCount ?? 0 };
    }
    return { totalResults: 0 };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error fetching category record count results: ${message}`);
  }
};

const getFilterOptions = async (
  searchFieldsObject: ISearchPayload,
  filterFlags?: IFilterFlags,
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  isQuickSearchJourney: boolean = false,
): Promise<IAggregationOptions> => {
  try {
    const isStudyPeriod = Boolean(filterFlags?.isStudyPeriod);
    if (Object.keys(searchFieldsObject.fields).length) {
      let finalResponse;

      if (isStudyPeriod) {
        finalResponse = QUICK_SEARCH_STUDY_PERIOD_FILTERS;
      } else {
        finalResponse = QUICK_SEARCH_RESOURCE_TYPE_FILTERS;
      }

      return finalResponse;
    } else {
      const fallbackResolve: IAggregationOptions = defaultFilterOptions.reduce((acc, curr) => {
        acc[curr.key] = [];
        return acc;
      }, {});
      return Promise.resolve(fallbackResolve);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error fetching results: ${message}`);
  }
};

const getDocumentDetails = async (
  docId: string,
  credentials: Credentials,
): Promise<ReturnType<typeof formatSearchResponse>> => {
  try {
    const vocabularyApiUrl = requireUrl(environmentConfig.vocabularyApiUrl, 'VOCABULARY_API');
    const { url: vocabUrl, authHeader: vocabAuthHeader } = getUrlAndAuthHeader(vocabularyApiUrl);

    const classifierApiKey = requireUrl(environmentConfig.classifierApiKey, 'CLASSIFIER_API_KEY');
    const vocabHeaders: HeadersMap = { 'X-API-Key': classifierApiKey };
    if (vocabAuthHeader) {
      vocabHeaders.Authorization = vocabAuthHeader;
    }

    const catalogService = await getCatalogService();

    const fileManagementService = await getFileManagementService();

    const [searchDataResponse, agmApiVocabalaryResponse] = await Promise.all([
      catalogService.getCatalogueEntry(docId, credentials?.jwt ?? null),
      fetch(`${vocabUrl}`, {
        method: 'GET',
        headers: vocabHeaders,
      }),
    ]);

    if (!isMoreInfoSearchItem(searchDataResponse)) {
      throw new Error('Invalid catalogue response payload');
    }

    if (!agmApiVocabalaryResponse.ok) {
      throw new Error(`Error fetching vocabulary data: ${agmApiVocabalaryResponse.statusText}`);
    }
    const vocabularyDataRaw = await agmApiVocabalaryResponse.json();
    const vocabularyData: NaturalCapitalTheme[] = isNaturalCapitalThemeArray(vocabularyDataRaw)
      ? vocabularyDataRaw
      : [];

    const fileDataSetId = hasDataSetId(searchDataResponse)
      ? searchDataResponse.dataSet.id.trim()
      : searchDataResponse.id.trim();

    let formattedSearchData = searchDataResponse;
    if (fileDataSetId) {
      const fileListResponse = await fileManagementService.listFilesOnDataSet(fileDataSetId, credentials?.jwt ?? null);
      const files = getResourceFiles(fileListResponse);
      if (files.length > 0) {
        formattedSearchData = {
          ...searchDataResponse,
          files,
        };
      }
    }
    const finalResponse = formatSearchResponse(formattedSearchData, vocabularyData);

    return finalResponse;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Error fetching results: ${message}`);
  }
};

const getFileDownloadUrl = async (
  dataSetId: string,
  fileName: string,
  credentials: Credentials,
): Promise<{ url: string }> => {
  const searchApiUrl = requireUrl(environmentConfig.searchApiUrl, 'SEARCH_API');
  const { url: baseUrl, authHeader } = getUrlAndAuthHeader(searchApiUrl);
  const origin = new URL(baseUrl).origin;
  const fileDownloadUrl = `${origin}/file-management-open/data-sets/${encodeURIComponent(dataSetId)}/files/${encodeURIComponent(fileName)}/download-url`;

  const headers: HeadersMap = {};
  if (authHeader) {
    headers.Authorization = authHeader;
  } else if (credentials?.jwt) {
    headers.Authorization = `Bearer ${credentials.jwt}`;
  }

  const response = await fetch(fileDownloadUrl, { method: 'GET', headers });

  if (!response.ok) {
    const body = await response.text().catch(() => String(response.status));
    throw new Error(`Upstream /file-management-open returned ${response.status}: ${body}`);
  }

  const payload = await response.json();
  if (!hasValidFileDownloadUrl(payload)) {
    throw new Error('Upstream /file-management-open returned invalid payload');
  }

  return { url: payload.url };
};

export { getDocumentDetails, getFileDownloadUrl, getFilterOptions, getSearchResultsCount, getSearchResults };
