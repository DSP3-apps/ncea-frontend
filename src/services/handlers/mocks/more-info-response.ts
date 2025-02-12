export const MORE_INFO_RESPOSE = {
  took: 1,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 1, relation: 'eq' },
    max_score: 1,
    hits: [
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de',
        _score: 1,
        _source: {
          docType: 'metadata',
          document: '',
          metadataIdentifier: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de',
          indexingDate: '2024-09-27T15:37:10Z',
          dateStamp: '2018-11-27T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['nonGeographicDataset'],
          OrgObject: { default: 'Digital and Data Solutions, JNCC', langeng: 'Digital and Data Solutions, JNCC' },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contact: [
            {
              organisationName: '\n        Digital and Data Solutions, JNCC\n      ',
              role: 'pointOfContact',
              email: 'data@jncc.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          cl_hierarchyLevel: [
            {
              key: 'nonGeographicDataset',
              default: 'Non geographic dataset',
              langeng: 'Non geographic dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'nonGeographicDataset',
            },
          ],
          cl_accessConstraints: [
            {
              key: 'otherRestrictions',
              default: 'Other restrictions',
              langeng: 'Other restrictions',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_RestrictionCode',
              text: 'otherRestrictions',
            },
          ],
          cl_level: [
            {
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
            },
          ],
          resourceTitleObject: {
            default: 'Open Data Pathway - Maturity Model Results 2018',
            langeng: 'Open Data Pathway - Maturity Model Results 2018',
          },
          publicationDateForResource: ['2018-11-26T00:00:00.000Z', '2018-11-26T00:00:00.000Z'],
          publicationYearForResource: ['2018', '2018'],
          publicationMonthForResource: ['2018-11', '2018-11'],
          resourceDate: [{ type: 'publication', date: '2018-11-26T00:00:00.000Z' }],
          resourceTemporalDateRange: [
            { gte: '2018-11-26T00:00:00.000Z', lte: '2018-11-26T00:00:00.000Z' },
            { gte: '2015-07-02T00:00:00.000Z', lte: '2018-11-26T00:00:00.000Z' },
          ],
          resourceIdentifier: [{ code: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de', codeSpace: '', link: '' }],
          resourceAbstractObject: {
            default:
              "This dataset is an Excel workbook containing results from JNCC's completion of the Open Data Institute's Open Data Pathway assessment of open data maturity in May 2018, updated in November 2018. The data includes the questions posed by the model, the answers provided, the resulting scores per section as well as summary scores and the suggested improvements provided by the model.\n\nFor background on the model see ODI's Open Data Pathway site: http://pathway.theodi.org/.",
            langeng:
              "This dataset is an Excel workbook containing results from JNCC's completion of the Open Data Institute's Open Data Pathway assessment of open data maturity in May 2018, updated in November 2018. The data includes the questions posed by the model, the answers provided, the resulting scores per section as well as summary scores and the suggested improvements provided by the model.\n\nFor background on the model see ODI's Open Data Pathway site: http://pathway.theodi.org/.",
          },
          OrgForResourceObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          distributorOrgForResourceObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contactForResource: [
            {
              organisationName: '\n            Digital and Data Solutions, JNCC\n          ',
              role: 'distributor',
              email: 'data@jncc.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            { default: 'Terrestrial', langeng: 'Terrestrial' },
            { default: 'Transparency', langeng: 'Transparency' },
            { default: 'Data Management', langeng: 'Data Management' },
            { default: 'Maturity Model', langeng: 'Maturity Model' },
            { default: 'Open data', langeng: 'Open data' },
          ],
          tagNumber: '5',
          isOpenData: 'true',
          'th_otherKeywords-Number': '5',
          'th_otherKeywords-': [
            { default: 'Terrestrial', langeng: 'Terrestrial' },
            { default: 'Transparency', langeng: 'Transparency' },
            { default: 'Data Management', langeng: 'Data Management' },
            { default: 'Maturity Model', langeng: 'Maturity Model' },
            { default: 'Open data', langeng: 'Open data' },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                { default: 'Terrestrial', langeng: 'Terrestrial' },
                { default: 'Transparency', langeng: 'Transparency' },
                { default: 'Data Management', langeng: 'Data Management' },
                { default: 'Maturity Model', langeng: 'Maturity Model' },
                { default: 'Open data', langeng: 'Open data' },
              ],
            },
          },
          cl_topic: [{ key: 'environment', default: 'Environment', langeng: 'Environment' }],
          MD_LegalConstraintsOtherConstraintsObject: [{ default: 'None', langeng: 'None' }],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default:
                'Open Government Licence v3.0. Attribution statement: "Contains JNCC data © copyright and database right 2018".',
              langeng:
                'Open Government Licence v3.0. Attribution statement: "Contains JNCC data © copyright and database right 2018".',
            },
          ],
          licenseObject: [{ default: 'None', langeng: 'None' }],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-8.65, 49.77],
                [2, 49.77],
                [2, 61],
                [-8.65, 61],
                [-8.65, 49.77],
              ],
            ],
          },
          location: '55.385000000000005,-3.325',
          resourceTemporalExtentDateRange: [{ gte: '2015-07-02T00:00:00.000Z', lte: '2018-11-26T00:00:00.000Z' }],
          resourceTemporalExtentDetails: [{ start: { date: '2015-07-02' }, end: { date: '2018-11-26' } }],
          lineageObject: {
            default:
              "Produced as a measure of organisational progress for JNCC's Open Data Project, following the Open Data Institute's Open Data maturity model http://pathway.theodi.org/.",
            langeng:
              "Produced as a measure of organisational progress for JNCC's Open Data Project, following the Open Data Institute's Open Data maturity model http://pathway.theodi.org/.",
          },
          format: ['Comma Separated Values'],
          linkUrl:
            'http://data.jncc.gov.uk/data/2cb959e1-4a0f-4604-bf5f-37eb93ded6de-JNCC-DATA-MATURITY-MODEL-20181126-public.xlsx',
          linkUrlProtocol:
            'http://data.jncc.gov.uk/data/2cb959e1-4a0f-4604-bf5f-37eb93ded6de-JNCC-DATA-MATURITY-MODEL-20181126-public.xlsx',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default:
                  'http://data.jncc.gov.uk/data/2cb959e1-4a0f-4604-bf5f-37eb93ded6de-JNCC-DATA-MATURITY-MODEL-20181126-public.xlsx',
              },
              nameObject: {
                default: 'JNCC-DATA-MATURITY-MODEL-20181126-public.xlsx',
                langeng: 'JNCC-DATA-MATURITY-MODEL-20181126-public.xlsx',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de',
          mainLanguageFullName: '',
          OrgResourceTitleObject: {
            default: 'Open Data Pathway - Maturity Model Results 2018',
            langeng: 'Open Data Pathway - Maturity Model Results 2018',
          },
          OrgResourceIdentifier: { code: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de', codeSpace: '', link: '' },
          OrgResourceConstraints: { OrgOtherConstraints: ['None'], OrgAccessConstraints: ['otherRestrictions'] },
          OrgDistributionFormats: { name: 'Comma Separated Values', version: '' },
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Jncc_2cb959e1-4a0f-4604-bf5f-37eb93ded6de',
              sourceSystemReferenceID: 'Jncc_2cb959e1-4a0f-4604-bf5f-37eb93ded6de',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Terrestrial and freshwater habitats',
                  code: 'lv2-001',
                  classifiers: [
                    { name: 'Coniferous woodland', code: 'lv3-002' },
                    { name: 'Broadleaved, mixed and yew woodland', code: 'lv3-001' },
                  ],
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de',
          harvesterUuid: '93f27e43-0f8f-48c0-8f0e-24275513a838',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-09-27T09:06:10.679Z',
          id: '127136',
          createDate: '2024-09-27T09:06:10.679Z',
          isPublishedToIntranet: 'false',
          owner: '1',
          groupOwner: '2',
          hasxlinks: 'false',
          op0: '1',
          featureOfRecord: 'record',
          op1: '1',
          isPublishedToGuest: 'false',
          extra: 'null',
          documentStandard: 'iso19139',
          op5: '1',
          valid: '-1',
          isTemplate: 'n',
          feedbackCount: '0',
          rating: '0',
          isHarvested: 'true',
          userSavedCount: '0',
          sourceCatalogue: '93f27e43-0f8f-48c0-8f0e-24275513a838',
        },
      },
    ],
  },
};

