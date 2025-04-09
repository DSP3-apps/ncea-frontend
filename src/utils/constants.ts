import { ISearchFiltersProcessed } from './searchFilters';
import { TabOptions } from '../interfaces/detailsTab.interface';
import { IFilterOptions } from '../interfaces/searchPayload.interface';

export const BASE_PATH = '/natural-capital-ecosystem-assessment';

export const webRoutePaths = {
  home: `/`,
  results: `/search`,
  guidedClassifierSearch: `/classifier-search`,
  guidedDateSearch: `/date-search`,
  geographySearch: `/coordinate-search`,
  intermediate: `/intermediate`,
  getMapResults: `/map-results`,
  getMapFilters: `/map-filters`,
  filterResourceType: `/resource-type-filter`,
  filterStudyPeriod: `/study-period-filter`,
  sortResults: `/sort-results`,
  help: `/help`,
  accessibilityStatement: `/accessibility-statement`,
  termsAndConditions: `/terms-conditions`,
  privacyPolicy: `/privacy-policy`,
  cookiePolicy: `/cookie-policy`,
  mdc: `/mdc/mdc.xsd`,
  mdcClassifiers: `/mdc/classifiers.xsd`,
  mdcIdentifiers: `/mdc/identifiers.xsd`,
  logout: `/logout`,
  login: `/login`,
  atom: '/newsfeed',
  about: '/about',
};

export const headerNavigationLinks = [
  {
    text: 'Home',
    href: `${BASE_PATH}`,
  },
  {
    text: 'About',
    href: `${BASE_PATH}${webRoutePaths.about}`,
  },
  {
    text: 'News Feed',
    href: `${BASE_PATH}${webRoutePaths.atom}`,
  },
];

export const elasticSearchAPIPaths = {
  searchPath: '_search',
  countPath: '_count',
};

export const formKeys = {
  dateQuestionnaire: 'date-questionnaire',
};

export const formIds = {
  classifierSearch: 'classifier-search',
  quickSearchFID: 'keyword',
  dataQuestionnaireFID: 'date',
  geographyQuestionnaireFID: 'extent',
};

export const showMoreText: string = 'Show more';
export const showLessText: string = 'Show less';
export const maxWords: number = 100;
export const geoNetworkIndex: string = 'gn-records';
export const mapResultMaxCount: number = 10000;
export const requiredFieldsForMap: string[] = [
  'resourceTitleObject',
  'contactForResource',
  'resourceAbstractObject',
  'geom',
  'resourceIdentifier',
  'resourceType',
  'resourceTemporalExtentDetails',
  'ownerOrgForResourceObject',
  'originatorOrgForResourceObject',
  'custodianOrgForResourceObject',
  'distributorOrgForResourceObject',
  'pointOfContactOrgObject',
  'linkUrl',
  'OrgNceaClassifiers',
];

export const quickSearchTargetFields: string[] = [
  'metadataIdentifier',
  'resourceTitleObject.default',
  'resourceAltTitleObject.default',
  'resourceAbstractObject.default',
  'lineageObject.default',
  'tag.default',
  'cl_topic.default',
  'resourceType',
  'supplementalInformationObject.default',
];

export const guidedSearchSteps = {
  classifierSearch: 'classifier-search',
  date: 'date',
  coordinate: 'extent',
};

export const queryParamKeys = {
  quickSearch: 'q',
  fromDateDay: 'fdd',
  fromDateMonth: 'fdm',
  fromDateYear: 'fdy',
  toDateDay: 'tdd',
  toDateMonth: 'tdm',
  toDateYear: 'tdy',
  coordinates: 'ext',
  north: 'nth',
  south: 'sth',
  east: 'est',
  west: 'wst',
  count: 'cnt',
  page: 'pg',
  rowsPerPage: 'rpp',
  sort: 'srt',
  journey: 'jry',
  resourceType: 'rty',
  startYear: 'sy',
  toYear: 'ty',
  level: 'level',
  parent: 'parent[]',
};

export const uniqueResourceTypesKey: string = 'unique_resource_types';
export const startYearRangeKey: string = 'start_year_range';
export const toYearRangeKey: string = 'to_year_range';
export const yearRange: string = 'year';

export const resourceTypeFilterField = 'resourceTypeFilter';
export const studyPeriodFilterField = 'studyPeriodFilter';

export const defaultFilterOptions: IFilterOptions = [
  {
    key: uniqueResourceTypesKey,
    needCount: true,
    propertyToRead: 'key',
    hasBucket: true,
    isTerm: true,
  },
  {
    key: yearRange,
    needCount: false,
    propertyToRead: 'value_as_string',
    hasBucket: false,
    isDate: true,
  },
];

