'use strict';

import { apiBasePath } from '../../utils/constants';

import { SampleApiController } from '../../controllers/api/SampleApiController';

module.exports = [
  {
    method: 'GET',
    path: apiBasePath + '/',
    handler: SampleApiController.apiSampleHandler,
  },
];
