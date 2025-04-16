/* eslint-disable  @typescript-eslint/no-explicit-any */
import { center } from '@turf/turf';
import { format } from 'date-fns';

import { DATASET_CREATION_DATE_LABEL, DATASET_PUBLICATION_DATE_LABEL, DATASET_REVISION_DATE_LABEL } from './constants';
import { formatDate, getYear } from './dates';
import { getAccessTabData } from './getAccessTabData';
import { getGeneralTabData } from './getGeneralTabData';
import { getGeographyTabData } from './getGeographyTabData';
import { getGovernanceTabData } from './getGovernanceTab';
import { getLicenseTabData } from './getLicenseTabData';
import { getNaturalTab } from './getNaturalCapitalTab';
import { getQualityTabData } from './getQualityTabData';
import { isEmpty } from './isEmpty';
import { setNceaContribution } from './nceaContribution';
import { toggleContent } from './toggleContent';
import {
  IDateRange,
  IMoreInfoSearchItem,
  ISearchResponse,
  ISearchResult,
  ISearchResults,
  NaturalCapitalTheme,
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
    const start = result.temporalExtent.beginPosition;
    const end = result.temporalExtent.endPosition;

    const startDate = new Date(start);
    const endDate = new Date(end);

    const searchResponse = {
      id: result.id,
      title: result.title,
      content: toggleContent(result.abstract, `abstract_content-${result.id}`),
      studyPeriodStart: start ? format(startDate, DATE_FORMAT) : undefined,
      studyPeriodEnd: end ? format(endDate, DATE_FORMAT) : undefined,
      startYear: startDate.getFullYear().toString(),
      toYear: endDate.getFullYear().toString(),
      resourceLocator: result?.resource?.url ?? '',
      organisationName: '',
      publishedBy: result?.organisation ?? '',
      resourceType: ['dataset'],
      nceaContribution: setNceaContribution(result?.nceaContribution),
      displayDataSetReferenceDate: false,
      dataSetReferenceDate: '',
      dataSetReferenceLabel: '',
    };

    if (isEmpty(searchResponse.studyPeriodStart) && isEmpty(searchResponse.studyPeriodEnd)) {
      const dataSetPublicationDate = result.datasetReferenceDate.publication;
      const dataSetRevisionDate = result.datasetReferenceDate.revision;
      const dataSetCreationDate = result.datasetReferenceDate.creation;

      if (dataSetPublicationDate) {
        searchResponse.dataSetReferenceLabel = DATASET_PUBLICATION_DATE_LABEL;
      } else if (dataSetRevisionDate) {
        searchResponse.dataSetReferenceLabel = DATASET_REVISION_DATE_LABEL;
      } else {
        searchResponse.dataSetReferenceLabel = DATASET_CREATION_DATE_LABEL;
      }
      const dataSetReferenceDate = new Date(dataSetPublicationDate ?? dataSetRevisionDate ?? dataSetCreationDate);
      searchResponse.displayDataSetReferenceDate = true;
      searchResponse.dataSetReferenceDate = dataSetReferenceDate ? format(dataSetReferenceDate, DATE_FORMAT) : '';
    }

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

export const formatSearchResponse = (payload: IMoreInfoSearchItem, vocabularyData: NaturalCapitalTheme[]) => {
  const resourceUrl = getResourceLocatorURL(payload?.resources[0]?.url ?? '');
  return {
    id: payload?.id,
    title: payload?.title ?? '',
    publishedBy: payload?.organisation ?? '',
    startYear: getYear(payload?.temporalExtent?.beginPosition ?? ''),
    toYear: getYear(payload?.temporalExtent?.endPosition ?? ''),
    resourceLocator: resourceUrl,
    organisationName: payload?.organisation ?? '',
    ncea_group_reference: '',
    project_number: '',
    nceaContribution: setNceaContribution(payload?.nceaContribution),
    ...getGeneralTabData(payload),
    ...getAccessTabData(payload),
    ...getQualityTabData(payload),
    ...getLicenseTabData(payload.license ?? {}),
    ...getNaturalTab(payload, vocabularyData),
    ...getGovernanceTabData(payload.contacts ?? []),
    ...getGeographyTabData(payload),
  };
};
