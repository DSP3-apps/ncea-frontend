'use strict';

import Joi from 'joi';
import { IAggregationOptions, ISearchItem } from '../../../src/interfaces/searchResponse.interface';
import { SearchResultsController } from '../../../src/controllers/web/SearchResultsController';
import { Request, ResponseToolkit } from '@hapi/hapi';

import { formattedDetailsResponse } from '../../data/documentDetailsResponse';
import { processDetailsTabData } from '../../../src/utils/processDetailsTabData';
import { appendPublication } from '../../../src/utils/queryStringHelper';
import { quickSearchJoiError } from '../../data/quickSearch';
import { getDocumentDetails, getSearchResults, getFilterOptions } from '../../../src/services/handlers/searchApi';
import { BASE_PATH, formIds, pageTitles, queryParamKeys, webRoutePaths } from '../../../src/utils/constants';
import { getPaginationItems } from '../../../src/utils/paginationBuilder';
import { deleteQueryParams, readQueryParams, upsertQueryParams } from '../../../src/utils/queryStringHelper';
import {
  processDSPFilterOptions,
  processFilterOptions,
  processSortOptions,
} from '../../../src/utils/processFilterRSortOptions';
import { buildFilterResetUrl, DataScope, filterNames, searchFilters } from '../../../src/utils/searchFilters';

jest.mock('../../../src/services/handlers/searchApi', () => ({
  getSearchResults: jest.fn(),
  getSearchResultsCount: jest.fn(),
  getFilterOptions: jest.fn(),
  getDocumentDetails: jest.fn(),
}));

