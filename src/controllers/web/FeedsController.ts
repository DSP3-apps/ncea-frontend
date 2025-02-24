'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { atomFeeds } from '../../utils/constants';
import { getFeedsData } from '../../utils/getFeedsData';

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
      const feeds = await Promise.all(
        atomFeeds.map(async (feedURL) => {
          try {
            return await getFeedsData(feedURL);
          } catch (error) {
            if (error instanceof Error) {
              const errorObj = {
                errorTitle: `Failed to get feeds from "${feedURL}"`,
                errorMessage: error.message,
              };
              return errorObj;
            }
          }
        }),
      );
      // throw new Error('something error');
      return response.view('screens/feeds/template', {
        feeds: feeds,
      });
    } catch (error) {
      const errorObj = {
        errorTitle: 'An error is occurred while getting the Feeds',
        errorMessage: 'Something is happened, Please try after sometime',
      };
      if (error instanceof Error) {
        errorObj.errorMessage = error.message;
        return response.view('screens/feeds/template', {
          error: errorObj,
        });
      }
      return response.view('screens/feeds/template', {
        error: errorObj,
      });
    }
  },
};

export { FeedsController };
