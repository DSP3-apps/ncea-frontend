import { getLicenseTabData, formmatLicenseData, ConcateValues } from '../../src/utils/getLicenseTabData';
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

describe('ConcateValues', () => {
  it('should concatenate both values with <br> when both are provided', () => {
    expect(ConcateValues('Open Government Licence', '© Environment Agency 2015')).toBe(
      'Open Government Licence<br>© Environment Agency 2015',
    );
  });

  it('should return text only when attributionStatement is empty', () => {
    expect(ConcateValues('Open Government Licence', '')).toBe('Open Government Licence');
  });

  it('should return attributionStatement only when text is empty', () => {
    expect(ConcateValues('', '© Environment Agency 2015')).toBe('© Environment Agency 2015');
  });

  it('should return empty string when both values are empty', () => {
    expect(ConcateValues('', '')).toBe('');
  });
});
