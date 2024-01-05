'use strict';

import { SampleController } from '../../controllers/web/SampleController';
import { Request, ResponseToolkit } from '@hapi/hapi';

module.exports = [
  {
    method: 'GET',
    path: '/sample',
    handler: (request: Request, h: ResponseToolkit) => {
      return h.view('sample', {
        title: 'Hapi ' + request.server.version,
        message: 'Hello Nunjucks!',
      });
    },
  },
  {
    method: 'GET',
    path: '/sample2',
    handler: SampleController.renderSampleHandler,
  },
];