export const detailsTabOptions: TabOptions = {
  general: {
    Abstract: 'content',
    nceaContribution: 'nceaContribution',
    'Study periods': 'studyPeriod',
    'Topic categories': 'topicCategories',
    Keywords: 'keywords',
    'Resource languages': 'language',
  },
  access: {
    'File Identifier': 'ncea_catalogue_number',
    'Resource Identifier': 'host_catalogue_number',
    'Coupled resources': 'host_catalogue_entry',
    'Resource type': 'resource_type_and_hierarchy',
    'Resource locators': 'resource_locators',
    'Contact information': 'contact_information',
    'Parent identifier': 'ncea_group_reference',
    'Metadata standard': 'metadata_standard',
    'Project number': 'project_number',
    'Metadata language': 'metadata_language',
    'Resource website': 'resourceWebsite',
  },
  quality: {
    'Date of publication': 'publicationInformation',
    'Date of creation': 'creationInformation',
    'Date of last revision': 'revisionInformation',
    'Metadata date': 'metadataDate',
    Lineage: 'lineage',
    Conformity: 'conformity',
    'Additional information': 'additionalInformation',
  },
  geography: {
    'Spatial data service': 'spatialDataService',
    'Spatial representation service': 'spatialRepresentationService',
    'Spatial referencing system': 'spatialReferencingSystem',
    'Geographic locations': 'geographicLocations',
    'Geographic boundary': 'geographicBoundaryHtml',
    map: 'geographicBoundary',
    'Vertical extent<br /><span>(Metres above sea level)</span>': 'verticalExtent',
    'Spatial resolution': 'samplingResolution',
  },
  license: {
    'Limitations on public access -<br /> Access constraints': 'limitation_on_public_access',
    'Limitations on public access -<br /> Other constraints': 'limitation_on_public_access_otherconstraint',
    'Conditions for access and use -<br /> Use constraints': 'conditions_for_access_and_use_useConstraints',
    'Conditions for access and use -<br /> Other constraints': 'conditions_for_access_and_useOtherConstraints',
    'Other Constraint': 'other_constraint',
    'Distribution formats': 'available_formats',
    'Frequency of update': 'frequency_of_update',
    'Character encoding': 'character_encoding',
  },
  natural: {
    Natural_capital_title: 'Natural_capital_title',
    Natural_capital_description: 'Natural_capital_description',
    Natural_capital_displayData: 'Natural_capital_displayData',
    // Natural_capital_glossary_link: 'Natural_capital_glossary_link',
    // Natural_capital_no_data: 'Natural_capital_no_data',
  },
  governance: {
    Role: 'role',
    'Organization name': 'organization_name',
    'Individual name': 'individual_name',
    // 'Position name': 'position_name',
    // 'Telephone number': 'telephone_number',
    // 'Delivery point': 'delivery_point',
    // 'Postal code': 'postal_code',
    // City: 'city',
    // 'Administrative area': 'administrative_area',
    // Country: 'country',
    // 'Web address': 'web_address',
    Email: 'email',
  },
};

export const pageTitles = {
  home: 'NCEA Search Service Home',
  date: 'NCEA Guided Search - Study Period',
  geography: 'NCEA Guided Search - Geographic Data',
  results: 'NCEA Search Results Summary',
  generalTab: 'General',
  accessTab: 'Access',
  naturalTab: 'Natural Capital',
  qualityTab: 'Quality',
  geographyTab: 'Geography',
  governanceTab: 'Governance',
  licenseTab: 'Licence',
  help: 'Help',
  accessibility: 'Accessibility statement',
  termsAndConditions: 'Terms and conditions',
  privacyPolicy: 'Privacy policy',
  cookiePolicy: 'Cookies',
  Classifier: [
    'NCEA questionnaire search - natural capital theme',
    'NCEA Guided Search- Categories',
    'NCEA questionnaire  Search- subcategories',
  ],
  feeds: 'Latest news - Natural Capital Ecosystem Assessment - NCEA – programme',
};

export const levelMap = {
  1: 'OrgNceaClassifiers.code.keyword',
  2: 'OrgNceaClassifiers.classifiers.code.keyword',
  3: 'OrgNceaClassifiers.classifiers.classifiers.code.keyword',
};

export const naturalTabStaticData = {
  title: 'Natural capital classification',
  description:
    'Natural capital records are classified by themes and categories which indicate whether the record relates to natural capital assets (such as habitats and species), the ecosystem services they deliver, the pressures that act on them and/or their value.',
  noRecord: 'This record is not classifiable within the current natural capital vocabulary.',
  link: 'Natural capital classification glossary',
};

export const defaultFilters: ISearchFiltersProcessed = {
  nceaOnly: false,
  hasDSPFiltersRemoved: false,
  keywords: [''],
  licence: '',
  categories: [],
  lastUpdated: {
    beforeYear: '',
    afterYear: '',
  },
  retiredAndArchived: false,
};

export const jwtCookiePrefix = 'auth0-jwt-';

