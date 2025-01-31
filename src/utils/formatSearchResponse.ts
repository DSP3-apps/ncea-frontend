/* eslint-disable  @typescript-eslint/no-explicit-any */
import { center } from '@turf/turf';
import { format } from 'date-fns';

import { formatDate, getYear } from './dates';
import { getAccessTabData } from './getAccessTabData';
import { getAccumulatedCoordinatesNCenter } from './getBoundingBoxData';
import { getGeneralTabData } from './getGeneralTabData';
import { getGeographyTabData } from './getGeographyTabData';
import { getGovernanceTabData } from './getGovernanceTab';
import { getLicenseTabData } from './getLicenseTabData';
import { getNaturalTab } from './getNaturalCapitalTab';
import { getOrganisationDetails } from './getOrganisationDetails';
import { getQualityTabData } from './getQualityTabData';
import { toggleContent } from './toggleContent';
import {
  IAccumulatedCoordinatesWithCenter,
  IDateRange,
  IOtherSearchItem,
  ISearchItem,
  ISearchResponse,
  ISearchResult,
  ISearchResults,
} from '../interfaces/searchResponse.interface';

const DATE_FORMAT = 'd MMMM yyyy';

const getAbstractContent = (data: Record<string, any>, id: string): string => {
  if (Object.keys(data).length && data?.default) {
    return toggleContent(data?.default, `abstract_content-${id}`);
  }
  return '';
};

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
  const items = response.results.map((result: ISearchResult) => {
    const startDate = new Date(result.searchFields.temporalExtent.beginPosition);
    const endDate = new Date(result.searchFields.temporalExtent.endPosition);

    if (isMapResults && result?.searchFields?.mapping) {
      const envelope = result?.searchFields?.mapping;

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
        id: result.searchFields.fileIdentifier,
        title: result.searchFields.title,
        content: toggleContent(result.searchFields.abstract, `abstract_content-${result.searchFields.fileIdentifier}`),
        studyPeriod: `${format(startDate, DATE_FORMAT)} to ${format(endDate, DATE_FORMAT)}`,
        startYear: startDate.getFullYear().toString(),
        toYear: endDate.getFullYear().toString(),
        resourceLocator: result?.searchFields?.resource?.url ?? '',
        geographicBoundary,
        geographicCenter: centerPoint.geometry.coordinates.join(),
        organisationName: '',
        publishedBy: '',
        resourceType: ['dataset'],
      };
    }

    return {
      id: result.searchFields.fileIdentifier,
      title: result.searchFields.title,
      publishedBy: '',
      content: toggleContent(result.searchFields.abstract, `abstract_content-${result.searchFields.fileIdentifier}`),
      studyPeriod: `${format(startDate, DATE_FORMAT)} to ${format(endDate, DATE_FORMAT)}`,
      startYear: startDate.getFullYear().toString(),
      toYear: endDate.getFullYear().toString(),
      resourceLocator: '',
      organisationName: '',
      resourceType: ['dataset'],
    };
  });

  return {
    total: response.totalDocumentCount,
    items,
    hasSpatialData,
  };
};

export const formatSearchResponse = async (
  apiResponse: Record<string, any>,
  isDetails: boolean = false,
  isMapResults: boolean = false,
): Promise<ISearchResults> => {
  const finalResponse: ISearchResults = {
    total: apiResponse?.hits?.total?.value,
    items: [],
    hasSpatialData: false,
  };
  let minStartYear: string = '';
  let maxToYear: string = '';

  const apiSearchItems = apiResponse?.hits?.hits;

  const responseItems: Promise<ISearchItem>[] = apiSearchItems.map(async (searchItem: Record<string, any>) => {
    const startDate: string = searchItem?._source?.resourceTemporalExtentDetails?.[0]?.start?.date ?? '';
    const endDate: string = searchItem?._source?.resourceTemporalExtentDetails?.[0]?.end?.date ?? '';
    const studyPeriod = getStudyPeriodDetails(isDetails, searchItem?._source?.resourceTemporalExtentDetails ?? []);
    const publishedBy = getOrganisationDetails(searchItem?._source, false);
    const organisationDetails = getOrganisationDetails(searchItem?._source, true);
    const startYear: string = getYear(startDate);
    const toYear: string = getYear(endDate);

    if (minStartYear === '' || (startYear !== '' && startYear < minStartYear)) {
      minStartYear = startYear;
    }

    if (maxToYear === '' || (toYear !== '' && toYear > maxToYear)) {
      maxToYear = toYear;
    }

    let item: ISearchItem = {
      id: searchItem?._id,
      title: searchItem?._source?.resourceTitleObject?.default ?? '',
      publishedBy: publishedBy.organisationValue,
      content: getAbstractContent(searchItem?._source?.resourceAbstractObject ?? '', searchItem?._id),
      studyPeriod,
      startYear,
      toYear,
      resourceLocator: getResourceLocatorURL(searchItem?._source?.linkUrl ?? ''),
      organisationName: organisationDetails.organisationValue,
    };

    if (isMapResults && searchItem._source?.geom != null) {
      finalResponse.hasSpatialData = true;

      const coordinatesData: IAccumulatedCoordinatesWithCenter = getAccumulatedCoordinatesNCenter(
        searchItem._source.geom,
      ) as IAccumulatedCoordinatesWithCenter;
      item = {
        ...item,
        geographicBoundary: coordinatesData.coordinates,
        geographicCenter: coordinatesData.center,
        resourceType: searchItem?._source?.resourceType ?? [],
      };
    } else if (isMapResults) {
      return null;
    }

    if (isDetails) {
      const otherDetails: IOtherSearchItem = await getOtherDetails(searchItem);
      item = { ...item, ...otherDetails };
    }

    return item;
  });

  finalResponse.items = (await Promise.all(responseItems)).filter((item) => item != null);
  if (isMapResults) {
    finalResponse.total = finalResponse.items.length;
  }

  return finalResponse;
};

const getOtherDetails = async (searchItem: Record<string, any>): Promise<IOtherSearchItem> => {
  const projectId: string =
    searchItem?._source?.OrgNceaIdentifiers?.projectId ?? searchItem?._source?.OrgNceaIdentifiers?.projectNumber;

  return {
    ...getGeneralTabData(searchItem),
    ...getAccessTabData(searchItem),
    ...getQualityTabData(searchItem),
    ncea_group_reference: searchItem?._source?.parentUuid ?? '',
    metadata_standard: searchItem?._source?.standardNameObject?.default ?? '',
    project_number: projectId ?? '',
    ...getLicenseTabData(searchItem),
    ...getNaturalTab(searchItem),
    ...getGovernanceTabData(searchItem),
    ...getGeographyTabData(searchItem),
  };
};
