import Joi from 'joi';

export const quickSearchJoiError: Joi.ValidationError = {
  _original: {
    search_term: '',
    pageName: 'home',
  },
  details: [
    {
      message: 'Please enter keywords into the search field.',
      path: ['search_term'],
      type: 'string.empty',
      context: {
        label: 'Search Field',
        value: '',
        key: 'search_term',
      },
    },
  ],
  name: 'ValidationError',
  isJoi: false,
  annotate: function (stripColors?: boolean | undefined): string {
    throw new Error('Function not implemented.');
  },
  message: '',
};

export const defaultQuery = {
  fields: {
    keyword: {
      q: 'example',
    },
  },
  sort: '',
  filters: {},
  rowsPerPage: 20,
  page: 1,
};

export const licenseFilteredData = {
  took: 3,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 1, relation: 'eq' },
    max_score: 11.707571,
    hits: [
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
        _score: 5.132653,
        _source: {
          status: 'active',
          docType: 'metadata',
          document: '',
          metadataIdentifier: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
          indexingDate: '2024-09-27T15:37:37Z',
          dateStamp: '2018-05-17T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['nonGeographicDataset'],
          OrgObject: { default: 'Digital and Data Solutions, JNCC', langeng: 'Digital and Data Solutions, JNCC' },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contact: [
            {
              organisationName: 'Digital and Data Solutions, JNCC',
              organisationValue: 'jncc',
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
          resourceTitleObject: { default: 'UK Ramsar habitat cover', langeng: 'UK Ramsar habitat cover' },
          publicationDateForResource: ['2016-04-27T00:00:00.000Z', '2016-04-27T00:00:00.000Z'],
          publicationYearForResource: ['2016', '2016'],
          publicationMonthForResource: ['2016-04', '2016-04'],
          resourceDate: [{ type: 'publication', date: '2016-04-27T00:00:00.000Z' }],
          resourceTemporalDateRange: [
            { gte: '2016-04-27T00:00:00.000Z', lte: '2016-04-27T00:00:00.000Z' },
            { gte: '1976-01-01T00:00:00.000Z', lte: '2015-10-17T00:00:00.000Z' },
          ],
          resourceIdentifier: [{ code: '536bfee9-794f-4889-b2ad-2ee9a74ded35', codeSpace: '', link: '' }],
          resourceAbstractObject: {
            default:
              'Ramsar sites are wetlands of international importance designated under the Ramsar Convention. This dataset contains details for all habitat cover data for all designated Ramsar sites within the UK and its Overseas Territories and Crown Dependencies. The dataset lists habitat type drawn from a standard list used by the Ramsar Secretariat for all Ramsar sites in the world. The % cover of each habitat is shown. Note that these data have not been updated since the original Ramsar Information Sheets were compiled in 1998 except in cases where the site has been either newly designated or extended since then. Commonly specified habitats in the UK are:\nPeatlands (including peat bogs swamps, fens)\nSand / shingle shores (including dune systems)\nFreshwater marshes / pools: permanent\nSalt marshes\nFreshwater lakes: permanent\nTidal flats',
            langeng:
              'Ramsar sites are wetlands of international importance designated under the Ramsar Convention. This dataset contains details for all habitat cover data for all designated Ramsar sites within the UK and its Overseas Territories and Crown Dependencies. The dataset lists habitat type drawn from a standard list used by the Ramsar Secretariat for all Ramsar sites in the world. The % cover of each habitat is shown. Note that these data have not been updated since the original Ramsar Information Sheets were compiled in 1998 except in cases where the site has been either newly designated or extended since then. Commonly specified habitats in the UK are:\nPeatlands (including peat bogs swamps, fens)\nSand / shingle shores (including dune systems)\nFreshwater marshes / pools: permanent\nSalt marshes\nFreshwater lakes: permanent\nTidal flats',
          },
          OrgForResourceObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          custodianOrgForResourceObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contactForResource: [
            {
              organisationName: 'Digital and Data Solutions, JNCC',
              role: 'custodian',
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
          supplementalInformationObject: {
            default: 'http://jncc.defra.gov.uk/page-161',
            langeng: 'http://jncc.defra.gov.uk/page-161',
          },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            { default: 'Freshwater', langeng: 'Freshwater' },
            { default: 'Marine', langeng: 'Marine' },
            { default: 'Terrestrial', langeng: 'Terrestrial' },
            { default: 'Protected Areas', langeng: 'Protected Areas' },
            { default: 'Wetlands', langeng: 'Wetlands' },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'th_otherKeywords-Number': '5',
          'th_otherKeywords-': [
            { default: 'Freshwater', langeng: 'Freshwater' },
            { default: 'Marine', langeng: 'Marine' },
            { default: 'Terrestrial', langeng: 'Terrestrial' },
            { default: 'Protected Areas', langeng: 'Protected Areas' },
            { default: 'Wetlands', langeng: 'Wetlands' },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                { default: 'Freshwater', langeng: 'Freshwater' },
                { default: 'Marine', langeng: 'Marine' },
                { default: 'Terrestrial', langeng: 'Terrestrial' },
                { default: 'Protected Areas', langeng: 'Protected Areas' },
                { default: 'Wetlands', langeng: 'Wetlands' },
              ],
            },
          },
          cl_topic: [{ key: 'environment', default: 'Environment', langeng: 'Environment' }],
          MD_LegalConstraintsOtherConstraintsObject: [{ default: 'no limitations', langeng: 'no limitations' }],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default:
                'Released under the Open Government Licence v3.0. Attribution statement: "Contains public sector data © JNCC/NE/NRW/SNH/DOENI. Licence: OGL"',
              langeng:
                'Released under the Open Government Licence v3.0. Attribution statement: "Contains public sector data © JNCC/NE/NRW/SNH/DOENI. Licence: OGL"',
            },
          ],
          licenseObject: [{ default: 'no limitations', langeng: 'no limitations' }],
          resourceTemporalExtentDateRange: [{ gte: '1976-01-01T00:00:00.000Z', lte: '2015-10-17T00:00:00.000Z' }],
          resourceTemporalExtentDetails: [{ start: { date: '1976-01-01' }, end: { date: '2015-10-17' } }],
          lineageObject: {
            default:
              'This information has been extracted from the Ramsar Information Sheets compiled by the Statutory Nature Conservation Body.',
            langeng:
              'This information has been extracted from the Ramsar Information Sheets compiled by the Statutory Nature Conservation Body.',
          },
          format: ['csv'],
          linkUrl:
            'http://data.jncc.gov.uk/data/536bfee9-794f-4889-b2ad-2ee9a74ded35-UK-Ramsar-habitat-cover-201510.csv',
          linkProtocol: ['http-fd'],
          linkUrlProtocol:
            'http://data.jncc.gov.uk/data/536bfee9-794f-4889-b2ad-2ee9a74ded35-UK-Ramsar-habitat-cover-201510.csv',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default:
                  'http://data.jncc.gov.uk/data/536bfee9-794f-4889-b2ad-2ee9a74ded35-UK-Ramsar-habitat-cover-201510.csv',
              },
              nameObject: {
                default: 'UK-Ramsar-habitat-cover-201510.csv',
                langeng: 'UK-Ramsar-habitat-cover-201510.csv',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
          mainLanguageFullName: '',
          OrgSupplementalInformationObject: {
            default: 'http://jncc.defra.gov.uk/page-161',
            langeng: 'http://jncc.defra.gov.uk/page-161',
          },
          OrgResourceTitleObject: { default: 'UK Ramsar habitat cover', langeng: 'UK Ramsar habitat cover' },
          OrgResourceIdentifier: { code: '536bfee9-794f-4889-b2ad-2ee9a74ded35', codeSpace: '', link: '' },
          OrgResourceConstraints: {
            OrgOtherConstraints: ['no limitations'],
            OrgAccessConstraints: ['otherRestrictions'],
          },
          OrgDistributionFormats: { name: 'Comma Separated Values', version: '' },
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Jncc_536bfee9-794f-4889-b2ad-2ee9a74ded35',
              sourceSystemReferenceID: 'Jncc_536bfee9-794f-4889-b2ad-2ee9a74ded35',
            },
          },
          OrgNceaClassifiers: [{ name: 'Natural asset', code: 'lvl1-001' }],
          recordOwner: 'admin admin',
          uuid: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
          harvesterUuid: '93f27e43-0f8f-48c0-8f0e-24275513a838',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-09-27T09:03:06.627Z',
          id: '127350',
          createDate: '2024-09-27T09:03:06.627Z',
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

