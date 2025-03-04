/* eslint-disable  @typescript-eslint/no-explicit-any */
import { center } from '@turf/turf';
import { format } from 'date-fns';

import { formatDate, getYear } from './dates';
import { getAccessTabData } from './getAccessTabData';
import { getGeneralTabData } from './getGeneralTabData';
import { getGeographyTabData } from './getGeographyTabData';
import { getGovernanceTabData } from './getGovernanceTab';
import { getLicenseTabData } from './getLicenseTabData';
import { getNaturalTab } from './getNaturalCapitalTab';
import { getQualityTabData } from './getQualityTabData';
import { toggleContent } from './toggleContent';
import {
  IDateRange,
  IMoreInfoSearchItem,
  ISearchResponse,
  ISearchResult,
  ISearchResults,
} from '../interfaces/searchResponse.interface';

const DATE_FORMAT = 'd MMMM yyyy';

const getResourceLocatorURL = (data: string | string[]): string => {
  if (Array.isArray(data) && data.length) {
    return data[0] as string;
  }
  return data as string;
};

export const getStudyPeriodDetails = (isDetails: boolean, dateRanges: IDateRange[] = []): string => {
  const studyPeriodString = (startDate: string, endDate: string): string => {
    if (!startDate && !endDate) return '';
    if (!startDate) return `${endDate} to ${endDate}`;
    if (!endDate) return `${startDate} to ${startDate}`;
    return `${startDate} to ${endDate}`;
  };

  if (dateRanges.length <= 0) return '';

  const resultString: string[] = [];
  for (const dateRange of dateRanges) {
    const startDate: string = dateRange?.start?.date ? formatDate(dateRange.start.date) : '';
    const endDate: string = dateRange?.end?.date ? formatDate(dateRange.end.date) : '';
    const dateString = studyPeriodString(startDate, endDate);
    resultString.push(dateString);

    if (!isDetails) {
      break;
    }
  }

  return resultString.join('<br>');
};

/**
 * Transforms the API search response to a format that can be used by the
 * front end. The return from this function will differ slightly depending
 * on whether there is geospatial data in the response or not.
 *
 * @param {ISearchResponse} response
 * @param {boolean} [isMapResults=false]
 *
 * @return {*}  {ISearchResults}
 */
export const transformSearchResponse = (response: ISearchResponse, isMapResults: boolean = false): ISearchResults => {
  let hasSpatialData = false;

  if (response.totalDocumentCount === 0) {
    return {
      total: response.totalDocumentCount,
      items: [],
      hasSpatialData,
    };
  }
  const items = response.results.map((result: ISearchResult) => {
    const startDate = new Date(result.temporalExtent.beginPosition);
    const endDate = new Date(result.temporalExtent.endPosition);

    const searchResponse = {
      id: result.id,
      title: result.title,
      content: toggleContent(result.abstract, `abstract_content-${result.id}`),
      studyPeriod: `${format(startDate, DATE_FORMAT)} to ${format(endDate, DATE_FORMAT)}`,
      startYear: startDate.getFullYear().toString(),
      toYear: endDate.getFullYear().toString(),
      resourceLocator: result?.resource?.url ?? '',
      organisationName: '',
      publishedBy: '',
      resourceType: ['dataset'],
    };

    if (isMapResults && result?.mapping) {
      const envelope = result?.mapping;

      // Calculate center point for envelope received.
      const coordinates = [
        [
          [envelope.westBoundLongitude, envelope.southBoundLatitude],
          [envelope.eastBoundLongitude, envelope.southBoundLatitude],
          [envelope.eastBoundLongitude, envelope.northBoundLatitude],
          [envelope.westBoundLongitude, envelope.northBoundLatitude],
          [envelope.westBoundLongitude, envelope.southBoundLatitude], // Close the polygon
        ],
      ];
      const centerPoint = center({ type: 'Polygon', coordinates });

      const geographicBoundary = {
        north: envelope.northBoundLatitude,
        south: envelope.southBoundLatitude,
        east: envelope.eastBoundLongitude,
        west: envelope.westBoundLongitude,
      };

      hasSpatialData = true;

      return {
        ...searchResponse,
        geographicBoundary,
        geographicCenter: centerPoint.geometry.coordinates.join(),
      };
    }

    return searchResponse;
  });

  return {
    total: response.totalDocumentCount,
    items,
    hasSpatialData,
  };
};

export const formatSearchResponse = (payload: IMoreInfoSearchItem) => ({
  id: payload?.id,
  title: payload?.title ?? '',
  publishedBy: '',
  startYear: getYear(payload?.temporalExtent?.beginPosition ?? ''),
  toYear: getYear(payload?.temporalExtent?.endPosition ?? ''),
  resourceLocator: getResourceLocatorURL(payload?.resources[0]?.url ?? ''),
  organisationName: '', // keeping this field as empty, right now it is not available from AGM side
  ncea_group_reference: '',
  project_number: '',
  ...getGeneralTabData(payload),
  ...getAccessTabData(payload),
  ...getQualityTabData(payload),
  ...getLicenseTabData(payload.license ?? {}),
  ...getNaturalTab(payload),
  ...getGovernanceTabData(payload.contacts ?? []),
  ...getGeographyTabData(payload),
});
