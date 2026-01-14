'use strict';

import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

import { formatDate } from './dates';
import { IGeneralItem, IResources, ITemporalExtent } from '../interfaces/searchResponse.interface';

const getResourceLanguages = (data: IResources[]): string => {
  if (data?.length > 0) {
    return [...new Set(data.map((item) => item.language?.toUpperCase()).filter((language) => language))].join(', ');
  }
  return '';
};

export const getStudyPeriodDetails = (dateRanges: ITemporalExtent): string => {
  const { beginPosition, endPosition } = dateRanges;
  const startDate: string = beginPosition ? formatDate(beginPosition) : '';
  const endDate: string = endPosition ? formatDate(endPosition) : '';

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

const getGeneralTabData = (payload: IGeneralItem) => ({
  content: formatContent(payload?.abstract ?? ''),
  studyPeriod: payload?.temporalExtent ? getStudyPeriodDetails(payload.temporalExtent) : '',
  topicCategories: payload?.topicCategories?.join(', ') ?? '',
  keywords: payload?.keywords?.join(', ') ?? '',
  language: payload?.resources ? getResourceLanguages(payload.resources) : [],
});

export { getGeneralTabData, getResourceLanguages };
