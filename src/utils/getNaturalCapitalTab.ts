'use strict';

import {
  Category,
  INatural,
  NaturalCapitalCategory,
  NaturalCapitalSubCategory,
  NaturalCapitalTableItems,
  NaturalCapitalTheme,
  OutputCategory,
  OutputSubCategory,
  OutputTheme,
  SubCategory,
} from '../interfaces/searchResponse.interface';
import { naturalTabStaticData } from '../utils/constants';

export const generateClassifierTable = (data: NaturalCapitalTableItems[]): string => {
  if (!Array.isArray(data) || data.length === 0) {
    return '';
  }

  const { hasCategory, hasSubcategory } = analyzeClassifiers(data);

  const tableHTML = `
    <table class="details-table-full">
      ${generateTableHeader(hasCategory, hasSubcategory)}
      <tbody>
        ${generateTableRows(data, hasCategory, hasSubcategory)}
      </tbody>
    </table>
  `;

  return tableHTML;
};

const analyzeClassifiers = (data: NaturalCapitalTableItems[]) => {
  let hasCategory = false;
  let hasSubcategory = false;

  data.forEach((item: NaturalCapitalTableItems) => {
    if (Array.isArray(item.naturalCapitalCategory) && item.naturalCapitalCategory.length > 0) {
      hasCategory = true;
      item.naturalCapitalCategory.forEach((category: NaturalCapitalCategory) => {
        if (Array.isArray(category.naturalCapitalSubCategory) && category.naturalCapitalSubCategory.length > 0) {
          hasSubcategory = true;
        }
      });
    }
  });

  return { hasCategory, hasSubcategory };
};

const generateTableHeader = (hasCategory: boolean, hasSubcategory: boolean): string => {
  const categoryWidth = hasSubcategory ? '35%' : '70%';
  const subcategoryWidth = '35%';
  const themeWidth = hasCategory || hasSubcategory ? '30%' : '100%';

  return `
    <thead>
      <tr>
        <th width="${themeWidth}">Theme</th>
        ${hasCategory ? `<th width="${categoryWidth}">Category</th>` : ''}
        ${hasSubcategory ? `<th width="${subcategoryWidth}">Subcategory</th>` : ''}
      </tr>
      <tr><td colspan="${1 + (hasCategory ? 1 : 0) + (hasSubcategory ? 1 : 0)}" class="details-table-hr"></td></tr>
    </thead>
  `;
};

const generateTableRows = (data: NaturalCapitalTableItems[], hasCategory: boolean, hasSubcategory: boolean): string => {
  return data.map((item) => generateTableRow(item, hasCategory, hasSubcategory)).join('');
};

const generateTableRow = (item: NaturalCapitalTableItems, hasCategory: boolean, hasSubcategory: boolean): string => {
  const themeName = item?.name ?? '';
  let rows = '';

  if (Array.isArray(item.naturalCapitalCategory) && item.naturalCapitalCategory.length > 0) {
    item.naturalCapitalCategory.forEach((category: NaturalCapitalCategory, index: number) => {
      const categoryName = category?.name ?? '';
      if (Array.isArray(category.naturalCapitalSubCategory) && category.naturalCapitalSubCategory.length > 0) {
        category.naturalCapitalSubCategory.forEach((subcategory: NaturalCapitalSubCategory, subIndex: number) => {
          const subcategoryName = subcategory?.name ?? '';
          rows += createRow(themeName, categoryName, subcategoryName, index, subIndex, hasCategory, hasSubcategory);
        });
      } else {
        rows += createRow(themeName, categoryName, '', index, 0, hasCategory, hasSubcategory);
      }
    });
  } else {
    rows += createRow(themeName, '', '', 0, 0, hasCategory, hasSubcategory);
  }

  const colspan = 1 + (hasCategory ? 1 : 0) + (hasSubcategory ? 1 : 0);
  rows += `<tr><td colspan="${colspan}" class="details-table-hr"></td></tr>`;

  return rows;
};

const createRow = (
  themeName: string,
  categoryName: string,
  subcategoryName: string,
  index: number,
  subIndex: number,
  hasCategory: boolean,
  hasSubcategory: boolean,
): string => {
  const themeCell = index === 0 && subIndex === 0 ? `<td>${themeName}</td>` : '<td></td>';

  let categoryCell = '';
  if (hasCategory && subIndex === 0) {
    categoryCell = `<td>${categoryName}</td>`;
  } else if (hasCategory) {
    categoryCell = '<td></td>';
  }

  const subcategoryCell = hasSubcategory ? `<td>${subcategoryName}</td>` : '';

  return `
    <tr>
      ${themeCell}
      ${categoryCell}
      ${subcategoryCell}
    </tr>
  `;
};

const findTheme = (code: string, vocabularyData: NaturalCapitalTheme[]): NaturalCapitalTheme | undefined => {
  return vocabularyData.find((theme) => theme.code === code);
};

const findCategory = (theme: NaturalCapitalTheme, code: string): Category | undefined => {
  return theme.classifiers?.find((category) => category.code === code);
};

const findSubCategory = (category: Category, code: string): SubCategory | undefined => {
  return category.classifiers?.find((subCategory) => subCategory.code === code);
};

export const transformNceaClassifierObj = (nceaClassfiersObj, vocabularyData) => {
  if (nceaClassfiersObj?.naturalCapitalTheme?.length > 0) {
    const themes: OutputTheme[] = nceaClassfiersObj.naturalCapitalTheme
      .map((themeCode: string) => {
        const theme = findTheme(themeCode, vocabularyData);
        if (!theme) return;

        const categories: OutputCategory[] = nceaClassfiersObj.naturalCapitalCategory
          .map((categoryCode: string) => {
            const category = findCategory(theme, categoryCode);
            if (!category) return;

            const subCategories: OutputSubCategory[] = nceaClassfiersObj.naturalCapitalSubCategory
              .map((subCode: string) => {
                const subCategory = findSubCategory(category, subCode);
                return subCategory ? { id: subCategory.code, name: subCategory.name } : undefined;
              })
              .filter((subCategory: string) => subCategory);

            if (subCategories.length > 0) {
              return {
                id: category.code,
                name: category.name,
                naturalCapitalSubCategory: subCategories,
              };
            }
          })
          .filter((category: string) => category);

        if (categories.length > 0) {
          return {
            id: theme.code,
            name: theme.name,
            naturalCapitalCategory: categories,
          };
        }
      })
      .filter((theme: string) => theme);

    return {
      naturalCapitalThemes: themes,
    };
  }
  return {
    naturalCapitalThemes: [],
  };
};

const getNaturalTab = (payload, vocabularyData: NaturalCapitalTheme[]): INatural => ({
  Natural_capital_title: naturalTabStaticData.title,
  Natural_capital_description: naturalTabStaticData.description,
  Natural_capital_displayData: generateClassifierTable(
    transformNceaClassifierObj(payload?.nceaClassfiers, vocabularyData).naturalCapitalThemes,
  ),
});
export { getNaturalTab };
