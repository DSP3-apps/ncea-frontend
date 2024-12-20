'use strict';

// import { parse } from 'path';

import Cookie from '@hapi/cookie';
import { Server } from '@hapi/hapi';
import * as Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';
import { decode } from 'jsonwebtoken';

import { environmentConfig } from '../config/environmentConfig';
// import { HttpCodes } from '../utils/http';
import { getSecret } from '../utils/keyvault';
import { customHapiPino, customHapiRoutes, customHapiViews } from './plugins/index';
import { CustomRequestApplicationState, DecodedJWT } from '../interfaces/cookies';

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

  // Register the cookie plugin
  await server.register(Cookie);

  server.state('auth0-jwt-live', {
    ttl: null, // Cookie expiration managed by DSP Core.
    // isSecure: true, // Only allow HTTPS cookies.
    isSecure: false, // Only allow HTTPS cookies.
    isHttpOnly: true, // Prevents client side JS from reading the cookie.
    encoding: 'base64json', // Cookie data is JSON-stringified and base64 encoded.
    clearInvalid: false, // Do not clear invalid cookies.
    strictHeader: true, // Don't allow violations of RFC 6265.
    // isSameSite: 'Lax', // Mitigates CSRF attacks.
    isSameSite: false, // Mitigates CSRF attacks.
    // path: '/natural-capital-ecosystem-assessment', // Cookie is available to all routes.
    // path: '/', // Cookie is available to all routes.
    // domain: 'localhost:3000',
    // port: '3000',
  });

  server.ext('onPreHandler', async (request: CustomRequestApplicationState, h) => {
    // FIXME: This is what I see as the preferred solution, however state is always null.
    // The state is always null because the cookie is not being set in the request object
    // and I don't know why. So I've commented out this solution in favor of the one below
    // which manually parses the cookies from the headers.
    // const jwtCookie = request?.state?.['auth0-jwt-live'] as string;

    // if (jwtCookie) {
    //   try {
    //     const decodedJwt = decode(jwtCookie) as unknown as DecodedJWT;

    //     // Save the JWT in request.app for later use.
    //     request.app.jwt = jwtCookie;
    //     request.app.user = decodedJwt;
    //   } catch (error) {
    //     console.error('Error decoding JWT: ', error);
    //   }
    // }

    const cookies = request.headers.cookie;
    if (cookies) {
      const parsedCookies = Object.fromEntries(cookies.split('; ').map((c) => c.split('=')));

      if (parsedCookies['auth0-jwt-live']) {
        try {
          const decodedJwt = decode(parsedCookies['auth0-jwt-live']) as unknown as DecodedJWT;

          // Save the JWT in request.app for later use.
          request.app.jwt = parsedCookies['auth0-jwt-live'];
          request.app.user = decodedJwt;
        } catch (error) {
          console.error('Error decoding JWT: ', error);
        }
      }
    }

    return h.continue;
  });

  // Register the custom plugins
  await server.register({ plugin: customHapiViews.plugin, options: customHapiViews.options });
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
