/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { formatDate } from './dates';
import { IGeneralItem } from '../interfaces/searchResponse.interface';

const getResourceLanguages = (data): string => {
  const resourceLanguages: string | string[] = data[0]?.language ?? [];
  if (
    (typeof resourceLanguages === 'string' && resourceLanguages.length === 0) ||
    (Array.isArray(resourceLanguages) && resourceLanguages.length === 0)
  ) {
    return '';
  }
  const languagesData: string[] = [];
  if (Array.isArray(resourceLanguages) && resourceLanguages.length) {
    resourceLanguages.forEach((language: string) => {
      languagesData.push(language.toUpperCase());
    });
  } else {
    languagesData.push((resourceLanguages as string).toUpperCase());
  }
  return languagesData.join(', ');
};

export const getStudyPeriodDetails = (dateRanges: any): string => {
  const { beginPosition, endPosition } = dateRanges;
  const startDate: string = beginPosition ? formatDate(beginPosition) : '';
  const endDate: string = endPosition ? formatDate(endPosition) : '';

  if (!startDate && !endDate) return '';
  if (!startDate) return `${endDate}`;
  if (!endDate) return `${startDate}`;

  return `${startDate} to ${endDate}`;
};

const getGeneralTabData = (payload: IGeneralItem) => ({
  content: payload?.abstract ?? '',
  studyPeriod: getStudyPeriodDetails(payload.temporalExtent ?? ''),
  topicCategories: payload?.topicCategories?.join(', ') ?? '',
  keywords: payload?.keywords?.join(', ') ?? '',
  language: getResourceLanguages(payload?.resources),
});

export { getGeneralTabData, getResourceLanguages };
