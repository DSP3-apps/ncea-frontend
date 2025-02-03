import { estypes } from '@elastic/elasticsearch';

import {
  FILTER_VALUES,
  levelMap,
  mapResultMaxCount,
  resourceTypeFilterField,
  studyPeriodFilterField,
} from './constants';
import { generateDateString } from './generateDateString';
import { ISearchFilterProcessed, ISearchFiltersProcessed } from './searchFilters';
import {
  IDateValues,
  IGeoCoordinates,
  IGeoShapeBlock,
  ISearchBuilderPayload,
  ISearchPayload,
  ISearchRequest,
  IShapeCoordinates,
  ITemporalExtent,
} from '../interfaces/queryBuilder.interface';

const _generateQueryStringBlock = (
  searchTerm: string,
  fieldsToSearch: string[] = [],
): estypes.QueryDslQueryContainer => {
  return {
    query_string: {
      query: searchTerm,
      default_operator: 'AND',
      ...(fieldsToSearch.length > 0 && { fields: fieldsToSearch }),
    },
  };
};

const _generateTermsBlock = (field: string, values: string[]): estypes.QueryDslQueryContainer => {
  return {
    terms: {
      [field]: values,
    },
  };
};

const _generateFieldExistsBlock = (field: string): estypes.QueryDslQueryContainer => {
  return {
    exists: { field },
  };
};

const _generateRangeBlock = (fields: IDateValues): estypes.QueryDslQueryContainer[] => {
  const startDateValue: string = generateDateString({
    year: parseInt(fields.fdy!),
    month: parseInt(fields.fdm ?? ''),
    day: parseInt(fields.fdd ?? ''),
  });
  const toDateValue: string = generateDateString(
    {
      year: parseInt(fields.tdy!),
      month: parseInt(fields.tdm ?? ''),
      day: parseInt(fields.tdd ?? ''),
    },
    true,
  );

  const rangeBlock: estypes.QueryDslQueryContainer[] = [
    {
      bool: {
        should: [
          {
            bool: {
              must: [
                { range: { 'resourceTemporalExtentDetails.start.date': { lte: startDateValue } } },
                { range: { 'resourceTemporalExtentDetails.end.date': { gte: startDateValue } } },
              ],
            },
          },
          {
            bool: {
              must: [
                { range: { 'resourceTemporalExtentDetails.start.date': { gte: startDateValue } } },
                { range: { 'resourceTemporalExtentDetails.end.date': { lte: toDateValue } } },
              ],
            },
          },
          {
            bool: {
              must: [
                { range: { 'resourceTemporalExtentDetails.start.date': { gte: startDateValue } } },
                { range: { 'resourceTemporalExtentDetails.start.date': { lte: toDateValue } } },
              ],
            },
          },
        ],
        minimum_should_match: 1,
      },
    },
  ];
  return rangeBlock;
};

const _generateGeoShapeBlock = (geoCoordinates: IGeoCoordinates): estypes.QueryDslQueryContainer => {
  const geoShape: IShapeCoordinates = {
    type: 'envelope',
    coordinates: [
      [parseFloat(geoCoordinates.wst!), parseFloat(geoCoordinates.nth!)],
      [parseFloat(geoCoordinates.est!), parseFloat(geoCoordinates.sth!)],
    ],
  };

  const geoShapeBlock: IGeoShapeBlock = {
    geo_shape: {
      geom: {
        shape: geoShape,
        relation: 'intersects',
      },
    },
  };
  return geoShapeBlock as estypes.QueryDslQueryContainer;
};

