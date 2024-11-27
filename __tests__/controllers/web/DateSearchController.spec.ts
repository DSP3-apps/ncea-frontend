'use strict';

import * as errorTransformer from '../../../src/utils/transformErrors';
import { DateSearchController } from '../../../src/controllers/web/DateSearchController';
import { Request, ResponseToolkit } from '@hapi/hapi';
import {
  fromDate,
  toDate,
} from '../../../src/data/dateQuestionnaireFieldOptions';
import {
  BASE_PATH,
  formIds,
  guidedSearchSteps,
  pageTitles,
  queryParamKeys,
  webRoutePaths,
} from '../../../src/utils/constants';
import Joi from 'joi';
import { FormFieldError } from '../../../src/interfaces/guidedSearch.interface';
import { upsertQueryParams, readQueryParams } from '../../../src/utils/queryStringHelper';
import { getSearchResultsCount } from '../../../src/services/handlers/searchApi';

jest.mock('../../../src/services/handlers/searchApi', () => ({
  getSearchResultsCount: jest.fn(),
}));

describe('Deals with the Date Search Controller', () => {
  it('should render the guided data search handler', async () => {
    const request: Request = { query: {} } as any;
    const response: ResponseToolkit = { view: jest.fn(), redirect: jest.fn() } as any;
    const { guidedDateSearch, results, geographySearch } = webRoutePaths;
    const formId: string = formIds.dataQuestionnaireFID;
    (getSearchResultsCount as jest.Mock).mockResolvedValue({ totalResults: 0 });

    const resultPathQueryString: string = readQueryParams(request.query, '', true);
    const resultsPath: string = `${results}?${resultPathQueryString}`;

    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.journey]: 'gs',
      [queryParamKeys.count]: '0',
    };
    const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);
    const guidedDateSearchPath: string = `${guidedDateSearch}?${queryString}`;
    const skipPath: string = queryString ? `${geographySearch}?${queryString}` : `${BASE_PATH}${geographySearch}`;

    await DateSearchController.renderGuidedSearchHandler(request, response);
    expect(response.view).toHaveBeenCalledWith(
      'screens/guided_search/date_questionnaire',
      {
        pageTitle: pageTitles.date,
        fromDate,
        toDate,
        guidedDateSearchPath,
        skipPath,
        formId,
        count:'0',
        resultsPath,
        backLinkPath: '#',
        backLinkClasses: 'back-link-date',
      },
    );
  });

  it('should redirect to results if no search result or query is present', async () => {
    const request: Request = { query: { someParam: 'someValue' } } as any;
    const response: ResponseToolkit = { view: jest.fn(), redirect: jest.fn() } as any;
    (getSearchResultsCount as jest.Mock).mockResolvedValue({ totalResults: 0 });

    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.journey]: 'gs',
      [queryParamKeys.count]: '0',
    };
    const queryString: string = upsertQueryParams(request.query, queryParamsObject, false);

    await DateSearchController.renderGuidedSearchHandler(request, response);
    expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
  });

  it('should build the query params and navigate to intermediate route with data', async () => {
    const dateFormFields = {
      'from-date-day': '2',
      'from-date-month': '',
      'from-date-year': '2000',
      'to-date-day': '',
      'to-date-month': '',
      'to-date-year': '2023',
    };
    const request: Request = { payload: { ...dateFormFields }, query: {} } as any;
    const response: ResponseToolkit = { redirect: jest.fn() } as any;

    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.journey]: 'gs',
      [queryParamKeys.fromDateDay]: dateFormFields['from-date-day'] ?? '',
      [queryParamKeys.fromDateMonth]: dateFormFields['from-date-month'] ?? '',
      [queryParamKeys.fromDateYear]: dateFormFields['from-date-year'] ?? '',
      [queryParamKeys.toDateDay]: dateFormFields['to-date-day'] ?? '',
      [queryParamKeys.toDateMonth]: dateFormFields['to-date-month'] ?? '',
      [queryParamKeys.toDateYear]: dateFormFields['to-date-year'] ?? '',
    };
    const queryString: string = upsertQueryParams(
      request.query,
      queryParamsObject,
      false,
    );
    await DateSearchController.dateSearchSubmitHandler(request, response);
    expect(response.redirect).toHaveBeenCalledWith(
      `${BASE_PATH}${webRoutePaths.intermediate}/${guidedSearchSteps.date}?${queryString}`,
    );
  });

  it('should build the query params and navigate to intermediate route without data', async () => {
    const dateFormFields = {};
    const request: Request = { payload: { ...dateFormFields }, query: {} } as any;
    const response: ResponseToolkit = { redirect: jest.fn() } as any;

    const queryParamsObject: Record<string, string> = {
      [queryParamKeys.journey]: 'gs',
      [queryParamKeys.fromDateDay]: '',
      [queryParamKeys.fromDateMonth]: '',
      [queryParamKeys.fromDateYear]: '',
      [queryParamKeys.toDateDay]: '',
      [queryParamKeys.toDateMonth]: '',
      [queryParamKeys.toDateYear]: '',
    };
    const queryString: string = upsertQueryParams(
      request.query,
      queryParamsObject,
      false,
    );
    await DateSearchController.dateSearchSubmitHandler(request, response);
    expect(response.redirect).toHaveBeenCalledWith(
      `${BASE_PATH}${webRoutePaths.intermediate}/${guidedSearchSteps.date}?${queryString}`,
    );
  });

  it('should validate the date questionnaire form', async () => {
    const request: Request = { query: {} } as any;
    const response: ResponseToolkit = {
      view: jest.fn().mockReturnValue({
        code: jest.fn().mockReturnThis(),
        takeover: jest.fn(),
      }),
    } as any;
    const error = {
      details: [
        {
          path: ['from-date-year'],
          type: 'any.required',
          message: '"from-date-year" is required',
          context: { errors: ['from-date-year'] },
        },
      ],
    } as unknown as Joi.ValidationError;

    jest
      .spyOn(errorTransformer, 'transformErrors')
      .mockReturnValue({
        fromError: '"from-date-year" is required',
        fromItems: [],
        toError: '',
        toItems: [],
      } as FormFieldError);

    const formId: string = formIds.dataQuestionnaireFID;

    const {
      guidedDateSearch: guidedDateSearchPath,
      geographySearch,
    } = webRoutePaths;
    const count: string = readQueryParams(request.query, queryParamKeys.count);
    const queryString: string = readQueryParams(request.query, '');

    // Updated logic for skipPath
    const queryStringObj = new URLSearchParams(queryString);
    queryStringObj.delete('fdy');
    queryStringObj.delete('tdy');
    const hasLevelOrParent = queryStringObj.has('level') || queryStringObj.has('parent');
    const skipPath: string = `${geographySearch}${hasLevelOrParent ? '?' + queryStringObj.toString() : ''}`;

    await DateSearchController.dateSearchFailActionHandler(
      request,
      response,
      error,
    );
    expect(response.view).toHaveBeenCalledWith(
      'screens/guided_search/date_questionnaire',
      {
        pageTitle: pageTitles.date,
        fromDate: { ...fromDate, errorMessage: { text: '"from-date-year" is required' }, items: [] },
        toDate: { ...toDate, items: [] },
        guidedDateSearchPath,
        skipPath,
        formId,
        count,
        backLinkPath: '#',
        backLinkClasses: 'back-link-date',
      },
    );
  });

});
