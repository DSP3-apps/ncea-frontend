// import { IDateValues } from './queryBuilder.interface';

export interface FeedArticle {
  title: string;
  author: string;
  link: string;
  pubDate: string;
  summary: string;
}

export interface Feed {
  title: string;
  url: string;
  articles?: FeedArticle[];
}
