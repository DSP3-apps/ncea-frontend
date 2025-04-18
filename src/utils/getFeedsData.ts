import https from 'https';

import { format, parseISO } from 'date-fns';
import Parser from 'rss-parser';

import { Feed, FeedArticle } from '../interfaces/feeds.interface';

const parser = new Parser({
  requestOptions: {
    agent: new https.Agent({ family: 4 }),
  },
});

const isValidArticle = (item): item is FeedArticle =>
  typeof item.title === 'string' &&
  typeof item.author === 'string' &&
  typeof item.link === 'string' &&
  typeof item.pubDate === 'string' &&
  typeof item.summary === 'string';

export function formatTimestamp(timestamp: string): string {
  const date = parseISO(timestamp);
  return format(date, 'dd MMMM yyyy'); // Example: 05 February 2025
}

export const getFeedsData = async (feedObj: Feed): Promise<Feed> => {
  const feed = await parser.parseURL(feedObj.url);

  const articles: FeedArticle[] = feed.items.filter(isValidArticle).map((item) => ({
    title: item.title,
    author: item.author,
    link: item.link,
    pubDate: formatTimestamp(item.pubDate),
    summary: item.summary,
  }));

  return {
    title: feedObj.title,
    url: feedObj.url,
    articles,
  };
};
