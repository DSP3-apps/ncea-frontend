'use strict';

import { Server } from '@hapi/hapi';
import * as Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';

import { environmentConfig } from '../config/environmentConfig';
import { authSchema, injectAuthIntoContext } from './plugins/auth';
import { customHapiPino, customHapiRoutes } from './plugins/index';

// Create the hapi server
const server: Server = Hapi.server({
  host: process.env.HOST ?? '0.0.0.0',
  port: environmentConfig.env !== 'test' ? environmentConfig.port : 4000,
  routes: {
    validate: {
      options: {
        abortEarly: false,
      },
    },
  },
});

const initializeServer = async (): Promise<Server> => {

  // Register vendors plugins
  await server.register([inert, vision]);

  // Register the custom auth schema
  server.auth.scheme('auth', authSchema);
  // Register the strategy based on the schema above
  server.auth.strategy('auth-strategy', 'auth', {});

  // Use the custom auth strategy on all routes
  server.auth.default('auth-strategy');

  // Register event handler that injects user data into a view context before it is rendered
  server.ext('onPreResponse', injectAuthIntoContext);

  // Register the custom plugins
  // await server.register({ plugin: customHapiViews.plugin, options: customHapiViews.options });
  await server.register({ plugin: customHapiRoutes }, { routes: { prefix: '/natural-capital-ecosystem-assessment' } });
  await server.register([customHapiPino]);

  await server.initialize();

  return server;
};

const startServer = async (): Promise<Server> => {
  await server.start();
  console.log(`Server running at: http://${server.info.host}:${server.info.port}`);
  return server;
};

export { initializeServer, startServer };
