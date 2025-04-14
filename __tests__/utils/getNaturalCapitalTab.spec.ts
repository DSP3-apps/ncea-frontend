import {
  getNaturalTab,
  generateClassifierTable,
  transformNceaClassifierObj,
} from '../../src/utils/getNaturalCapitalTab';
import { MORE_INFO_MOCK_DATA, MOCK_VOCABULARY_DATA } from '../../src/services/handlers/mocks/more-info-response';
import { naturalTabStaticData } from '../../src/utils/constants';

describe('getNaturalTab', () => {
  it('should return the correct structure when searchItem contains OrgNceaClassifiers', () => {
    const result = getNaturalTab(MORE_INFO_MOCK_DATA, MOCK_VOCABULARY_DATA);

    expect(result.Natural_capital_title).toStrictEqual(naturalTabStaticData.title);
    expect(result.Natural_capital_description).toStrictEqual(naturalTabStaticData.description);
    expect(result.Natural_capital_displayData).toContain('');
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

  it('should validate the transformNceaClassifierObj and reture the expected output', () => {
    const input = {
      naturalCapitalTheme: ['lvl1_001', 'lvl1_002'],
      naturalCapitalCategory: ['lvl2_001', 'lvl2_006', 'lvl2_007'],
      naturalCapitalSubCategory: ['lvl3_001', 'lvl3_003', 'lvl3_050', 'lvl3_051', 'lvl3_054', 'lvl3_055'],
    };

    const output = {
      naturalCapitalThemes: [
        {
          id: 'lvl1_001',
          name: 'Natural asset',
          naturalCapitalCategory: [
            {
              id: 'lvl2_001',
              name: 'Terrestrial and freshwater habitats',
              naturalCapitalSubCategory: [
                {
                  id: 'lvl3_001',
                  name: 'Broadleaved, mixed and yew woodland',
                },
                {
                  id: 'lvl3_003',
                  name: 'Boundary and linear features',
                },
              ],
            },
          ],
        },
        {
          id: 'lvl1_002',
          name: 'Ecosystem service or benefit',
          naturalCapitalCategory: [
            {
              id: 'lvl2_006',
              name: 'Provisioning services',
              naturalCapitalSubCategory: [
                {
                  id: 'lvl3_050',
                  name: 'Materials',
                },
                {
                  id: 'lvl3_051',
                  name: 'Water',
                },
              ],
            },
            {
              id: 'lvl2_007',
              name: 'Regulating services',
              naturalCapitalSubCategory: [
                {
                  id: 'lvl3_054',
                  name: 'Maintaining wild populations',
                },
                {
                  id: 'lvl3_055',
                  name: 'Hazard and nuisance reduction',
                },
              ],
            },
          ],
        },
      ],
    };
    expect(transformNceaClassifierObj(input, MOCK_VOCABULARY_DATA)).toEqual(output);
  });
});
