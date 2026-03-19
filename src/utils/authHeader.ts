export const getUrlAndAuthHeader = (rawUrl: string): { url: string; authHeader?: string } => {
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

  return { url: url.toString(), authHeader };
};
