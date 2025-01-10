import { ServerAuthScheme } from '@hapi/hapi';
import { decode } from 'jsonwebtoken';

import { environmentConfig } from '@/config/environmentConfig';
import { COOKIE_NAME, DecodedJWT } from '@/interfaces/cookies';

export const authSchema: ServerAuthScheme = (server) => {
  server.state(COOKIE_NAME, {
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

      // FIXME: This is what I see as the preferred solution, however state is always null.
      // The state is always null because the cookie is not being set in the request object
      // and I don't know why. So I've commented out this solution in favor of the one below
      // which manually parses the cookies from the headers.

      // const jwtCookie = request?.state?.[COOKIE_NAME];

      try {
        const parsedCookies = Object.fromEntries(cookies.split('; ').map((c) => c.split('=')));
        const jwtCookie = parsedCookies[COOKIE_NAME];

        const decodedJwt = decode(jwtCookie) as unknown as DecodedJWT;

        // It can fail without an error, just returning `null` instead
        if (!decodedJwt) {
          return h.continue;
        }

        // If valid, return an object representing the authenticated user
        return h.authenticated({
          credentials: decodedJwt,
        });
      } catch (error) {
        return h.continue;
      }
    },
  };
};
