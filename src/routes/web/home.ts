'use strict';

import { HomeController } from '../../controllers/web/HomeController';

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: HomeController.renderHomeHandler,
  },
];
