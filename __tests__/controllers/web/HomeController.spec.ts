'use strict';

import { Request, ResponseToolkit } from '@hapi/hapi';
import { decode } from 'jsonwebtoken';
import {
  BASE_PATH,
  formIds,
  guidedSearchSteps,
  logOutPath,
  pageTitles,
  queryParamKeys,
  webRoutePaths,
} from '../../../src/utils/constants';
import { HomeController } from '../../../src/controllers/web/HomeController';
import { getSearchResultsCount } from '../../../src/services/handlers/searchApi';
import { readQueryParams, upsertQueryParams } from '../../../src/utils/queryStringHelper';
import { authSchema } from '../../../src/infrastructure/plugins/auth';
import { COOKIE_NAME } from '../../../src/interfaces/cookies';

jest.mock('../../../src/infrastructure/plugins/appinsights-logger', () => ({
  info: jest.fn(),
}));

jest.mock('../../../src/services/handlers/searchApi', () => ({
  getSearchResultsCount: jest.fn(),
}));

jest.mock('jsonwebtoken', () => ({
  // Mock the function to track calls but still invoke the original to do the decoding
  // `jest.spyOn` would be more sensible but it throws an error I am not sure how to fix
  decode: jest.fn().mockImplementation(jest.requireActual('jsonwebtoken').decode),
}));

// Mock jwt
const MOCK_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdXRoMHwwZWNhZjYzMjNjZmY0NzkwLWIxZjZkNjciLCJhcGltVXNlcklkIjoiNTBkMjNhMDYtYTUzOS00NWJjLTk5ZjQtMDYyNTAzNGE5NDBhIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiZ3JvdXBJbmZvSWRzIjpbXSwiYXBwX3VzZXJfZ3JvdXBfbmFtZXMiOltdLCJncm91cHMiOltdLCJzdWJzY3JpcHRpb24iOiJGcmVlIiwiY2xpZW50SWQiOiJjbUZ1Wkc5dElHUmhkR0VLSTNnPSIsImFwcHMiOnsiZmllbGRFeHBsb3JlciI6eyJlbnRpdGxlbWVudHMiOlsiVFJJQUwiXX19LCJpYXQiOjE3MzY1MTg4NDksImV4cCI6OTk5OTk5OTk5OSwiYXVkIjoiYXBpLmV4YW1wbGUuY29tIiwiaXNzIjoiRXhhbXBsZSJ9.7gv8uy3g7XsNh5dYshfC409PIIcgEttxnabJO4mmig0';

/**
 * Generated a mock request with mock authenication data from a given JWT
 */
const getMockAuthedRequest = (jwt: string): Request => {
  const request = { auth: {} };

  (authSchema as any)({ state: jest.fn() }).authenticate(
    {
      headers: {
        cookie: `${COOKIE_NAME}=${jwt}`,
      },
    },
    {
      authenticated: jest.fn().mockImplementation((data) => {
        request.auth = data;
      }),
      continue: Symbol(),
    },
  );

  return request as any;
};

