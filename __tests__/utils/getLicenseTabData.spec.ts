import { getLicenseTabData, formmatLicenseData, concateValues } from '../../src/utils/getLicenseTabData';
import { processDetailsTabData } from '../../src/utils/processDetailsTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('getLicenseTabData', () => {
  it('should display licence values under their corresponding labels', () => {
    const licence = getLicenseTabData({
      useLimitationStatement: 'Access restriction',
      publicAccessOtherConstraints: ['Other access restriction'],
      useConstraints: 'Use restriction',
      text: 'Licence text',
      attributionStatement: 'Copyright',
    });

    expect(processDetailsTabData({ ...licence }).license).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: 'Limitations on public access -<br /> Access constraints',
          displayValue: 'Access restriction',
        }),
        expect.objectContaining({
          label: 'Limitations on public access -<br /> Other constraints',
          displayValue: 'Other access restriction',
        }),
        expect.objectContaining({
          label: 'Conditions for access and use -<br /> Use constraints',
          displayValue: 'Use restriction',
        }),
        expect.objectContaining({
          label: 'Conditions for access and use -<br /> Other constraints',
          displayValue: 'Licence text<br>Copyright',
        }),
      ]),
    );
  });

  it('should return correct license tab data', () => {
    const expectedData = {
      limitation_on_public_access: '',
      limitation_on_public_access_otherconstraint: 'otherRestrictions<br>license<br>copyright',
      conditions_for_access_and_use_useConstraints: '',
      conditions_for_access_and_useOtherConstraints: '',
      other_constraint: '',
      attribution_statement: '',
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