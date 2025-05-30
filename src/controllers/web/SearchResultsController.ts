'use strict';

import { Lifecycle, Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import Joi from 'joi';

import { Credentials } from '../../interfaces/auth';
import { FormattedTabOptions } from '../../interfaces/detailsTab.interface';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { ISearchItem, ISearchResults } from '../../interfaces/searchResponse.interface';
import { getDocumentDetails, getSearchResults } from '../../services/handlers/searchApi';
import {
  BASE_PATH,
  formIds,
  mapResultMaxCount,
  pageTitles,
  queryParamKeys,
  webRoutePaths,
} from '../../utils/constants';
import { getPaginationItems } from '../../utils/paginationBuilder';
import { processDetailsTabData } from '../../utils/processDetailsTabData';
import { processDSPFilterOptions, processSortOptions } from '../../utils/processFilterRSortOptions';
import {
  appendPublication,
  deleteQueryParams,
  generateQueryBuilderPayload,
  readQueryParams,
  upsertQueryParams,
} from '../../utils/queryStringHelper';
import { DataScope, buildFilterResetUrl, filterNames } from '../../utils/searchFilters';

const SearchResultsController = {
  renderSearchResultsHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const { quickSearchFID } = formIds;
    const journey: string = readQueryParams(request.query, queryParamKeys.journey);
    const studyPeriodFromYear: string = readQueryParams(request.query, queryParamKeys.startYear);
    const studyPeriodToYear: string = readQueryParams(request.query, queryParamKeys.toYear);
    const hasStudyPeriodFilterApplied: boolean = !!studyPeriodFromYear.length && !!studyPeriodToYear.length;
    const payload: ISearchPayload = generateQueryBuilderPayload(request.query);
    const isQuickSearchJourney = journey === 'qs';
    try {
      const processedDspFilterOptions = processDSPFilterOptions(request.query);

      const searchResults: ISearchResults = await getSearchResults(
        payload,
        request.auth.credentials as Credentials,
        processedDspFilterOptions,
        true,
        // isQuickSearchJourney, // TODO: We may need to add this back in, which is why I've left it.
      );

      // Paginate search results client-side.
      // Slice total result into just what is required for this page.
      const startItem = payload.page ? (payload.page - 1) * payload.rowsPerPage : 0;
      const endItem = startItem + payload.rowsPerPage;

      const pagedSearchResults = {
        ...searchResults,
        items: searchResults?.items.slice(startItem, endItem),
      };

      // Pass total results to build pagination buttons at bottom of page.
      const paginationItems = getPaginationItems(searchResults?.total ?? 0, request.query);
      const queryString = readQueryParams(request.query);
      const sortSubmitPath = `${BASE_PATH}${webRoutePaths.sortResults}?${queryString}`;
      const processedSortOptions = await processSortOptions(request.query);

      const dspFilterResetUrl = buildFilterResetUrl(request.query);

      const resetStudyPeriodQueryString: string = deleteQueryParams(request.query, [
        queryParamKeys.startYear,
        queryParamKeys.toYear,
      ]);
      const resetStudyPeriodLink: string = `${BASE_PATH}${webRoutePaths.results}?${resetStudyPeriodQueryString}`;
      return response.view('screens/results/template', {
        pageTitle: pageTitles.results,
        quickSearchFID,
        searchResults: pagedSearchResults,
        totalSearchResults: searchResults,
        hasError: false,
        isQuickSearchJourney,
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
        hasStudyPeriodFilterApplied,
        resetStudyPeriodLink,
        backLinkPath: '#',
        backLinkClasses: 'back-link-search-result',
      });
    } catch (error) {
      return response.view('screens/results/template', {
        quickSearchFID,
        error,
        hasError: true,
        isQuickSearchJourney,
      });
    }
  },
  quickSearchSubmitHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const { search_term } = request.payload as Record<string, string>;
    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.quickSearch]: search_term ?? '',
      [queryParamKeys.journey]: 'qs',
    };
    const queryString: string = upsertQueryParams(request.query, queryParamsObject);
    return response.redirect(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
  },
  quickSearchFailActionHandler: (request, response, error): Lifecycle.ReturnValue => {
    const { quickSearchFID } = formIds;
    const searchError: string | undefined = error?.details?.[0]?.message ?? undefined;
    const payload = request.payload as Record<string, string>;
    const searchInputError = searchError
      ? {
          text: searchError,
        }
      : (undefined as unknown as Joi.ValidationError);
    const context = {
      pageTitle: payload?.pageName === 'home' ? pageTitles.home : pageTitles.results,
      quickSearchFID,
      searchInputError,
    };
    const view: string = payload?.pageName === 'home' ? 'screens/home/template' : 'screens/results/template';
    return response.view(view, context).code(400).takeover();
  },
  getMapResultsHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const payload: ISearchPayload = generateQueryBuilderPayload(request.query);

    try {
      const mapPayload: ISearchPayload = {
        ...payload,
        rowsPerPage: mapResultMaxCount,
      };

      const processedDspFilterOptions = processDSPFilterOptions(request.query);

      const searchMapResults: ISearchResults = await getSearchResults(
        mapPayload,
        request.auth.credentials as Credentials,
        processedDspFilterOptions,
        true,
        // isQuickSearchJourney,
      );

      return response.response(searchMapResults).header('Content-Type', 'application/json');
    } catch (error) {
      return response.response({ error: 'An error occurred while processing your request' }).code(500);
    }
  },
  getMapFiltersHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      const processedDspFilterOptions = processDSPFilterOptions(request.query);

      return response.view('partials/results/sidebar', {
        filterInstance: 'map_results',
        filterResourceTypePath: '',
        filterStudyPeriodPath: '',
        dspFilterOptions: processedDspFilterOptions,
        dspFilterReset: '',
        dspFilterNames: filterNames,
        dataScopeValues: { ncea: DataScope.NCEA, all: DataScope.ALL },
      });
    } catch (error) {
      return response.view('partials/results/filters', {
        error,
        filterOptions: undefined,
        filterResourceTypePath: '',
        filterStudyPeriodPath: '',
      });
    }
  },
  renderSearchDetailsHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      const docId = request.params.id;
      const docDetails: ISearchItem = await getDocumentDetails(docId, request.auth.credentials as Credentials);
      const queryString: string = readQueryParams(request.query);
      const detailsTabOptions: FormattedTabOptions = await processDetailsTabData(docDetails);
      return response.view('screens/details/template', {
        pageTitle: docDetails.title,
        docDetails,
        detailsTabOptions,
        queryString,
        pageTitles,
      });
    } catch (error) {
      return response.view('screens/details/template', {
        error,
        docDetails: undefined,
      });
    }
  },
  filterResourceTypeHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const payload = request.payload as Record<string, string>;
    let resourceTypeValues = '';

    if (payload?.['resource_type']) {
      if (Array.isArray(payload['resource_type'])) {
        resourceTypeValues = payload['resource_type'].join(',');
      } else if (typeof payload['resource_type'] === 'string') {
        resourceTypeValues = payload['resource_type'];
      }
      resourceTypeValues = appendPublication(resourceTypeValues);
    }

    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.resourceType]: resourceTypeValues,
      [queryParamKeys.page]: '1',
    };
    const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
    return response.redirect(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
  },
  filterStudyPeriodHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const payload = request.payload as Record<string, string>;
    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.startYear]: payload?.['start_year'] ?? '',
      [queryParamKeys.toYear]: payload?.['to_year'] ?? '',
      [queryParamKeys.page]: '1',
    };
    const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
    return response.redirect(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
  },
  sortSearchHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const payload = request.payload as Record<string, string>;
    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.sort]: payload?.['sort'] ?? '',
      [queryParamKeys.rowsPerPage]: payload?.['page-results'] ?? '',
      [queryParamKeys.page]: '1',
    };
    const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
    return response.redirect(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
  },
};

export { SearchResultsController };
