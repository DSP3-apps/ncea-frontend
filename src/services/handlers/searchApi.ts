import { QUICK_SEARCH_RESOURCE_TYPE_FILTERS, QUICK_SEARCH_STUDY_PERIOD_FILTERS } from './mocks/quick-search-filters';
import { environmentConfig } from '../../config/environmentConfig';
import { Credentials } from '../../interfaces/auth';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { IFilterFlags } from '../../interfaces/searchPayload.interface';
import { IAggregationOptions, ISearchResponse, ISearchResults } from '../../interfaces/searchResponse.interface';
import { defaultFilterOptions } from '../../utils/constants';
import { formatSearchResponse, transformSearchResponse } from '../../utils/formatSearchResponse';
import { isEmpty } from '../../utils/isEmpty';
import { generateSearchQuery } from '../../utils/queryBuilder';
import { ISearchFiltersProcessed } from '../../utils/searchFilters';

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

      const headers = credentials ? { Authorization: `Bearer ${credentials?.jwt}` } : null;
      const agmApiResponse = await fetch(
        `${environmentConfig.searchApiUrl}?sortBy=${searchFieldsObject?.sort ?? 'most_relevant'}`,
        {
          method: 'POST',
          ...(headers && { headers }),
          body: JSON.stringify(payload),
        },
      );

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
      const headers = credentials ? { Authorization: `Bearer ${credentials?.jwt}` } : null;
      const agmApiResponse = await fetch(`${environmentConfig.categoryResultCountApiUrl}`, {
        method: 'POST',
        ...(headers && { headers }),
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
      // const searchBuilderPayload: ISearchBuilderPayload = {
      //   searchFieldsObject,
      //   isAggregation: true,
      //   ...(isQuickSearchJourney && {
      //     fieldsToSearch: quickSearchTargetFields,
      //   }),
      // };
      // const payload = generateFilterQuery(searchBuilderPayload, {
      //   isStudyPeriod,
      // });
      // payload.terminate_after = 10000;
      // const response = await performQuery<estypes.SearchResponse>(payload);
      // const finalResponse: IAggregationOptions = await formatAggregationResponse(response, defaultFilterOptions);
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
    const headers = credentials ? { Authorization: `Bearer ${credentials?.jwt}` } : null;
    const [agmApiSearchResponse, agmApiVocabalaryResponse] = await Promise.all([
      fetch(`${environmentConfig.searchApiUrl}/${docId}`, {
        method: 'GET',
        ...(headers && { headers }),
      }),
      fetch(`${environmentConfig.vocabularyApiUrl}`, {
        method: 'GET',
        headers: { 'X-API-Key': environmentConfig.classifierApiKey } as HeadersInit,
      }),
    ]);

    if (!agmApiSearchResponse.ok) {
      throw new Error(`Error fetching results: ${agmApiSearchResponse.statusText}`);
    }

    if (!agmApiVocabalaryResponse.ok) {
      throw new Error(`Error fetching vocabulary data: ${agmApiVocabalaryResponse.statusText}`);
    }
    const searchData = await agmApiSearchResponse.json();
    const vocabularyData = await agmApiVocabalaryResponse.json();
    const finalResponse = formatSearchResponse(searchData, vocabularyData);

    return finalResponse;
  } catch (error: any) {
    throw new Error(`Error fetching results: ${error.message}`);
  }
};

export { getDocumentDetails, getFilterOptions, getSearchResultsCount, getSearchResults };
