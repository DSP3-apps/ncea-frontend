'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { Credentials } from '@/interfaces/auth';
import { processDSPFilterOptions } from '@/utils/processFilterRSortOptions';

import { allowedRedirectHosts, jwtCookieName, jwtCookieOptions } from '../../infrastructure/plugins/auth';
import { IGuidedSearchStepsMatrix, IStepRouteMatrix } from '../../interfaces/guidedSearch.interface';
import { ISearchPayload } from '../../interfaces/queryBuilder.interface';
import { getSearchResultsCount } from '../../services/handlers/searchApi';
import {
  BASE_PATH,
  formIds,
  guidedSearchSteps,
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
          const processedDspFilterOptions = processDSPFilterOptions(request.query);
          const searchResultsCount: { totalResults: number } = await getSearchResultsCount(
            queryBuilderSearchObject,
            request.auth.credentials as Credentials,
            processedDspFilterOptions,
          );
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
    });
  },
  accessibilityHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/accessibility', {
      pageTitle: pageTitles.accessibility,
    });
  },
  termsConditionsHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/terms_conditions', {
      pageTitle: pageTitles.termsAndConditions,
    });
  },
  privacyPolicyHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/privacy_policy', {
      pageTitle: pageTitles.privacyPolicy,
    });
  },
  cookiePolicyHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/cookie_policy', {
      pageTitle: pageTitles.cookiePolicy,
    });
  },
  logoutHander: (request: Request, response: ResponseToolkit) => {
    response.unstate(jwtCookieName, jwtCookieOptions);

    let redirectUri = request.query?.redirect_uri;
    try {
      // make sure the url is valid and has a hostname that is allowed
      if (!redirectUri || !allowedRedirectHosts.includes(new URL(redirectUri).hostname)) {
        redirectUri = BASE_PATH;
      }
    } catch {
      redirectUri = BASE_PATH;
    }

    return response.redirect(redirectUri);
  },
};

export { HomeController };