describe('Deals with search results controller', () => {
  xdescribe('Deals with search results handler', () => {
    it.only('should return the results and rendered search items for quick search', async () => {
      const queryObject = {
        q: 'marine',
        jry: 'qs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const request: Request = { query: { ...queryObject } } as any;
      const response: ResponseToolkit = { view: jest.fn() } as any;
      const searchResults = {
        total: 0,
        items: [],
      };
      const { quickSearchFID } = formIds;
      (getSearchResults as jest.Mock).mockResolvedValue(searchResults);
      const expectedResourceTypeOptions: IAggregationOptions = {
        resourceType: [
          { value: 'filter1', text: 'Filter1' },
          { value: 'filter2', text: 'Filter2' },
        ],
      };
      (getFilterOptions as jest.Mock).mockResolvedValue(expectedResourceTypeOptions);
      const paginationItems = getPaginationItems(10, queryObject);
      const queryString = readQueryParams(request.query);
      const sortSubmitPath = `${BASE_PATH}${webRoutePaths.sortResults}?${queryString}`;
      const processedSortOptions = await processSortOptions(request.query);
      const resetStudyPeriodQueryString: string = deleteQueryParams(request.query, [
        queryParamKeys.startYear,
        queryParamKeys.toYear,
      ]);
      const resetStudyPeriodLink: string = `${BASE_PATH}${webRoutePaths.results}?${resetStudyPeriodQueryString}`;

      const processedDspFilterOptions = processDSPFilterOptions(request.query);
      const dspFilterResetUrl = buildFilterResetUrl(request.query);

      await SearchResultsController.renderSearchResultsHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/results/template', {
        pageTitle: pageTitles.results,
        quickSearchFID,
        searchResults,
        hasError: false,
        isQuickSearchJourney: true,
        paginationItems,
        dspFilterOptions: processedDspFilterOptions,
        dspFilterReset: dspFilterResetUrl,
        dspFilterNames: filterNames,
        dataScopeValues: { ncea: DataScope.NCEA, all: DataScope.ALL },
        sortOptions: processedSortOptions,
        sortSubmitPath,
        dateSearchPath: `${BASE_PATH}${webRoutePaths.guidedDateSearch}`,
        filterInstance: 'search_results',
        queryString,
        hasStudyPeriodFilterApplied: false,
        resetStudyPeriodLink,
        backLinkPath: '#',
        backLinkClasses: 'back-link-search-result',
      });
    });

    it('should return the results and rendered search items for guided search', async () => {
      const queryObject = {
        fdy: '2000',
        tdy: '2023',
        jry: 'gs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const request: Request = { query: { ...queryObject } } as any;
      const response: ResponseToolkit = { view: jest.fn() } as any;
      const searchResults = {
        total: 0,
        items: [],
      };
      const { quickSearchFID } = formIds;
      (getSearchResults as jest.Mock).mockResolvedValue(searchResults);
      const expectedResourceTypeOptions: IAggregationOptions = {
        resourceType: [
          { value: 'filter1', text: 'Filter1' },
          { value: 'filter2', text: 'Filter2' },
        ],
      };
      (getFilterOptions as jest.Mock).mockResolvedValue(expectedResourceTypeOptions);
      const paginationItems = getPaginationItems(10, queryObject);
      const queryString = readQueryParams(request.query);
      const sortSubmitPath = `${BASE_PATH}${webRoutePaths.sortResults}?${queryString}`;
      const processedSortOptions = await processSortOptions(request.query);
      const resetStudyPeriodQueryString: string = deleteQueryParams(request.query, [
        queryParamKeys.startYear,
        queryParamKeys.toYear,
      ]);
      const resetStudyPeriodLink: string = `${BASE_PATH}${webRoutePaths.results}?${resetStudyPeriodQueryString}`;

      const processedDspFilterOptions = processDSPFilterOptions(request.query);
      const dspFilterResetUrl = buildFilterResetUrl(request.query);

      await SearchResultsController.renderSearchResultsHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/results/template', {
        pageTitle: pageTitles.results,
        quickSearchFID,
        searchResults,
        hasError: false,
        isQuickSearchJourney: false,
        paginationItems,
        sortOptions: processedSortOptions,
        dspFilterOptions: processedDspFilterOptions,
        dspFilterReset: dspFilterResetUrl,
        dspFilterNames: filterNames,
        dataScopeValues: { ncea: DataScope.NCEA, all: DataScope.ALL },
        sortSubmitPath,
        dateSearchPath: `${BASE_PATH}${webRoutePaths.guidedDateSearch}`,
        filterInstance: 'search_results',
        queryString,
        hasStudyPeriodFilterApplied: false,
        resetStudyPeriodLink,
        backLinkClasses: 'back-link-search-result',
        backLinkPath: '#',
      });
    });

    it('should show an error when something fails at API layer', async () => {
      const queryObject = {
        fdy: '2000',
        tdy: '2023',
        jry: 'gs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const { quickSearchFID } = formIds;
      const request: Request = { query: { ...queryObject } } as any;
      const response: ResponseToolkit = { view: jest.fn() } as any;
      const error = new Error('Mocked error');
      (getSearchResults as jest.Mock).mockRejectedValue(error);
      await SearchResultsController.renderSearchResultsHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/results/template', {
        quickSearchFID,
        error,
        hasError: true,
        isQuickSearchJourney: false,
      });
    });
  });

  describe('Deals with quick search submit handler', () => {
    it('should build the query params and navigate to results page', async () => {
      const request: Request = {
        payload: { search_term: 'search term' },
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;

      const queryParamsObject: Record<string, string> = {
        [queryParamKeys.quickSearch]: 'search term',
        [queryParamKeys.journey]: 'qs',
      };
      const queryString: string = upsertQueryParams(request.query, queryParamsObject);
      await SearchResultsController.quickSearchSubmitHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
    });
  });

  describe('Deals with quickSearchFailActionHandler > home page', () => {
    const response: ResponseToolkit = {
      view: jest.fn().mockReturnValue({
        code: jest.fn().mockReturnThis(),
        takeover: jest.fn(),
      }),
    } as any;
    const request: Request = {
      payload: {
        pageName: 'home',
      },
    } as any;
    beforeAll(() => {
      return SearchResultsController.quickSearchFailActionHandler(request, response, quickSearchJoiError);
    });

    it('should render the home page with error messages', async () => {
      const { quickSearchFID } = formIds;
      const searchInputError = {
        text: 'Please enter keywords into the search field.',
      };
      const context = {
        pageTitle: pageTitles.home,
        quickSearchFID,
        searchInputError,
      };
      expect(response.view).toHaveBeenCalledWith('screens/home/template', context);
    });
  });

  describe('Deals with quickSearchFailActionHandler > results page', () => {
    const response: ResponseToolkit = {
      view: jest.fn().mockReturnValue({
        code: jest.fn().mockReturnThis(),
        takeover: jest.fn(),
      }),
    } as any;
    const request: Request = {
      payload: {
        pageName: 'results',
      },
    } as any;
    beforeAll(() => {
      return SearchResultsController.quickSearchFailActionHandler(request, response, quickSearchJoiError);
    });

    it('should render the results page with error messages', async () => {
      const { quickSearchFID } = formIds;
      const searchInputError = {
        text: 'Please enter keywords into the search field.',
      };
      const context = {
        pageTitle: pageTitles.results,
        quickSearchFID,
        searchInputError,
      };
      expect(response.view).toHaveBeenCalledWith('screens/results/template', context);
    });
  });

  describe('Deals with quickSearchFailActionHandler > no error', () => {
    const response: ResponseToolkit = {
      view: jest.fn().mockReturnValue({
        code: jest.fn().mockReturnThis(),
        takeover: jest.fn(),
      }),
    } as any;
    const request: Request = {
      payload: {
        pageName: 'home',
      },
    } as any;
    beforeAll(() => {
      return SearchResultsController.quickSearchFailActionHandler(
        request,
        response,
        undefined as unknown as Joi.ValidationError,
      );
    });

    it('should render the home page with error messages', async () => {
      const { quickSearchFID } = formIds;
      const searchInputError = undefined;
      const context = {
        pageTitle: pageTitles.home,
        quickSearchFID,
        searchInputError,
      };
      expect(response.view).toHaveBeenCalledWith('screens/home/template', context);
    });
  });

  describe('Deals with document details handler', () => {
    it('should fetch the data and return the view', async () => {
      const queryObject = {
        q: 'marine',
        jry: 'qs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const request: Request = {
        params: { id: '123' },
        query: { ...queryObject },
      } as any;
      const response: ResponseToolkit = { view: jest.fn() } as any;
      const expectedResponse: ISearchItem = formattedDetailsResponse?.items?.[0] as ISearchItem;
      const queryString: string = readQueryParams(request.query);
      (getDocumentDetails as jest.Mock).mockResolvedValue(expectedResponse);

      await SearchResultsController.renderSearchDetailsHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/details/template', {
        pageTitle: pageTitles.generalTab,
        pageTitles,
        docDetails: expectedResponse,
        detailsTabOptions: await processDetailsTabData(expectedResponse),
        queryString,
      });
    });
    it('should fetch the data as empty object when the API does not found the document and return the view', async () => {
      const queryObject = {
        q: 'marine',
        jry: 'qs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const request: Request = {
        params: { id: '123' },
        query: { ...queryObject },
      } as any;
      const response: ResponseToolkit = { view: jest.fn() } as any;
      (getDocumentDetails as jest.Mock).mockResolvedValue({});
      await SearchResultsController.renderSearchDetailsHandler(request, response);
      const queryString: string = readQueryParams(request.query);
      expect(response.view).toHaveBeenCalledWith('screens/details/template', {
        pageTitle: pageTitles.generalTab,
        pageTitles,
        docDetails: {},
        detailsTabOptions: await processDetailsTabData({}),
        queryString,
      });
    });

    it('should show an error when something fails at API layer', async () => {
      const request: Request = { params: { id: '123' } } as any;
      const response: ResponseToolkit = { view: jest.fn() } as any;
      const error = new Error('Mocked error');
      (getDocumentDetails as jest.Mock).mockRejectedValue(error);
      await SearchResultsController.renderSearchDetailsHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/details/template', {
        error,
        docDetails: undefined,
      });
    });
  });

  xdescribe('Deals with map results handler', () => {
    it('should render the no results page for quick search journey', async () => {
      const queryObject = {
        q: 'marine',
        jry: 'qs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const request: Request = { query: { ...queryObject } } as any;
      const response: ResponseToolkit = {
        response: jest.fn().mockReturnThis(),
        code: jest.fn(),
      } as any;
      (getSearchResults as jest.Mock).mockResolvedValue({
        total: 0,
        items: [],
      });
      await SearchResultsController.getMapResultsHandler(request, response);
      expect(response.response).toHaveBeenCalledTimes(2);
    });

    it('should render the no results page for guided search journey', async () => {
      const queryObject = {
        fdy: '2022',
        tdy: '2023',
        jry: 'gs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const request: Request = { query: { ...queryObject } } as any;
      const response: ResponseToolkit = {
        response: jest.fn().mockReturnThis(),
        code: jest.fn(),
      } as any;
      (getSearchResults as jest.Mock).mockResolvedValue({
        total: 0,
        items: [],
      });
      await SearchResultsController.getMapResultsHandler(request, response);
      expect(response.response).toHaveBeenCalledTimes(2);
    });

    it('should show an error when something fails at API layer', async () => {
      const request: Request = { query: {} } as any;
      const response: ResponseToolkit = {
        response: jest.fn().mockReturnThis(),
        code: jest.fn(),
      } as any;
      const error = new Error('Mocked error');
      (getSearchResults as jest.Mock).mockRejectedValue(error);
      await SearchResultsController.getMapResultsHandler(request, response);
      expect(response.response).toHaveBeenCalledTimes(1);
      expect(response.response().code).toHaveBeenCalledWith(500);
    });
  });

  describe('Deals with search resource type filter submit handler', () => {
    it('should build the query params and navigate to search page', async () => {
      const request: Request = {
        payload: {
          resource_type: 'dataset',
        },
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;

      const queryParamsObject: Record<string, string> = {
        [queryParamKeys.resourceType]: 'dataset',
        [queryParamKeys.page]: '1',
      };
      const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
      await SearchResultsController.filterResourceTypeHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
    });

    it('should build the query params with multiple resource types values and navigate to search page', async () => {
      const request: Request = {
        payload: {
          resource_type: ['dataset', 'series'],
        },
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;

      const queryParamsObject: Record<string, string> = {
        [queryParamKeys.resourceType]: 'dataset,series',
        [queryParamKeys.page]: '1',
      };
      const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
      await SearchResultsController.filterResourceTypeHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
    });
  });

  describe('Deals with search study period filter submit handler', () => {
    it('should build the query params and navigate to search page', async () => {
      const request: Request = {
        payload: {
          start_year: '2017',
          to_year: '2022',
        },
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;

      const queryParamsObject: Record<string, string> = {
        [queryParamKeys.startYear]: '2017',
        [queryParamKeys.toYear]: '2022',
        [queryParamKeys.page]: '1',
      };
      const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
      await SearchResultsController.filterStudyPeriodHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
    });
  });

  describe('Deals with search sort submit handler', () => {
    it('should build the query params and navigate to search page', async () => {
      const request: Request = {
        payload: {
          sort: 'most_relevant',
          'page-results': '20',
        },
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;

      const queryParamsObject: Record<string, string> = {
        [queryParamKeys.sort]: 'most_relevant',
        [queryParamKeys.rowsPerPage]: '20',
        [queryParamKeys.page]: '1',
      };
      const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
      await SearchResultsController.sortSearchHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
    });
  });

  describe('Deals with map filters handler', () => {
    it('should fetch the data and return the view', async () => {
      const queryObject = {
        q: 'marine',
        jry: 'qs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
      };
      const request: Request = { query: { ...queryObject } } as any;
      const response: ResponseToolkit = { view: jest.fn() } as any;
      const expectedResourceTypeOptions: IAggregationOptions = {
        resourceType: [
          { value: 'filter1', text: 'Filter1' },
          { value: 'filter2', text: 'Filter2' },
        ],
      };
      (getFilterOptions as jest.Mock).mockResolvedValue(expectedResourceTypeOptions);

      const processedDspFilterOptions = processDSPFilterOptions(request.query);

      await SearchResultsController.getMapFiltersHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('partials/results/sidebar', {
        filterInstance: 'map_results',
        filterResourceTypePath: '',
        filterStudyPeriodPath: '',
        dspFilterOptions: processedDspFilterOptions,
        dspFilterReset: '',
        dspFilterNames: filterNames,
        dataScopeValues: { ncea: DataScope.NCEA, all: DataScope.ALL },
      });
    });
  });

  describe('appendPublication', () => {
    it('should add "publication" if "nonGeographicDataset" is present but "publication" is not', () => {
      const input = 'nonGeographicDataset';
      const result = appendPublication(input);
      expect(result).toBe('nonGeographicDataset,publication');
    });

    it('should add "nonGeographicDataset" if "publication" is present but "nonGeographicDataset" is not', () => {
      const input = 'publication';
      const result = appendPublication(input);
      expect(result).toBe('publication,nonGeographicDataset');
    });

    it('should not modify resourceTypes if both "nonGeographicDataset" and "publication" are present', () => {
      const input = 'nonGeographicDataset,publication';
      const result = appendPublication(input);
      expect(result).toBe('nonGeographicDataset,publication');
    });

    it('should not modify resourceTypes if neither "nonGeographicDataset" nor "publication" are present', () => {
      const input = 'someOtherType';
      const result = appendPublication(input);
      expect(result).toBe('someOtherType');
    });
  });
});
