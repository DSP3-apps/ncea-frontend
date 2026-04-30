import { getLicenseTabData, formmatLicenseData, concateValues } from '../../src/utils/getLicenseTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('getLicenseTabData', () => {
  it('should return correct license tab data', () => {
    const expectedData = {
      limitation_on_public_access: '',
      limitation_on_public_access_otherconstraint: 'otherRestrictions<br>license<br>copyright',
      conditions_for_access_and_use_useConstraints: '',
      conditions_for_access_and_useOtherConstraints: '',
      other_constraint: '',
      attribution_statement: "",
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

describe('concateValues', () => {
  it('should concatenate both values with <br> when both are provided', () => {
    expect(concateValues('Open Government Licence', '© Environment Agency 2015')).toBe(
      'Open Government Licence<br>© Environment Agency 2015',
    );
  });

  it('should return text only when attributionStatement is empty', () => {
    expect(concateValues('Open Government Licence', '')).toBe('Open Government Licence');
  });

  it('should return attributionStatement only when text is empty', () => {
    expect(concateValues('', '© Environment Agency 2015')).toBe('© Environment Agency 2015');
  });

  it('should return empty string when both values are empty', () => {
    expect(concateValues('', '')).toBe('');
  });
});