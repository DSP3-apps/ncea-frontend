'use strict';

import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { AboutController } from '../../../src/controllers/web/AboutController';
import { landingPageData } from '../../../src/utils/constants';
import { getFeedsData } from '../../../src/utils/getFeedsData';

// Mock getFeedsData
jest.mock('../../../src/utils/getFeedsData');

describe('AboutController.AboutController', () => {
  let request: Partial<Request>;
  let response: Partial<ResponseToolkit>;
  beforeEach(() => {
    request = {};

    response = {
      view: jest.fn(),
      response: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the landing page view', async () => {
    const feedData = { title: 'Feed 1', articles: [] };

    (getFeedsData as jest.Mock).mockResolvedValueOnce(feedData);
    const dummyResponse: ResponseObject = {} as ResponseObject;
    (response.view as jest.Mock).mockReturnValue(dummyResponse);
    const result = await AboutController.renderAboutHandler(request as Request, response as ResponseToolkit);
    expect(response.view).toHaveBeenCalledWith('screens/about/template', {
      feedsList: {
        title: feedData.title,
        articles: [feedData.articles[0]],
      },
      ...landingPageData,
    });
  });
});
