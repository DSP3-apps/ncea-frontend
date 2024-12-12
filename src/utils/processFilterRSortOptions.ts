import { RequestQuery } from '@hapi/hapi';

import { queryParamKeys, startYearRangeKey, toYearRangeKey, uniqueResourceTypesKey } from './constants';
import { readQueryParams } from './queryStringHelper';
import {
  DataScopeValues,
  ISearchFilterProcessed,
  ISearchFiltersProcessed,
  filterNames,
  searchFilters,
} from './searchFilters';
import { IAggregationOption, IAggregationOptions } from '../interfaces/searchResponse.interface';

const processDSPFilterOptions = (requestQuery: RequestQuery): ISearchFiltersProcessed => {
  const categories: ISearchFiltersProcessed['categories'] = [];

  const nceaOnly = readQueryParams(requestQuery, filterNames.scope) === DataScopeValues.NCEA;

  for (const category of searchFilters) {
    const catQueryValue = readQueryParams(requestQuery, category.value).split(',');

    const newCategory: ISearchFilterProcessed = {
      name: category.name,
      value: category.value,
      selectedAll: catQueryValue.includes('all'),
      filters: [],
    };

    for (const filter of category.filters) {
      if (nceaOnly && filter.hasNCEAData != null && !filter.hasNCEAData) continue;

      const checked =
        catQueryValue.includes(filter.value) && (!nceaOnly || filter.hasNCEAData == null || filter.hasNCEAData);

      newCategory.filters.push({
        ...filter,
        checked,
      });
    }

    categories.push(newCategory);
  }

  return {
    nceaOnly,
    categories: categories,
    keywords: readQueryParams(requestQuery, filterNames.keywords),
    license: readQueryParams(requestQuery, filterNames.licence),
    lastUpdated: {
      before: {
        day: readQueryParams(requestQuery, filterNames.updatedBefore.day),
        month: readQueryParams(requestQuery, filterNames.updatedBefore.month),
        year: readQueryParams(requestQuery, filterNames.updatedBefore.year),
      },
      after: {
        day: readQueryParams(requestQuery, filterNames.updatedAfter.day),
        month: readQueryParams(requestQuery, filterNames.updatedAfter.month),
        year: readQueryParams(requestQuery, filterNames.updatedAfter.year),
      },
    },
    retiredAndArchived: readQueryParams(requestQuery, filterNames.retiredAndArchived) === 'true',
  };
};

const processFilterOptions = async (
  filterOptions: IAggregationOptions,
  requestQuery: RequestQuery,
): Promise<IAggregationOptions> => {
  const { startYear, toYear, resourceType } = queryParamKeys;
  const startYearValue = readQueryParams(requestQuery, startYear);
  const toYearValue = readQueryParams(requestQuery, toYear);
  const resourceTypeValue = readQueryParams(requestQuery, resourceType).split(',');

  const startYearOptions: IAggregationOption[] = filterOptions[startYearRangeKey] ?? [];
  const toYearOptions: IAggregationOption[] = filterOptions[toYearRangeKey] ?? [];

  const resourceTypeOptions: IAggregationOption[] = filterOptions[uniqueResourceTypesKey] ?? [];

  startYearOptions.forEach((option: IAggregationOption) => {
    if (option.value === startYearValue) option.selected = true;
  });
  if (!startYearValue) {
    const startYearOptionsFirstItem: IAggregationOption = startYearOptions?.[0] ?? ({} as IAggregationOption);
    startYearOptionsFirstItem.selected = true;
  }

  toYearOptions.forEach((option: IAggregationOption) => {
    if (option.value === toYearValue) option.selected = true;
  });
  if (!toYearValue) {
    const toYearOptionsLastItem: IAggregationOption =
      toYearOptions[toYearOptions.length - 1] ?? ({} as IAggregationOption);
    toYearOptionsLastItem.selected = true;
  }

  resourceTypeOptions.forEach((option: IAggregationOption) => {
    if (resourceTypeValue.includes(option.value)) option.checked = true;
  });

  return {
    [uniqueResourceTypesKey]: [...resourceTypeOptions],
    [startYearRangeKey]: [...startYearOptions],
    [toYearRangeKey]: [...toYearOptions],
  };
};

const processSortOptions = async (requestQuery: RequestQuery): Promise<IAggregationOptions> => {
  const { sort, rowsPerPage } = queryParamKeys;
  const sortValue = readQueryParams(requestQuery, sort);
  const rowsPerPageValue = readQueryParams(requestQuery, rowsPerPage);
  const sortValueOptions: IAggregationOption[] = [
    {
      value: 'most_relevant',
      text: 'Most relevant',
      selected: true,
    },
    {
      value: 'oldest_study_period',
      text: 'Oldest study period',
      selected: false,
    },
    {
      value: 'newest_study_period',
      text: 'Newest study period',
      selected: false,
    },
  ];
  const rowsPerPageOptions: IAggregationOption[] = [
    {
      value: '20',
      text: '20',
      selected: true,
    },
    {
      value: '50',
      text: '50',
      selected: false,
    },
    {
      value: '100',
      text: '100',
      selected: false,
    },
  ];
  sortValueOptions.forEach((option: IAggregationOption) => {
    option.selected = false;
    if (option.value === sortValue) option.selected = true;
  });
  rowsPerPageOptions.forEach((option: IAggregationOption) => {
    option.selected = false;
    if (option.value === rowsPerPageValue) option.selected = true;
  });
  return {
    sortOptions: [...sortValueOptions],
    rowsPerPageOptions: [...rowsPerPageOptions],
  };
};

export { processFilterOptions, processSortOptions, processDSPFilterOptions };
