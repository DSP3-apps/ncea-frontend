'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { getFeedsData } from '@/utils/getFeedsData';

import { landingPageData, nceaFeedsUrl } from '../../utils/constants';

const AboutController = {
  renderAboutHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    const feedsData = await getFeedsData(nceaFeedsUrl);

    return response.view('screens/about/template', {
      feedsList: {
        title: feedsData.title,
        articles: [feedsData.articles[0]],
      },
      ...landingPageData,
    });
  },
};

export { AboutController };
