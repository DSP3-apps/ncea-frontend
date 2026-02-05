export const MORE_INFO_MOCK_DATA = {
  id: 'c9d7e118-d057-48f9-b520-76de8e51e014',
  title: 'Exotic Notifible Disease Report Case Reason for Submission Vocabulary',
  contactEmail: 'Peter.Walker@naturalengland.org.uk',
  alternativeTitles: [],
  abstract:
    "This dataset provides a codelist for the reason why a sample resulting in Non Negative Lab Result was submitted  that resulted an Exotic Notifiable Disease investigations carried out by the Animal and Plant Health Agency. Investigations that follow the report of an exotic notifiable disease are called 'report cases'. Notifiable diseases in this context are animal diseases that an animal owner/keeper is under legal obligation to report to the Animal and Plant Health Agency (APHA), even if there is only a suspicion that an animal may be affected. 'Exotic diseases' are defined as diseases that are not currently present within the United Kingdom. Reason for Submission is the reason why a sample resulting in Non Negative Lab Result was submitted this could be a result of: \nActive Surveillance These are investigations where a surveillance program is in place that actively samples certain premises in order to provide assurance of national disease freedom.  \nTesting to Exclude: Testing for exclusion is specifically intended for use in cases where NAD or West Nile Fever is not formally suspected, but cannot be excluded from the differential diagnosis of a health or production problem. This service may help to detect disease at the earliest opportunity in those cases where the clinical signs do not give rise to a level of suspicion of a NAD or West Nile Fever that justifies either a consultation case or a statutory notification and official inquiry in the first instance. For more information on testing for exclusion scheme for NAD please see http://ahvla.defra.gov.uk/documents/nad/vr-534.3.full_.pdf  \nPre Export: Samples submitted as part of import controls\nPost Import: Samples submitted as part of import controls\nPrivate Samples: Samples collected for private diagnostic work\nPre Breeding: Samples submitted before an animal breeds\nNot Disclosed: Samples which are submitted for undeclared reason.",
  temporalExtent: {
    beginPosition: '2008-01-01',
    endPosition: '2015-12-31',
  },
  geospatialExtent: {
    eastBoundLongitude: 1.7,
    westBoundLongitude: -6.2,
    southBoundLatitude: -50,
    northBoundLatitude: 58.7,
  },
  geographicLocations: null,
  topicCategories: ['environment'],
  keywords: ['surveillance', 'animal disease'],
  projectNumber: null,
  identifiers: [
    {
      id: '17f1f7c2-0c92-4ec1-86ea-b4d67dbeb2cf',
      file: null,
      resource: null,
      parent: null,
      catalogue: null,
    },
  ],
  coupledResources: '[]',
  metadata: {
    standard: 'Environment Agency Metadata Profile',
    language: 'eng',
  },
  contacts: [
    {
      name: 'Jonathan Smith',
      email: 'jonathan.smith@apha.gov.uk',
      phone: null,
      address: null,
      url: null,
      delivery: null,
      country: null,
      city: null,
      postcode: null,
      aministrativeArea: null,
      role: 'pointOfContact',
    },
    {
      name: 'Neil Sampson',
      email: 'neil.sampson@apha.gov.uk',
      phone: null,
      address: null,
      url: null,
      delivery: null,
      country: null,
      city: null,
      postcode: null,
      aministrativeArea: null,
      role: 'custodian',
    },
    {
      name: 'APHA OpenData Team',
      email: 'aphaopendata@apha.gov.uk',
      phone: null,
      address: null,
      url: null,
      delivery: null,
      country: null,
      city: null,
      postcode: null,
      aministrativeArea: null,
      role: 'publisher',
    },
  ],
  capitalClassifications: null,
  recordDates: {
    metadata: null,
    publication: '2017-02-11T00:00:00Z',
    revision: '2024-06-10T18:41:32Z',
    creation: '2023-03-10T15:10:20Z',
  },
  resources: [
    {
      url: 'https://environment-test.data.gov.uk/explore/9bceae16-607b-49d6-a980-289289fc4643?download=true',
      name: 'Living England Segmentation (2019) Download',
      type: 'HTTP Application',
      language: 'eng',
      distributionFormat: null,
    },
    {
      url: 'https://environment-test.data.gov.uk/spatialdata/living-england-segmentation-2019/wfs',
      name: 'Living England Segmentation (2019) WFS',
      type: 'WFS',
      language: 'eng',
      distributionFormat: null,
    },
    {
      url: 'https://environment-test.data.gov.uk/spatialdata/living-england-segmentation-2019/wms',
      name: 'Living England Segmentation (2019) WMS',
      type: 'WMS',
      language: 'eng',
      distributionFormat: null,
    },
    {
      url: 'https://environment-test.data.gov.uk/arcgis/rest/services/NE/LivingEnglandSegmentation2019/MapServer',
      name: 'Living England Segmentation (2019) REST Map Service',
      type: 'ESRI REST API',
      language: 'eng',
      distributionFormat: null,
    },
    {
      url: 'https://naturalengland-defra.opendata.arcgis.com/datasets/Defra::living-england-segmentation-2019/about',
      name: 'Natural England Open Data Geoportal dataset page',
      type: 'HTTP Application',
      language: 'eng',
      distributionFormat: null,
    },
    {
      url: 'https://environment-test.data.gov.uk/spatialdata/survey-index-files/wms',
      name: 'Living England Segmentation (2022) WMS',
      type: 'WMS',
      language: 'eng',
      distributionFormat: null,
    },
  ],
  lineage: 'An RDF Vocabulary to described data on exotic notifiable disease investigations.',
  additionalInformation: null,
  conformity: null,
  spatial: {
    dataService: '',
    representationService: 'vector',
    referencingSystem: 'http://www.opengis.net/def/crs/EPSG/0/27700',
    resolution: null,
  },
  verticalExtent: null,
  license: {
    publicAccessAccessContraints: 'Open Government Licence<br>©Crown Copyright, APHA 2016',
    publicAccessOtherConstraints: ['otherRestrictions', 'license', 'copyright'],
    publicUseUseConstraints: null,
    publicUseOtherContraints: null,
    frequencyOfUpdate: 'unknown',
    attributionStatement: null,
  },
  nceaContribution: '',
  datasetReferenceDate: {
    metadata: null,
    publication: '2017-02-11T00:00:00Z',
    revision: '2024-06-10T18:41:32Z',
    creation: '2023-03-10T15:10:20Z',
  },
};

