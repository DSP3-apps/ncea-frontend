'use strict';

import { Server } from '@hapi/hapi';

import {
  atomFeedRoutes,
  categoriesRoutes,
  classifierSearchRoutes,
  dateSearchRoutes,
  errorRoutes,
  geographySearchRoutes,
  homeRoutes,
  mdcRoutes,
  searchResultsRoutes,
  staticRoutes,
} from '../../routes/index';

const routes = [
  ...errorRoutes,
  ...staticRoutes,
  ...homeRoutes,
  ...classifierSearchRoutes,
  ...dateSearchRoutes,
  ...geographySearchRoutes,
  ...searchResultsRoutes,
  ...mdcRoutes,
  ...atomFeedRoutes,
  ...categoriesRoutes,
];

const customHapiRoutes = {
  plugin: {
    name: 'router',
    register: (server: Server) => {
      server.route(routes);
    },
  },
};

export { customHapiRoutes };
