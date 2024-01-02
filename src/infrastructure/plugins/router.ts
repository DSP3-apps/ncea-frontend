'use strict';

import { Server } from '@hapi/hapi';

const routes = [].concat(
  require('../../routes/web/home'),
  require('../../routes/web/sample')
);

module.exports = {
  plugin: {
    name: 'router',
    register: (server: Server) => {
      server.route(routes);
    },
  },
};
