import { format, parseISO } from 'date-fns';
import Parser from 'rss-parser';

import { Feed, FeedArticle } from '@/interfaces/feeds.interface';

const parser = new Parser();

const isValidArticle = (item): item is FeedArticle =>
  typeof item.title === 'string' &&
  typeof item.author === 'string' &&
  typeof item.link === 'string' &&
  typeof item.pubDate === 'string' &&
  typeof item.summary === 'string';

export function formatTimestamp(timestamp: string): string {
  const date = parseISO(timestamp);
  return format(date, 'dd MMMM yyyy HH:mm:ss'); // Example: 05 February 2025 10:32:20
}

export const getFeedsData = async (feedURL: string): Promise<Feed> => {
  try {
    const feed = await parser.parseURL(feedURL);

    const articles: FeedArticle[] = feed.items.filter(isValidArticle).map((item) => ({
      title: item.title,
      author: item.author,
      link: item.link,
      pubDate: formatTimestamp(item.pubDate),
      summary: item.summary,
    }));

    if (feed?.title) {
      return {
        title: feed.title,
        articles,
      };
    }
    throw new Error(
      `There is no title for this feed (${feedURL}). 
      Articles will be displayed based on the requested attributes, but if no matching attributes are found, no articles will be shown.`,
    );
  } catch (error) {
    if (error instanceof Error) {
      return {
        title: error.message,
        articles: [],
      };
    } else {
      throw error;
    }
  }
};
