import { Credentials } from '../interfaces/auth';

export const getUrlAndAuthHeader = (rawUrl: string): { url: string; authHeader?: string; isNCEATestEnv: boolean } => {
  const url = new URL(rawUrl);

  const hasCredentials = url.username || url.password;
  const isNCEATestEnv = /environment-test\.data\.gov\.uk/.test(url.hostname);

  const authHeader =
    isNCEATestEnv && hasCredentials
      ? `Basic ${Buffer.from(`${url.username}:${url.password}`).toString('base64')}`
      : undefined;

  // Remove credentials from URL
  url.username = '';
  url.password = '';

  return { url: url.toString(), authHeader, isNCEATestEnv };
};

export const buildSearchApiHeaders = (
  authHeader?: string,
  credentials?: Credentials,
  includeSearchJwt: boolean = false,
): Record<string, string> => {
  const headers: Record<string, string> = {};

  if (authHeader) {
    headers.Authorization = authHeader;
  }

  if (credentials?.jwt && includeSearchJwt) {
    if (authHeader) {
      headers['X-Search-JWT'] = `Bearer ${credentials.jwt}`;
    } else {
      headers.Authorization = `Bearer ${credentials.jwt}`;
    }
  }

  return headers;
};
