// Define an interface for the decoded JWT payload
export interface DecodedJWT {
  name: string;
  email: string;
  exp?: number; // Optional: JWT expiration timestamp
  [key: string]: unknown; // Additional claims
}
