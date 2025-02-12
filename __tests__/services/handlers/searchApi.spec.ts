import { generateSearchQuery } from '../../../src/utils/queryBuilder';
import { performQuery } from '../../../src/config/elasticSearchClient';
import { ISearchPayload, ISearchRequest } from '../../../src/interfaces/queryBuilder.interface';
import {
  defaultFilters,
  resourceTypeFilterField,
  uniqueResourceTypesKey,
  yearRange,
} from '../../../src/utils/constants';
import { formattedResourceTypeResponse, resourceTypeAPIResponse } from '../../data/resourceTypeResponse';
import {
  getDocumentDetails,
  getFilterOptions,
  getSearchResults,
  getSearchResultsCount,
} from '../../../src/services/handlers/searchApi';
import { detailsEmptyAPIResponse, detailsSuccessAPIResponse } from '../../data/documentDetailsResponse';
import { formatAggregationResponse } from '../../../src/utils/formatAggregationResponse';
import { formatSearchResponse } from '../../../src/utils/formatSearchResponse';
import { IAggregationOptions, ISearchResults } from '../../../src/interfaces/searchResponse.interface';
import { estypes } from '@elastic/elasticsearch';
import { QUICK_SEARCH_RESPONSE } from '../../../src/services/handlers/mocks/quick-search';
import { CLASSIFIER_COUNT_LEVEL_2 } from '../../../src/services/handlers/mocks/classifier-themes-level-2';
import { applyMockFilters, DataScope } from '../../../src/utils/searchFilters';

import {
  categoryFilteredData,
  defaultQuery,
  keywordFilteredData,
  lastUpdatedFilteredData,
  licenseFilteredData,
  restrictiveFilteredData,
} from '../../data/quickSearch';
import { writeFileSync } from 'fs';
import { QUICK_SEARCH_RESOURCE_TYPE_FILTERS } from '../../../src/services/handlers/mocks/quick-search-filters';

jest.mock('../../../src/config/elasticSearchClient', () => ({
  performQuery: jest.fn(() => {
    return Promise.resolve({ data: 'mocked response' });
  }),
}));
jest.mock('../../../src/utils/formatSearchResponse', () => ({
  formatSearchResponse: jest.fn((apiResponse) => ({
    total: apiResponse?.hits?.total?.value,
    items: [],
  })),
}));

jest.mock('../../../src/utils/formatAggregationResponse', () => ({
  formatAggregationResponse: jest.fn(),
}));

const CREDENTIALS = {
  jwt: 'test',
  user: {
    name: 'test name',
    email: 'test email',
  },
};

