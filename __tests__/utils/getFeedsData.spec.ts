import { formatTimestamp, getFeedsData } from '../../src/utils/getFeedsData';
import Parser from 'rss-parser';

describe('formatTimestamp', () => {
  it('should format a valid ISO timestamp correctly', () => {
    const isoTimestamp = '2025-02-05T10:32:20Z';
    const formatted = formatTimestamp(isoTimestamp);
    expect(formatted).toBe('05 February 2025');
  });
});

describe('getFeedsData', () => {
  // Restore mocks after each test.
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const atomFeeds = { title: 'feed-1', url: 'http://example.com/rss' };

  it('should return feed data with valid articles only', async () => {
    const validArticle = {
      title: 'Article 1',
      author: 'Author 1',
      link: 'http://example.com/article1',
      pubDate: '2025-02-05T10:32:20Z',
      summary: 'Summary for article 1',
    };
    const invalidArticle = {
      title: 'Article 2',
      author: 'Author 2',
      link: 'http://example.com/article2',
      pubDate: '2025-02-05T10:33:20Z',
      summary: null,
    };

    const feedData = {
      title: 'Test Feed',
      items: [validArticle, invalidArticle],
    };

    jest.spyOn(Parser.prototype, 'parseURL').mockResolvedValue(feedData as any);

    const result = await getFeedsData(atomFeeds);

    expect(result.title).toBe('feed-1');

    expect(result.articles).toHaveLength(1);
    expect(result.articles).toEqual([{
      title: validArticle.title,
      author: validArticle.author,
      link: validArticle.link,
      pubDate: '05 February 2025',
      summary: validArticle.summary,
    }]);
  });

  it('should return a failure feed when the feed title is missing', async () => {
    const feedData = {
      title: 'test feed',
      items: [
        {
          title: 'Article 1',
          author: 'Author 1',
          link: 'http://example.com/article1',
          pubDate: '2025-02-05T10:32:20Z',
          summary: 'Summary for article 1',
        },
      ],
    };

    jest.spyOn(Parser.prototype, 'parseURL').mockResolvedValue(feedData as any);

    const result = await getFeedsData(atomFeeds);

    expect(result.title).toBe('feed-1');
    expect(result.articles).toEqual([
      {
        title: 'Article 1',
        author: 'Author 1',
        link: 'http://example.com/article1',
        pubDate: '05 February 2025',
        summary: 'Summary for article 1',
      },
    ]);
  });
});
