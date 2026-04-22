import { RequestQuery } from '@hapi/hapi';
import {
  getQueryStringParams,
  upsertQueryParams,
  readQueryParams,
  getDateParams,
  getExtentParams,
  getFilterParams,
  generateCountPayload,
  generateQueryBuilderFields,
  generateQueryBuilderPayload,
  deleteQueryParams,
  removeDuplicatesValues,
  getUniqueValues,
  escapeHtmlAttribute,
  buildJwtDownloadHandler,
} from '../../src/utils/queryStringHelper';

describe('queryStringHelper functions', () => {
  describe('getQueryStringParams', () => {
    test('should return empty URLSearchParams if no requestQuery provided', () => {
      const result = getQueryStringParams('' as unknown as RequestQuery);
      expect(result.toString()).toBe('');
    });

    test('should return URLSearchParams with query string parameters', () => {
      const requestQuery = { q: 'query', page: '1', rowsPerPage: '20' };
      const result = getQueryStringParams(requestQuery);
      expect(result.toString()).toBe('q=query&page=1&rowsPerPage=20');
    });
  });

  describe('upsertQueryParams', () => {
    test('should insert new query parameters', () => {
      const requestQuery = { q: 'query' };
      const queryParamsObject = { jry: 'qs' };
      const result = upsertQueryParams(requestQuery, queryParamsObject);
      expect(result).toBe('q=query&jry=qs&pg=1&rpp=20&srt=most_relevant');
    });

    test('should update existing query parameters', () => {
      const requestQuery = { jry: 'qs', q: 'oldQuery' };
      const queryParamsObject = { q: 'newQuery' };
      const result = upsertQueryParams(requestQuery, queryParamsObject);
      expect(result).toBe('jry=qs&q=newQuery&pg=1&rpp=20&srt=most_relevant');
    });

    test('should include default parameters if specified', () => {
      const requestQuery = { q: 'oldQuery' };
      const queryParamsObject = {};
      const result = upsertQueryParams(requestQuery, queryParamsObject, true);
      expect(result).toBe('q=oldQuery&pg=1&rpp=20&srt=most_relevant');
    });

    test('should not include default parameters if not specified', () => {
      const requestQuery = { q: 'oldQuery' };
      const queryParamsObject = {};
      const result = upsertQueryParams(requestQuery, queryParamsObject, false);
      expect(result).toBe('q=oldQuery');
    });

    test('should remove the key if the value is empty', () => {
      const requestQuery = { q: 'oldQuery', t: '123' };
      const queryParamsObject = { t: '' };
      const result = upsertQueryParams(requestQuery, queryParamsObject, false);
      expect(result).toBe('q=oldQuery');
    });
  });

  describe('deleteQueryParams', () => {
    test('should delete query parameters if exists', () => {
      const requestQuery = { sy: '2002', q: 'query', pg: '1' };
      const result = deleteQueryParams(requestQuery, ['sy']);
      expect(result).toBe('q=query&pg=1&rpp=20&srt=most_relevant');
    });

    test('should delete multiple query parameters if exists', () => {
      const requestQuery = { sy: '2002', ty: '2023', q: 'query', pg: '1' };
      const result = deleteQueryParams(requestQuery, ['sy', 'ty']);
      expect(result).toBe('q=query&pg=1&rpp=20&srt=most_relevant');
    });

    test('should delete query parameters if exists and return without default parameters', () => {
      const requestQuery = { sy: '2002', q: 'query' };
      const result = deleteQueryParams(requestQuery, ['sy'], false);
      expect(result).toBe('q=query');
    });
  });

  describe('readQueryParams', () => {
    test('should read specific query parameter', () => {
      const requestQuery = { q: 'query', page: '1' };
      const result = readQueryParams(requestQuery, 'page');
      expect(result).toBe('1');
    });

    test('should return empty string if key does not exist', () => {
      const requestQuery = { q: 'query', page: '1' };
      const result = readQueryParams(requestQuery, 'rowsPerPage');
      expect(result).toBe('');
    });

    test('should include default parameters if specified', () => {
      const requestQuery = { q: 'query' };
      const result = readQueryParams(requestQuery, '', true);
      expect(result).toBe('q=query&pg=1&rpp=20&srt=most_relevant');
    });

    test('should not include default parameters if not specified', () => {
      const requestQuery = { q: 'query' };
      const result = readQueryParams(requestQuery);
      expect(result).toBe('q=query');
    });
  });

  describe('getDateParams', () => {
    test('should return date parameters from URLSearchParams', () => {
      const searchParams = new URLSearchParams('fdd=01&fdm=01&fdy=2023&tdd=31&tdm=12&tdy=2023');
      const result = getDateParams(searchParams);
      expect(result).toEqual({
        fdd: '01',
        fdm: '01',
        fdy: '2023',
        tdd: '31',
        tdm: '12',
        tdy: '2023',
      });
    });

    test('should return empty object if no date parameters', () => {
      const searchParams = new URLSearchParams();
      const result = getDateParams(searchParams);
      expect(result).toEqual({
        fdd: '',
        fdm: '',
        fdy: '',
        tdd: '',
        tdm: '',
        tdy: '',
      });
    });
  });

  describe('getExtentParams', () => {
    test('should return extent parameters from URLSearchParams', () => {
      const searchParams = new URLSearchParams('nth=1&sth=2&est=3&wst=4');
      const result = getExtentParams(searchParams);
      expect(result).toEqual({
        nth: '1',
        sth: '2',
        est: '3',
        wst: '4',
      });
    });

    test('should return empty object if no extent parameters', () => {
      const searchParams = new URLSearchParams();
      const result = getExtentParams(searchParams);
      expect(result).toEqual({
        nth: '',
        sth: '',
        est: '',
        wst: '',
      });
    });
  });

  describe('getFilterParams', () => {
    test('should return resourceType filter parameter from URLSearchParams', () => {
      const searchParams = new URLSearchParams('rty=test');
      const result = getFilterParams(searchParams);
      expect(result).toEqual({
        endDate: '',
        startDate: '',
        resourceType: 'test',
      });
    });

    test('should return empty object if no filter parameters', () => {
      const searchParams = new URLSearchParams();
      const result = getFilterParams(searchParams);
      expect(result).toEqual({
        resourceType: '',
        endDate: '',
        startDate: '',
      });
    });
  });

  describe('generateCountPayload', () => {
    test('should generate count payload with default values', () => {
      const requestQuery = { q: 'query', page: '1' };
      const result = generateCountPayload(requestQuery);
      expect(result).toEqual({
        fields: {
          keyword: { q: 'query' },
        },
        sort: '',
        rowsPerPage: 0,
        filters: {},
        page: null,
      });
    });
  });

  describe('generateQueryBuilderFields', () => {
    test('should generate fields with keyword only', () => {
      const requestQuery = { q: 'query' };
      const result = generateQueryBuilderFields(requestQuery);
      expect(result).toEqual({
        keyword: { q: 'query' },
      });
    });

    test('should generate fields with keyword and date parameters', () => {
      const requestQuery = {
        q: 'query',
        fdd: '01',
        fdm: '01',
        fdy: '2023',
        tdd: '31',
        tdm: '12',
        tdy: '2023',
      };
      const result = generateQueryBuilderFields(requestQuery);
      expect(result).toEqual({
        keyword: { q: 'query' },
        date: {
          fdd: '01',
          fdm: '01',
          fdy: '2023',
          tdd: '31',
          tdm: '12',
          tdy: '2023',
        },
      });
    });

    test('should generate fields with keyword and extent parameters', () => {
      const requestQuery = {
        q: 'query',
        nth: '1',
        sth: '2',
        est: '3',
        wst: '4',
      };
      const result = generateQueryBuilderFields(requestQuery);
      expect(result).toEqual({
        keyword: { q: 'query' },
        extent: {
          nth: '1',
          sth: '2',
          est: '3',
          wst: '4',
        },
      });
    });

    test('should generate fields with keyword, date, and extent parameters', () => {
      const requestQuery = {
        q: 'query',
        fdd: '01',
        fdm: '01',
        fdy: '2023',
        tdd: '31',
        tdm: '12',
        tdy: '2023',
        nth: '1',
        sth: '2',
        est: '3',
        wst: '4',
      };
      const result = generateQueryBuilderFields(requestQuery);
      expect(result).toEqual({
        keyword: { q: 'query' },
        date: {
          fdd: '01',
          fdm: '01',
          fdy: '2023',
          tdd: '31',
          tdm: '12',
          tdy: '2023',
        },
        extent: {
          nth: '1',
          sth: '2',
          est: '3',
          wst: '4',
        },
      });
    });

    test('should generate empty fields if no query parameters provided', () => {
      const requestQuery = {};
      const result = generateQueryBuilderFields(requestQuery);
      expect(result).toEqual({});
    });
  });

  describe('generateQueryBuilderPayload', () => {
    test('should generate payload with default values', () => {
      const requestQuery = { q: 'query' };
      const result = generateQueryBuilderPayload(requestQuery);
      expect(result).toEqual({
        fields: {
          keyword: { q: 'query' },
        },
        sort: 'most_relevant',
        page: 1,
        rowsPerPage: 20,
        filters: {},
      });
    });

    test('should generate payload with specified sort, page, and rowsPerPage', () => {
      const requestQuery = {
        q: 'query',
        srt: 'date',
        pg: '2',
        rpp: '10',
      };
      const result = generateQueryBuilderPayload(requestQuery);
      expect(result).toEqual({
        fields: {
          keyword: { q: 'query' },
        },
        sort: 'date',
        page: 2,
        rowsPerPage: 10,
        filters: {},
      });
    });

    test('should generate payload with filter parameters', () => {
      const requestQuery = { q: 'query', rty: 'article' };
      const result = generateQueryBuilderPayload(requestQuery);
      expect(result).toEqual({
        fields: {
          keyword: { q: 'query' },
        },
        sort: 'most_relevant',
        page: 1,
        rowsPerPage: 20,
        filters: {
          resourceTypeFilter: ['article'],
        },
      });
    });

    test('should generate payload with all available parameters', () => {
      const requestQuery = {
        q: 'query',
        fdd: '01',
        fdm: '01',
        fdy: '2023',
        tdd: '31',
        tdm: '12',
        tdy: '2023',
        nth: '1',
        sth: '2',
        est: '3',
        wst: '4',
        srt: 'date',
        pg: '2',
        rpp: '10',
        rty: 'article',
      };
      const result = generateQueryBuilderPayload(requestQuery);
      expect(result).toEqual({
        fields: {
          keyword: { q: 'query' },
          date: {
            fdd: '01',
            fdm: '01',
            fdy: '2023',
            tdd: '31',
            tdm: '12',
            tdy: '2023',
          },
          extent: {
            nth: '1',
            sth: '2',
            est: '3',
            wst: '4',
          },
        },
        sort: 'date',
        page: 2,
        rowsPerPage: 10,
        filters: {
          resourceTypeFilter: ['article'],
        },
      });
    });
  });
  describe('removeDuplicatesValues', () => {
    it('should return empty string if the input value is passed as empty or null', () => {
      expect(removeDuplicatesValues('')).toStrictEqual('');
    });

    it('should return expected output and removed the duplicates', () => {
      expect(removeDuplicatesValues('A,A,A,A,A,A,A,B,B,C,C,D,D,D')).toStrictEqual('A, B, C, D');
    });

    it('should remove duplicates when values contain spaces after commas', () => {
      const input =
        'soil, broad habitat, loss on ignition, parent material model, organic matter, loss on ignition, carbon, habitat, soil, countryside survey';

      expect(removeDuplicatesValues(input)).toStrictEqual(
        'soil, broad habitat, loss on ignition, parent material model, organic matter, carbon, habitat, countryside survey',
      );
    });
  });

  describe('getUniqueValues', () => {
    it('should return empty string when given an empty array', () => {
      expect(getUniqueValues([])).toBe('');
    });

    it('should return a single keyword unchanged', () => {
      expect(getUniqueValues(['flood'])).toBe('flood');
    });

    it('should join multiple unique keywords with a comma and space', () => {
      expect(getUniqueValues(['flood', 'environment', 'habitat'])).toBe('flood, environment, habitat');
    });

    it.each([
      [['flood', 'flood', 'flood'], 'flood'],
      [['Flood', 'flood'], 'Flood'],
      [['environment', 'Environment'], 'environment'],
      [['Flood', 'environment', 'flood', 'Environment'], 'Flood, environment'],
      [['HABITAT', 'habitat', 'Habitat'], 'HABITAT'],
    ])('should deduplicate case-insensitively and preserve first-seen casing: %j → %s', (input, expected) => {
      expect(getUniqueValues(input)).toBe(expected);
    });
  });

  describe('escapeHtmlAttribute', () => {
    it('should return the same value when no escapable characters are present', () => {
      expect(escapeHtmlAttribute('dataset-file-name.zip')).toBe('dataset-file-name.zip');
    });

    it('should escape ampersands', () => {
      expect(escapeHtmlAttribute('A & B')).toBe('A &amp; B');
    });

    it('should escape double quotes', () => {
      expect(escapeHtmlAttribute('say "hello"')).toBe('say &quot;hello&quot;');
    });

    it('should escape single quotes', () => {
      expect(escapeHtmlAttribute("it's data")).toBe('it&#39;s data');
    });

    it('should escape angle brackets', () => {
      expect(escapeHtmlAttribute('<script>alert(1)</script>')).toBe('&lt;script&gt;alert(1)&lt;/script&gt;');
    });

    it('should escape mixed HTML special characters in order', () => {
      const input = `<a href="https://example.com?a=1&b=2">it's "test"</a>`;
      const expected = '&lt;a href=&quot;https://example.com?a=1&amp;b=2&quot;&gt;it&#39;s &quot;test&quot;&lt;/a&gt;';

      expect(escapeHtmlAttribute(input)).toBe(expected);
    });
  });

  describe('buildJwtDownloadHandler', () => {
    it('should generate an inline handler starting with preventDefault and async wrapper', () => {
      const handler = buildJwtDownloadHandler('/natural-capital-ecosystem-assessment');

      expect(handler).toContain('event.preventDefault();');
      expect(handler).toContain('(async()=>{');
      expect(handler).toContain("const rawUrl=(this.dataset.url||'').trim();");
      expect(handler).toContain("const jwt=this.dataset.jwt||'';");
    });

    it('should include dataset/file extraction and proxy URL interpolation with provided base path', () => {
      const basePath = '/natural-capital-ecosystem-assessment';
      const handler = buildJwtDownloadHandler(basePath);

      expect(handler).toContain('rawUrl.match(/\\/data-sets\\/([^/]+)\\/files\\/([^/?#]+)/i)');
      expect(handler).toContain(
        `window.location.origin+'${basePath}/file-download?dataSetId='+encodeURIComponent(dataSetId)+'&fileName='+encodeURIComponent(fileName)`,
      );
      expect(handler).toContain(
        'fetch(fileDownloadUrl,{...(jwt&&{headers:{Authorization:`Bearer ${jwt}`}})})',
      );
      expect(handler).toContain('window.location.href=fallbackUrl;');
    });
  });
});
