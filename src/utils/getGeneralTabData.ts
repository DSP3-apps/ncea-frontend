'use strict';

import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

import { formatDate } from './dates';
import { getUniqueValues } from './queryStringHelper';
import { IGeneralItem, ITaxonomyKeyword, ITemporalExtent } from '../interfaces/searchResponse.interface';

export const getStudyPeriodDetails = (dateRanges: ITemporalExtent): string => {
  const { begin, end } = dateRanges;
  const startDate: string = begin ? formatDate(begin) : '';
  const endDate: string = end ? formatDate(end) : '';

  if (!startDate && !endDate) return '';
  if (!startDate) return `${endDate}`;
  if (!endDate) return `${startDate}`;

  return `${startDate} to ${endDate}`;
};

const formatContent = (content: string): string => {
  if (!content) return '';

  const result = remark().use(remarkGfm).use(remarkHtml).processSync(content);
  return String(result);
};

export const getKeywords = (keywords: ITaxonomyKeyword[]): string => {
  const taxonomyKeywords = (keywords ?? []).map((item) => item.valueLabel || '').filter(Boolean);
  if (taxonomyKeywords.length > 0) {
    return getUniqueValues(taxonomyKeywords);
  }
  return '';
};

const getGeneralTabData = (payload: IGeneralItem) => ({
  content: formatContent(payload?.description ?? ''),
  studyPeriod: payload?.temporalExtent ? getStudyPeriodDetails(payload.temporalExtent) : '',
  topicCategories: getUniqueValues(payload?.topics ?? []),
  keywords: getKeywords(payload?.taxonomyKeywords ?? []),
  language: payload?.metadataLanguage?.toLocaleUpperCase() ?? '',
});

export { getGeneralTabData };
