'use strict';

import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { FeedsController } from '../../../src/controllers/web/FeedsController';
import { getFeedsData } from '../../../src/utils/getFeedsData';

// Mock getFeedsData
jest.mock('../../../src/utils/getFeedsData');

jest.mock('../../../src/utils/constants', () => ({
  atomFeeds: [
    {
      title: 'Defra',
      url: 'http://example.com/feed1',
    },
    {
      title: 'Natural England',
      url: 'http://example.com/feed2',
    },
  ],
  pageTitles: 'Feeds page',
}));

describe('FeedsController.renderAtomFeedHandler', () => {
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

  it('should render the feed view with resolved feeds', async () => {
    const feedData1 = { title: 'Feed 1', articles: [] };
    const feedData2 = { title: 'Feed 2', articles: [] };

    (getFeedsData as jest.Mock).mockResolvedValueOnce(feedData1).mockResolvedValueOnce(feedData2);

    const dummyResponse: ResponseObject = {} as ResponseObject;
    (response.view as jest.Mock).mockReturnValue(dummyResponse);

    const result = await FeedsController.renderAtomFeedHandler(request as Request, response as ResponseToolkit);

    expect(getFeedsData).toHaveBeenCalledTimes(2);
    expect(response.view).toHaveBeenCalledWith('screens/feeds/template', {
      feeds: [feedData1, feedData2],
    });
    expect(result).toBe(dummyResponse);
  });

  it('should handle errors and return a failure response', async () => {
    (getFeedsData as jest.Mock).mockRejectedValue(new Error('Test error'));

    const codeMock = jest.fn();
    const errorResponse = { code: codeMock };
    (response.response as jest.Mock).mockReturnValue(errorResponse);

    await FeedsController.renderAtomFeedHandler(request as Request, response as ResponseToolkit);

    expect(response.view).toHaveBeenCalledWith('screens/feeds/template', {
      feeds: [
        { errorMessage: 'Test error', errorTitle: 'Failed to get feeds from "Defra"' },
        { errorMessage: 'Test error', errorTitle: 'Failed to get feeds from "Natural England"' },
      ],
    });
  });
});
