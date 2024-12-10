import { RequestQuery } from '@hapi/hapi';

import { queryParamKeys, startYearRangeKey, toYearRangeKey, uniqueResourceTypesKey } from './constants';
import { readQueryParams } from './queryStringHelper';
import { ISearchFilterProcessed, ISearchFiltersProcessed, searchFilters } from './searchFilters';
import { IAggregationOption, IAggregationOptions } from '../interfaces/searchResponse.interface';

const processDSPFilterOptions = (requestQuery: RequestQuery): ISearchFiltersProcessed => {
  const categories: ISearchFiltersProcessed['categories'] = [];

  const nceaOnly = readQueryParams(requestQuery, 'scope') === 'ncea';

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
    keywords: readQueryParams(requestQuery, 'keywords'),
    license: readQueryParams(requestQuery, 'licence'),
    lastUpdated: {
      before: {
        day: readQueryParams(requestQuery, 'before-day'),
        month: readQueryParams(requestQuery, 'before-month'),
        year: readQueryParams(requestQuery, 'before-year'),
      },
      after: {
        day: readQueryParams(requestQuery, 'after-day'),
        month: readQueryParams(requestQuery, 'after-month'),
        year: readQueryParams(requestQuery, 'after-year'),
      },
    },
    retiredAndArchived: readQueryParams(requestQuery, 'retired-archived') === 'true',
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