export const MOCK_VOCABULARY_DATA = [
  {
    code: 'lvl1_001',
    name: 'Natural asset',
    level: 1,
    classifiers: [
      {
        code: 'lvl2_001',
        name: 'Terrestrial and freshwater habitats',
        level: 2,
        classifiers: [
          {
            code: 'lvl3_001',
            name: 'Broadleaved, mixed and yew woodland',
            level: 3,
          },
          {
            code: 'lvl3_003',
            name: 'Boundary and linear features',
            level: 3,
          },
          {
            code: 'lvl3_004',
            name: 'Arable and horticulture',
            level: 3,
          },
          {
            code: 'lvl3_005',
            name: 'Improved grassland',
            level: 3,
          },
          {
            code: 'lvl3_006',
            name: 'Neutral grassland',
            level: 3,
          },
          {
            code: 'lvl3_007',
            name: 'Calcareous grassland',
            level: 3,
          },
          {
            code: 'lvl3_008',
            name: 'Acid grassland',
            level: 3,
          },
        ],
      },
      {
        code: 'lvl2_002',
        name: 'Coastal and estuarine habitats',
        level: 2,
        classifiers: [
          {
            code: 'lvl3_018',
            name: 'Coastal dunes and sandy shores',
            level: 3,
          },
          {
            code: 'lvl3_019',
            name: 'Coastal shingle',
            level: 3,
          },
        ],
      },
      {
        code: 'lvl2_003',
        name: 'Marine habitats',
        level: 2,
        classifiers: [
          {
            code: 'lvl3_023',
            name: 'Rock (and other hard substrate)',
            level: 3,
          },
          {
            code: 'lvl3_027',
            name: 'Mud',
            level: 3,
          },
          {
            code: 'lvl3_028',
            name: 'Pelagic - indeterminate',
            level: 3,
          },
          {
            code: 'lvl3_029',
            name: 'Pelagic - intermittently stratified',
            level: 3,
          },
          {
            code: 'lvl3_034',
            name: 'Pelagic - coastal water (up to 1 nautical mile)',
            level: 3,
          },
        ],
      },
      {
        code: 'lvl2_004',
        name: 'Generalist species (spanning multiple habitats)',
        level: 2,
        classifiers: [
          {
            code: 'lvl3_036',
            name: 'Birds',
            level: 3,
          },
          {
            code: 'lvl3_037',
            name: 'Mammals',
            level: 3,
          },
          {
            code: 'lvl3_038',
            name: 'Insects',
            level: 3,
          },
        ],
      },
      {
        code: 'lvl2_005',
        name: 'Ecosystem component',
        level: 2,
        classifiers: [
          {
            code: 'lvl3_043',
            name: 'Ecological community',
            level: 3,
          },
          {
            code: 'lvl3_044',
            name: 'Functional trait',
            level: 3,
          },
          {
            code: 'lvl3_045',
            name: 'Ecosystem process',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    code: 'lvl1_002',
    name: 'Ecosystem service or benefit',
    level: 1,
    classifiers: [
      {
        code: 'lvl2_006',
        name: 'Provisioning services',
        level: 2,
        classifiers: [
          {
            code: 'lvl3_050',
            name: 'Materials',
            level: 3,
          },
          {
            code: 'lvl3_051',
            name: 'Water',
            level: 3,
          },
        ],
      },
      {
        code: 'lvl2_007',
        name: 'Regulating services',
        level: 2,
        classifiers: [
          {
            code: 'lvl3_054',
            name: 'Maintaining wild populations',
            level: 3,
          },
          {
            code: 'lvl3_055',
            name: 'Hazard and nuisance reduction',
            level: 3,
          },
          {
            code: 'lvl3_056',
            name: 'Climate regulation',
            level: 3,
          },
          {
            code: 'lvl3_053',
            name: 'Environmental quality',
            level: 3,
          },
        ],
      },
    ],
  },
];
