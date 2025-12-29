'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { atomFeeds, landingPageData } from '../../utils/constants';
import { getFeedsData } from '../../utils/getFeedsData';

const CategoriesDetailController = {
  renderCategoriesDetailHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      const feedsData = atomFeeds[0] ? await getFeedsData(atomFeeds[0]) : null;

      return response.view('screens/categoriesDetail/template', {
        displayFeedsPanel: true,
        type: request.query.type,
        year: request.query.year,
        feedsList: {
          title: 'Latest news',
          article: feedsData?.articles ? feedsData.articles[0] : {},
        },
        ...landingPageData,
      });
    } catch (err) {
      const errorObj = {
        errorTitle: 'An error is occurred while getting the Feeds',
        errorMessage: 'Something is happened, Please try after sometime',
      };
      return response.view('screens/categoriesDetail/template', {
        displayFeedsPanel: false,
        error: errorObj,
        ...landingPageData,
      });
    }
  },
};

export { CategoriesDetailController };