describe('Deals with Home Controller', () => {
  describe('Deals with the renderHomeHandler', () => {
    it('should call the home view with context with guest user', async () => {
      const request = getMockAuthedRequest('');
      expect(decode).toHaveReturnedWith(null);

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.renderHomeHandler(request, response);
      const { quickSearchFID } = formIds;
      expect(response.view).toHaveBeenCalledWith('screens/home/template', {
        pageTitle: pageTitles.home,
        quickSearchFID,
        searchInputError: undefined,
        user: undefined,
        logOutPath,
      });
    });
    it('should call the home view with context with logged in user', async () => {
      const request = getMockAuthedRequest(MOCK_JWT);
      expect(decode).toHaveReturned();

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.renderHomeHandler(request, response);
      const { quickSearchFID } = formIds;
      expect(response.view).toHaveBeenCalledWith('screens/home/template', {
        pageTitle: pageTitles.home,
        quickSearchFID,
        searchInputError: undefined,
        // We only want a partial match on the jwt as it contains lots of keys
        user: expect.objectContaining({ email: 'test@test.com' }),
        logOutPath,
      });
    });
  });
  describe('Deals with the intermediateHandler', () => {
    it('should redirect to home if step is undefined', async () => {
      const request: Request = { params: {} } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;
      await HomeController.intermediateHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.home}`);
    });
    it('should redirect to home if step is empty', async () => {
      const request: Request = { params: { step: '' } } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;
      await HomeController.intermediateHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.home}`);
    });
    it('should redirect to home if step is invalid', async () => {
      const request: Request = { params: { step: 'invalid' } } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;
      await HomeController.intermediateHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.home}`);
    });
    it('should redirect to geography page if step is date and search results count > 0', async () => {
      const dateFormFields = {
        'from-date-day': '2',
        'from-date-month': '',
        'from-date-year': '2000',
        'to-date-day': '',
        'to-date-month': '',
        'to-date-year': '2023',
      };
      const request: Request = {
        params: { step: guidedSearchSteps.date },
        payload: { ...dateFormFields },
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;
      (getSearchResultsCount as jest.Mock).mockResolvedValue({
        totalResults: 10,
      });
      const queryString: string = upsertQueryParams(
        request.query,
        {
          [queryParamKeys.count]: '10',
        },
        false,
      );
      await HomeController.intermediateHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${webRoutePaths.geographySearch}?${queryString}`);
    });
    it('should redirect to results page if step is date and search results count <= 0', async () => {
      const dateFormFields = {
        'from-date-day': '2',
        'from-date-month': '',
        'from-date-year': '2000',
        'to-date-day': '',
        'to-date-month': '',
        'to-date-year': '2023',
      };
      const request: Request = {
        params: { step: guidedSearchSteps.date },
        payload: { ...dateFormFields },
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;
      (getSearchResultsCount as jest.Mock).mockResolvedValue({
        totalResults: 0,
      });

      const queryString: string = readQueryParams(request.query, '', true);
      await HomeController.intermediateHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
    });
    it('should redirect to results page if an error occurs during count retrieval', async () => {
      const request: Request = {
        params: { step: guidedSearchSteps.date },
        payload: {},
      } as any;
      const response: ResponseToolkit = { redirect: jest.fn() } as any;
      const error = new Error('Mocked error');
      (getSearchResultsCount as jest.Mock).mockRejectedValue(error);

      const queryString: string = readQueryParams(request.query, '', true);
      await HomeController.intermediateHandler(request, response);
      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${webRoutePaths.results}?${queryString}`);
    });
  });
  describe('Deals with the accessibilityHandler', () => {
    it('should call the accessibility view with context with guest user', async () => {
      const request = getMockAuthedRequest('');
      expect(decode).toHaveReturnedWith(null);

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.accessibilityHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/accessibility', {
        pageTitle: pageTitles.accessibility,
        user: undefined,
        logOutPath,
      });
    });
    it('should call the accessibility view with context with logged in user', async () => {
      const request = getMockAuthedRequest(MOCK_JWT);
      expect(decode).toHaveReturned();

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.accessibilityHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/accessibility', {
        pageTitle: pageTitles.accessibility,
        user: expect.objectContaining({ email: 'test@test.com' }),
        logOutPath,
      });
    });
  });
  describe('Deals with the helpHandler', () => {
    it('should call the help view with context with guest user', async () => {
      const request = getMockAuthedRequest('');
      expect(decode).toHaveReturnedWith(null);

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.helpHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/help', {
        pageTitle: pageTitles.help,
        user: undefined,
        logOutPath,
      });
    });
    it('should call the help view with context with logged in user', async () => {
      const request = getMockAuthedRequest(MOCK_JWT);
      expect(decode).toHaveReturned();

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.helpHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/help', {
        pageTitle: pageTitles.help,
        user: expect.objectContaining({ email: 'test@test.com' }),
        logOutPath,
      });
    });
  });
  describe('Deals with the termsConditionsHandler', () => {
    it('should call the accessibility view with context with guest user', async () => {
      const request = getMockAuthedRequest('');
      expect(decode).toHaveReturnedWith(null);

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.termsConditionsHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/terms_conditions', {
        pageTitle: pageTitles.termsAndConditions,
        user: undefined,
        logOutPath,
      });
    });
    it('should call the accessibility view with context with guest user', async () => {
      const request = getMockAuthedRequest(MOCK_JWT);
      expect(decode).toHaveReturned();

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.termsConditionsHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/terms_conditions', {
        pageTitle: pageTitles.termsAndConditions,
        user: expect.objectContaining({ email: 'test@test.com' }),
        logOutPath,
      });
    });
  });
  describe('Deals with the privacyPolicyHandler with guest user', () => {
    it('should call the privacy policy view with context', async () => {
      const request = getMockAuthedRequest('');
      expect(decode).toHaveReturnedWith(null);

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.privacyPolicyHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/privacy_policy', {
        pageTitle: pageTitles.privacyPolicy,
        user: undefined,
        logOutPath,
      });
    });
    it('should call the privacy policy view with context', async () => {
      const request = getMockAuthedRequest(MOCK_JWT);
      expect(decode).toHaveReturned();

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.privacyPolicyHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/privacy_policy', {
        pageTitle: pageTitles.privacyPolicy,
        user: expect.objectContaining({ email: 'test@test.com' }),
        logOutPath,
      });
    });
  });
  describe('Deals with the cookiePolicyHandler', () => {
    it('should call the accessibility view with context with logged in user', async () => {
      const request = getMockAuthedRequest(MOCK_JWT);
      expect(decode).toHaveReturned();

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.cookiePolicyHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/cookie_policy', {
        pageTitle: pageTitles.cookiePolicy,
        user: expect.objectContaining({ email: 'test@test.com' }),
        logOutPath,
      });
    });
    it('should call the accessibility view with context with guest user', async () => {
      const request = getMockAuthedRequest('');
      expect(decode).toHaveReturnedWith(null);

      const response: ResponseToolkit = { view: jest.fn() } as any;
      await HomeController.cookiePolicyHandler(request, response);
      expect(response.view).toHaveBeenCalledWith('screens/home/cookie_policy', {
        pageTitle: pageTitles.cookiePolicy,
        user: undefined,
        logOutPath,
      });
    });
  });
});
