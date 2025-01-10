'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { COOKIE_NAME } from '../../interfaces/cookies';
import { IGuidedSearchStepsMatrix, IStepRouteMatrix } from '../../interfaces/guidedSearch.interface';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { getSearchResultsCount } from '../../services/handlers/searchApi';
import {
  BASE_PATH,
  formIds,
  guidedSearchSteps,
  logOutPath,
  pageTitles,
  queryParamKeys,
  webRoutePaths,
} from '../../utils/constants';
import { generateCountPayload, readQueryParams, upsertQueryParams } from '../../utils/queryStringHelper';

/**
 * This code snippet exports a module named HomeController.
 * The renderHomeHandler method is an asynchronous function that takes a Request object and a ResponseToolkit object as parameters.
 * It returns a Promise that resolves to a ResponseObject.
 *
 * The renderHomeHandler method is responsible for rendering the home template by calling the view method on the response object.
 * The view method takes the name of the template as an argument and returns a ResponseObject.
 */

const HomeController = {
  renderHomeHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    const { quickSearchFID } = formIds;
    return response.view('screens/home/template', {
      pageTitle: pageTitles.home,
      quickSearchFID,
      searchInputError: undefined,
      user: request.auth.credentials,
      logOutPath,
    });
  },
  intermediateHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const stepRouteMatrix: IGuidedSearchStepsMatrix = {
      [guidedSearchSteps.date]: {
        self: webRoutePaths.guidedDateSearch,
        next: webRoutePaths.geographySearch,
      },
      [guidedSearchSteps.coordinate]: {
        self: webRoutePaths.geographySearch,
      },
    };
    const step: string = request.params?.step ?? '';
    if (step) {
      const stepMatrix: IStepRouteMatrix = stepRouteMatrix?.[step] ?? {};
      if (Object.keys(stepMatrix).length) {
        const queryString: string = readQueryParams(request.query, '', true);
        const queryBuilderSearchObject: ISearchPayload = generateCountPayload(request.query);
        try {
          const searchResultsCount: { totalResults: number } = await getSearchResultsCount(queryBuilderSearchObject);
          if (searchResultsCount.totalResults > 0) {
            const queryString: string = upsertQueryParams(
              request.query,
              {
                [queryParamKeys.count]: searchResultsCount.totalResults.toString(),
              },
              false,
            );
            return response.redirect(`${stepMatrix.next}?${queryString}`);
          } else {
            return response.redirect(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
          }
        } catch (error) {
          return response.redirect(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
        }
      }
    }
    return response.redirect(`${BASE_PATH}${webRoutePaths.home}`);
  },
  helpHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/help', {
      pageTitle: pageTitles.help,
      user: request.auth.credentials,
      logOutPath,
    });
  },
  accessibilityHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/accessibility', {
      pageTitle: pageTitles.accessibility,
      user: request.auth.credentials,
      logOutPath,
    });
  },
  termsConditionsHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/terms_conditions', {
      pageTitle: pageTitles.termsAndConditions,
      user: request.auth.credentials,
      logOutPath,
    });
  },
  privacyPolicyHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/privacy_policy', {
      pageTitle: pageTitles.privacyPolicy,
      user: request.auth.credentials,
      logOutPath,
    });
  },
  cookiePolicyHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/cookie_policy', {
      pageTitle: pageTitles.cookiePolicy,
      user: request.auth.credentials,
      logOutPath,
    });
  },
  logoutHandler: (request: Request, response: ResponseToolkit) => {
    response.response('Cookie cleared').unstate(COOKIE_NAME);
    return response.redirect(`${BASE_PATH}`); // Redirect to landing page
  },
};

export { HomeController };
