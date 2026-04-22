/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { convertTimestampToIsoString, formatDate } from './dates';
import { getUniqueValues } from './queryStringHelper';
import { IDataFormat, IQuality, IQualityItem } from '../interfaces/searchResponse.interface';

const checkAtLeastOnePropertyValueExists = (sourceObject: Record<string, any>): boolean => {
  return sourceObject?.title || sourceObject?.pass || sourceObject?.explanation;
};

const generateConformityData = (data: Record<string, any>[]): string => {
  const shouldDisplayTable: boolean = data.some((item: Record<string, any>) =>
    checkAtLeastOnePropertyValueExists(item),
  );
  if (Array.isArray(data) && data.length > 0 && shouldDisplayTable) {
    let tableHTML = `<table class="details-table">
                      <thead>
                        <tr>
                          <th width="60%">Specification</th>
                          <th width="10%">Degree</th>
                          <th>Explanation</th>
                        </tr>
                      </thead><tbody>`;
    data.forEach((item: Record<string, any>) => {
      if (checkAtLeastOnePropertyValueExists(item)) {
        tableHTML += `<tr>
                      <td>${item?.title ?? ''}</td>
                      <td>${item?.pass ?? ''}</td>
                      <td>${item?.explanation ?? ''}</td>
                    </tr>`;
      }
    });
    tableHTML += `</tbody></table>`;

    return tableHTML;
  }
  return '';
};

const getRecordsDates = (data: string): string => {
  return formatDate(data, false, false);
};

export const getDistributionFormats = (dataFormats: IDataFormat[]): string => {
  const resourceFormats = (dataFormats ?? []).map((item) => item?.dataFormat).filter(Boolean);
  if (resourceFormats.length > 0) {
    return getUniqueValues(resourceFormats);
  }
  return '';
};

const getQualityTabData = (payload: IQualityItem): IQuality => ({
  publicationInformation: convertTimestampToIsoString(payload?.published ?? ''),
  creationInformation: convertTimestampToIsoString(payload?.createdAt ?? ''),
  revisionInformation: convertTimestampToIsoString(payload?.modified ?? ''),
  metadataDate: convertTimestampToIsoString(payload?.metadataModified ?? ''),
  lineage: payload?.lineage ?? '',
  available_formats: getDistributionFormats(payload?.dataFormats ?? []),
  frequency_of_update: payload?.accrualPeriodicity ?? '',
  character_encoding: 'utf8',
});

export { getQualityTabData, generateConformityData, getRecordsDates };
