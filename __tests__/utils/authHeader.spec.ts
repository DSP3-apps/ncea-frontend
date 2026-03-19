import { getUrlAndAuthHeader } from '../../src/utils/authHeader';

describe('getUrlAndAuthHeader', () => {
  it('should return base64 basic auth and strip credentials for NCEA test host', () => {
    const rawUrl = 'https://user:pass@environment-test.data.gov.uk/api/search';
    const { url, authHeader } = getUrlAndAuthHeader(rawUrl);

    expect(url).toBe('https://environment-test.data.gov.uk/api/search');
    expect(authHeader).toBe(`Basic ${Buffer.from('user:pass').toString('base64')}`);
  });

  it('should not add auth header for non-test hosts but strip credentials', () => {
    const rawUrl = 'https://user:pass@example.com/api/search';
    const { url, authHeader } = getUrlAndAuthHeader(rawUrl);

    expect(url).toBe('https://example.com/api/search');
    expect(authHeader).toBeUndefined();
  });

  it('should return url unchanged and no auth header when no credentials are provided', () => {
    const rawUrl = 'https://environment.data.gov.uk/api/search';
    const { url, authHeader } = getUrlAndAuthHeader(rawUrl);

    expect(url).toBe(rawUrl);
    expect(authHeader).toBeUndefined();
  });
});
