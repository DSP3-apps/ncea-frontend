'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { landingPageData, pageTitles } from '../../utils/constants';

const CategoriesDetailController = {
  renderCategoriesDetailHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      return response.view('screens/categories_detail/template', {
        displayFeedsPanel: true,
        type: request.query.type,
        pageTitle: pageTitles.categoryDetail,
        ...landingPageData,
      });
    } catch (err) {
      const errorObj = {
        errorTitle: 'An error is occurred while getting the Category detail',
        errorMessage: 'Something is happened, Please try after sometime',
      };
      return response.view('screens/categories_detail/template', {
        displayFeedsPanel: false,
        error: errorObj,
        ...landingPageData,
      });
    }
  },
};
export { CategoriesDetailController };
