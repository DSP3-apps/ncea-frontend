import { getLicenseTabData, formmatLicenseData } from '../../src/utils/getLicenseTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('getLicenseTabData', () => {
  it('should return correct license tab data', () => {
    const expectedData = {
      limitation_on_public_access: 'otherRestrictions<br>license<br>copyright',
      limitation_on_public_access_otherconstraint: 'Open Government Licence<br>©Crown Copyright, APHA 2016',
      conditions_for_access_and_use_useConstraints: '',
      conditions_for_access_and_useOtherConstraints: '',
      other_constraint: '',
    };
    expect(getLicenseTabData(MORE_INFO_MOCK_DATA.license)).toEqual(expectedData);
  });

  it('should call formmatLicenseData and validate the expected output with empty araay', () => {
    expect(formmatLicenseData([])).toEqual('');
  });

  it('should call formmatLicenseData and validate the expected output', () => {
    expect(formmatLicenseData(['otherRestrictions', 'license', 'copyright'])).toEqual(
      'otherRestrictions<br>license<br>copyright',
    );
  });
});
