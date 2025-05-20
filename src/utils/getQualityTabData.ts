/* eslint-disable  @typescript-eslint/no-explicit-any */
'use strict';

import { formatDate } from './dates';
import { IQuality, IQualityItem } from '../interfaces/searchResponse.interface';

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

export const getDistributionFormats = (resources): string => {
  if (Array.isArray(resources) && resources.length > 0) {
    const formats = resources.flatMap((item) => item.distributionFormat || []).filter(Boolean);
    const uniqueFormats = Array.from(new Set(formats));
    return uniqueFormats.join(', ');
  }
  return '';
};

const getQualityTabData = (payload: IQualityItem): IQuality => ({
  publicationInformation: getRecordsDates(payload?.datasetReferenceDate?.publication ?? ''),
  creationInformation: getRecordsDates(payload?.datasetReferenceDate?.creation ?? ''),
  revisionInformation: getRecordsDates(payload?.datasetReferenceDate?.revision ?? ''),
  metadataDate: getRecordsDates(payload?.datasetReferenceDate?.metadata ?? ''),
  lineage: payload?.lineage ?? '',
  available_formats: getDistributionFormats(payload.resources ?? []),
  frequency_of_update: payload?.license?.frequencyOfUpdate ?? '',
  character_encoding: 'utf8',
});

export { getQualityTabData, generateConformityData, getRecordsDates };
