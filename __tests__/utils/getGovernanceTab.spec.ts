import { getGovernanceTabData } from '../../src/utils/getGovernanceTab';
import { IGovernance } from '../../src/interfaces/searchResponse.interface';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

jest.mock('../../src/utils/getAccessTabData', () => ({
  combineAndSortContacts: jest.fn(),
}));

describe('getGovernanceTabData', () => {
  it('should map the contacts to IGovernance format', () => {
    const result = getGovernanceTabData(MORE_INFO_MOCK_DATA.contacts);
    const expected: IGovernance[] = [
      {
        tab: 'governance',
        role: 'pointOfContact',
        organization_name: '',
        individual_name: 'Jonathan Smith',
        position_name: '',
        telephone_number: '',
        delivery_point: '',
        postal_code: '',
        city: '',
        administrative_area: '',
        country: '',
        web_address: '',
        email: 'jonathan.smith@apha.gov.uk',
      },
      {
        tab: 'governance',
        role: 'custodian',
        organization_name: '',
        individual_name: 'Neil Sampson',
        position_name: '',
        telephone_number: '',
        delivery_point: '',
        postal_code: '',
        city: '',
        administrative_area: '',
        country: '',
        web_address: '',
        email: 'neil.sampson@apha.gov.uk',
      },
      {
        tab: 'governance',
        role: 'publisher',
        organization_name: '',
        individual_name: 'APHA OpenData Team',
        position_name: '',
        telephone_number: '',
        delivery_point: '',
        postal_code: '',
        city: '',
        administrative_area: '',
        country: '',
        web_address: '',
        email: 'aphaopendata@apha.gov.uk',
      },
    ];

    expect(result).toEqual(expected);
  });
});