export const atomFeeds = [
  {
    title: 'Defra',
    url: 'https://defraenvironment.blog.gov.uk/category/ncea-programme/feed/',
  },
  {
    title: 'Natural England',
    url: 'https://naturalengland.blog.gov.uk/category/natural-capital/feed/',
  },
];

export const FILTER_VALUES = {
  organisation: 'org',
  searchType: 'st',
  dataType: 'dt',
  serviceType: 'svt',
  dataFormat: 'fmt',
};

export const landingPageData = {
  pageHeading: 'Natural Capital and Ecosystem Assessment (NCEA) programme',
  introText: {
    imageUrl1: `${BASE_PATH}/assets/images/Blea-Tarn-Lake.jpg`,
    imageUrl2: `${BASE_PATH}/assets/images/Beautiful-View-Green-Hills.jpg`,
  },
  displayCategoryPages: false,
  categories: [
    {
      text: 'NRW’s 10 week public consultation on a new National Park',
      imgUrl: `${BASE_PATH}/assets/images/newsfp.jpg`,
      title: 'Photo of Lake Vyrnwy',
    },
    {
      text: 'Newborough National Nature Reserve and Forest, Anglesey',
      imgUrl: `${BASE_PATH}/assets/images/llanddwyn.jpg`,
      title: 'Family on Llanddwyn Island',
    },
    {
      text: 'Bwlch Nant yr Arian Visitor Centre, near Aberystwyth',
      imgUrl: `${BASE_PATH}/assets/images/bnya2.jpg`,
      title: 'View of the lake at Bwlch Nant yr Arian Forest',
    },
    {
      text: 'Coed y Brenin Visitor Centre, near Dolgellau',
      imgUrl: `${BASE_PATH}/assets/images/dronecoe.jpg`,
      title: 'Coed y Brenin Visitor Centre',
    },
  ],
  partnerLogos: [
    {
      imgUrl: `${BASE_PATH}/assets/images/environment-agency-logo.png`,
      link: 'https://www.gov.uk/government/organisations/environment-agency',
      title: 'Environment Agency',
    },
    {
      imgUrl: `${BASE_PATH}/assets/images/Forestry-logo-2024.svg`,
      link: 'https://www.forestresearch.gov.uk/',
      title: 'Forest Research',
    },
    {
      imgUrl: `${BASE_PATH}/assets/images/jncc-logo.png`,
      link: 'https://jncc.gov.uk/',
      title: 'Joint Nature Conservation Committee',
    },
    {
      imgUrl: `${BASE_PATH}/assets/images/botanic-garden.svg`,
      link: 'https://www.kew.org/kew-gardens?gad_source=1&gclid=EAIaIQobChMI6t6wgu-7iwMVo5RQBh0sdjtGEAAYAiAAEgK1gvD_BwE',
      title: 'Royal Botanic Garden',
    },
    {
      imgUrl: `${BASE_PATH}/assets/images/natural-england.png`,
      link: 'https://www.gov.uk/government/organisations/natural-england',
      title: 'Natural England',
    },
  ],
  quickLinks: [
    {
      iconUrl: `${BASE_PATH}/assets/images/favicon.svg`,
      iconName: 'NCEA GOV.UK',
      link: 'https://www.gov.uk/government/publications/natural-capital-and-ecosystem-assessment-programme/natural-capital-and-ecosystem-assessment-programme',
    },
    {
      iconUrl: `${BASE_PATH}/assets/images/youtube-icon.svg`,
      iconName: 'YouTube',
      link: 'https://www.youtube.com/@NCEAprogramme/videos',
    },
    {
      iconUrl: `${BASE_PATH}/assets/images/email-icon.svg`,
      iconName: 'Join our mailing list',
      link: '#',
    },
  ],
};

export const accessibilityStatementUrl = 'https://environment.data.gov.uk/support/faqs/275810340/275810354';
export const cookiePolicyUrl = 'https://environment.data.gov.uk/help/cookies';
export const termsAndConditionsUrl = 'https://environment.data.gov.uk/support/faqs/275811163/275811177';
export const privacyPolicyUrl = 'https://environment.data.gov.uk/support/faqs/275811163/275811229';
export const supportUrl = 'https://environment.data.gov.uk/support';
export const nceaClassifiersMockTableData = {
  isDatasetRelevantToANaturalCapitalApproach: true,
  nceaContribution: 'Supported',
  nceaClassifiers: {
    naturalCapitalThemes: [
      {
        id: 'lv-1',
        name: 'Natural asset',
        naturalCapitalCategory: [
          {
            id: 'lv2-001',
            name: 'Terrestrial and freshwater habitats',
            naturalCapitalSubCategory: [
              {
                id: 'lv3-003',
                name: 'Boundary and linear features',
              },
            ],
          },
        ],
      },
    ],
  },
};
