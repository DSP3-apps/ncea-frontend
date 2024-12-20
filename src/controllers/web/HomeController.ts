'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { CustomRequestApplicationState } from '../../interfaces/cookies';
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
  renderHomeHandler: (request: CustomRequestApplicationState, response: ResponseToolkit): ResponseObject => {
    let username = 'Guest';
    console.log('USER JWT: ', request.app.jwt);
    console.log('USER JWT USER: ', request.app.user);
    if (request.app.user) {
      const user = request.app.user;
      username = user.name;
      console.log('USER: ', user);
    }
    console.log('USERNAME: ', username);

    const { quickSearchFID } = formIds;
    return response.view('screens/home/template', {
      pageTitle: pageTitles.home,
      quickSearchFID,
      searchInputError: undefined,
      isLoggedIn: true,
      username: 'mark.small@telespazio.com',
    });
  },
  intermediateHandler: async (
    request: CustomRequestApplicationState,
    response: ResponseToolkit,
  ): Promise<ResponseObject> => {
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
  helpHandler: (request: CustomRequestApplicationState, response: ResponseToolkit): ResponseObject => {
    console.log('HELP PAGE USER JWT: ', request.app.jwt);
    console.log('HELP PAGE USER JWT USER: ', request.app.user);
    return response.view('screens/home/help', {
      pageTitle: pageTitles.help,
    });
  },
  accessibilityHandler: (request: CustomRequestApplicationState, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/accessibility', {
      pageTitle: pageTitles.accessibility,
    });
  },
  termsConditionsHandler: (request: CustomRequestApplicationState, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/terms_conditions', {
      pageTitle: pageTitles.termsAndConditions,
    });
  },
  privacyPolicyHandler: (request: CustomRequestApplicationState, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/privacy_policy', {
      pageTitle: pageTitles.privacyPolicy,
    });
  },
  cookiePolicyHandler: (request: CustomRequestApplicationState, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/home/cookie_policy', {
      pageTitle: pageTitles.cookiePolicy,
    });
  },
};

export { HomeController };
