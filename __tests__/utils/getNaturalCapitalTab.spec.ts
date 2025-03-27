import { getNaturalTab, generateClassifierTable } from '../../src/utils/getNaturalCapitalTab';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';
import { naturalTabStaticData } from '../../src/utils/constants';

describe('getNaturalTab', () => {
  it('should return the correct structure when searchItem contains OrgNceaClassifiers', () => {
    const result = getNaturalTab(MORE_INFO_MOCK_DATA);

    expect(result.Natural_capital_title).toStrictEqual(naturalTabStaticData.title);
    expect(result.Natural_capital_description).toStrictEqual(naturalTabStaticData.description);
    expect(result.Natural_capital_displayData).toContain('<table class="details-table-full">');
  });
});

describe('generateClassifierTable', () => {
  it('should return a properly formatted HTML table when given data with themes, categories, and subcategories', () => {
    const data = [
      {
        name: 'Theme 1',
        naturalCapitalCategory: [
          {
            name: 'Category 1',
            naturalCapitalSubCategory: [{ name: 'Subcategory 1' }, { name: 'Subcategory 2' }],
          },
          {
            name: 'Category 2',
            naturalCapitalSubCategory: [],
          },
        ],
      },
    ];

    const result = generateClassifierTable(data);

    expect(result).toContain('<table class="details-table-full">');
    expect(result).toContain('<td>Theme 1</td>');
    expect(result).toContain('<td>Category 1</td>');
    expect(result).toContain('<td>Subcategory 1</td>');
    expect(result).toContain('<td>Subcategory 2</td>');
  });

  it('should return an empty string when data is empty', () => {
    const result = generateClassifierTable([]);

    expect(result).toBe('');
  });

  it('should handle theme only if no category and sub category provided', () => {
    const data = [
      {
        name: 'Theme 1',
        naturalCapitalCategory: [],
      },
    ];

    const result = generateClassifierTable(data);

    expect(result).toContain('<td>Theme 1</td>');
    expect(result).not.toContain('<th width="35%">Category</th>');
    expect(result).not.toContain('<th width="35%">Subcategory</th>');
  });

  it('should handle theme and category only if no sub category provided', () => {
    const data = [
      {
        name: 'Theme 1',
        naturalCapitalCategory: [
          {
            id: 'lv2-001',
            name: 'Terrestrial and freshwater habitats',
          },
        ],
      },
    ];

    const result = generateClassifierTable(data);

    expect(result).toContain('<td>Theme 1</td>');
    expect(result).toContain('<td>Terrestrial and freshwater habitats</td>');
    expect(result).not.toContain('<th width="35%">Subcategory</th>');
  });
});
