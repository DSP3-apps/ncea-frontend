'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { getFeedsData } from '@/utils/getFeedsData';

import { landingPageData, nceaFeedsUrl } from '../../utils/constants';

const AboutController = {
  renderAboutHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      const feedsData = await getFeedsData(nceaFeedsUrl);
      return response.view('screens/about/template', {
        displayFeedsPanel: true,
        feedsList: {
          title: feedsData.title,
          articles: [feedsData.articles[0]],
        },
        ...landingPageData,
      });
    } catch (err) {
      const errorObj = {
        errorTitle: 'An error is occurred while getting the Feeds',
        errorMessage: 'Something is happened, Please try after sometime',
      };
      return response.view('screens/about/template', {
        displayFeedsPanel: false,
        error: errorObj,
        ...landingPageData,
      });
    }
  },
};

export { AboutController };
