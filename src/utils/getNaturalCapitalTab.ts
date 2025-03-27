'use strict';

import {
  INatural,
  NaturalCapitalCategory,
  NaturalCapitalSubCategory,
  NaturalCapitalTableItems,
} from '../interfaces/searchResponse.interface';
import { naturalTabStaticData, nceaClassifiersMockTableData } from '../utils/constants';

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

const getNaturalTab = (payload): INatural => ({
  Natural_capital_title: naturalTabStaticData.title,
  Natural_capital_description: naturalTabStaticData.description,
  Natural_capital_displayData: generateClassifierTable(
    payload?.nceaClassifiers?.naturalCapitalThemes ??
      nceaClassifiersMockTableData?.nceaClassifiers?.naturalCapitalThemes,
  ),
});

export { getNaturalTab };
