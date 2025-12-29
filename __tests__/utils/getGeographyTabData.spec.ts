import { IAccumulatedCoordinates } from '../../src/interfaces/searchResponse.interface';
import {
  getGeographicBoundaryHtml,
  getGeographicMarkers,
  getGeographyTabData,
} from '../../src/utils/getGeographyTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('Geography tab data', () => {
  describe('getGeographicBoundaryHtml function', () => {
    it('should return correct HTML when coordinates are provided', () => {
      const coordinates: IAccumulatedCoordinates = {
        north: 51.245488,
        south: 47.912775,
        east: -6.127928,
        west: -15.320435,
      };
      const result = getGeographicBoundaryHtml(coordinates);
      const { north = '', south = '', east = '', west = '' } = coordinates;
      expect(result).toEqual(
        `<p>West bounding longitude: <span id="west">${west}</span></p><p>East bounding longitude: <span id="east">${east}</span></p><p>North bounding latitude: <span id="north">${north}</span></p><p>South bounding latitude: <span id="south">${south}</span></p>`,
      );
    });

    it('should return an empty string when coordinates are not provided', () => {
      const result = getGeographicBoundaryHtml({} as IAccumulatedCoordinates);
      expect(result).toEqual('');
    });
  });

  describe('getGeographicMarkers function', () => {
    it('should return correct marker when location is a string', () => {
      const result = getGeographicMarkers('49.0466505,-11.14563');
      expect(result).toEqual('-11.14563,49.0466505');
    });

    it('should return correct marker when location is an array of strings', () => {
      const result = getGeographicMarkers(['49.0466505,-11.14563', '59.0466505,-21.14563']);
      expect(result).toEqual('-11.14563,49.0466505_-21.14563,59.0466505');
    });

    it('should return correct marker when location has empty string inside an array', () => {
      const result = getGeographicMarkers(['', '59.0466505,-21.14563']);
      expect(result).toEqual('-21.14563,59.0466505');
    });

    it('should return an empty string when location is empty', () => {
      const result = getGeographicMarkers('');
      expect(result).toEqual('');
    });
  });

  describe('getGeographyTabData function', () => {
    it('should return correct data when all properties are present', () => {
      const result = getGeographyTabData(MORE_INFO_MOCK_DATA);

      expect(result).toEqual({
        spatialDataService: '',
        spatialRepresentationService: 'vector',
        spatialReferencingSystem: 'http://www.opengis.net/def/crs/EPSG/0/27700',
        geographicLocations: '',
        geographicBoundary: {
          north: 58.7,
          south: -50,
          east: 1.7,
          west: -6.2,
        },
        geographicBoundaryHtml: `<p>West bounding longitude: <span id=\"west\">-6.2</span></p><p>East bounding longitude: <span id=\"east\">1.7</span></p><p>North bounding latitude: <span id=\"north\">58.7</span></p><p>South bounding latitude: <span id=\"south\">-50</span></p>`,
        geographicCenter: '-2.25,4.350000000000001',
        geographicMarkers: '',
        verticalExtent: '',
        samplingResolution: '',
      });
    });
  });
});