export const keywordFilteredData = {
  took: 3,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 1, relation: 'eq' },
    max_score: 11.707571,
    hits: [
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '263846b9eee8aa345e9b1ba04fdedade',
        _score: 11.707571,
        _source: {
          status: 'active',
          docType: 'metadata',
          document: '',
          metadataIdentifier: '263846b9eee8aa345e9b1ba04fdedade',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: { default: '2.3.8', langeng: '2.3.8' },
          indexingDate: '2024-10-22T02:04:48Z',
          dateStamp: '2021-05-26T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: { default: 'English Heritage', langeng: 'English Heritage' },
          pointOfContactOrgObject: { default: 'English Heritage', langeng: 'English Heritage' },
          contact: [
            {
              organisationName: 'English Heritage',
              organisationValue: 'ne',
              role: 'pointOfContact',
              email: 'chris.pater@english-heritage.org.uk',
              website: '',
              logo: '',
              individual: 'Chris Pater',
              position: 'Marine Planner',
              phone: '+44 (0) 870 333 1181',
              address: 'Customer Services Department, PO Box 569, Swindon, SN2 2YP',
              deliveryPoint: 'Customer Services Department, PO Box 569',
              postalCode: 'SN2 2YP',
              city: 'Swindon',
              country: '',
              administrativeArea: '',
            },
          ],
          cl_hierarchyLevel: [
            {
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
            },
          ],
          cl_maintenanceAndUpdateFrequency: [
            {
              key: 'asNeeded',
              default: 'As needed',
              langeng: 'As needed',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_MaintenanceFrequencyCode',
              text: 'asNeeded',
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
          resourceTitleObject: {
            default: '2011 English Heritage, Location of Peat and Clay Exposures, Holme-next-the-Sea',
            langeng: '2011 English Heritage, Location of Peat and Clay Exposures, Holme-next-the-Sea',
          },
          publicationDateForResource: ['2011-08-31T00:00:00.000Z', '2011-08-31T00:00:00.000Z'],
          publicationYearForResource: ['2011', '2011'],
          publicationMonthForResource: ['2011-08', '2011-08'],
          creationDateForResource: ['2011-08-31T00:00:00.000Z', '2011-08-31T00:00:00.000Z'],
          creationYearForResource: ['2011', '2011'],
          creationMonthForResource: ['2011-08', '2011-08'],
          revisionDateForResource: ['2011-08-31T00:00:00.000Z', '2011-08-31T00:00:00.000Z'],
          revisionYearForResource: ['2011', '2011'],
          revisionMonthForResource: ['2011-08', '2011-08'],
          resourceDate: [
            { type: 'publication', date: '2011-08-31T00:00:00.000Z' },
            { type: 'creation', date: '2011-08-31T00:00:00.000Z' },
            { type: 'revision', date: '2011-08-31T00:00:00.000Z' },
          ],
          resourceTemporalDateRange: [
            { gte: '2011-08-31T00:00:00.000Z', lte: '2011-08-31T00:00:00.000Z' },
            { gte: '2011-01-01T00:00:00.000Z', lte: '2011-08-31T00:00:00.000Z' },
          ],
          resourceIdentifier: [{ code: 'NETGAIN0019', codeSpace: '', link: '' }],
          resourceAbstractObject: {
            default:
              "A map showing peat exposure within the intertidal area adjacent to Holme-next-the-Sea was recieved from English Heritage. The map shows the location of Holme I (the former site of the original 'seahenge') and Holme II which is another timber henge structure approximately 100m to the east centred on TF7122445239 with an estimated maximum diameter of 13.20m. The two end (green) points show the transect line, which was used to support identification of a possible Reference Area. The most recent site visit by Norfolk County Council staff was in April 2011 and it was noted that the extent of identifiable peat exposure was broadly similar to the extent indentified in 2003 (as per attached map).",
            langeng:
              "A map showing peat exposure within the intertidal area adjacent to Holme-next-the-Sea was recieved from English Heritage. The map shows the location of Holme I (the former site of the original 'seahenge') and Holme II which is another timber henge structure approximately 100m to the east centred on TF7122445239 with an estimated maximum diameter of 13.20m. The two end (green) points show the transect line, which was used to support identification of a possible Reference Area. The most recent site visit by Norfolk County Council staff was in April 2011 and it was noted that the extent of identifiable peat exposure was broadly similar to the extent indentified in 2003 (as per attached map).",
          },
          OrgForResourceObject: [
            { default: 'English Heritage', langeng: 'English Heritage' },
            { default: 'English Heritage', langeng: 'English Heritage' },
          ],
          originatorOrgForResourceObject: { default: 'English Heritage', langeng: 'English Heritage' },
          contactForResource: [
            {
              organisationName: 'English Heritage',
              role: 'originator',
              email: 'chris.pater@english-heritage.org.uk',
              website: '',
              logo: '',
              individual: 'Chris Pater',
              position: 'Marine Planner',
              phone: '+44 (0) 870 333 1181',
              address: 'Customer Services Department, PO Box 569, Swindon, SN2 2YP',
              deliveryPoint: 'Customer Services Department, PO Box 569',
              postalCode: 'SN2 2YP',
              city: 'Swindon',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'English Heritage',
              role: 'custodian',
              email: 'chris.pater@english-heritage.org.uk',
              website: '',
              logo: '',
              individual: 'Chris Pater',
              position: 'Marine Planner',
              phone: '+44 (0) 870 333 1181',
              address: 'Customer Services Department, PO Box 569, Swindon, SN2 2YP',
              deliveryPoint: 'Customer Services Department, PO Box 569',
              postalCode: 'SN2 2YP',
              city: 'Swindon',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: { default: 'English Heritage', langeng: 'English Heritage' },
          supplementalInformationObject: {
            default:
              'Netgain (2011) Final Recommendations Submission to Natural England & JNCC. Report to Natural England.',
            langeng:
              'Netgain (2011) Final Recommendations Submission to Natural England & JNCC. Report to Natural England.',
          },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
            },
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
              key: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
            },
            {
              default: 'Habitat characterisation',
              langeng: 'Habitat characterisation',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
            },
            { default: 'Southern North Sea', langeng: 'Southern North Sea' },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'keywordType-place': [{ default: 'Southern North Sea', langeng: 'Southern North Sea' }],
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
            },
          ],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
          ],
          th_SeaDataNetP021parameterdiscoveryvocabularyNumber: '2',
          th_SeaDataNetP021parameterdiscoveryvocabulary: [
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
            },
            {
              default: 'Habitat characterisation',
              langeng: 'Habitat characterisation',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
            },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Marine Environmental Data and Information Network',
                  langeng: 'Marine Environmental Data and Information Network',
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
                },
              ],
            },
            'th_GEMET-INSPIREthemesversion1-0': {
              title: 'GEMET - INSPIRE themes, version 1.0',
              theme: '',
              keywords: [
                {
                  default: 'Habitats and biotopes',
                  langeng: 'Habitats and biotopes',
                  link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
                },
              ],
            },
            th_SeaDataNetP021parameterdiscoveryvocabulary: {
              title: 'SeaDataNet P021 parameter discovery vocabulary',
              theme: '',
              keywords: [
                {
                  default: 'Habitat extent',
                  langeng: 'Habitat extent',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
                },
                {
                  default: 'Habitat characterisation',
                  langeng: 'Habitat characterisation',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
                },
              ],
            },
          },
          cl_topic: [{ key: 'biota', default: 'Biota', langeng: 'Biota' }],
          MD_ConstraintsUseLimitationObject: [{ default: 'Copyright', langeng: 'Copyright' }],
          MD_LegalConstraintsOtherConstraintsObject: [{ default: 'Copyright', langeng: 'Copyright' }],
          licenseObject: [{ default: 'Copyright', langeng: 'Copyright' }],
          extentIdentifierObject: [{ default: 'Southern North Sea', langeng: 'Southern North Sea' }],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [0.523, 52.9735],
                [0.5543, 52.9735],
                [0.5543, 52.9784],
                [0.523, 52.9784],
                [0.523, 52.9735],
              ],
            ],
          },
          location: '52.97595,0.5386500000000001',
          resourceTemporalExtentDateRange: [{ gte: '2011-01-01T00:00:00.000Z', lte: '2011-08-31T00:00:00.000Z' }],
          resourceTemporalExtentDetails: [{ start: { date: '2011-01-01' }, end: { date: '2011-08-31' } }],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::32631'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::32631',
              codeSpace: '',
              name: 'urn:ogc:def:crs:EPSG::32631',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'A map was provided to Net Gain showing the distribution of the peat and clay exposures at Seahenge, Holme-next-the-sea from English Heritage. The map has been digitised by the team and a shapefile with polygons showing the extent of peat and clay created.',
            langeng:
              'A map was provided to Net Gain showing the distribution of the peat and clay exposures at Seahenge, Holme-next-the-sea from English Heritage. The map has been digitised by the team and a shapefile with polygons showing the extent of peat and clay created.',
          },
          OrgForDistributionObject: { default: 'English Heritage', langeng: 'English Heritage' },
          distributorOrgForDistributionObject: { default: 'English Heritage', langeng: 'English Heritage' },
          contactForDistribution: [
            {
              organisationName: 'English Heritage',
              role: 'distributor',
              email: 'chris.pater@english-heritage.org.uk',
              website: '',
              logo: '',
              individual: 'Chris Pater',
              position: 'Marine Planner',
              phone: '+44 (0) 870 333 1181',
              address: 'Customer Services Department, PO Box 569, Swindon, SN2 2YP',
              deliveryPoint: 'Customer Services Department, PO Box 569',
              postalCode: 'SN2 2YP',
              city: 'Swindon',
              country: '',
              administrativeArea: '',
            },
          ],
          recordGroup: '263846b9eee8aa345e9b1ba04fdedade',
          mainLanguageFullName: '',
          OrgGeographicElement: {
            ciTitle: 'Charting Progress 2 Sea Areas',
            type: 'creation',
            date: '2009-06-18',
            code: 'Southern North Sea',
            url: '',
          },
          OrgSupplementalInformationObject: {
            default:
              'Netgain (2011) Final Recommendations Submission to Natural England & JNCC. Report to Natural England.',
            langeng:
              'Netgain (2011) Final Recommendations Submission to Natural England & JNCC. Report to Natural England.',
          },
          OrgResourceTitleObject: {
            default: '2011 English Heritage, Location of Peat and Clay Exposures, Holme-next-the-Sea',
            langeng: '2011 English Heritage, Location of Peat and Clay Exposures, Holme-next-the-Sea',
          },
          OrgResourceIdentifier: { code: 'NETGAIN0019', codeSpace: '', link: '' },
          OrgResourceConstraints: [
            {},
            { OrgOtherConstraints: ['Copyright'], OrgAccessConstraints: ['otherRestrictions'] },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_263846b9eee8aa345e9b1ba04fdedade',
              sourceSystemReferenceID: 'Medin_263846b9eee8aa345e9b1ba04fdedade',
            },
          },
          OrgNceaClassifiers: [{ name: 'Natural asset', code: 'lvl1-001' }],
          recordOwner: 'admin admin',
          uuid: '263846b9eee8aa345e9b1ba04fdedade',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:42:19.071Z',
          id: '145342',
          createDate: '2024-10-18T09:44:21.459Z',
          isPublishedToIntranet: 'false',
          owner: '1',
          groupOwner: '2',
          logo: '/images/logos/82f7f193-d9d1-4f0c-b211-f631b46538f0.png',
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
          sourceCatalogue: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
        },
      },
    ],
  },
};

