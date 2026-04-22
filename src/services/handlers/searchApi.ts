import type { ConfigEnv } from '@agrimetrics/services';

import { QUICK_SEARCH_RESOURCE_TYPE_FILTERS, QUICK_SEARCH_STUDY_PERIOD_FILTERS } from './mocks/quick-search-filters';
import { environmentConfig } from '../../config/environmentConfig';
import { Credentials } from '../../interfaces/auth';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { IFilterFlags } from '../../interfaces/searchPayload.interface';
import {
  IAggregationOptions,
  IMoreInfoSearchItem,
  ISearchResponse,
  ISearchResults,
} from '../../interfaces/searchResponse.interface';
import { getUrlAndAuthHeader } from '../../utils/authHeader';
import { defaultFilterOptions } from '../../utils/constants';
import { formatSearchResponse, transformSearchResponse } from '../../utils/formatSearchResponse';
import { isEmpty } from '../../utils/isEmpty';
import { generateSearchQuery } from '../../utils/queryBuilder';
import { ISearchFiltersProcessed } from '../../utils/searchFilters';

type HeadersMap = Record<string, string>;

type CatalogServiceInstance = {
  getCatalogueEntry: (docId: string, jwt: string | null) => Promise<unknown>;
};

let catalogServicePromise: Promise<CatalogServiceInstance> | null = null;

const getServicesConfigKey = (): ConfigEnv => {
  return environmentConfig.env === 'live' ? 'defraLive' : 'defraTest';
};

const getCatalogService = async (): Promise<CatalogServiceInstance> => {
  if (!catalogServicePromise) {
    catalogServicePromise = import('@agrimetrics/services').then(({ CatalogService }) => {
      return new CatalogService(getServicesConfigKey()) as CatalogServiceInstance;
    });
  }

  return catalogServicePromise;
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
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw new Error(`Error fetching results: ${error.message}`);
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

    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw new Error(`Error fetching category record count results: ${error.message}`);
  }
};

const getFilterOptions = async (
  searchFieldsObject: ISearchPayload,
  filterFlags?: IFilterFlags,
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  isQuickSearchJourney: boolean = false,
): Promise<IAggregationOptions> => {
  try {
    const { isStudyPeriod = false } = filterFlags as IFilterFlags;
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
  } catch (error: any) {
    throw new Error(`Error fetching results: ${error.message}`);
  }
};

const getDocumentDetails = async (docId: string, credentials: Credentials): Promise<any> => {
  try {
    const searchApiUrl = requireUrl(environmentConfig.searchApiUrl, 'SEARCH_API');
    const { url, authHeader } = getUrlAndAuthHeader(searchApiUrl);

    const searchHeaders: HeadersMap = {};

    if (authHeader) {
      searchHeaders.Authorization = authHeader;
    } else if (credentials) {
      searchHeaders.Authorization = `Bearer ${credentials.jwt}`;
    }

    const vocabularyApiUrl = requireUrl(environmentConfig.vocabularyApiUrl, 'VOCABULARY_API');
    const { url: vocabUrl, authHeader: vocabAuthHeader } = getUrlAndAuthHeader(vocabularyApiUrl);

    const classifierApiKey = requireUrl(environmentConfig.classifierApiKey, 'CLASSIFIER_API_KEY');
    const vocabHeaders: HeadersMap = { 'X-API-Key': classifierApiKey };
    if (vocabAuthHeader) {
      vocabHeaders.Authorization = vocabAuthHeader;
    }

    const catalogService = await getCatalogService();

    const [searchData, agmApiVocabalaryResponse] = await Promise.all([
      catalogService.getCatalogueEntry(docId, credentials?.jwt ?? null) as Promise<IMoreInfoSearchItem>,
      fetch(`${vocabUrl}`, {
        method: 'GET',
        headers: vocabHeaders,
      }),
    ]);

    if (!agmApiVocabalaryResponse.ok) {
      throw new Error(`Error fetching vocabulary data: ${agmApiVocabalaryResponse.statusText}`);
    }
    const vocabularyData = await agmApiVocabalaryResponse.json();
    const finalResponse = formatSearchResponse(searchData, vocabularyData);

    return finalResponse;
  } catch (error: any) {
    throw new Error(`Error fetching results: ${error.message}`);
  }
};

export { getDocumentDetails, getFilterOptions, getSearchResultsCount, getSearchResults };
