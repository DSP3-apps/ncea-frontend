import { getNaturalTab } from '../../src/utils/getNaturalCapitalTab';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('getNaturalTab', () => {
  it('should return the correct structure when searchItem contains OrgNceaClassifiers', () => {
    const result = getNaturalTab(MORE_INFO_MOCK_DATA);

    expect(result).toEqual({
      Natural_capital_title: MORE_INFO_MOCK_DATA.title,
      Natural_capital_description: MORE_INFO_MOCK_DATA.abstract,
      Natural_capital_displayData: '',
      Natural_capital_no_data: '',
      Natural_capital_glossary_link: '',
    });
  });
});