export const lastUpdatedFilteredData = {
  took: 3,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 1, relation: 'eq' },
    max_score: 11.707571,
    hits: [
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '4945cf20c014b1941ee939fd88478cfc',
        _score: 5.308798,
        _source: {
          status: 'active',
          docType: 'metadata',
          document: '',
          metadataIdentifier: '4945cf20c014b1941ee939fd88478cfc',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: { default: '2.3.8', langeng: '2.3.8' },
          indexingDate: '2024-10-22T02:08:49Z',
          dateStamp: '2023-04-26T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: { default: 'SeaStar Survey', langeng: 'SeaStar Survey' },
          pointOfContactOrgObject: { default: 'SeaStar Survey', langeng: 'SeaStar Survey' },
          contact: [
            {
              organisationName: 'SeaStar Survey',
              organisationValue: 'ne',
              role: 'pointOfContact',
              email: 'info@seastarsurvey.co.uk',
              website: '',
              logo: '',
              individual: 'S. Dewey',
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
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
            },
          ],
          cl_maintenanceAndUpdateFrequency: [
            {
              key: 'asNeeded',
              default: 'As needed',
              langeng: 'As needed',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_MaintenanceFrequencyCode',
              text: 'asNeeded',
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
          resourceTitleObject: {
            default:
              '2022 Natural England (NE) Yarmouth to Cowes MCZ Phase I and II Baseline Survey of Intertidal Rock, Underboulder Communities and Peat and Clay Exposures',
            langeng:
              '2022 Natural England (NE) Yarmouth to Cowes MCZ Phase I and II Baseline Survey of Intertidal Rock, Underboulder Communities and Peat and Clay Exposures',
          },
          publicationDateForResource: ['2023-03-29T00:00:00.000Z', '2023-03-29T00:00:00.000Z'],
          publicationYearForResource: ['2023', '2023'],
          publicationMonthForResource: ['2023-03', '2023-03'],
          creationDateForResource: ['2023-03-29T00:00:00.000Z', '2023-03-29T00:00:00.000Z'],
          creationYearForResource: ['2023', '2023'],
          creationMonthForResource: ['2023-03', '2023-03'],
          revisionDateForResource: ['2023-03-29T00:00:00.000Z', '2023-03-29T00:00:00.000Z'],
          revisionYearForResource: ['2023', '2023'],
          revisionMonthForResource: ['2023-03', '2023-03'],
          resourceDate: [
            { type: 'publication', date: '2023-03-29T00:00:00.000Z' },
            { type: 'creation', date: '2023-03-29T00:00:00.000Z' },
            { type: 'revision', date: '2023-03-29T00:00:00.000Z' },
          ],
          resourceTemporalDateRange: [
            { gte: '2023-03-29T00:00:00.000Z', lte: '2023-03-29T00:00:00.000Z' },
            { gte: '2022-09-26T00:00:00.000Z', lte: '2022-10-01T00:00:00.000Z' },
          ],
          resourceIdentifier: [{ code: 'NE_2165', codeSpace: 'http://https://www.natural-england.org.uk', link: '' }],
          resourceAbstractObject: {
            default:
              'Yarmouth to Cowes Marine Conservation Zone (MCZ) is an inshore site along the northwest coast of the Isle of Wight, from Yarmouth Pier in the west to the village of Gurnard in the east. The site was designated in May 2019, however as of summer 2022 no survey of the intertidal features of the site had yet been conducted. In order to inform a Conservation Advice Package for the site, Natural England commissioned Seastar Survey Ltd. (âSeastarâ) to undertake a Phase I and Phase II baseline survey of three of the features of the MCZ: intertidal rock habitats; intertidal underboulder communities; and peat and clay exposures.\n The objectives for the survey were:\n â¢\tTo map the extent and distribution of the three features of interest (i.e. intertidal rock, intertidal underboulder communities and peat and clay exposures) and their associated communities within the Yarmouth to Cowes MCZ;\n â¢\tTo identify and map the extent and distribution of biotopes and biotope complexes associated with the three features of interest;\n â¢\tTo characterise the habitats observed by providing semi-quantitative data on species composition of representative and notable biotopes;\n â¢\tTo provide semi-quantitative data on the physical structure of the intertidal rocky substrate, including surface and structural complexity and stability; \n â¢\tTo record the presence and abundance of any non-indigenous species (NIS);\n â¢\tTo acquire high-quality biological data of suitable resolution to enable key attributes of condition for each of the three intertidal features of interest to be assessed according to Common Standards Monitoring (CSM) guidance;\n â¢\tTo identify anthropogenic influences impacting on the ability of the features of interest to achieve favourable condition;\n â¢\tEnsure that the collected data are suitable for future use as baseline data to allow assessments of the direction of potential ecological change.',
            langeng:
              'Yarmouth to Cowes Marine Conservation Zone (MCZ) is an inshore site along the northwest coast of the Isle of Wight, from Yarmouth Pier in the west to the village of Gurnard in the east. The site was designated in May 2019, however as of summer 2022 no survey of the intertidal features of the site had yet been conducted. In order to inform a Conservation Advice Package for the site, Natural England commissioned Seastar Survey Ltd. (âSeastarâ) to undertake a Phase I and Phase II baseline survey of three of the features of the MCZ: intertidal rock habitats; intertidal underboulder communities; and peat and clay exposures.\n The objectives for the survey were:\n â¢\tTo map the extent and distribution of the three features of interest (i.e. intertidal rock, intertidal underboulder communities and peat and clay exposures) and their associated communities within the Yarmouth to Cowes MCZ;\n â¢\tTo identify and map the extent and distribution of biotopes and biotope complexes associated with the three features of interest;\n â¢\tTo characterise the habitats observed by providing semi-quantitative data on species composition of representative and notable biotopes;\n â¢\tTo provide semi-quantitative data on the physical structure of the intertidal rocky substrate, including surface and structural complexity and stability; \n â¢\tTo record the presence and abundance of any non-indigenous species (NIS);\n â¢\tTo acquire high-quality biological data of suitable resolution to enable key attributes of condition for each of the three intertidal features of interest to be assessed according to Common Standards Monitoring (CSM) guidance;\n â¢\tTo identify anthropogenic influences impacting on the ability of the features of interest to achieve favourable condition;\n â¢\tEnsure that the collected data are suitable for future use as baseline data to allow assessments of the direction of potential ecological change.',
          },
          OrgForResourceObject: [
            { default: 'SeaStar Survey', langeng: 'SeaStar Survey' },
            { default: 'Natural England', langeng: 'Natural England' },
          ],
          originatorOrgForResourceObject: { default: 'SeaStar Survey', langeng: 'SeaStar Survey' },
          contactForResource: [
            {
              organisationName: 'SeaStar Survey',
              role: 'originator',
              email: 'info@seastarsurvey.co.uk',
              website: '',
              logo: '',
              individual: 'S. Dewey',
              position: '',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Natural England',
              role: 'custodian',
              email: 'enquiries@naturalengland.org.uk',
              website: '',
              logo: '',
              individual: '',
              position: 'Marine Evidence Team',
              phone: '+44 (0)300 060 3900',
              address: 'Foss House, Kings Pool, 1-2 Peasholme Green, York, YO1 7PX',
              deliveryPoint: 'Foss House, Kings Pool, 1-2 Peasholme Green',
              postalCode: 'YO1 7PX',
              city: 'York',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: { default: 'Natural England', langeng: 'Natural England' },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
            },
            { default: 'MCZ', langeng: 'MCZ', link: '' },
            { default: 'UK project', langeng: 'UK project', link: '' },
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
              key: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
            { default: 'Marine', langeng: 'Marine', link: '' },
            { default: 'Marine Environment Monitoring', langeng: 'Marine Environment Monitoring', link: '' },
            { default: 'Habitats and biotopes', langeng: 'Habitats and biotopes', link: '' },
            { default: 'Species Distribution', langeng: 'Species Distribution', link: '' },
            { default: 'environment', langeng: 'environment', link: '' },
            { default: 'Protected Areas', langeng: 'Protected Areas', link: '' },
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
            },
            {
              default: 'Habitat characterisation',
              langeng: 'Habitat characterisation',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
            },
            { default: 'Eastern Channel', langeng: 'Eastern Channel' },
            { default: '30E8', langeng: '30E8' },
            { default: 'littoral', langeng: 'littoral' },
          ],
          tagNumber: '15',
          isOpenData: 'false',
          'keywordType-place': [
            { default: 'Eastern Channel', langeng: 'Eastern Channel' },
            { default: '30E8', langeng: '30E8' },
            { default: 'littoral', langeng: 'littoral' },
          ],
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
            },
          ],
          th_100Number: '1',
          th_100: [{ default: 'MCZ', langeng: 'MCZ', link: '' }],
          th_BODCprojectcategoriesNumber: '1',
          th_BODCprojectcategories: [{ default: 'UK project', langeng: 'UK project', link: '' }],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
          ],
          th_GardlineNumber: '1',
          th_Gardline: [{ default: 'Marine', langeng: 'Marine', link: '' }],
          th_GlobalChangeMasterDirectoryScienceKeywordsV5Number: '1',
          th_GlobalChangeMasterDirectoryScienceKeywordsV5: [
            { default: 'Marine Environment Monitoring', langeng: 'Marine Environment Monitoring', link: '' },
          ],
          th_INSPIRETHEMESNumber: '1',
          th_INSPIRETHEMES: [{ default: 'Habitats and biotopes', langeng: 'Habitats and biotopes', link: '' }],
          th_INSPIRENumber: '1',
          th_INSPIRE: [{ default: 'Species Distribution', langeng: 'Species Distribution', link: '' }],
          th_InternationalStandardsOrganisationISO19115TopicCategoriesNumber: '1',
          th_InternationalStandardsOrganisationISO19115TopicCategories: [
            { default: 'environment', langeng: 'environment', link: '' },
          ],
          th_MEDINNumber: '1',
          th_MEDIN: [{ default: 'Protected Areas', langeng: 'Protected Areas', link: '' }],
          th_SeaDataNetP021parameterdiscoveryvocabularyNumber: '2',
          th_SeaDataNetP021parameterdiscoveryvocabulary: [
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
            },
            {
              default: 'Habitat characterisation',
              langeng: 'Habitat characterisation',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
            },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Marine Environmental Data and Information Network',
                  langeng: 'Marine Environmental Data and Information Network',
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
                },
              ],
            },
            th_100: { title: '100', theme: '', keywords: [{ default: 'MCZ', langeng: 'MCZ', link: '' }] },
            th_BODCprojectcategories: {
              title: 'BODC project categories',
              theme: '',
              keywords: [{ default: 'UK project', langeng: 'UK project', link: '' }],
            },
            'th_GEMET-INSPIREthemesversion1-0': {
              title: 'GEMET - INSPIRE themes, version 1.0',
              theme: '',
              keywords: [
                {
                  default: 'Habitats and biotopes',
                  langeng: 'Habitats and biotopes',
                  link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
                },
              ],
            },
            th_Gardline: {
              title: 'Gardline',
              theme: '',
              keywords: [{ default: 'Marine', langeng: 'Marine', link: '' }],
            },
            th_GlobalChangeMasterDirectoryScienceKeywordsV5: {
              title: 'Global Change Master Directory Science Keywords V5',
              theme: '',
              keywords: [
                { default: 'Marine Environment Monitoring', langeng: 'Marine Environment Monitoring', link: '' },
              ],
            },
            th_INSPIRETHEMES: {
              title: 'INSPIRE THEMES',
              theme: '',
              keywords: [{ default: 'Habitats and biotopes', langeng: 'Habitats and biotopes', link: '' }],
            },
            th_INSPIRE: {
              title: 'INSPIRE',
              theme: '',
              keywords: [{ default: 'Species Distribution', langeng: 'Species Distribution', link: '' }],
            },
            th_InternationalStandardsOrganisationISO19115TopicCategories: {
              title: 'International Standards Organisation ISO19115 Topic Categories',
              theme: '',
              keywords: [{ default: 'environment', langeng: 'environment', link: '' }],
            },
            th_MEDIN: {
              title: 'MEDIN',
              theme: '',
              keywords: [{ default: 'Protected Areas', langeng: 'Protected Areas', link: '' }],
            },
            th_SeaDataNetP021parameterdiscoveryvocabulary: {
              title: 'SeaDataNet P021 parameter discovery vocabulary',
              theme: '',
              keywords: [
                {
                  default: 'Habitat extent',
                  langeng: 'Habitat extent',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX/',
                },
                {
                  default: 'Habitat characterisation',
                  langeng: 'Habitat characterisation',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
                },
              ],
            },
          },
          cl_topic: [{ key: 'biota', default: 'Biota', langeng: 'Biota' }],
          resolutionDistance: [
            '750 http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          ],
          MD_ConstraintsUseLimitationObject: [
            { default: 'Not suitable for use in navigation', langeng: 'Not suitable for use in navigation' },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            { default: 'No restrictions to public access', langeng: 'No restrictions to public access' },
          ],
          licenseObject: [{ default: 'No restrictions to public access', langeng: 'No restrictions to public access' }],
          extentIdentifierObject: [
            { default: 'Eastern Channel', langeng: 'Eastern Channel' },
            { default: '30E8', langeng: '30E8' },
            { default: 'littoral', langeng: 'littoral' },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-1.5144, 50.6981],
                [-1.305, 50.6981],
                [-1.305, 50.7537],
                [-1.5144, 50.7537],
                [-1.5144, 50.6981],
              ],
            ],
          },
          location: '50.725899999999996,-1.4097',
          resourceTemporalExtentDateRange: [{ gte: '2022-09-26T00:00:00.000Z', lte: '2022-10-01T00:00:00.000Z' }],
          resourceTemporalExtentDetails: [{ start: { date: '2022-09-26' }, end: { date: '2022-10-01' } }],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::4326'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::4326',
              codeSpace: '',
              name: 'urn:ogc:def:crs:EPSG::4326',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'This dataset was collected and analysed by Seastar Survey Ltd. and then provided to Natural England. The survey approach focused on developing a cost-effective sampling strategy using Phase I and Phase II intertidal sampling techniques. In order to ensure analytical consistency within and between datasets, and to allow any spatial and temporal change in habitat condition to be detected, the collection and analysis of the data was completed in accordance with Common Standards Monitoring guidance (JNCC, 2004) and procedural guidelines outlined in the Marine Monitoring Handbook (Davies et al., 2001) and the CCW Handbook for Marine Intertidal Phase I Survey and Mapping (Wyn, et al., 2006). \n The aim of the Phase I survey was to determine the range, distribution and extent of the three relevant features of interest (i.e. intertidal rock, underboulder communities and peat and clay exposures) by assigning biotopes in situ on vertical (i.e. running from high to low shore) transects, in accordance with best practice guidance.Â  The aim of the Phase II survey was to provide data on the species composition (i.e. community structure) of component communities within the features of interest.Â  Due to time constraints, only habitats where features of interest were present were sampled.\n The survey was conducted from Monday 26th September 2022 to Saturday 1st October 2022.Â  A total of 15 Phase I transects were successfully completed.\n Data obtained during the Phase I and Phase II surveys were imported into ArcGIS.Â  These included all GPS trackplots and relevant point data from both Phase I (e.g. positions of boundary changes) and Phase II (quadrat data).Â The data were overlaid on available aerial photography obtained from CCO.Â  Utilising these data together with the wireframe map field sketches created during the Phase I surveys, polygons were created within the GIS in order to map the location of the different biotopes identified at each transect.',
            langeng:
              'This dataset was collected and analysed by Seastar Survey Ltd. and then provided to Natural England. The survey approach focused on developing a cost-effective sampling strategy using Phase I and Phase II intertidal sampling techniques. In order to ensure analytical consistency within and between datasets, and to allow any spatial and temporal change in habitat condition to be detected, the collection and analysis of the data was completed in accordance with Common Standards Monitoring guidance (JNCC, 2004) and procedural guidelines outlined in the Marine Monitoring Handbook (Davies et al., 2001) and the CCW Handbook for Marine Intertidal Phase I Survey and Mapping (Wyn, et al., 2006). \n The aim of the Phase I survey was to determine the range, distribution and extent of the three relevant features of interest (i.e. intertidal rock, underboulder communities and peat and clay exposures) by assigning biotopes in situ on vertical (i.e. running from high to low shore) transects, in accordance with best practice guidance.Â  The aim of the Phase II survey was to provide data on the species composition (i.e. community structure) of component communities within the features of interest.Â  Due to time constraints, only habitats where features of interest were present were sampled.\n The survey was conducted from Monday 26th September 2022 to Saturday 1st October 2022.Â  A total of 15 Phase I transects were successfully completed.\n Data obtained during the Phase I and Phase II surveys were imported into ArcGIS.Â  These included all GPS trackplots and relevant point data from both Phase I (e.g. positions of boundary changes) and Phase II (quadrat data).Â The data were overlaid on available aerial photography obtained from CCO.Â  Utilising these data together with the wireframe map field sketches created during the Phase I surveys, polygons were created within the GIS in order to map the location of the different biotopes identified at each transect.',
          },
          OrgForDistributionObject: { default: 'Natural England', langeng: 'Natural England' },
          distributorOrgForDistributionObject: { default: 'Natural England', langeng: 'Natural England' },
          contactForDistribution: [
            {
              organisationName: 'Natural England',
              role: 'distributor',
              email: 'enquiries@naturalengland.org.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '+44 (0)300 060 3900',
              address: 'Foss House, Kings Pool, 1-2 Peasholme Green, York, YO1 7PX',
              deliveryPoint: 'Foss House, Kings Pool, 1-2 Peasholme Green',
              postalCode: 'YO1 7PX',
              city: 'York',
              country: '',
              administrativeArea: '',
            },
          ],
          recordGroup: '4945cf20c014b1941ee939fd88478cfc',
          mainLanguageFullName: '',
          OrgResolutionDistance: {
            distance: '750',
            uom: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          },
          OrgGeographicElement: [
            {
              ciTitle: 'Charting Progress 2 Sea Areas',
              type: 'creation',
              date: '2009-06-18',
              code: 'Eastern Channel',
              url: '',
            },
            { ciTitle: 'ICES Rectangles', type: 'creation', date: '2009-05-01', code: '30E8', url: '' },
            {
              ciTitle: 'SeaDataNet vertical extent keywords',
              type: 'revision',
              date: '2010-01-01',
              code: 'littoral',
              url: '',
            },
          ],
          OrgResourceTitleObject: {
            default:
              '2022 Natural England (NE) Yarmouth to Cowes MCZ Phase I and II Baseline Survey of Intertidal Rock, Underboulder Communities and Peat and Clay Exposures',
            langeng:
              '2022 Natural England (NE) Yarmouth to Cowes MCZ Phase I and II Baseline Survey of Intertidal Rock, Underboulder Communities and Peat and Clay Exposures',
          },
          OrgResourceIdentifier: { code: 'NE_2165', codeSpace: 'http://https://www.natural-england.org.uk', link: '' },
          OrgResourceConstraints: [
            {},
            { OrgOtherConstraints: ['No restrictions to public access'], OrgAccessConstraints: ['otherRestrictions'] },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_4945cf20c014b1941ee939fd88478cfc',
              sourceSystemReferenceID: 'Medin_4945cf20c014b1941ee939fd88478cfc',
            },
          },
          OrgNceaClassifiers: [{ name: 'Natural asset', code: 'lvl1-001' }],
          recordOwner: 'admin admin',
          uuid: '4945cf20c014b1941ee939fd88478cfc',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:38:43.387Z',
          id: '147188',
          createDate: '2024-10-18T09:41:03.08Z',
          isPublishedToIntranet: 'false',
          owner: '1',
          groupOwner: '2',
          logo: '/images/logos/82f7f193-d9d1-4f0c-b211-f631b46538f0.png',
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
          sourceCatalogue: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
        },
      },
    ],
  },
};

