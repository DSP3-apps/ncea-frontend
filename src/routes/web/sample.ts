'use strict';

const SampleController = require('../../controllers/web/SampleController');

module.exports = [
  {
    method: 'GET',
    path: '/sample',
    handler: (request: any, h: any) => {
      return h.view('sample', {
        title: 'Hapi ' + request.server.version,
        message: 'Hello Nunjucks!',
      });
    },
  },
  {
    method: 'GET',
    path: '/sample2',
    handler: SampleController.renderSample2Handler,
  },
];
