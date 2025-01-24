import { generateSearchQuery } from '../../../src/utils/queryBuilder';
import { performQuery } from '../../../src/config/elasticSearchClient';
import { ISearchPayload } from '../../../src/interfaces/queryBuilder.interface';
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
import { applyMockFilters } from '../../../src/utils/searchFilters';

import {
  categoryFilteredData,
  defaultQuery,
  keywordFilteredData,
  lastUpdatedFilteredData,
  licenseFilteredData,
  restrictiveFilteredData,
} from '../../data/quickSearch';
import { writeFileSync } from 'fs';

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

describe('Search API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('Search API - To fetch the search results', () => {
    it('should call performQuery with correct arguments', async () => {
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
      const payload: estypes.SearchRequest = generateSearchQuery({
        searchFieldsObject,
      });
      await getSearchResults(searchFieldsObject, defaultFilters, false, true);
      // expect(performQuery).toHaveBeenCalledWith(payload);
      const defaultResults = applyMockFilters(QUICK_SEARCH_RESPONSE as never, defaultFilters, 'example');
      expect(formatSearchResponse).toHaveBeenCalledWith(defaultResults, false, false);
    });

    it('should return the response from elasticSearchClient.post', async () => {
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
      const result = await getSearchResults(searchFieldsObject, defaultFilters, false, true);
      // expect(result).toEqual({ total: undefined, items: [] });
      const defaultResults = applyMockFilters(QUICK_SEARCH_RESPONSE as never, defaultFilters, 'example');
      expect(result).toEqual(formatSearchResponse(defaultResults, false, false));
    });

    xit('should handle errors and throw an error message', async () => {
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
      (performQuery as jest.Mock).mockRejectedValueOnce(new Error('Mocked error'));
      await expect(getSearchResults(searchFieldsObject, defaultFilters)).rejects.toThrow(
        'Error fetching results: Mocked error',
      );
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
        defaultFilters,
      );
      expect(result).toEqual({ total: 0, items: [], hasSpatialData: false });
    });
  });

  describe('Search API - To fetch the search results with filters', () => {
    it('should return filtered data when a license is provided', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        {
          ...defaultFilters,
          license: 'ogl',
        },
        false,
        true,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(licenseFilteredData, false, false);
    });

    it('should return filtered data when keywords are provided', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        {
          ...defaultFilters,
          keywords: 'april',
        },
        false,
        true,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(keywordFilteredData, false, false);
    });

    it('should return equal or more results including archived and retired', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      const results = await getSearchResults(
        searchFieldsObject,
        {
          ...defaultFilters,
          retiredAndArchived: true,
        },
        false,
        true,
      );

      const unfilteredFormatted = await formatSearchResponse(QUICK_SEARCH_RESPONSE);

      expect(results.total).toEqual(unfilteredFormatted.total);
    });

    it('should return filtered data with category filters applied', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        {
          ...defaultFilters,
          categories: [
            {
              name: 'Organisation',
              value: 'org',
              selectedAll: false,
              filters: [{ name: 'Environment Agency', value: 'ea', checked: true }],
            },
            {
              name: 'Service Type',
              value: 'svt',
              selectedAll: false,
              filters: [{ name: 'HTTP Web Resource', value: 'http-wr', checked: true }],
            },
          ],
        },
        false,
        true,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(categoryFilteredData, false, false);
    });

    it('should return no data with too restrictive filters applied', async () => {
      const searchFieldsObject: ISearchPayload = defaultQuery;
      await getSearchResults(
        searchFieldsObject,
        {
          ...defaultFilters,
          categories: [
            {
              name: 'Organisation',
              value: 'org',
              selectedAll: false,
              filters: [{ name: 'Environment Agency', value: 'ea', checked: true }],
            },
            {
              name: 'Data Type',
              value: 'dt',
              selectedAll: false,
              filters: [{ name: 'Non-spatial', value: 'non-spatial', checked: true }],
            },
          ],
        },
        false,
        true,
      );
      expect(formatSearchResponse).toHaveBeenCalledWith(restrictiveFilteredData, false, false);
    });

    describe('To fetch data filtered by last updated date', () => {
      it('should return filtered data when a valid date is provided', async () => {
        const searchFieldsObject: ISearchPayload = defaultQuery;
        await getSearchResults(
          searchFieldsObject,
          {
            ...defaultFilters,
            lastUpdated: {
              beforeYear: '2023',
              afterYear: '2015',
            },
          },
          false,
          true,
        );
        expect(formatSearchResponse).toHaveBeenCalledWith(lastUpdatedFilteredData, false, false);
      });

      it('should return unfiltered data when an invalid date is provided', async () => {
        const searchFieldsObject: ISearchPayload = defaultQuery;
        const results = await getSearchResults(
          searchFieldsObject,
          {
            ...defaultFilters,
            retiredAndArchived: true, // include retired and archived as the filter below does not exclude them
            lastUpdated: {
              beforeYear: '',
              afterYear: '',
            },
          },
          false,
          true,
        );

        const expectedCount = QUICK_SEARCH_RESPONSE.hits.hits.filter(
          (hit) => !!hit._source?.resourceTemporalDateRange,
        ).length;

        expect(results.total).toEqual(expectedCount);
      });
    });
  });

  describe('Search API - To fetch the search results count', () => {
    xit('should call performQuery with correct arguments', async () => {
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
      (performQuery as jest.Mock).mockResolvedValueOnce({
        data: { totalResults: 10 },
      });
      await getSearchResultsCount(searchFieldsObject);
      expect(performQuery).toHaveBeenCalledTimes(1);
    });

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

    xit('should handle errors and throw an error message', async () => {
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
      (performQuery as jest.Mock).mockRejectedValueOnce(new Error('Mocked error'));
      await expect(getSearchResultsCount(searchFieldsObject)).rejects.toThrow('Error fetching results: Mocked error');
    });
  });

  describe('Search API - To fetch the aggregated results for filters', () => {
    xit('should return the response from performQuery', async () => {
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
      expect(result).toEqual(formattedResourceTypeResponse);
    });

    xit('should handle errors and throw an error message', async () => {
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
      (performQuery as jest.Mock).mockRejectedValueOnce(new Error('Mocked error'));
      await expect(
        getFilterOptions(searchFieldsObject, {
          isStudyPeriod: false,
        }),
      ).rejects.toThrow('Error fetching results: Mocked error');
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

    xit('should return the empty object when no document found from performQuery', async () => {
      const docId = '3c080cb6-2ed9-43e7-9323-9ce42b05b9a2';
      (performQuery as jest.Mock).mockResolvedValueOnce(detailsEmptyAPIResponse);
      const result = await getDocumentDetails(docId);
      expect(result).toEqual({});
    });

    xit('should handle errors and throw an error message', async () => {
      const docId = '3c080cb6-2ed9-43e7-9323-9ce42b05b9a2';
      (performQuery as jest.Mock).mockRejectedValueOnce(new Error('Mocked error'));
      await expect(getDocumentDetails(docId)).rejects.toThrow('Error fetching results: Mocked error');
    });
  });
});
