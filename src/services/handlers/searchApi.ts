import { CLASSIFIER_COUNT_LEVEL_2 } from './mocks/classifier-themes-level-2';
import { CLASSIFIER_COUNT_LEVEL_3 } from './mocks/classifier-themes-level-3';
import { QUICK_SEARCH_RESOURCE_TYPE_FILTERS, QUICK_SEARCH_STUDY_PERIOD_FILTERS } from './mocks/quick-search-filters';
import { Credentials } from '../..//interfaces/auth';
import { environmentConfig } from '../../config/environmentConfig';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { IFilterFlags } from '../../interfaces/searchPayload.interface';
import { IAggregationOptions, ISearchResponse, ISearchResults } from '../../interfaces/searchResponse.interface';
import { defaultFilterOptions } from '../../utils/constants';
import { formatSearchResponse, transformSearchResponse } from '../../utils/formatSearchResponse';
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
      const agmApiResponse = await fetch(environmentConfig.searchApiUrl, {
        method: 'POST',
        ...(headers && { headers }),
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

const getSearchResultsCount = async (
  searchFieldsObject: ISearchPayload,
  level: number = 1,
): Promise<{ totalResults: number }> => {
  try {
    // const searchBuilderPayload: ISearchBuilderPayload = {
    //   searchFieldsObject,
    //   isCount: true,
    // };
    // const payload = generateSearchQuery(searchBuilderPayload);
    if (Object.keys(searchFieldsObject.fields).length) {
      // const response = await performQuery<estypes.CountResponse>(payload, true);

      // level 1 does not have a count as it's the first page
      let response;
      if (level === 2) {
        response = CLASSIFIER_COUNT_LEVEL_2;
      } else if (level === 3) {
        response = CLASSIFIER_COUNT_LEVEL_3;
      }

      return { totalResults: response?.count ?? 0 };
    } else {
      return Promise.resolve({ totalResults: 0 });
    }
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw new Error(`Error fetching results: ${error.message}`);
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
    const agmApiSearchResponse = await fetch(`${environmentConfig.searchApiUrl}/${docId}`, {
      method: 'GET',
      ...(headers && { headers }),
    });
    if (!agmApiSearchResponse.ok) {
      throw new Error(`Error fetching results: ${agmApiSearchResponse.statusText}`);
    }
    const searchData = await agmApiSearchResponse.json();
    const finalResponse = formatSearchResponse(searchData);

    return finalResponse;
  } catch (error: any) {
    throw new Error(`Error fetching results: ${error.message}`);
  }
};

export { getDocumentDetails, getFilterOptions, getSearchResultsCount, getSearchResults };
