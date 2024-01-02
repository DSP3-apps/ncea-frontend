'use strict';

import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';

const createServer = async (): Promise<Server> => {
  // Create the hapi server
  const server: Server = Hapi.server({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    routes: {
      validate: {
        options: {
          abortEarly: false,
        },
      },
    },
  });

  // Register vendors plugins
  await server.register([require('@hapi/inert'), require('@hapi/vision')]);

  // Register the custom plugins
  await server.register([
    require('./plugins/views'),
    require('./plugins/router'),
  ]);

  return server;
};

module.exports = createServer;
