'use strict';

import { Server } from '@hapi/hapi';
import * as Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import Yar from '@hapi/yar';

import { environmentConfig } from '../config/environmentConfig';
import { getSecret } from '../utils/keyvault';
import { authSchema, injectAuthIntoContext } from './plugins/auth';
import { customHapiPino, customHapiRoutes, customHapiViews } from './plugins/index';

const appInsightsConnectionStringSecretName =
  environmentConfig.appInsightsSecretName ?? 'ApplicationInsights--ConnectionString';
const shouldPushToAppInsights = environmentConfig.env === 'local';

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
  if (!shouldPushToAppInsights) {
    const appInsightsConnectionString = await getSecret(appInsightsConnectionStringSecretName);
    environmentConfig.appInsightsConnectionString = appInsightsConnectionString;
    customHapiViews.options.context.appInsightsConnectionString = appInsightsConnectionString;
  }

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
  await server.register({ plugin: customHapiViews.plugin, options: customHapiViews.options });
  await server.register({ plugin: customHapiRoutes }, { routes: { prefix: '/natural-capital-ecosystem-assessment' } });
  await server.register([customHapiPino]);
  await server.register({
    plugin: Yar,
    options: {
      storeBlank: false,
      cookieOptions: {
        isSecure: true,
        password: process.env.SESSION_COOKIE_PASSWORD!, // must be 32+ characters
        isHttpOnly: true,
        path: '/',
      },
      maxCookieSize: 0, // Force storage to server-side memory (default anyway)
      name: 'session', // Cookie name
      cache: {
        expiresIn: 24 * 60 * 60 * 1000, // 24 hours
      },
    },
  });

  await server.initialize();

  return server;
};

const startServer = async (): Promise<Server> => {
  await server.start();
  console.log(`Server running at: http://${server.info.host}:${server.info.port}`);
  return server;
};

export { initializeServer, startServer };
