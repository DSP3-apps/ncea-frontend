'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { atomFeeds } from '@/utils/constants';
import { getFeedsData } from '@/utils/getFeedsData';

/**
 * This code snippet exports a module named FeedsController.
 * The renderAtomFeedHandler method is an asynchronous function that takes a Request object and a ResponseToolkit object as parameters.
 * It returns a Promise that resolves to a ResponseObject.
 *
 * The renderAtomFeedHandler method is responsible for rendering the atom feeds template by calling the view method on the response object.
 * The view method takes the name of the template as an argument and returns a ResponseObject.
 */

const FeedsController = {
  renderAtomFeedHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    try {
      // Render a view with the articles
      const feeds = atomFeeds.map(async (feedURL) => getFeedsData(feedURL));
      const resolvedFeeds = await Promise.all(feeds);
      return response.view('screens/feeds/template', {
        feeds: resolvedFeeds,
      });
    } catch (error) {
      return response.response('Failed to fetch feed').code(500);
    }
  },
};

export { FeedsController };
