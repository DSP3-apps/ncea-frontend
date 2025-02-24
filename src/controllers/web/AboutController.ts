'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { landingPageData } from '../../utils/constants';

const AboutController = {
  renderAboutHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/about/template', landingPageData);
  },
};

export { AboutController };
