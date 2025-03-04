import { getAccessTabData } from '../../src/utils/getAccessTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('getAccessTabData functions', () => {
  describe('getAccessTabData result', () => {
    it('should return an object with all properties when searchItem is valid', () => {
      const result = getAccessTabData(MORE_INFO_MOCK_DATA);
      expect(result).toEqual({
        ncea_catalogue_entry: '',
        host_catalogue_number: '',
        host_catalogue_entry: '',
        resource_type_and_hierarchy: '',
        resource_locators: '',
        contact_information:
          ' :- jonathan.smith@apha.gov.uk, <br /> :- neil.sampson@apha.gov.uk, <br /> :- aphaopendata@apha.gov.uk',
        catalogue_number: '',
        metadata_language: 'ENG',
      });
    });
  });
});
