'use strict';

import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { AboutController } from '../../../src/controllers/web/AboutController';
import { landingPageData } from '../../../src/utils/constants';

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
    const result = await AboutController.renderAboutHandler(request as Request, response as ResponseToolkit);
    expect(response.view).toHaveBeenCalledWith('screens/about/template', landingPageData);
  });
});