export const MORE_INFO_NEW_DATA = {
  id: 'CEFAS128c23ed-c973-42b4-a784-8078ccae6563',
  title: '2007-2008 North Sea Nutrient Analysis',
  alternativeTitle: 'Pore-water nurtrients',
  abstract:
    ' This data gives the concentration of nutrients in sea water samples from the water column and from sediments (pore-water)...', // cut short on purpose for easier viewing
  temporalExtent: {
    beginPosition: '20070101T000000Z',
    endPosition: '20081231T000000Z',
  },
  resource: {
    locators: [
      'Cefas Data Portal (https://data.cefas.co.uk/view/911): The Cefas Data Portal contains metadata records...',
    ], // cut short on purpose for easier viewing
    name: null, // OPTIONAL
    languages: ['ENG'],
    type: 'Dataset',
    distrubutionFormats: ['Unknown'],
  },
  geographicBoundary: [2, 5, 55.75, 53], // OPTIONAL (west, east, north, south)
  geographicLocations: [],
  topicCategories: ['Oceans'],
  keywords: ['Biochemistry', 'Fluxes', 'Nutrients'],
  projectNumber: null, // OPTIONAL
  identifiers: {
    file: 'CEFAS128c23ed-c973-42b4-a784-8078ccae6563', // OPTIONAL
    resource: 'https://data.cefas.co.ukCEFAS911', // OPTIONAL
    parent: null, // OPTIONAL
    catalogue: {
      entry: 'Medin_CEFAS128c23ed-c973-42b4-a784-8078ccae6563', // OPTIONAL
      number: 'Medin_CEFAS128c23ed-c973-42b4-a784-8078ccae6563', // OPTIONAL
    },
  },
  coupledResources: null, // OPTIONAL
  metadata: {
    standard: 'MEDIN', // OPTIONAL
    language: 'ENG', // OPTIONAL
  },
  contacts: [
    {
      name: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
      email: 'data.manager@cefas.co.uk',
      phone: null, // OPTIONAL
      address: [],
      url: null, // OPTIONAL
      delivery: 'Cefas Lowestoft Laboratory, Pakefield Road, Lowestoft, Suffolk, NR33 0HT, UK', // OPTIONAL
      country: 'UK', // OPTIONAL
      city: 'Lowestoft', // OPTIONAL
      postCode: 'NR33 0HT', // OPTIONAL
      aministrativeArea: 'Suffolk', // OPTIONAL
      role: 'pointOfContact',
    },
  ],
  capitalClassifications: [
    {
      theme: 'Natural asset',
      category: 'Terrestrial and freshwater habitats',
      subCategory: null, // TODO
    },
    {
      theme: 'Natural capital valuation',
      category: 'Monetary',
      subCategory: null, // TODO
    },
  ],
  recordDates: {
    metadata: '20230131T000000Z', // OPTIONAL (ISO-8601)
    publification: '20131121T000000Z', // OPTIONAL (ISO-8601)
    revision: '20230131T000000Z', // OPTIONAL (ISO-8601)
    creation: '20130306T000000Z', // OPTIONAL (ISO-8601)
  },
  lineage: 'Samples from the water column were collected by Niskin bottles deployed...', // OPTIONAL (cut short on purpose)
  additionalInformation: null, // OPTIONAL
  conformity: [
    {
      specification: 'INSPIRE Data Specification on Oceanographic geographical features – Technical Guidelines',
      degree: false,
      explanation: 'See the referenced specification',
    },
    {
      specification:
        'Commission Regulation (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services',
      degree: true,
      explanation: 'See the referenced specification',
    },
  ],
  spatial: {
    dataService: null, // OPTIONAL
    representationService: 'Vector', // OPTIONAL
    referencingSystem: 'WGS 84', // OPTIONAL
    resolution: null, // OPTIONAL
  },
  verticalExtent: null, // OPTIONAL
  license: {
    publicAccessAccessContraints: 'otherRestrictions', // OPTIONAL
    publicAccessOtherConstraints: 'noLimitations', // OPTIONAL
    publicUseUseConstraints: 'otherRestrictions', // OPTIONAL
    publicUseOtherContraints: 'Public data - no limitations to reuse', // OPTIONAL
    frequencyOfUpdate: ' Not planned', // OPTIONAL
  },
};
