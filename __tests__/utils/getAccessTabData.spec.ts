import { getAccessTabData } from '../../src/utils/getAccessTabData';
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
      });
    });
  });
});
