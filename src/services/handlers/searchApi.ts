import { estypes } from '@elastic/elasticsearch';

import { CLASSIFIER_SEARCH_RESPONSE } from './mocks/classifier-search';
import { CLASSIFIER_COUNT_LEVEL_1 } from './mocks/classifier-themes-level-1';
import { CLASSIFIER_COUNT_LEVEL_2 } from './mocks/classifier-themes-level-2';
import { QUICK_SEARCH_RESPONSE } from './mocks/quick-search';
import { QUICK_SEARCH_RESOURCE_TYPE_FILTERS, QUICK_SEARCH_STUDY_PERIOD_FILTERS } from './mocks/quick-search-filters';
import { performQuery } from '../../config/elasticSearchClient';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { IFilterFlags } from '../../interfaces/searchPayload.interface';
import { IAggregationOptions, ISearchItem, ISearchResults } from '../../interfaces/searchResponse.interface';
import { defaultFilterOptions } from '../../utils/constants';
import { formatSearchResponse } from '../../utils/formatSearchResponse';
import { generateSearchQuery } from '../../utils/queryBuilder';

const getSearchResults = async (
  searchFieldsObject: ISearchPayload,
  isMapResults: boolean = false,
  isQuickSearchJourney: boolean = false,
): Promise<ISearchResults> => {
  try {
    if (Object.keys(searchFieldsObject.fields).length) {
      // const searchBuilderPayload: ISearchBuilderPayload = {
      //   searchFieldsObject,
      //   ...(isQuickSearchJourney && {
      //     fieldsToSearch: quickSearchTargetFields,
      //   }),
      // };
      // const payload = generateSearchQuery(searchBuilderPayload);
      // const response = await performQuery<estypes.SearchResponse>(payload);
      const response = isQuickSearchJourney ? QUICK_SEARCH_RESPONSE : CLASSIFIER_SEARCH_RESPONSE;
      const finalResponse: ISearchResults = await formatSearchResponse(response, false, isMapResults);
      return finalResponse;
    } else {
      return Promise.resolve({ total: 0, items: [] });
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

      let response;
      if (level === 1) {
        response = CLASSIFIER_COUNT_LEVEL_1;
      } else {
        response = CLASSIFIER_COUNT_LEVEL_2;
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

const getDocumentDetails = async (docId: string): Promise<ISearchItem> => {
  try {
    const payload = generateSearchQuery({ docId });
    const response = await performQuery<estypes.SearchResponse>(payload);
    const responseData = response;
    if (responseData?.hits?.total?.valueOf) {
      const finalResponse: ISearchResults = await formatSearchResponse(responseData, true);
      return finalResponse?.items?.[0] as ISearchItem;
    } else {
      return Promise.resolve({} as ISearchItem);
    }
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw new Error(`Error fetching results: ${error.message}`);
  }
};

export { getDocumentDetails, getFilterOptions, getSearchResultsCount, getSearchResults };
