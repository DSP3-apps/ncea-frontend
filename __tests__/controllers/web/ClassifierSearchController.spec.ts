'use strict';

import { ClassifierSearchController } from '../../../src/controllers/web/ClassifierSearchController';
import { Request, ResponseToolkit } from '@hapi/hapi';
import { BASE_PATH, formIds, queryParamKeys, webRoutePaths } from '../../../src/utils/constants';
import { LEVEL3_CLASSIFIER_ITEMS } from '../../../src/services/handlers/mocks/classifier-themes-level-3';
import { getClassifierThemes } from '../../../src/services/handlers/classifierApi';
import { getSearchResultsCount } from '../../../src/services/handlers/searchApi';
import { readQueryParams, upsertQueryParams } from '../../../src/utils/queryStringHelper';

jest.mock('../../../src/services/handlers/classifierApi', () => ({
  getClassifierThemes: jest.fn(),
}));

jest.mock('../../../src/services/handlers/searchApi', () => ({
  getSearchResultsCount: jest.fn(),
}));

describe('Classifier Search Controller', () => {
  xdescribe('renderClassifierSearchHandler', () => {
    let request: Request;
    let response: ResponseToolkit;
    const { guidedClassifierSearch: guidedClassifierSearchPath, guidedDateSearch: skipPath, results } = webRoutePaths;
    const { classifierSearch } = formIds;

    beforeEach(() => {
      response = { view: jest.fn(), redirect: jest.fn() } as any;
    });

    it('should call the classifier view with context when level is greater than or equal to 1 and count is 0', async () => {
      request = {
        query: { level: '3', 'parent[]': 'lv2-001,lv2-002' },
      } as any;

      const level3ClassifierItems = [];
      (getClassifierThemes as jest.Mock).mockResolvedValue(LEVEL3_CLASSIFIER_ITEMS);
      (getSearchResultsCount as jest.Mock).mockResolvedValue({ totalResults: 0 });

      await ClassifierSearchController.renderClassifierSearchHandler(request, response);

      const payloadQuery = {
        level: '2',
        'parent[]': 'lv2-001,lv2-002',
      };

      const queryParamsObject = {
        [queryParamKeys.level]: '2',
        [queryParamKeys.parent]: 'lv2-001,lv2-002',
        [queryParamKeys.journey]: 'gs',
        [queryParamKeys.count]: '0',
        [queryParamKeys.page]: '1',
        [queryParamKeys.rowsPerPage]: '20',
        [queryParamKeys.sort]: 'most_relevant',
      };

      const queryString = upsertQueryParams(request.query, queryParamsObject, false);
      const resultsPath = `${BASE_PATH}${results}?${readQueryParams(payloadQuery, '', true)}`;
      const skipPathUrl = `${BASE_PATH}${results}?${queryString}`;

      expect(response.redirect).toHaveBeenCalledWith(`${skipPathUrl}`);
    });

    it('should call the classifier view with context when count is present', async () => {
      request = {
        query: { level: '3', 'parent[]': 'lv2-001' },
      } as any;

      (getClassifierThemes as jest.Mock).mockResolvedValue(LEVEL3_CLASSIFIER_ITEMS);
      (getSearchResultsCount as jest.Mock).mockResolvedValue({ totalResults: 10 });

      await ClassifierSearchController.renderClassifierSearchHandler(request, response);

      const payloadQuery = {
        level: '2',
        'parent[]': 'lv2-001',
        [queryParamKeys.journey]: 'gs',
        [queryParamKeys.count]: '10',
        [queryParamKeys.page]: '1',
        [queryParamKeys.rowsPerPage]: '20',
        [queryParamKeys.sort]: 'most_relevant',
      };

      const queryParamsObject = {
        [queryParamKeys.level]: '2',
        [queryParamKeys.parent]: 'lv2-001',
        [queryParamKeys.journey]: 'gs',
        [queryParamKeys.count]: '10',
        [queryParamKeys.page]: '1',
        [queryParamKeys.rowsPerPage]: '20',
        [queryParamKeys.sort]: 'most_relevant',
      };

      const queryString = upsertQueryParams(request.query, queryParamsObject, false);
      const resultsPath = `${BASE_PATH}${results}?${readQueryParams(payloadQuery, '', true)}`;
      const skipPathUrl = `${BASE_PATH}${results}?${queryString}`;

      expect(response.view).toHaveBeenCalledWith('screens/guided_search/classifier_selection.njk', {
        guidedClassifierSearchPath: `${BASE_PATH}${guidedClassifierSearchPath}`,
        nextLevel: '4',
        pageTitle: 'NCEA questionnaire  Search- subcategories',
        skipPath: resultsPath,
        formId: classifierSearch,
        classifierItems: LEVEL3_CLASSIFIER_ITEMS,
        count: '10',
        journey: 'gs',
        resultsPath,
        backLinkPath: '#',
        backLinkClasses: 'back-link-classifier',
      });
    });

    it('should redirect to results path when count is 0 and level is not 1', async () => {
      request = {
        query: { level: '2', 'parent[]': 'lv2-001,lv2-002' },
      } as any;

      (getClassifierThemes as jest.Mock).mockResolvedValue(LEVEL3_CLASSIFIER_ITEMS);
      (getSearchResultsCount as jest.Mock).mockResolvedValue({ totalResults: 0 });

      await ClassifierSearchController.renderClassifierSearchHandler(request, response);

      const payloadQuery = {
        level: '1',
        'parent[]': 'lv2-001,lv2-002',
      };

      const queryParamsObject = {
        [queryParamKeys.level]: '1',
        [queryParamKeys.parent]: 'lv2-001,lv2-002',
        [queryParamKeys.journey]: 'gs',
        [queryParamKeys.count]: '0',
        [queryParamKeys.page]: '1',
        [queryParamKeys.rowsPerPage]: '20',
        [queryParamKeys.sort]: 'most_relevant',
      };

      const queryString = upsertQueryParams(request.query, queryParamsObject, false);
      const resultsPath = `${results}?${readQueryParams(payloadQuery, '', true)}`;

      expect(response.redirect).toHaveBeenCalledWith(`${BASE_PATH}${results}?${queryString}`);
    });

    it('should redirect to date search page when there are no items for the parent category', async () => {
      request = {
        query: { level: '2', 'parent[]': 'lv1-001' },
      } as any;

      (getClassifierThemes as jest.Mock).mockResolvedValue([]);
      (getSearchResultsCount as jest.Mock).mockResolvedValue({ totalResults: 10 });

      await ClassifierSearchController.renderClassifierSearchHandler(request, response);

      const payloadQuery = {
        level: '2',
        'parent[]': 'lv1-001',
      };

      const queryParamsObject = {
        [queryParamKeys.level]: '1',
        [queryParamKeys.parent]: 'lv1-001',
        [queryParamKeys.journey]: 'gs',
        [queryParamKeys.count]: '10',
        [queryParamKeys.page]: '1',
        [queryParamKeys.rowsPerPage]: '20',
        [queryParamKeys.sort]: 'most_relevant',
      };

      const queryString = upsertQueryParams(request.query, queryParamsObject, false);
      const skipPathUrl = `${BASE_PATH}${results}?${queryString}`;

      expect(response.redirect).toHaveBeenCalledWith(skipPathUrl);
    });
  });
});
