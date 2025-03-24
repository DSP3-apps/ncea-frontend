import { validateUrl, validateObjNullValues } from '../../src/utils/validate';

describe('validate', () => {
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

  describe('validateObjNullValues', () => {
    it('should return false if object does not contains null value', () => {
      expect(validateObjNullValues({ a: 'a', b: 'b', c: 'c' })).toStrictEqual(false);
    });
    it('should return true if object  contains null value', () => {
      expect(validateObjNullValues({ a: null, b: null, c: null })).toStrictEqual(true);
      expect(validateObjNullValues({ a: 'a', b: null, c: 'c' })).toStrictEqual(true);
    });
    it('should return false if we pass an empty object', () => {
      expect(validateObjNullValues({})).toStrictEqual(false);
    });
  });
});