const buildCustomSortScriptForStudyPeriod = (orderType): estypes.Sort => {
  const customScript: estypes.ScriptSort = {
    type: 'number',
    script: {
      source:
        orderType === 'asc'
          ? "def millis = Long.MAX_VALUE; if (params._source.containsKey('resourceTemporalExtentDateRange')) { for (date in params._source.resourceTemporalExtentDateRange) { if (date.containsKey('gte')) { def dateFormat = new java.text.SimpleDateFormat('yyyy-MM-dd\\'T\\'HH:mm:ss.SSS\\'Z\\''); def parsedDate = dateFormat.parse(date['gte']); millis = parsedDate.getTime(); break; }} } return millis;"
          : "def millis = Long.MIN_VALUE; if (params._source.containsKey('resourceTemporalExtentDateRange')) { for (date in params._source.resourceTemporalExtentDateRange) { if (date.containsKey('lte')) { def dateFormat = new java.text.SimpleDateFormat('yyyy-MM-dd\\'T\\'HH:mm:ss.SSS\\'Z\\''); def parsedDate = dateFormat.parse(date['lte']); millis = parsedDate.getTime(); break; } if (date.containsKey('gte')) { def dateFormat = new java.text.SimpleDateFormat('yyyy-MM-dd\\'T\\'HH:mm:ss.SSS\\'Z\\''); def parsedDate = dateFormat.parse(date['gte']); millis = parsedDate.getTime(); break; } } } return millis;",
    },
    order: orderType,
  };
  const sortBlock: estypes.SortOptions = {
    _script: customScript,
  };
  return sortBlock;
};

const _buildBestScoreSort = (): estypes.Sort => ({
  _score: {
    order: 'desc',
  },
});

const _generateSortBlock = (sort: string): estypes.Sort => {
  const orderType = sort === 'oldest_study_period' ? 'asc' : 'desc';
  const sortBlock: estypes.Sort =
    sort === 'oldest_study_period' || sort === 'newest_study_period'
      ? buildCustomSortScriptForStudyPeriod(orderType)
      : _buildBestScoreSort();
  return sortBlock;
};

const _generateOtherQueryProperties = (searchBuilderPayload: ISearchBuilderPayload): estypes.SearchRequest => {
  const { searchFieldsObject, isCount = false, isAggregation = false, docId = '' } = searchBuilderPayload;
  const { sort, rowsPerPage, page, requiredFields = [] } = (searchFieldsObject as ISearchPayload) ?? {};

  const isSort: boolean = sort !== '' && !isCount && docId === '' && !isAggregation;
  const sortBlock: estypes.Sort = isSort ? _generateSortBlock(sort) : '';

  return {
    ...(isSort && { sort: sortBlock }),
    ...(!isCount && docId === '' && { size: isAggregation ? 0 : rowsPerPage }),
    ...(!isCount &&
      !isAggregation &&
      docId === '' &&
      page &&
      rowsPerPage !== mapResultMaxCount && {
        from: page === 1 ? 0 : (page - 1) * rowsPerPage,
      }),
    ...(!isCount && docId === '' && !isAggregation && { _source: requiredFields }),
  } as estypes.SearchRequest;
};

const _generateQuery = (searchBuilderPayload: ISearchBuilderPayload): estypes.SearchRequest => {
  const { searchFieldsObject, fieldsToSearch = [], docId = '' } = searchBuilderPayload;
  const { fields, fieldsExist = [] } = (searchFieldsObject as ISearchPayload) ?? {};

  const searchTerm: string = fields?.keyword?.q as string;

  const mustBlock: estypes.QueryDslQueryContainer[] = docId ? [_generateQueryStringBlock(docId, ['_id'])] : [];
  if (searchTerm && docId === '') mustBlock.push(_generateQueryStringBlock(searchTerm, fieldsToSearch));
  if (fieldsExist.length > 0 && docId === '') {
    fieldsExist.forEach((field: string) => {
      mustBlock.push(_generateFieldExistsBlock(field));
    });
  }

  const geoCoordinates: IGeoCoordinates = fields?.extent as IGeoCoordinates;
  const { nth = '', sth = '', est = '', wst = '' } = geoCoordinates ?? {};
  const filterBlock: estypes.QueryDslQueryContainer[] =
    nth && sth && est && wst ? [_generateGeoShapeBlock(geoCoordinates)] : [];

  return {
    query: {
      bool: {
        ...(mustBlock.length && { must: mustBlock }),
        ...(filterBlock.length && { filter: filterBlock }),
      },
    },
    ..._generateOtherQueryProperties(searchBuilderPayload),
  };
};

