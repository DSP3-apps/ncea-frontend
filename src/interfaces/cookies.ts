import { Request } from '@hapi/hapi';

export const COOKIE_NAME = 'auth0-jwt-live';

export interface CustomRequestApplicationState extends Request {
  app: {
    jwt?: string;
    user?: DecodedJWT;
  };
}

// Define an interface for the decoded JWT payload
export interface DecodedJWT {
  name: string;
  email: string;
  exp?: number; // Optional: JWT expiration timestamp
  [key: string]: unknown; // Additional claims
}
