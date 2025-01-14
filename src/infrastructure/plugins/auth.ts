import { Request, ResponseToolkit, ServerAuthScheme } from '@hapi/hapi';
import { decode } from 'jsonwebtoken';

import { environmentConfig } from '../../config/environmentConfig';
import { DecodedJWT } from '../../interfaces/cookies';
import { jwtCookieName } from '../../utils/constants';

export const authSchema: ServerAuthScheme = (server) => {
  server.state(jwtCookieName, {
    ttl: null, // Cookie expiration managed by DSP Core.
    isSecure: !environmentConfig.isLocal, // Only allow HTTPS cookies.
    isHttpOnly: true, // Prevents client side JS from reading the cookie.
    clearInvalid: false, // Do not clear invalid cookies.
    strictHeader: true, // Don't allow violations of RFC 6265.
    // isSameSite: 'Lax', // Mitigates CSRF attacks.
    isSameSite: false,
  });

  return {
    authenticate: async (request, h) => {
      const cookies = request.headers?.cookie;

      if (!cookies) {
        return h.continue;
      }

      try {
        const parsedCookies = Object.fromEntries(cookies.split('; ').map((c) => c.split('=')));
        const jwt = parsedCookies[jwtCookieName];

        const decodedJwt = decode(jwt) as unknown as DecodedJWT;

        // It can fail without an error, just returning `null` instead
        if (!decodedJwt) {
          return h.continue;
        }

        // If valid, return an object representing the authenticated user
        return h.authenticated({
          credentials: {
            jwt, // raw jwt token to be used in future api requests
            user: decodedJwt,
          },
        });
      } catch (error) {
        return h.continue;
      }
    },
  };
};

/**
 * Injects user credentials into response context which is automatically passed into every view.
 * This means every view has access to user data without needing to pass in in explicitely.
 */
export const injectAuthIntoContext = (request: Request, h: ResponseToolkit) => {
  const response = request.response;

  // `response` is a union type of `Boom<any> | ResponseObject` and we only want `ResponseObject`
  // `variety` is a key only on `ResponseObject` so that will narrow the type
  if ('variety' in response) {
    const source = response.source;

    // `source` can be of any type as it is just data returned from any lifecycle method
    // the whole `source` object is read-only but the inner properties are not
    // we constrain the type to an object and check if it has the `context` key, which is
    // the data passed to each view
    if (source && typeof source === 'object' && 'context' in source && source.context) {
      const context = source.context as Record<string, unknown>;

      // finally we assign the user data if there is any
      context.user = request.auth.credentials?.user || null;
    }
  }

  return h.continue;
};
