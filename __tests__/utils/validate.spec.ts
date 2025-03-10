import { validateUrl } from '../../src/utils/validate';

describe('validate url', () => {
  it.each([
    ['http://example.com', true],
    ['https://example.com', true],
    ['https://www.example.com/path?query=123', true],
    ['example.com', false],
    ['htp://example.com', false],
    ['http://user:password@example.com', false],
    ['http://example..com', false],
    ['', false],
  ])('should validates %s as %s', (url, isValid) => {
    expect(validateUrl(url)).toStrictEqual(isValid);
  });
});
