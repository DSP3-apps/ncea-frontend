/**
 * @jest-environment jsdom
 */

'use strict';

import { Server, ServerInjectResponse } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import { BASE_PATH } from '../../../src/utils/constants';
import { Feed } from '../../../src/interfaces/feeds.interface';

// Mock the RSS fetch so this test never makes real network calls to the gov.uk blogs
jest.mock('../../../src/utils/getFeedsData', () => ({
  getFeedsData: jest.fn(
    async (feedObj: Feed): Promise<Feed> => ({
      title: feedObj.title,
      url: feedObj.url,
      articles: [
        {
          title: `${feedObj.title} article`,
          author: 'Test Author',
          link: 'https://example.com/article-1',
          pubDate: '05 February 2025',
          summary: 'Test article summary',
        },
      ],
    }),
  ),
}));

describe('Feeds Screen', () => {
  let server: Server;
  let response: ServerInjectResponse<object>;
  let document: Document;

  beforeAll((done) => {
    initializeServer().then(async (s: Server) => {
      server = s;

      const options = {
        method: 'GET',
        url: `${BASE_PATH}/newsfeed`,
      };

      response = await server.inject(options);
      const rawHTML = response.payload;
      const parser = new DOMParser();
      document = parser.parseFromString(rawHTML, 'text/html');
      done();
    });
  });

  afterAll((done) => {
    server.stop().then(() => done());
  });

  describe('Feeds > Sanpshot verification', () => {
    it('should match the Feeds screen snapshot', async () => {
      expect(response.payload).toMatchSnapshot();
    });
  });

  describe('Feeds > Heading', () => {
    it('should render the Feeds content heading', async () => {
      expect(document?.querySelectorAll('.govuk-heading-m')?.[1]?.textContent?.trim()).toBe('Defra - NCEA');
      expect(document?.querySelectorAll('.govuk-heading-m')?.[2]?.textContent?.trim()).toBe('Natural England - NCEA');
    });
  });

  describe('Feeds > Articles', () => {
    it('should render the mocked article for each feed', async () => {
      const articleTitles = Array.from(document.querySelectorAll('.feed-container .govuk-heading-s')).map((el) =>
        el.textContent?.trim(),
      );
      expect(articleTitles).toEqual(['Defra - NCEA article', 'Natural England - NCEA article']);
    });
  });
});
