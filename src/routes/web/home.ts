'use strict';

import { Request } from '@hapi/hapi';

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request: Request) => {
      request.logger.info('Hello, this is info log');
      request.logger.warn('Hello, this is warning log');
      request.logger.error('Hello, this is error log');
      return 'Hello, Natural Capital Search Service';
    },
  },
];