const _generateDateRangeQuery = (
  searchBuilderPayload: ISearchBuilderPayload,
  queryPayload: estypes.SearchRequest,
): estypes.QueryDslQueryContainer[] => {
  const { searchFieldsObject } = searchBuilderPayload;
  const { filters, fields } = (searchFieldsObject as ISearchPayload) ?? {};
  const { level, parent } = (searchFieldsObject?.fields.classify as ISearchPayload) ?? {};
  const parentArray = typeof parent === 'string' ? (parent as string).split(',').map((item) => item.trim()) : [];
  const filterBlock: estypes.QueryDslQueryContainer[] =
    (queryPayload.query?.bool?.filter as estypes.QueryDslQueryContainer[]) ?? [];
  const studyPeriodFilter: IDateValues = (filters?.[studyPeriodFilterField] as IDateValues) ?? { fdy: '', tdy: '' };
  if (studyPeriodFilter?.fdy && studyPeriodFilter?.tdy) {
    const newFields: IDateValues = {
      fdy: studyPeriodFilter?.fdy,
      tdy: studyPeriodFilter?.tdy,
    };
    filterBlock.push(..._generateRangeBlock(newFields));
  } else if (fields?.date?.fdy && fields?.date?.tdy) {
    filterBlock.push(..._generateRangeBlock(fields.date));
  }
  if (fields?.classify?.level && fields.classify.parent) {
    filterBlock.push(_generateTermsBlock(level && levelMap[level], parentArray));
  }
  return filterBlock;
};

const generateSearchQuery = (searchFieldsObject: ISearchPayload, filters: ISearchFiltersProcessed): ISearchRequest => {
  // console.log('GENERATE SEARCH QUERY PARAMS: ', JSON.stringify(searchFieldsObject));
  // console.log('GENERATE SEARCH QUERY PARAMS: ', JSON.stringify(filters));
  console.log('generateSearchQuery 1');
  // Get Organisation filter values.
  const organisations = getFiltersForCategory(filters.categories, FILTER_VALUES.organisation); // FIXME: make 'org' etc a constant and update `searchFilters.ts` to use them also, look at bottom of page.

  // Get Title filter.
  const titleFilters = filters.categories.find((category) => category.value === FILTER_VALUES.searchType);
  const title = titleFilters?.filters.find((filter) => filter.checked)?.value;

  // Get Data Type filter values e.g. spatial/non-spatial.
  const dataTypes = getFiltersForCategory(filters.categories, FILTER_VALUES.dataType);

  // Get Service Type filter values
  // const serviceTypes = getFiltersForCategory(filters.categories, FILTER_VALUES.serviceType);

  // Get Data Format filter values
  const dataFormats = getFiltersForCategory(filters.categories, 'fmt');
  console.log('generateSearchQuery 2');

  // Get date filter values
  const mapping = {
    beforeYear: 'BeginPosition',
    afterYear: 'EndPosition',
  };
  const dateFilters: ITemporalExtent = Object.entries(filters.lastUpdated).reduce((acc, [key, value]) => {
    const newKey = mapping[key] ?? key;

    acc[newKey] = value;

    return acc;
  }, {} as ITemporalExtent);
  console.log('generateSearchQuery 3');

  // Get licence filter value
  // const licence = filters.licence;

  // Get keyword filter values
  const keywords = filters.keywords;

  // Get Retired and Archived filter value
  const retiredAndArchived = filters.retiredAndArchived;

  console.log('generateSearchQuery 4');
  const request: ISearchRequest = {
    Query: {
      SearchTerms: [searchFieldsObject?.fields?.keyword?.q ?? ''],
    },
    Filters: {
      Organisations: organisations ?? [],
      SearchTitleOnly: !!title,
      DataTypes: dataTypes ?? [],
      // ServiceTypes: null, // FIXME: Missing from the API request
      Formats: dataFormats ?? [],
      TemporalExtent: dateFilters,
      // Licence: null, // FIXME: Missing from the API request
      Keywords: keywords ?? [],
      retiredAndArchived,
      // !: None of the below are used in the UI.
      FileIdentifier: null,
      Title: null,
      AlternativeTitle: null,
      Abstract: null,
      ResourceType: null,
      TopicCategory: null,
      Lineage: null,
      AdditionalInformationSource: null,
    },
    resultsPerPage: searchFieldsObject.rowsPerPage,
    skip: ((searchFieldsObject?.page ?? 1) - 1) * searchFieldsObject.rowsPerPage,
  };
  console.log('generateSearchQuery 5');

  return request;
};