export const categoryFilteredData = {
  took: 3,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 2, relation: 'eq' },
    max_score: 11.707571,
    hits: [
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '0acff943-5ea1-225b-e054-002128a47908',
        _score: 5.665843,
        _ignored: [
          'OrgResourceConstraints.OrgOtherConstraints.keyword',
          'link.descriptionObject.langeng.keyword',
          'link.descriptionObject.default.keyword',
        ],
        _source: {
          status: 'active',
          docType: 'metadata',
          document: '',
          metadataIdentifier: '0acff943-5ea1-225b-e054-002128a47908',
          standardNameObject: {
            default: 'MEDIN Discovery Metadata Standard',
            langeng: 'MEDIN Discovery Metadata Standard',
          },
          standardVersionObject: { default: 'Version 2.3.5', langeng: 'Version 2.3.5' },
          indexingDate: '2024-10-22T02:00:47Z',
          dateStamp: '2024-04-12T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: { default: 'British Geological Survey (BGS)', langeng: 'British Geological Survey (BGS)' },
          pointOfContactOrgObject: {
            default: 'British Geological Survey (BGS)',
            langeng: 'British Geological Survey (BGS)',
          },
          contact: [
            {
              organisationName: 'British Geological Survey (BGS)',
              organisationValue: 'ea',
              role: 'pointOfContact',
              email: 'enquiries@bgs.ac.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '+44 (0)131 667 1000',
              address: 'The Lyell Centre, Research Avenue South, Edinburgh, EH14 4AP, UK',
              deliveryPoint: 'The Lyell Centre, Research Avenue South',
              postalCode: 'EH14 4AP',
              city: 'Edinburgh',
              country: 'UK',
              administrativeArea: '',
            },
          ],
          cl_hierarchyLevel: [
            {
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'https://schemas.isotc211.org/schemas/19139/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
            },
          ],
          cl_maintenanceAndUpdateFrequency: [
            {
              key: 'notPlanned',
              default: 'Not planned',
              langeng: 'Not planned',
              link: 'https://schemas.isotc211.org/schemas/19139/resources/codelist/gmxCodelists.xml#MD_MaintenanceFrequencyCode',
              text: 'notPlanned',
            },
          ],
          cl_accessConstraints: [
            {
              key: 'otherRestrictions',
              default: 'Other restrictions',
              langeng: 'Other restrictions',
              link: 'https://schemas.isotc211.org/schemas/19139/resources/codelist/gmxCodelists.xml#MD_RestrictionCode',
              text: 'otherRestrictions',
            },
            {
              key: 'No restrictions, a copyright acknowledgement is required and permission from any third party for the release of the data has been obtained. Inclusion of any third party data will determine the copyright acknowledgement that needs to be made.',
              default:
                'No restrictions, a copyright acknowledgement is required and permission from any third party for the release of the data has been obtained. Inclusion of any third party data will determine the copyright acknowledgement that needs to be made.',
              langeng:
                'No restrictions, a copyright acknowledgement is required and permission from any third party for the release of the data has been obtained. Inclusion of any third party data will determine the copyright acknowledgement that needs to be made.',
              link: 'https://schemas.isotc211.org/schemas/19139/resources/codelist/gmxCodelists.xml#MD_RestrictionCode',
              text: 'otherRestrictions',
            },
          ],
          cl_spatialRepresentationType: [
            {
              key: 'grid',
              default: 'Grid',
              langeng: 'Grid',
              link: 'https://schemas.isotc211.org/schemas/19139/resources/codelist/gmxCodelists.xml#MD_SpatialRepresentationTypeCode',
            },
          ],
          cl_function: [
            {
              key: 'search',
              default: 'Search',
              langeng: 'Search',
              link: 'https://schemas.isotc211.org/schemas/19139/resources/codelist/gmxCodelists.xml#CI_OnLineFunctionCode',
              text: 'search',
            },
          ],
          resourceTitleObject: {
            default:
              'Department for Environment, Food and Rural Affairs (DEFRA) MCZ: Farnes East: Benthic sampling and Video Survey FRNE_cend0514: Southern North Sea (13/03/2014 to 31/03/2014)',
            langeng:
              'Department for Environment, Food and Rural Affairs (DEFRA) MCZ: Farnes East: Benthic sampling and Video Survey FRNE_cend0514: Southern North Sea (13/03/2014 to 31/03/2014)',
          },
          publicationDateForResource: ['2014-03-31T00:00:00.000Z', '2014-03-31T00:00:00.000Z'],
          publicationYearForResource: ['2014', '2014'],
          publicationMonthForResource: ['2014-03', '2014-03'],
          resourceDate: [{ type: 'publication', date: '2014-03-31T00:00:00.000Z' }],
          resourceTemporalDateRange: [
            { gte: '2014-03-31T00:00:00.000Z', lte: '2014-03-31T00:00:00.000Z' },
            { gte: '2014-03-13T00:00:00.000Z', lte: '2014-03-31T00:00:00.000Z' },
          ],
          resourceIdentifier: [{ code: 'BGS_CMD_REF853', codeSpace: 'British Geological Survey', link: '' }],
          resourceAbstractObject: {
            default:
              "Drop camera survey collecting seabed images and sediment samples from three specified locations from within the East Farnes recomended Marine Conservation Zone (rMCZ) to client's specfications, namely Joint Nature Conservation Committee (JNCC), specifically to verify the presence of circalittoral rock and peat. Sampling equipment: Drop Camera; Hamon Grab. These data are archived with the Marine Environmental Data and Information Network (MEDIN) Data Archive Centres (DACs) including the British Geological Survey (BGS) DAC for geology and geophysics, The Archive for Marine Species and Habitats Data (DASSH) and the United Kingdom Hydrographic Office (UKHO) bathymetry DAC. The full site data package including raw is also available on request from BGS.",
            langeng:
              "Drop camera survey collecting seabed images and sediment samples from three specified locations from within the East Farnes recomended Marine Conservation Zone (rMCZ) to client's specfications, namely Joint Nature Conservation Committee (JNCC), specifically to verify the presence of circalittoral rock and peat. Sampling equipment: Drop Camera; Hamon Grab. These data are archived with the Marine Environmental Data and Information Network (MEDIN) Data Archive Centres (DACs) including the British Geological Survey (BGS) DAC for geology and geophysics, The Archive for Marine Species and Habitats Data (DASSH) and the United Kingdom Hydrographic Office (UKHO) bathymetry DAC. The full site data package including raw is also available on request from BGS.",
          },
          OrgForResourceObject: [
            { default: 'British Geological Survey (BGS)', langeng: 'British Geological Survey (BGS)' },
            {
              default: 'Department for Environment, Food and Rural Affairs',
              langeng: 'Department for Environment, Food and Rural Affairs',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'British Geological Survey (BGS)',
            langeng: 'British Geological Survey (BGS)',
          },
          contactForResource: [
            {
              organisationName: 'British Geological Survey (BGS)',
              role: 'custodian',
              email: 'enquiries@bgs.ac.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '+44 (0)131 667 1000',
              address: 'The Lyell Centre, Research Avenue South, Edinburgh, EH14 4AP, UK',
              deliveryPoint: 'The Lyell Centre, Research Avenue South',
              postalCode: 'EH14 4AP',
              city: 'Edinburgh',
              country: 'UK',
              administrativeArea: '',
            },
            {
              organisationName: 'Department for Environment, Food and Rural Affairs',
              role: 'originator',
              email: 'offshoredata@bgs.ac.uk',
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
          originatorOrgForResourceObject: {
            default: 'Department for Environment, Food and Rural Affairs',
            langeng: 'Department for Environment, Food and Rural Affairs',
          },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'NDGO0001',
              langeng: 'NDGO0001',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
            {
              default: 'Geology',
              langeng: 'Geology',
              link: 'http://www.eionet.europa.eu/gemet/concept?cp=13&langcode=en&ns=5',
              key: 'http://www.eionet.europa.eu/gemet/concept?cp=13&langcode=en&ns=5',
            },
            {
              default: 'Lithology',
              langeng: 'Lithology',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/LITH',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/LITH',
            },
            {
              default: 'soil and sediment',
              langeng: 'soil and sediment',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/SD',
              key: 'http://vocab.nerc.ac.uk/collection/L13/current/SD',
            },
            {
              default: 'crust',
              langeng: 'crust',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/CR',
              key: 'http://vocab.nerc.ac.uk/collection/L13/current/CR',
            },
            { default: 'Farne', langeng: 'Farne' },
            { default: 'Northern North Sea', langeng: 'Northern North Sea' },
            { default: 'NORTH SEA', langeng: 'NORTH SEA' },
          ],
          tagNumber: '8',
          isOpenData: 'false',
          'keywordType-place': [
            { default: 'Farne', langeng: 'Farne' },
            { default: 'Northern North Sea', langeng: 'Northern North Sea' },
            { default: 'NORTH SEA', langeng: 'NORTH SEA' },
          ],
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'NDGO0001',
              langeng: 'NDGO0001',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
          ],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Geology',
              langeng: 'Geology',
              link: 'http://www.eionet.europa.eu/gemet/concept?cp=13&langcode=en&ns=5',
            },
          ],
          th_SeaDataNetParameterDiscoveryVocabularyP021Number: '1',
          th_SeaDataNetParameterDiscoveryVocabularyP021: [
            { default: 'Lithology', langeng: 'Lithology', link: 'http://vocab.nerc.ac.uk/collection/P02/current/LITH' },
          ],
          'th_SeaVoXVerticalCo-ordinateCoveragesL131Number': '2',
          'th_SeaVoXVerticalCo-ordinateCoveragesL131': [
            {
              default: 'soil and sediment',
              langeng: 'soil and sediment',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/SD',
            },
            { default: 'crust', langeng: 'crust', link: 'http://vocab.nerc.ac.uk/collection/L13/current/CR' },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'NDGO0001',
                  langeng: 'NDGO0001',
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
                },
              ],
            },
            'th_GEMET-INSPIREthemesversion1-0': {
              title: 'GEMET - INSPIRE themes, version 1.0',
              theme: '',
              keywords: [
                {
                  default: 'Geology',
                  langeng: 'Geology',
                  link: 'http://www.eionet.europa.eu/gemet/concept?cp=13&langcode=en&ns=5',
                },
              ],
            },
            th_SeaDataNetParameterDiscoveryVocabularyP021: {
              title: 'SeaDataNet Parameter Discovery Vocabulary (P021)',
              theme: '',
              keywords: [
                {
                  default: 'Lithology',
                  langeng: 'Lithology',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/LITH',
                },
              ],
            },
            'th_SeaVoXVerticalCo-ordinateCoveragesL131': {
              title: 'SeaVoX Vertical Co-ordinate Coverages (L131)',
              theme: '',
              keywords: [
                {
                  default: 'soil and sediment',
                  langeng: 'soil and sediment',
                  link: 'http://vocab.nerc.ac.uk/collection/L13/current/SD',
                },
                { default: 'crust', langeng: 'crust', link: 'http://vocab.nerc.ac.uk/collection/L13/current/CR' },
              ],
            },
          },
          cl_topic: [
            {
              key: 'geoscientificInformation',
              default: 'Geoscientific information',
              langeng: 'Geoscientific information',
            },
          ],
          resolutionDistance: ['5 urn:ogc:def:uom:EPSG::9001'],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                "The copyright of materials derived from the British Geological Survey's work is vested in the Natural Environment Research Council [NERC]. No part of this work may be reproduced or transmitted in any form or by any means, or stored in a retrieval system of any nature, without the prior permission of the copyright holder, via the BGS Intellectual Property Rights Manager. Use by customers of information provided by the BGS, is at the customer's own risk. In view of the disparate sources of information at BGS's disposal, including such material donated to BGS, that BGS accepts in good faith as being accurate, the Natural Environment Research Council (NERC) gives no warranty, expressed or implied, as to the quality or accuracy of the information supplied, or to the information's suitability for any use. NERC/BGS accepts no liability whatever in respect of loss, damage, injury or other occurence however caused.",
              langeng:
                "The copyright of materials derived from the British Geological Survey's work is vested in the Natural Environment Research Council [NERC]. No part of this work may be reproduced or transmitted in any form or by any means, or stored in a retrieval system of any nature, without the prior permission of the copyright holder, via the BGS Intellectual Property Rights Manager. Use by customers of information provided by the BGS, is at the customer's own risk. In view of the disparate sources of information at BGS's disposal, including such material donated to BGS, that BGS accepts in good faith as being accurate, the Natural Environment Research Council (NERC) gives no warranty, expressed or implied, as to the quality or accuracy of the information supplied, or to the information's suitability for any use. NERC/BGS accepts no liability whatever in respect of loss, damage, injury or other occurence however caused.",
            },
          ],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default:
                'unrestricted use, copyright acknowledgement - Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced Department for Environment, Food and Rural Affairs materials "Contains Department for Environment, Food and Rural Affairs materials @Crown Copyright [year]"',
              langeng:
                'unrestricted use, copyright acknowledgement - Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced Department for Environment, Food and Rural Affairs materials "Contains Department for Environment, Food and Rural Affairs materials @Crown Copyright [year]"',
            },
          ],
          licenseObject: [
            {
              default:
                "The copyright of materials derived from the British Geological Survey's work is vested in the Natural Environment Research Council [NERC]. No part of this work may be reproduced or transmitted in any form or by any means, or stored in a retrieval system of any nature, without the prior permission of the copyright holder, via the BGS Intellectual Property Rights Manager. Use by customers of information provided by the BGS, is at the customer's own risk. In view of the disparate sources of information at BGS's disposal, including such material donated to BGS, that BGS accepts in good faith as being accurate, the Natural Environment Research Council (NERC) gives no warranty, expressed or implied, as to the quality or accuracy of the information supplied, or to the information's suitability for any use. NERC/BGS accepts no liability whatever in respect of loss, damage, injury or other occurence however caused.",
              langeng:
                "The copyright of materials derived from the British Geological Survey's work is vested in the Natural Environment Research Council [NERC]. No part of this work may be reproduced or transmitted in any form or by any means, or stored in a retrieval system of any nature, without the prior permission of the copyright holder, via the BGS Intellectual Property Rights Manager. Use by customers of information provided by the BGS, is at the customer's own risk. In view of the disparate sources of information at BGS's disposal, including such material donated to BGS, that BGS accepts in good faith as being accurate, the Natural Environment Research Council (NERC) gives no warranty, expressed or implied, as to the quality or accuracy of the information supplied, or to the information's suitability for any use. NERC/BGS accepts no liability whatever in respect of loss, damage, injury or other occurence however caused.",
            },
          ],
          extentIdentifierObject: [
            { default: 'Farne', langeng: 'Farne' },
            { default: 'Northern North Sea', langeng: 'Northern North Sea' },
            { default: 'NORTH SEA', langeng: 'NORTH SEA' },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-1.1745, 55.5975],
                [-1.1666, 55.5975],
                [-1.1666, 55.6047],
                [-1.1745, 55.6047],
                [-1.1745, 55.5975],
              ],
            ],
          },
          location: '55.6011,-1.17055',
          resourceTemporalExtentDateRange: [{ gte: '2014-03-13T00:00:00.000Z', lte: '2014-03-31T00:00:00.000Z' }],
          resourceTemporalExtentDetails: [{ start: { date: '2014-03-13' }, end: { date: '2014-03-31' } }],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::4326'],
          crsDetails: [
            {
              ciTitle: 'www.epsg.org',
              type: 'revision',
              date: '2005',
              code: 'urn:ogc:def:crs:EPSG::4326',
              codeSpace: 'OGP',
              name: 'urn:ogc:def:crs:EPSG::4326',
              url: '',
            },
          ],
          specificationConformance: [
            {
              title:
                'INSPIRE Implementing rules laying down technical arrangements for the interoperability and harmonisation of unknown theme',
              date: '2011',
              explanation: 'See the referenced specification',
              pass: 'false',
            },
          ],
          conformTo_INSPIREImplementingruleslayingdowntechnicalarrangementsfortheinteroperabilityandharmonisationofunknowntheme:
            'false',
          lineageObject: {
            default:
              'Sample equipment types used included: Grab: Amon or Hamon. CEFAS was contracted to undertake the survey on behalf of Department for Environment, Food and Rural Affairs. Data were gathered on RV Cefas Endeavour, using pre-planned survey target locations prepared by Cefas and JNCC. For more detailed information see the Cruise Report.',
            langeng:
              'Sample equipment types used included: Grab: Amon or Hamon. CEFAS was contracted to undertake the survey on behalf of Department for Environment, Food and Rural Affairs. Data were gathered on RV Cefas Endeavour, using pre-planned survey target locations prepared by Cefas and JNCC. For more detailed information see the Cruise Report.',
          },
          OrgForDistributionObject: {
            default: 'British Geological Survey (BGS)',
            langeng: 'British Geological Survey (BGS)',
          },
          distributorOrgForDistributionObject: {
            default: 'British Geological Survey (BGS)',
            langeng: 'British Geological Survey (BGS)',
          },
          contactForDistribution: [
            {
              organisationName: 'British Geological Survey (BGS)',
              role: 'distributor',
              email: 'enquiries@bgs.ac.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '+44 (0)131 667 1000',
              address: 'The Lyell Centre, Research Avenue South, Edinburgh, EH14 4AP, UK',
              deliveryPoint: 'The Lyell Centre, Research Avenue South',
              postalCode: 'EH14 4AP',
              city: 'Edinburgh',
              country: 'UK',
              administrativeArea: '',
            },
          ],
          linkUrl: 'http://mapapps2.bgs.ac.uk/geoindex_offshore/home.html?cruise=MCZ_FRNE_cend0514',
          linkProtocol: ['http-wr'],
          linkUrlProtocolHTTP: 'http://mapapps2.bgs.ac.uk/geoindex_offshore/home.html?cruise=MCZ_FRNE_cend0514',
          link: [
            {
              protocol: 'HTTP',
              mimeType: '',
              urlObject: { default: 'http://mapapps2.bgs.ac.uk/geoindex_offshore/home.html?cruise=MCZ_FRNE_cend0514' },
              nameObject: { default: 'BGS Offshore Geoindex', langeng: 'BGS Offshore Geoindex' },
              descriptionObject: {
                default:
                  'GeoIndex allows users to search for information about BGS data collections covering the UK and other areas world wide. Access is free, the interface is easy to use, and it has been developed to enable users to check coverage of different types of data and find out some background information about the data. More detailed information can be obtained by further enquiry through the website.',
                langeng:
                  'GeoIndex allows users to search for information about BGS data collections covering the UK and other areas world wide. Access is free, the interface is easy to use, and it has been developed to enable users to check coverage of different types of data and find out some background information about the data. More detailed information can be obtained by further enquiry through the website.',
              },
              function: 'search',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '0acff943-5ea1-225b-e054-002128a47908',
          mainLanguageFullName: '',
          OrgResolutionDistance: { distance: '5', uom: 'urn:ogc:def:uom:EPSG::9001' },
          OrgGeographicElement: [
            { ciTitle: 'BGS Gazetteer', type: 'revision', date: '2024-04-12', code: 'Farne', url: '' },
            {
              ciTitle: 'Charting Progress 2: Regional Sea Boundaries',
              type: 'creation',
              date: '2009-06-18',
              code: 'Northern North Sea',
              url: '',
            },
            {
              ciTitle: 'The SeaVoX Salt and Fresh Water Body Gazetteer: Sub-Ocean Category',
              type: 'creation',
              date: '1954-01-01',
              code: 'NORTH SEA',
              url: '',
            },
          ],
          OrgResourceTitleObject: {
            default:
              'Department for Environment, Food and Rural Affairs (DEFRA) MCZ: Farnes East: Benthic sampling and Video Survey FRNE_cend0514: Southern North Sea (13/03/2014 to 31/03/2014)',
            langeng:
              'Department for Environment, Food and Rural Affairs (DEFRA) MCZ: Farnes East: Benthic sampling and Video Survey FRNE_cend0514: Southern North Sea (13/03/2014 to 31/03/2014)',
          },
          OrgResourceIdentifier: { code: 'BGS_CMD_REF853', codeSpace: 'British Geological Survey', link: '' },
          OrgResourceConstraints: [
            { OrgAccessConstraints: ['otherRestrictions', ''] },
            {
              OrgUseConstraints: ['otherRestrictions'],
              OrgOtherConstraints: [
                "The copyright of materials derived from the British Geological Survey's work is vested in the Natural Environment Research Council [NERC]. No part of this work may be reproduced or transmitted in any form or by any means, or stored in a retrieval system of any nature, without the prior permission of the copyright holder, via the BGS Intellectual Property Rights Manager. Use by customers of information provided by the BGS, is at the customer's own risk. In view of the disparate sources of information at BGS's disposal, including such material donated to BGS, that BGS accepts in good faith as being accurate, the Natural Environment Research Council (NERC) gives no warranty, expressed or implied, as to the quality or accuracy of the information supplied, or to the information's suitability for any use. NERC/BGS accepts no liability whatever in respect of loss, damage, injury or other occurence however caused.",
              ],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_0acff943-5ea1-225b-e054-002128a47908',
              sourceSystemReferenceID: 'Medin_0acff943-5ea1-225b-e054-002128a47908',
            },
          },
          OrgNceaClassifiers: [{ name: 'Natural asset', code: 'lvl1-001' }],
          recordOwner: 'admin admin',
          uuid: '0acff943-5ea1-225b-e054-002128a47908',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T10:07:06.455Z',
          id: '143828',
          createDate: '2024-10-18T10:08:41.639Z',
          isPublishedToIntranet: 'false',
          owner: '1',
          groupOwner: '2',
          logo: '/images/logos/82f7f193-d9d1-4f0c-b211-f631b46538f0.png',
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
          sourceCatalogue: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
        },
      },
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: 'ad049067-4107-3647-9a95-cda0ead55ca8',
        _score: 4.8296547,
        _source: {
          status: 'active',
          docType: 'metadata',
          document: '',
          metadataIdentifier: 'ad049067-4107-3647-9a95-cda0ead55ca8',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: { default: '2.3.8', langeng: '2.3.8' },
          indexingDate: '2024-10-22T02:22:26Z',
          dateStamp: '2021-05-12T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: { default: 'Archaeology Data Service', langeng: 'Archaeology Data Service' },
          pointOfContactOrgObject: { default: 'Archaeology Data Service', langeng: 'Archaeology Data Service' },
          contact: [
            {
              organisationName: 'Archaeology Data Service',
              organisationValue: 'ea',
              role: 'pointOfContact',
              email: 'help@archaeologydataservice.ac.uk',
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
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
            },
          ],
          cl_maintenanceAndUpdateFrequency: [
            {
              key: 'notPlanned',
              default: 'Not planned',
              langeng: 'Not planned',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_MaintenanceFrequencyCode',
              text: 'notPlanned',
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
          resourceTitleObject: {
            default: 'SEABED PREHISTORY: GAUGING EFFECTS OF MARINE AGGREGATE DREDGING - GREAT YARMOUTH (AREA 254)',
            langeng: 'SEABED PREHISTORY: GAUGING EFFECTS OF MARINE AGGREGATE DREDGING - GREAT YARMOUTH (AREA 254)',
          },
          publicationDateForResource: ['2011-03-18T00:00:00.000Z', '2011-03-18T00:00:00.000Z'],
          publicationYearForResource: ['2011', '2011'],
          publicationMonthForResource: ['2011-03', '2011-03'],
          creationDateForResource: ['2006-12-31T00:00:00.000Z', '2006-12-31T00:00:00.000Z'],
          creationYearForResource: ['2006', '2006'],
          creationMonthForResource: ['2006-12', '2006-12'],
          revisionDateForResource: ['2011-03-18T00:00:00.000Z', '2011-03-18T00:00:00.000Z'],
          revisionYearForResource: ['2011', '2011'],
          revisionMonthForResource: ['2011-03', '2011-03'],
          resourceDate: [
            { type: 'publication', date: '2011-03-18T00:00:00.000Z' },
            { type: 'creation', date: '2006-12-31T00:00:00.000Z' },
            { type: 'revision', date: '2011-03-18T00:00:00.000Z' },
          ],
          resourceTemporalDateRange: [
            { gte: '2011-03-18T00:00:00.000Z', lte: '2011-03-18T00:00:00.000Z' },
            { gte: '2006-12-31T00:00:00.000Z', lte: '2006-12-31T00:00:00.000Z' },
            { gte: '2005-01-01T00:00:00.000Z', lte: '2006-12-31T00:00:00.000Z' },
          ],
          resourceIdentifier: [{ code: 'englishh1-88889', codeSpace: 'http://oasis.ac.uk', link: '' }],
          resourceAbstractObject: {
            default:
              "Geophysical and Geotechnical survey of a 64ha area located in the south-eastern part of dredging area 254 (licensed to United Marine Aggregates Ltd), some 10km east of Great Yarmouth. The survey was commissionned by English Heritage and funded though Round 2 of the Aggregate Levy Sustainability Fund (ALSF). The survey was part of the wider ALSF 'Seabed Prehistory' project, and comprised sub-bottom profiling, sidescan sonar, single beam echosounder and vibrocores.The digital elevation model of the area's bathymetry revealed a mound, and sub-bottom profiler data indicated coarse sand and gravel overlain by intermittent fiine-grained sediment potentially containing peat, which was in turn overlain by gravelly sand. The vibrocores were assessed for polen, molluscan, waterlogged plant, diatom and other remains, and yielded charcoal deposited as early as the Cromerian Complex period. (Study area coords: E424329, N5827029; E425224, N5827037; E424319, N5826238; E425219, N2856240 - WGS84, UTM zone 31).",
            langeng:
              "Geophysical and Geotechnical survey of a 64ha area located in the south-eastern part of dredging area 254 (licensed to United Marine Aggregates Ltd), some 10km east of Great Yarmouth. The survey was commissionned by English Heritage and funded though Round 2 of the Aggregate Levy Sustainability Fund (ALSF). The survey was part of the wider ALSF 'Seabed Prehistory' project, and comprised sub-bottom profiling, sidescan sonar, single beam echosounder and vibrocores.The digital elevation model of the area's bathymetry revealed a mound, and sub-bottom profiler data indicated coarse sand and gravel overlain by intermittent fiine-grained sediment potentially containing peat, which was in turn overlain by gravelly sand. The vibrocores were assessed for polen, molluscan, waterlogged plant, diatom and other remains, and yielded charcoal deposited as early as the Cromerian Complex period. (Study area coords: E424329, N5827029; E425224, N5827037; E424319, N5826238; E425219, N2856240 - WGS84, UTM zone 31).",
          },
          OrgForResourceObject: [
            { default: 'Archaeology Data Service', langeng: 'Archaeology Data Service' },
            { default: 'Archaeology Data Service', langeng: 'Archaeology Data Service' },
          ],
          originatorOrgForResourceObject: { default: 'Archaeology Data Service', langeng: 'Archaeology Data Service' },
          contactForResource: [
            {
              organisationName: 'Archaeology Data Service',
              role: 'originator',
              email: 'help@archaeologydataservice.ac.uk',
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
            {
              organisationName: 'Archaeology Data Service',
              role: 'custodian',
              email: 'help@archaeologydataservice.ac.uk',
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
          custodianOrgForResourceObject: { default: 'Archaeology Data Service', langeng: 'Archaeology Data Service' },
          supplementalInformationObject: {
            default:
              'Tizzard, L., Russel, J., Paddenberg, D. (2008) Seabed Prehistory:Gauging the Effects of Marine Aggregate Dredgin - Final Report: Volume IV - Great Yarmouth, 57422.34. Wessex Archaeology: Salisbury',
            langeng:
              'Tizzard, L., Russel, J., Paddenberg, D. (2008) Seabed Prehistory:Gauging the Effects of Marine Aggregate Dredgin - Final Report: Volume IV - Great Yarmouth, 57422.34. Wessex Archaeology: Salisbury',
          },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
            },
            {
              default: 'Protected sites',
              langeng: 'Protected sites',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/158/',
              key: 'http://vocab.nerc.ac.uk/collection/P22/current/158/',
            },
            {
              default: 'Marine archaeology',
              langeng: 'Marine archaeology',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/MARC/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/MARC/',
            },
            { default: 'Marine', langeng: 'Marine', link: '' },
          ],
          tagNumber: '4',
          isOpenData: 'false',
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
            },
          ],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Protected sites',
              langeng: 'Protected sites',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/158/',
            },
          ],
          th_SeaDataNetP021parameterdiscoveryvocabularyNumber: '1',
          th_SeaDataNetP021parameterdiscoveryvocabulary: [
            {
              default: 'Marine archaeology',
              langeng: 'Marine archaeology',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/MARC/',
            },
          ],
          th_UNESCONumber: '1',
          th_UNESCO: [{ default: 'Marine', langeng: 'Marine', link: '' }],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Marine Environmental Data and Information Network',
                  langeng: 'Marine Environmental Data and Information Network',
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001/',
                },
              ],
            },
            'th_GEMET-INSPIREthemesversion1-0': {
              title: 'GEMET - INSPIRE themes, version 1.0',
              theme: '',
              keywords: [
                {
                  default: 'Protected sites',
                  langeng: 'Protected sites',
                  link: 'http://vocab.nerc.ac.uk/collection/P22/current/158/',
                },
              ],
            },
            th_SeaDataNetP021parameterdiscoveryvocabulary: {
              title: 'SeaDataNet P021 parameter discovery vocabulary',
              theme: '',
              keywords: [
                {
                  default: 'Marine archaeology',
                  langeng: 'Marine archaeology',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/MARC/',
                },
              ],
            },
            th_UNESCO: { title: 'UNESCO', theme: '', keywords: [{ default: 'Marine', langeng: 'Marine', link: '' }] },
          },
          cl_topic: [{ key: 'environment', default: 'Environment', langeng: 'Environment' }],
          MD_ConstraintsUseLimitationObject: [{ default: 'Restrictions Apply', langeng: 'Restrictions Apply' }],
          MD_LegalConstraintsOtherConstraintsObject: [
            { default: 'Terms and Conditions apply to reuse.', langeng: 'Terms and Conditions apply to reuse.' },
          ],
          licenseObject: [
            { default: 'Terms and Conditions apply to reuse.', langeng: 'Terms and Conditions apply to reuse.' },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [1.8708, 52.5996],
                [1.871, 52.5996],
                [1.871, 52.5998],
                [1.8708, 52.5998],
                [1.8708, 52.5996],
              ],
            ],
          },
          location: '52.5997,1.8709',
          resourceTemporalExtentDateRange: [{ gte: '2005-01-01T00:00:00.000Z', lte: '2006-12-31T00:00:00.000Z' }],
          resourceTemporalExtentDetails: [{ start: { date: '2005-01-01' }, end: { date: '2006-12-31' } }],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::4326'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::4326',
              codeSpace: '',
              name: 'urn:ogc:def:crs:EPSG::4326',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'This metadata was prepared by the creator entered into the OASIS system hosted by the Archaeology Data Service.',
            langeng:
              'This metadata was prepared by the creator entered into the OASIS system hosted by the Archaeology Data Service.',
          },
          OrgForDistributionObject: { default: 'Archaeology Data Service', langeng: 'Archaeology Data Service' },
          distributorOrgForDistributionObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
          contactForDistribution: [
            {
              organisationName: 'Archaeology Data Service',
              role: 'distributor',
              email: 'help@archaeologydataservice.ac.uk',
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
          linkUrl: 'http://dx.doi.org/10.5284/1009323',
          linkProtocol: ['http-wr'],
          linkUrlProtocol: 'http://dx.doi.org/10.5284/1009323',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: { default: 'http://dx.doi.org/10.5284/1009323' },
              descriptionObject: {
                default: 'A link to the web service or dataset',
                langeng: 'A link to the web service or dataset',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: 'ad049067-4107-3647-9a95-cda0ead55ca8',
          mainLanguageFullName: '',
          OrgSupplementalInformationObject: {
            default:
              'Tizzard, L., Russel, J., Paddenberg, D. (2008) Seabed Prehistory:Gauging the Effects of Marine Aggregate Dredgin - Final Report: Volume IV - Great Yarmouth, 57422.34. Wessex Archaeology: Salisbury',
            langeng:
              'Tizzard, L., Russel, J., Paddenberg, D. (2008) Seabed Prehistory:Gauging the Effects of Marine Aggregate Dredgin - Final Report: Volume IV - Great Yarmouth, 57422.34. Wessex Archaeology: Salisbury',
          },
          OrgResourceTitleObject: {
            default: 'SEABED PREHISTORY: GAUGING EFFECTS OF MARINE AGGREGATE DREDGING - GREAT YARMOUTH (AREA 254)',
            langeng: 'SEABED PREHISTORY: GAUGING EFFECTS OF MARINE AGGREGATE DREDGING - GREAT YARMOUTH (AREA 254)',
          },
          OrgResourceIdentifier: { code: 'englishh1-88889', codeSpace: 'http://oasis.ac.uk', link: '' },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: ['Terms and Conditions apply to reuse.'],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_ad049067-4107-3647-9a95-cda0ead55ca8',
              sourceSystemReferenceID: 'Medin_ad049067-4107-3647-9a95-cda0ead55ca8',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [{ name: 'Terrestrial and freshwater habitats', code: 'lv2-001' }],
            },
          ],
          recordOwner: 'admin admin',
          uuid: 'ad049067-4107-3647-9a95-cda0ead55ca8',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:38:08.607Z',
          id: '153855',
          createDate: '2024-10-18T09:40:28.712Z',
          isPublishedToIntranet: 'false',
          owner: '1',
          groupOwner: '2',
          logo: '/images/logos/82f7f193-d9d1-4f0c-b211-f631b46538f0.png',
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
          sourceCatalogue: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
        },
      },
    ],
  },
};

export const restrictiveFilteredData = {
  took: 3,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: { total: { value: 0, relation: 'eq' }, max_score: 11.707571, hits: [] },
};
