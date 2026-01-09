import {
  getAccessTabData,
  generateResourceWebsiteTable,
  createDownloadsTableRow,
  extractFileFormat,
  validateServiceTypes,
  validateParentChildRecords,
} from '../../src/utils/getAccessTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';
import { DATA_DOWNLOADS_TYPES, DATA_SERVICES_TYPES } from '../../src/utils/constants';
import { environmentConfig } from '../../src/config/environmentConfig';

jest.mock('../../src/config/environmentConfig', () => ({
  environmentConfig: {
    surveyIndexPreviewRecordId: '123',
  },
}));

describe('getAccessTabData functions', () => {
  describe('getAccessTabData result', () => {
    it('should return an object with all properties when searchItem is valid', () => {
      const result = getAccessTabData(MORE_INFO_MOCK_DATA);
      expect(result).toEqual({
        host_catalogue_entry: '',
        resource_type_and_hierarchy: '',
        ncea_catalogue_number: 'c9d7e118-d057-48f9-b520-76de8e51e014',
        contact_information: 'Peter.Walker@naturalengland.org.uk',
        catalogue_number: '',
        metadata_language: 'ENG',
        resourceWebsite: expect.any(String),
        host_catalogue_number: 'c9d7e118-d057-48f9-b520-76de8e51e014',
        child_records: [],
        parent_records: [],
      });
    });
  });

  describe('generateResourceWebsiteTable', () => {
    it('should return empty string if there are not resources exist', () => {
      expect(generateResourceWebsiteTable([], '')).toStrictEqual('');
    });

    it('should return the a properly formatted HTML table by providing the expected resources', () => {
      const output = generateResourceWebsiteTable(
        MORE_INFO_MOCK_DATA.resources,
        'c9d7e118-d057-48f9-b520-76de8e51e014',
      );
      expect(output).toContain('<td>Download data by area of interest and format</td>');
      expect(output).toContain('<td>Living England Segmentation (2019) WFS</td>');
      expect(output).toContain('<td>Living England Segmentation (2019) REST Map Service</td>');
      expect(output).toContain('<td>Living England Segmentation (2019) WMS</td>');
      expect(output).toContain('<td>Natural England Open Data Geoportal dataset page</td>');
    });

    it('should return preview in action column if the url contains wms', () => {
      const output = generateResourceWebsiteTable(
        MORE_INFO_MOCK_DATA.resources,
        'c9d7e118-d057-48f9-b520-76de8e51e014',
      );
      expect(output).toContain(
        '<a class="govuk-link" href="/explore/c9d7e118-d057-48f9-b520-76de8e51e014" rel="noopener noreferrer" target="_blank">Preview<span class="govuk-visually-hidden">(opens in a new tab)</span></a>',
      );
    });

    it('should return N/A in action column if the url contains wfs', () => {
      const output = generateResourceWebsiteTable(
        MORE_INFO_MOCK_DATA.resources,
        'c9d7e118-d057-48f9-b520-76de8e51e014',
      );
      expect(output).toContain('<td>N/A</td>');
    });

    it('should return preview with specific href if the url contains spatialdata/survey-index-files/wms', () => {
      const output = generateResourceWebsiteTable(
        MORE_INFO_MOCK_DATA.resources,
        'c9d7e118-d057-48f9-b520-76de8e51e014',
      );
      expect(output).toContain(
        `<a class="govuk-link" href="/explore/${environmentConfig.surveyIndexPreviewRecordId}" rel="noopener noreferrer" target="_blank">Preview<span class="govuk-visually-hidden">(opens in a new tab)</span></a>`,
      );
    });
  });

  describe('createDownloadsTableRow', () => {
    it('should return the a properly formatted HTML Download table', () => {
      const output = createDownloadsTableRow(
        {
          url: 'http://data.defra.gov.uk/Agriculture/Notifiable_Disease_Datasets_Additional_Information.odt',
          name: 'Notifiable Disease Datasets: Additional Information',
          type: 'HTTP file download',
          distributionFormat: null,
        },
        'c9d7e118-d057-48f9-b520-76de8e51e014',
      );
      expect(output).toContain('<td>Notifiable Disease Datasets: Additional Information</td>');
      expect(output).toContain('<td>ODT</td>');
    });
  });

  describe('extractFileFormat', () => {
    it('should validate the url and return the expected output', () => {
      expect(extractFileFormat('')).toStrictEqual('N/A');
      expect(extractFileFormat(null)).toStrictEqual('N/A');
    });
    it('should check and extract the file', () => {
      expect(
        extractFileFormat(
          'http://data.defra.gov.uk/Agriculture/Notifiable_Disease_Datasets_Additional_Information.odt',
        ),
      ).toStrictEqual('ODT');
    });
  });

  describe('validateServiceTypes', () => {
    it('should validate validate the service types by converting into the lowercase', () => {
      expect(validateServiceTypes(DATA_SERVICES_TYPES, 'HTTP web resource')).toStrictEqual(true);
      expect(validateServiceTypes(DATA_DOWNLOADS_TYPES, 'HTTP FILE DOWNLOAD')).toStrictEqual(true);
      expect(validateServiceTypes(DATA_DOWNLOADS_TYPES, 'ABC')).toStrictEqual(false);
      expect(validateServiceTypes(DATA_DOWNLOADS_TYPES, '')).toStrictEqual(false);
    });
  });

  describe('validateParentChildRecords', () => {
    it('should return the same array when valid array is provided', () => {
      const validRecords = [
        { id: '123', title: 'Parent 1', grandParent: [] },
        { id: '456', title: 'Parent 2', grandParent: [] },
      ];
      expect(validateParentChildRecords(validRecords)).toEqual(validRecords);
    });

    it('should return empty array when undefined is provided', () => {
      expect(validateParentChildRecords(undefined)).toEqual([]);
    });

    it('should return empty array when null is provided', () => {
      expect(validateParentChildRecords(null as any)).toEqual([]);
    });

    it('should return empty array when non-array value is provided', () => {
      expect(validateParentChildRecords({} as any)).toEqual([]);
      expect(validateParentChildRecords('string' as any)).toEqual([]);
      expect(validateParentChildRecords(123 as any)).toEqual([]);
    });

    it('should return empty array when provided', () => {
      expect(validateParentChildRecords([])).toEqual([]);
    });
  });
});