const getFiltersForCategory = (categories: ISearchFilterProcessed[], type: string) => {
  const categoryFilters = categories.find((category) => category.value === type);
  const filters = categoryFilters?.filters.reduce<string[]>((acc, category) => {
    if (category.checked) {
      acc.push(category.value);
    }

    return acc;
  }, []);

  return filters;
};

const _generateStudyPeriodFilterQuery = (searchBuilderPayload: ISearchBuilderPayload): estypes.SearchRequest => {
  const queryPayload: estypes.SearchRequest = _generateQuery(searchBuilderPayload);
  const { searchFieldsObject, docId = '' } = searchBuilderPayload;
  const { fields, filters } = searchFieldsObject as ISearchPayload;
  const { level, parent } = (searchFieldsObject?.fields.classify as ISearchPayload) ?? {};

  const parentArray = typeof parent === 'string' ? (parent as string).split(',').map((item) => item.trim()) : [];
  if (docId === '') {
    const mustBlock: estypes.QueryDslQueryContainer[] =
      (queryPayload.query?.bool?.must as estypes.QueryDslQueryContainer[]) ?? [];
    const filterBlock: estypes.QueryDslQueryContainer[] =
      (queryPayload.query?.bool?.filter as estypes.QueryDslQueryContainer[]) ?? [];
    const resourceTypeFilters: string[] = (filters?.[resourceTypeFilterField] as string[]) ?? [];
    if (fields?.date?.fdy && fields?.date?.tdy) {
      filterBlock.push(..._generateRangeBlock(fields.date));
    }
    if (resourceTypeFilters.length > 0) {
      mustBlock.push(_generateTermsBlock('resourceType', filters[resourceTypeFilterField] as string[]));
    }
    if (level && levelMap[level]) {
      filterBlock.push(_generateTermsBlock(levelMap[level], parentArray));
    }
    if (queryPayload?.query?.bool) {
      queryPayload.query.bool = {
        ...queryPayload.query.bool,
        filter: [...filterBlock],
        must: [...mustBlock],
      };
    }
  }
  queryPayload.aggs = {
    min_year: {
      min: {
        field: 'resourceTemporalExtentDetails.start.date',
      },
    },
    max_year: {
      max: {
        field: 'resourceTemporalExtentDetails.end.date',
      },
    },
  };
  return queryPayload;
};

const _generateResourceTypeFilterQuery = (searchBuilderPayload: ISearchBuilderPayload): estypes.SearchRequest => {
  const queryPayload: estypes.SearchRequest = _generateQuery(searchBuilderPayload);
  const { docId = '' } = searchBuilderPayload;
  if (docId === '') {
    const filterBlock: estypes.QueryDslQueryContainer[] = _generateDateRangeQuery(searchBuilderPayload, queryPayload);
    if (queryPayload?.query?.bool) {
      queryPayload.query.bool = {
        ...queryPayload.query.bool,
        filter: [...filterBlock],
      };
    }
  }
  queryPayload.aggs = {
    unique_resource_types: {
      terms: {
        field: 'resourceType',
      },
    },
  };
  return queryPayload;
};

const generateFilterQuery = (
  searchBuilderPayload: ISearchBuilderPayload,
  { isStudyPeriod = false },
): estypes.SearchRequest => {
  return isStudyPeriod
    ? _generateStudyPeriodFilterQuery(searchBuilderPayload)
    : _generateResourceTypeFilterQuery(searchBuilderPayload);
};

export { generateSearchQuery, generateFilterQuery, buildCustomSortScriptForStudyPeriod };
