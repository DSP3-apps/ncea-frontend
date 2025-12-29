import { validateObjNullValues } from './validate';
import { IAccumulatedCoordinates, IGeography, IGeographyItem } from '../interfaces/searchResponse.interface';

const getVerticalExtentHtml = (verticalRangeObject: { gte?: number; lte?: number }): string => {
  if (Object.keys(verticalRangeObject).length === 0) {
    return '';
  }
  let verticalExtentHtml: string = '';
  if (verticalRangeObject?.gte) {
    verticalExtentHtml = `<p>Lowest point: ${verticalRangeObject?.gte}m</p>`;
  }
  if (verticalRangeObject?.lte) {
    verticalExtentHtml += `<p>Highest point: ${verticalRangeObject?.lte}m</p>`;
  }
  return verticalExtentHtml;
};

const getSamplingResolution = (distanceObject: { distance?: string }, scale: number | null): string => {
  let samplingResolution: string = '';
  if (Object.keys(distanceObject).length && distanceObject?.distance) {
    samplingResolution = `${distanceObject?.distance} m`;
  } else if (scale) {
    samplingResolution = `Scale ${scale}`;
  }
  return samplingResolution;
};

const getGeographicBoundaryHtml = (coordinates: IAccumulatedCoordinates): string => {
  if (Object.keys(coordinates).length > 0) {
    const { north = '', south = '', east = '', west = '' } = coordinates;
    return `<p>West bounding longitude: <span id="west">${west}</span></p><p>East bounding longitude: <span id="east">${east}</span></p><p>North bounding latitude: <span id="north">${north}</span></p><p>South bounding latitude: <span id="south">${south}</span></p>`;
  }
  return '';
};

const getGeographicMarkers = (location: string | string[]): string => {
  let points: string[] = [];
  const markers: string[] = [];
  if (Array.isArray(location)) {
    points = location;
  } else {
    points = [location];
  }
  points.forEach((point: string) => {
    if (point) {
      const pointParts = point.split(',');
      markers.push(`${pointParts[1]},${pointParts[0]}`);
    }
  });
  return markers.join('_');
};

const getGeographicLocations = (geographicBoundary) => {
  if (geographicBoundary && Object.keys(geographicBoundary).length && !validateObjNullValues(geographicBoundary)) {
    const coordinates = {
      north: geographicBoundary.bboxNorthLat,
      south: geographicBoundary.bboxSouthLat,
      east: geographicBoundary.bboxEastLong,
      west: geographicBoundary.bboxWestLong,
    };
    const { north, south, east, west } = coordinates;
    const latitude = south - 5.0 + (north + 5.0 - (south - 5.0)) / 2;
    const longitude = west - 5.0 + (east + 5.0 - (west - 5.0)) / 2;
    return { coordinates, center: `${longitude},${latitude}` };
  }
  return {};
};

const getGeographyTabData = (payload: IGeographyItem): IGeography => {
  const coordinatesData = getGeographicLocations(payload?.boundingBox);

  return {
    spatialDataService: payload?.spatial?.dataService ?? '',
    spatialRepresentationService: payload?.spatial?.representationService ?? '',
    spatialReferencingSystem: payload?.spatial?.referencingSystem ?? '',
    geographicLocations: '',
    geographicBoundary: coordinatesData?.coordinates ?? '',
    geographicBoundaryHtml: getGeographicBoundaryHtml(coordinatesData?.coordinates ?? ({} as IAccumulatedCoordinates)),
    geographicCenter: coordinatesData?.center ?? '0,0',
    geographicMarkers: getGeographicMarkers(payload.geographicLocations ?? ''), // Need to test it as its values is coming as null from AGM side
    verticalExtent: '', // Keeping its value empty as there no data is availble from AGM side
    samplingResolution: '', // Keeping its value empty as there no data is availble from AGM side
  };
};

export {
  getVerticalExtentHtml,
  getGeographicMarkers,
  getSamplingResolution,
  getGeographicBoundaryHtml,
  getGeographyTabData,
};
