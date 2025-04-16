import {
  getAccessTabData,
  generateResourceWebsiteTable,
  createDownloadsTableRow,
  extractFileFormat,
} from '../../src/utils/getAccessTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('getAccessTabData functions', () => {
  describe('getAccessTabData result', () => {
    it('should return an object with all properties when searchItem is valid', () => {
      const result = getAccessTabData(MORE_INFO_MOCK_DATA);
      expect(result).toEqual({
        host_catalogue_number: '17f1f7c2-0c92-4ec1-86ea-b4d67dbeb2cf',
        host_catalogue_entry: '',
        resource_type_and_hierarchy: '',
        resource_locators: '',
        ncea_catalogue_number: 'c9d7e118-d057-48f9-b520-76de8e51e014',
        contact_information:
          ' :- jonathan.smith@apha.gov.uk, <br /> :- neil.sampson@apha.gov.uk, <br /> :- aphaopendata@apha.gov.uk',
        catalogue_number: '',
        metadata_language: 'ENG',
        metadata_standard: 'Environment Agency Metadata Profile',
        resourceWebsite: expect.any(String),
      });
    });
  });

  describe('generateResourceWebsiteTable', () => {
    it('should return empty string if there are not resources exist', () => {
      expect(generateResourceWebsiteTable([])).toStrictEqual('');
    });

    it('should return the a properly formatted HTML table by providing the expected resources', () => {
      const output = generateResourceWebsiteTable(MORE_INFO_MOCK_DATA.resources);
      console.log('output', output);
      expect(output).toContain('<td>Living England Segmentation (2019) Download</td>');
      expect(output).toContain('<td>Living England Segmentation (2019) WFS</td>');
      expect(output).toContain('<td>Living England Segmentation (2019) REST Map Service</td>');
      expect(output).toContain('<td>Living England Segmentation (2019) WMS</td>');
      expect(output).toContain('<td>Natural England Open Data Geoportal dataset page</td>');
    });
  });

  describe('createDownloadsTableRow', () => {
    it('should return the a properly formatted HTML Download table', () => {
      const output = createDownloadsTableRow({
        url: 'http://data.defra.gov.uk/Agriculture/Notifiable_Disease_Datasets_Additional_Information.odt',
        name: 'Notifiable Disease Datasets: Additional Information',
        type: 'HTTP file download',
        distributionFormat: null,
      });
      console.log('output', output);
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
});