describe('Search API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('Search API - To fetch the search results', () => {
    it.skip('should call performQuery with correct arguments', async () => {
      const searchFieldsObject: ISearchPayload = {
        fields: {
          keyword: {
            q: 'example',
          },
        },
        sort: '',
        filters: {},
        rowsPerPage: 20,
        page: 1,
      };
      const payload: ISearchRequest = generateSearchQuery(searchFieldsObject, defaultFilters);
      await getSearchResults(searchFieldsObject, CREDENTIALS, defaultFilters, false);
      // expect(performQuery).toHaveBeenCalledWith(payload);
      const defaultResults = applyMockFilters(QUICK_SEARCH_RESPONSE as never, defaultFilters, 'example');
      expect(formatSearchResponse).toHaveBeenCalledWith(defaultResults, false, false);
    });

    it.skip('should return the response from elasticSearchClient.post', async () => {
      const searchFieldsObject: ISearchPayload = {
        fields: {
          keyword: {
            q: 'example',
          },
        },
        sort: 'most_relevant',
        filters: {},
        rowsPerPage: 20,
        page: 1,
      };
      const result = await getSearchResults(searchFieldsObject, CREDENTIALS, defaultFilters, false);
      // expect(result).toEqual({ total: undefined, items: [] });
      const defaultResults = applyMockFilters(QUICK_SEARCH_RESPONSE as never, defaultFilters, 'example');
      expect(result).toEqual(formatSearchResponse(defaultResults, false, false));
    });

    it('should return the default response when no fields data is present', async () => {
      const result = await getSearchResults(
        {
          fields: {},
          sort: '',
          rowsPerPage: 20,
          filters: {},
          page: 1,
        },
        CREDENTIALS,
        defaultFilters,
      );
      expect(result).toEqual({ total: 0, items: [], hasSpatialData: false });
    });
  });

  xdescribe('Search API - To fetch the search results with filters', () => {
    it('should return filtered data when a license is provided', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        CREDENTIALS,
        {
          ...defaultFilters,
          licence: 'ogl',
        },
        false,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(licenseFilteredData, false, false);
    });

    it('should return filtered data when keywords are provided', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        CREDENTIALS,
        {
          ...defaultFilters,
          keywords: ['april'],
        },
        false,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(keywordFilteredData, false, false);
    });

    it('should return equal or more results including archived and retired', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      const results = await getSearchResults(
        searchFieldsObject,
        CREDENTIALS,
        {
          ...defaultFilters,
          retiredAndArchived: true,
        },
        false,
      );

      const unfilteredFormatted = await formatSearchResponse(QUICK_SEARCH_RESPONSE);

      expect(results.total).toEqual(unfilteredFormatted.total);
    });

    it('should return filtered data with category filters applied', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        CREDENTIALS,
        {
          ...defaultFilters,
          categories: [
            {
              name: 'Organisation',
              value: 'org',
              selectedAll: false,
              filters: [{ name: 'Environment Agency', value: 'ea', checked: true, scope: DataScope.NCEA }],
            },
            {
              name: 'Service Type',
              value: 'svt',
              selectedAll: false,
              filters: [{ name: 'HTTP Web Resource', value: 'http-wr', checked: true, scope: DataScope.ALL }],
            },
          ],
        },
        false,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(categoryFilteredData, false, false);
    });

    it('should return no data with too restrictive filters applied', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        CREDENTIALS,
        {
          ...defaultFilters,
          categories: [
            {
              name: 'Organisation',
              value: 'org',
              selectedAll: false,
              filters: [{ name: 'Environment Agency', value: 'ea', checked: true, scope: DataScope.NCEA }],
            },
            {
              name: 'Data Type',
              value: 'dt',
              selectedAll: false,
              filters: [{ name: 'Non-spatial', value: 'non-spatial', checked: true, scope: DataScope.ALL }],
            },
          ],
        },
        false,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(restrictiveFilteredData, false, false);
    });

    describe('To fetch data filtered by last updated date', () => {
      it('should return filtered data when a valid date is provided', async () => {
        const searchFieldsObject: ISearchPayload = defaultQuery;
        await getSearchResults(
          searchFieldsObject,
          CREDENTIALS,
          {
            ...defaultFilters,
            lastUpdated: {
              beforeYear: '2023',
              afterYear: '2015',
            },
          },
          false,
        );
        expect(formatSearchResponse).toHaveBeenCalledWith(lastUpdatedFilteredData, false, false);
      });

      it('should return unfiltered data when an invalid date is provided', async () => {
        const searchFieldsObject: ISearchPayload = defaultQuery;
        const results = await getSearchResults(
          searchFieldsObject,
          CREDENTIALS,
          {
            ...defaultFilters,
            retiredAndArchived: true, // include retired and archived as the filter below does not exclude them
            lastUpdated: {
              beforeYear: '',
              afterYear: '',
            },
          },
          false,
        );

        const expectedCount = QUICK_SEARCH_RESPONSE.hits.hits.filter(
          (hit) => !!hit._source?.resourceTemporalDateRange,
        ).length;

        expect(results.total).toEqual(expectedCount);
      });
    });
  });

  describe('Search API - To fetch the search results count', () => {
    it('should return the total results count', async () => {
      const searchFieldsObject: ISearchPayload = {
        fields: {
          keyword: {
            q: 'example',
          },
        },
        sort: '',
        filters: {},
        rowsPerPage: 20,
        page: 1,
      };
      // (performQuery as jest.Mock).mockResolvedValueOnce({ count: 10 });
      const result = await getSearchResultsCount(searchFieldsObject, 2);
      expect(result).toEqual({ totalResults: CLASSIFIER_COUNT_LEVEL_2.count });
    });

    it('should return the total results count as 0 if no must conditions are provided', async () => {
      const result = await getSearchResultsCount({
        fields: {},
        sort: '',
        rowsPerPage: 20,
        filters: {},
        page: 1,
      });
      expect(result).toEqual({ totalResults: 0 });
    });
  });

  describe('Search API - To fetch the aggregated results for filters', () => {
    it('should return the response from performQuery', async () => {
      const searchFieldsObject: ISearchPayload = {
        fields: {
          keyword: {
            q: 'example',
          },
        },
        sort: 'most_relevant',
        filters: { [resourceTypeFilterField]: ['dataset'] },
        rowsPerPage: 20,
        page: 1,
      };
      (performQuery as jest.Mock).mockResolvedValueOnce(resourceTypeAPIResponse);
      (formatAggregationResponse as jest.Mock).mockResolvedValueOnce(formattedResourceTypeResponse);
      const result = await getFilterOptions(searchFieldsObject, {
        isStudyPeriod: false,
      });
      expect(result).toEqual(QUICK_SEARCH_RESOURCE_TYPE_FILTERS);
    });

    it('should return the default response when no fields data is present', async () => {
      const result = await getFilterOptions(
        {
          fields: {},
          sort: '',
          rowsPerPage: 20,
          filters: {},
          page: 1,
        },
        {
          isStudyPeriod: false,
        },
      );
      const filterOptionsResponse: IAggregationOptions = {
        [yearRange]: [],
        [uniqueResourceTypesKey]: [],
      };
      expect(result).toEqual(filterOptionsResponse);
    });
  });

  describe('Search API - To fetch the document details', () => {
    it('should return the response from performQuery', async () => {
      const docId = '3c080cb6-2ed9-43e7-9323-9ce42b05b9a2';
      (performQuery as jest.Mock).mockResolvedValueOnce(detailsSuccessAPIResponse);
      const formattedDetailsResponse: ISearchResults = await formatSearchResponse(detailsSuccessAPIResponse, true);
      const result = await getDocumentDetails(docId);
      expect(result).toEqual(formattedDetailsResponse?.items?.[0]);
    });
  });
});
