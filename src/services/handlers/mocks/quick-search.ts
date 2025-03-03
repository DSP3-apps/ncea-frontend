export const QUICK_SEARCH_RESPONSE = {
  took: 3,
  timed_out: false,
  _shards: {
    total: 1,
    successful: 1,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 20,
      relation: 'eq',
    },
    max_score: 11.707571,
    hits: [
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '263846b9eee8aa345e9b1ba04fdedade',
        _score: 11.707571,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '263846b9eee8aa345e9b1ba04fdedade',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:04:48Z',
          dateStamp: '2021-05-26T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'English Heritage',
            langeng: 'English Heritage',
          },
          pointOfContactOrgObject: {
            default: 'English Heritage',
            langeng: 'English Heritage',
          },
          contact: [
            {
              organisationName: 'English Heritage',
              organisationValue: 'ne', // added for filtering
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
            {
              type: 'publication',
              date: '2011-08-31T00:00:00.000Z',
            },
            {
              type: 'creation',
              date: '2011-08-31T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2011-08-31T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'NETGAIN0019',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              "A map showing peat exposure within the intertidal area adjacent to Holme-next-the-Sea was recieved from English Heritage. The map shows the location of Holme I (the former site of the original 'seahenge') and Holme II which is another timber henge structure approximately 100m to the east centred on TF7122445239 with an estimated maximum diameter of 13.20m. The two end (green) points show the transect line, which was used to support identification of a possible Reference Area. The most recent site visit by Norfolk County Council staff was in April 2011 and it was noted that the extent of identifiable peat exposure was broadly similar to the extent indentified in 2003 (as per attached map).",
            langeng:
              "A map showing peat exposure within the intertidal area adjacent to Holme-next-the-Sea was recieved from English Heritage. The map shows the location of Holme I (the former site of the original 'seahenge') and Holme II which is another timber henge structure approximately 100m to the east centred on TF7122445239 with an estimated maximum diameter of 13.20m. The two end (green) points show the transect line, which was used to support identification of a possible Reference Area. The most recent site visit by Norfolk County Council staff was in April 2011 and it was noted that the extent of identifiable peat exposure was broadly similar to the extent indentified in 2003 (as per attached map).",
          },
          OrgForResourceObject: [
            {
              default: 'English Heritage',
              langeng: 'English Heritage',
            },
            {
              default: 'English Heritage',
              langeng: 'English Heritage',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'English Heritage',
            langeng: 'English Heritage',
          },
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
          custodianOrgForResourceObject: {
            default: 'English Heritage',
            langeng: 'English Heritage',
          },
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
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
          ],
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
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Copyright',
              langeng: 'Copyright',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'Copyright',
              langeng: 'Copyright',
            },
          ],
          licenseObject: [
            {
              default: 'Copyright',
              langeng: 'Copyright',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
          ],
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
          resourceTemporalExtentDateRange: [
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2011-01-01',
              },
              end: {
                date: '2011-08-31',
              },
            },
          ],
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
          OrgForDistributionObject: {
            default: 'English Heritage',
            langeng: 'English Heritage',
          },
          distributorOrgForDistributionObject: {
            default: 'English Heritage',
            langeng: 'English Heritage',
          },
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
          OrgResourceIdentifier: {
            code: 'NETGAIN0019',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: ['Copyright'],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_263846b9eee8aa345e9b1ba04fdedade',
              sourceSystemReferenceID: 'Medin_263846b9eee8aa345e9b1ba04fdedade',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: 'd386067ffbcc9d82cf307d8e79db5ba2',
        _score: 10.281776,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: 'd386067ffbcc9d82cf307d8e79db5ba2',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:31:16Z',
          dateStamp: '2021-05-28T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          pointOfContactOrgObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          contact: [
            {
              organisationName: 'DASSH, The Archive for Marine Species and Habitat Data',
              organisationValue: 'cefas', // added for filtering
              role: 'pointOfContact',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'John (Grimsby and Cleethorpes Yacht Club) Dinwiddy',
              position: 'Grismby and Cleethorpes Yacht Club, Flour Square, Lockhill, Grimsby, DN37',
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
            default: '2011 Net Gain, location of peat and clay exposures, Holme-next-the-sea',
            langeng: '2011 Net Gain, location of peat and clay exposures, Holme-next-the-sea',
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
            {
              type: 'publication',
              date: '2011-08-31T00:00:00.000Z',
            },
            {
              type: 'creation',
              date: '2011-08-31T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2011-08-31T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'NETGAIN0017',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'Survey for peat and clay for a potential reference area located near Holme-next-the-sea. Survey completed by Net Gain Liaison Officer, Dan Davis and John Dinwiddy (Recreational Yachting) in February, 2011 and report produced "Visit to potential reference site-Holme-next-the-sea (Gore Point). Coordinates, locations and images were produced to support the presence of peat and clay exposures in this locations for the subsequent RA 7.',
            langeng:
              'Survey for peat and clay for a potential reference area located near Holme-next-the-sea. Survey completed by Net Gain Liaison Officer, Dan Davis and John Dinwiddy (Recreational Yachting) in February, 2011 and report produced "Visit to potential reference site-Holme-next-the-sea (Gore Point). Coordinates, locations and images were produced to support the presence of peat and clay exposures in this locations for the subsequent RA 7.',
          },
          OrgForResourceObject: [
            {
              default: 'Net Gain: The North Sea Marine Conservation Zones Project',
              langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
            },
            {
              default: 'Net Gain: The North Sea Marine Conservation Zones Project',
              langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'Net Gain: The North Sea Marine Conservation Zones Project',
            langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
          },
          contactForResource: [
            {
              organisationName: 'Net Gain: The North Sea Marine Conservation Zones Project',
              role: 'originator',
              email: 'info@netgainmcz.org',
              website: '',
              logo: '',
              individual: '',
              position: 'Marine Data Manager',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Net Gain: The North Sea Marine Conservation Zones Project',
              role: 'custodian',
              email: 'info@netgainmcz.org',
              website: '',
              logo: '',
              individual: '',
              position: 'Marine Data Manager',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Net Gain: The North Sea Marine Conservation Zones Project',
            langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
          },
          supplementalInformationObject: {
            default:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
            langeng:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
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
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: '',
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
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
            },
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
            {
              default: 'unknown',
              langeng: 'unknown',
            },
          ],
          tagNumber: '8',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
            {
              default: 'unknown',
              langeng: 'unknown',
            },
          ],
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
          th_INSPIRETHEMESNumber: '1',
          th_INSPIRETHEMES: [
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: '',
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
          th_UNESCONumber: '1',
          th_UNESCO: [
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
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
            th_INSPIRETHEMES: {
              title: 'INSPIRE THEMES',
              theme: '',
              keywords: [
                {
                  default: 'Habitats and biotopes',
                  langeng: 'Habitats and biotopes',
                  link: '',
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
            th_UNESCO: {
              title: 'UNESCO',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                  link: '',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Copyright',
              langeng: 'Copyright',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'Acknowledgement of Net Gain',
              langeng: 'Acknowledgement of Net Gain',
            },
          ],
          licenseObject: [
            {
              default: 'Acknowledgement of Net Gain',
              langeng: 'Acknowledgement of Net Gain',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
            {
              default: 'unknown',
              langeng: 'unknown',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [0.5216, 52.973],
                [0.5575, 52.973],
                [0.5575, 52.9758],
                [0.5216, 52.9758],
                [0.5216, 52.973],
              ],
            ],
          },
          location: '52.9744,0.53955',
          resourceTemporalExtentDateRange: [
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2011-01-01',
              },
              end: {
                date: '2011-08-31',
              },
            },
          ],
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
              'Coordinates collected by Dan and John during their survey have been digitised to be used to provide guidance as to the location of peat and clay exposures.',
            langeng:
              'Coordinates collected by Dan and John during their survey have been digitised to be used to provide guidance as to the location of peat and clay exposures.',
          },
          OrgForDistributionObject: {
            default: 'Natural England',
            langeng: 'Natural England',
          },
          distributorOrgForDistributionObject: {
            default: 'Natural England',
            langeng: 'Natural England',
          },
          contactForDistribution: [
            {
              organisationName: 'Natural England',
              role: 'distributor',
              email: 'enquiries@naturalengland.org.uk',
              website: '',
              logo: '',
              individual: '',
              position: 'Data Manager',
              phone: '+44 (0)300 060 3900',
              address: 'Foss House, Kings Pool, 1-2 Peasholme Green, York, YO1 7PX',
              deliveryPoint: 'Foss House, Kings Pool, 1-2 Peasholme Green',
              postalCode: 'YO1 7PX',
              city: 'York',
              country: '',
              administrativeArea: '',
            },
          ],
          linkUrl: [
            'http://publications.naturalengland.org.uk/publication/1466980',
            'http://publications.naturalengland.org.uk',
          ],
          linkProtocol: ['http-wr', 'http-wr'], // changed for filtering
          linkUrlProtocol: [
            'http://publications.naturalengland.org.uk/publication/1466980',
            'http://publications.naturalengland.org.uk',
          ],
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'http://publications.naturalengland.org.uk/publication/1466980',
              },
              nameObject: {
                default: 'Natural England page - Regional MCZ project final report: Net Gain (MCZ004)',
                langeng: 'Natural England page - Regional MCZ project final report: Net Gain (MCZ004)',
              },
              descriptionObject: {
                default: 'A link to the web service or dataset',
                langeng: 'A link to the web service or dataset',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'http://publications.naturalengland.org.uk',
              },
              nameObject: {
                default: 'Natural England publications website homepage',
                langeng: 'Natural England publications website homepage',
              },
              descriptionObject: {
                default: 'A link to the general host site',
                langeng: 'A link to the general host site',
              },
              function: '',
              applicationProfile: '',
              group: 1,
            },
          ],
          recordGroup: 'd386067ffbcc9d82cf307d8e79db5ba2',
          mainLanguageFullName: '',
          OrgGeographicElement: [
            {
              ciTitle: 'Charting Progress 2 Sea Areas',
              type: 'creation',
              date: '2009-06-18',
              code: 'Southern North Sea',
              url: '',
            },
            {
              ciTitle: 'SeaDataNet vertical extent keywords',
              type: 'revision',
              date: '2010-01-01',
              code: 'unknown',
              url: '',
            },
          ],
          OrgSupplementalInformationObject: {
            default:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
            langeng:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
          },
          OrgResourceTitleObject: {
            default: '2011 Net Gain, location of peat and clay exposures, Holme-next-the-sea',
            langeng: '2011 Net Gain, location of peat and clay exposures, Holme-next-the-sea',
          },
          OrgResourceIdentifier: {
            code: 'NETGAIN0017',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: ['Acknowledgement of Net Gain'],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_d386067ffbcc9d82cf307d8e79db5ba2',
              sourceSystemReferenceID: 'Medin_d386067ffbcc9d82cf307d8e79db5ba2',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Generalist species (spanning multiple habitats)',
                  code: 'lv2-004',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: 'd386067ffbcc9d82cf307d8e79db5ba2',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:49:38.397Z',
          id: '158218',
          createDate: '2024-10-18T09:51:26.914Z',
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
        _id: 'efcf9dbf8f3a3a5a2f52b0d85596da8b',
        _score: 9.039342,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: 'efcf9dbf8f3a3a5a2f52b0d85596da8b',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:34:18Z',
          dateStamp: '2021-05-28T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          pointOfContactOrgObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          contact: [
            {
              organisationName: 'DASSH, The Archive for Marine Species and Habitat Data',
              organisationValue: 'cefas', // added for filtering
              role: 'pointOfContact',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'John (Grimsby and Cleethorpes Yacht Club) Dinwiddy',
              position: 'Grismby and Cleethorpes Yacht Club, Flour Square, Lockhill, Grimsby, DN37',
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
            default:
              '2011 Net Gain, location of peat and clay exposures polygon clipped to England coastline-Holme-next-the-sea',
            langeng:
              '2011 Net Gain, location of peat and clay exposures polygon clipped to England coastline-Holme-next-the-sea',
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
            {
              type: 'publication',
              date: '2011-08-31T00:00:00.000Z',
            },
            {
              type: 'creation',
              date: '2011-08-31T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2011-08-31T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'NETGAIN0018',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'Survey for peat and clay for a potential reference area located near Holme-next-the-sea. Survey completed by Net Gain Liaison Officer, Dan Davis and John Dinwiddy (Recreational Yachting) in February, 2011 and report produced "Visit to potential reference site-Holme-next-the-sea (Gore Point). Coordinates, locations and images were produced to support the presence of peat and clay exposures in this locations for the subsequent RA 7.',
            langeng:
              'Survey for peat and clay for a potential reference area located near Holme-next-the-sea. Survey completed by Net Gain Liaison Officer, Dan Davis and John Dinwiddy (Recreational Yachting) in February, 2011 and report produced "Visit to potential reference site-Holme-next-the-sea (Gore Point). Coordinates, locations and images were produced to support the presence of peat and clay exposures in this locations for the subsequent RA 7.',
          },
          OrgForResourceObject: [
            {
              default: 'Net Gain: The North Sea Marine Conservation Zones Project',
              langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
            },
            {
              default: 'Net Gain: The North Sea Marine Conservation Zones Project',
              langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'Net Gain: The North Sea Marine Conservation Zones Project',
            langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
          },
          contactForResource: [
            {
              organisationName: 'Net Gain: The North Sea Marine Conservation Zones Project',
              role: 'originator',
              email: 'info@netgainmcz.org',
              website: '',
              logo: '',
              individual: '',
              position: 'Marine Data Manager',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Net Gain: The North Sea Marine Conservation Zones Project',
              role: 'custodian',
              email: 'info@netgainmcz.org',
              website: '',
              logo: '',
              individual: '',
              position: 'Marine Data Manager',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Net Gain: The North Sea Marine Conservation Zones Project',
            langeng: 'Net Gain: The North Sea Marine Conservation Zones Project',
          },
          supplementalInformationObject: {
            default:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
            langeng:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
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
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: '',
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
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
            },
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
            {
              default: 'unknown',
              langeng: 'unknown',
            },
          ],
          tagNumber: '8',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
            {
              default: 'unknown',
              langeng: 'unknown',
            },
          ],
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
          th_INSPIRETHEMESNumber: '1',
          th_INSPIRETHEMES: [
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: '',
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
          th_UNESCONumber: '1',
          th_UNESCO: [
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
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
            th_INSPIRETHEMES: {
              title: 'INSPIRE THEMES',
              theme: '',
              keywords: [
                {
                  default: 'Habitats and biotopes',
                  langeng: 'Habitats and biotopes',
                  link: '',
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
            th_UNESCO: {
              title: 'UNESCO',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                  link: '',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Copyright',
              langeng: 'Copyright',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'Acknowledgement of Net Gain',
              langeng: 'Acknowledgement of Net Gain',
            },
          ],
          licenseObject: [
            {
              default: 'Acknowledgement of Net Gain',
              langeng: 'Acknowledgement of Net Gain',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
            {
              default: 'unknown',
              langeng: 'unknown',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [0.5217, 52.9672],
                [0.5401, 52.9672],
                [0.5401, 52.9744],
                [0.5217, 52.9744],
                [0.5217, 52.9672],
              ],
            ],
          },
          location: '52.9708,0.5309',
          resourceTemporalExtentDateRange: [
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2011-01-01',
              },
              end: {
                date: '2011-08-31',
              },
            },
          ],
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
              'Coordinates collected by Dan and John during their survey have been digitised to be used to provide guidance as to the location of peat and clay exposures. Using these coordinates a polygon was created which extended to the coast and clipped to the Net Gain boundary.',
            langeng:
              'Coordinates collected by Dan and John during their survey have been digitised to be used to provide guidance as to the location of peat and clay exposures. Using these coordinates a polygon was created which extended to the coast and clipped to the Net Gain boundary.',
          },
          OrgForDistributionObject: {
            default: 'Natural England',
            langeng: 'Natural England',
          },
          distributorOrgForDistributionObject: {
            default: 'Natural England',
            langeng: 'Natural England',
          },
          contactForDistribution: [
            {
              organisationName: 'Natural England',
              role: 'distributor',
              email: 'enquiries@naturalengland.org.uk',
              website: '',
              logo: '',
              individual: '',
              position: 'Data Manager',
              phone: '+44 (0)300 060 3900',
              address: 'Foss House, Kings Pool, 1-2 Peasholme Green, York, YO1 7PX',
              deliveryPoint: 'Foss House, Kings Pool, 1-2 Peasholme Green',
              postalCode: 'YO1 7PX',
              city: 'York',
              country: '',
              administrativeArea: '',
            },
          ],
          linkUrl: [
            'http://publications.naturalengland.org.uk/publication/1466980',
            'http://publications.naturalengland.org.uk',
          ],
          linkProtocol: ['http-wr', 'http-wr'], // changed for filtering
          linkUrlProtocol: [
            'http://publications.naturalengland.org.uk/publication/1466980',
            'http://publications.naturalengland.org.uk',
          ],
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'http://publications.naturalengland.org.uk/publication/1466980',
              },
              nameObject: {
                default: 'Natural England page - Regional MCZ project final report: Net Gain (MCZ004)',
                langeng: 'Natural England page - Regional MCZ project final report: Net Gain (MCZ004)',
              },
              descriptionObject: {
                default: 'A link to the web service or dataset',
                langeng: 'A link to the web service or dataset',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'http://publications.naturalengland.org.uk',
              },
              nameObject: {
                default: 'Natural England publications website homepage',
                langeng: 'Natural England publications website homepage',
              },
              descriptionObject: {
                default: 'A link to the general host site',
                langeng: 'A link to the general host site',
              },
              function: '',
              applicationProfile: '',
              group: 1,
            },
          ],
          recordGroup: 'efcf9dbf8f3a3a5a2f52b0d85596da8b',
          mainLanguageFullName: '',
          OrgGeographicElement: [
            {
              ciTitle: 'Charting Progress 2 Sea Areas',
              type: 'creation',
              date: '2009-06-18',
              code: 'Southern North Sea',
              url: '',
            },
            {
              ciTitle: 'SeaDataNet vertical extent keywords',
              type: 'revision',
              date: '2010-01-01',
              code: 'unknown',
              url: '',
            },
          ],
          OrgSupplementalInformationObject: {
            default:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
            langeng:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
          },
          OrgResourceTitleObject: {
            default:
              '2011 Net Gain, location of peat and clay exposures polygon clipped to England coastline-Holme-next-the-sea',
            langeng:
              '2011 Net Gain, location of peat and clay exposures polygon clipped to England coastline-Holme-next-the-sea',
          },
          OrgResourceIdentifier: {
            code: 'NETGAIN0018',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: ['Acknowledgement of Net Gain'],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_efcf9dbf8f3a3a5a2f52b0d85596da8b',
              sourceSystemReferenceID: 'Medin_efcf9dbf8f3a3a5a2f52b0d85596da8b',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Generalist species (spanning multiple habitats)',
                  code: 'lv2-004',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: 'efcf9dbf8f3a3a5a2f52b0d85596da8b',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:50:24.769Z',
          id: '159867',
          createDate: '2024-10-18T09:52:15.118Z',
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
        _id: 'dd9aa6b8e92f53c77370e6e9418d2be4',
        _score: 8.972845,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: 'dd9aa6b8e92f53c77370e6e9418d2be4',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:32:19Z',
          dateStamp: '2020-06-25T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          pointOfContactOrgObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          contact: [
            {
              organisationName: 'DASSH, The Archive for Marine Species and Habitat Data',
              organisationValue: 'cefas', // added for filtering
              role: 'pointOfContact',
              email: 'plearoyd@lincstrust.co.uk',
              website: '',
              logo: '',
              individual: 'Paul (Lincolnshire Wildlife Trust) Learoyd',
              position: 'Chief Executive, Lincolnshire Wildlife Trust, Banovallum, Manor House Stree',
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
              key: 'unknown',
              default: 'Unknown',
              langeng: 'Unknown',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_MaintenanceFrequencyCode',
              text: 'unknown',
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
              '2011 Lincolnshire Wildlife Trust, Location of Peat within and adjacent to Net Gain site 5, Lincs Belt',
            langeng:
              '2011 Lincolnshire Wildlife Trust, Location of Peat within and adjacent to Net Gain site 5, Lincs Belt',
          },
          publicationDateForResource: ['2011-08-31T00:00:00.000Z', '2011-08-31T00:00:00.000Z'],
          publicationYearForResource: ['2011', '2011'],
          publicationMonthForResource: ['2011-08', '2011-08'],
          resourceDate: [
            {
              type: 'publication',
              date: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2011-08-31T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'NETGAIN0020',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'The data displays indicative locations of peat exposures present within Net Gains Marine Conservation Zone Net Gain 5, Lincs Belt recieved from Lincolnshire Wildlife Trust.',
            langeng:
              'The data displays indicative locations of peat exposures present within Net Gains Marine Conservation Zone Net Gain 5, Lincs Belt recieved from Lincolnshire Wildlife Trust.',
          },
          OrgForResourceObject: [
            {
              default: 'DASSH, The Archive for Marine Species and Habitat Data',
              langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
            },
            {
              default: 'DASSH, The Archive for Marine Species and Habitat Data',
              langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          contactForResource: [
            {
              organisationName: 'DASSH, The Archive for Marine Species and Habitat Data',
              role: 'originator',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'David (Lincolnshire Wildlife Trust) Robinson',
              position: 'Lincolnshire Wildlife Trust',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'DASSH, The Archive for Marine Species and Habitat Data',
              role: 'custodian',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'David (Lincolnshire Wildlife Trust) Robinson',
              position: 'Lincolnshire Wildlife Trust',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          supplementalInformationObject: {
            default:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
            langeng:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
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
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
          ],
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
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Copyright',
              langeng: 'Copyright',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'Data should be acknowledged to David Robinson, Lincolnshire Wildlife Trust.',
              langeng: 'Data should be acknowledged to David Robinson, Lincolnshire Wildlife Trust.',
            },
          ],
          licenseObject: [
            {
              default: 'Data should be acknowledged to David Robinson, Lincolnshire Wildlife Trust.',
              langeng: 'Data should be acknowledged to David Robinson, Lincolnshire Wildlife Trust.',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Southern North Sea',
              langeng: 'Southern North Sea',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [0.2821, 53.1891],
                [0.3599, 53.1891],
                [0.3599, 53.3238],
                [0.2821, 53.3238],
                [0.2821, 53.1891],
              ],
            ],
          },
          location: '53.25645,0.321',
          resourceTemporalExtentDateRange: [
            {
              gte: '2011-01-01T00:00:00.000Z',
              lte: '2011-08-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2011-01-01',
              },
              end: {
                date: '2011-08-31',
              },
            },
          ],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::32431'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::32431',
              codeSpace: '',
              name: 'urn:ogc:def:crs:EPSG::32431',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'A map of the location and coordinates of peat within and adjacent to NG 5 was provided by Lincolnshire Wildlife Trust. The image provided was digitised and polygons created in a shapefile.This data was checked by the information provider Paul Leayrod (Lincolnshire Wildlife Trust), however it should be noted that this data is indicative of the peat location.\n If any sensitive species or biotope records are present within this dataset, they will have been removed. If you wish to request access to sensitive species records, please contact the metadata contact. The UK Sensitive Species list has been agreed by UK statutory bodies and relevant experts. It can be viewed here https://docs.nbnatlas.org/sensitive-species-list/. Please note sensitive species lists can vary across the UK.',
            langeng:
              'A map of the location and coordinates of peat within and adjacent to NG 5 was provided by Lincolnshire Wildlife Trust. The image provided was digitised and polygons created in a shapefile.This data was checked by the information provider Paul Leayrod (Lincolnshire Wildlife Trust), however it should be noted that this data is indicative of the peat location.\n If any sensitive species or biotope records are present within this dataset, they will have been removed. If you wish to request access to sensitive species records, please contact the metadata contact. The UK Sensitive Species list has been agreed by UK statutory bodies and relevant experts. It can be viewed here https://docs.nbnatlas.org/sensitive-species-list/. Please note sensitive species lists can vary across the UK.',
          },
          OrgForDistributionObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          distributorOrgForDistributionObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          contactForDistribution: [
            {
              organisationName: 'Data Archive for Seabed Species and Habitats (DASSH)',
              role: 'distributor',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: '',
              position: 'Data Manager',
              phone: '01752 633102',
              address:
                'Marine Biological Association of the UK,\n             The Laboratory,\n             Citadel Hill, Plymouth, PL1 2PB',
              deliveryPoint:
                'Marine Biological Association of the UK,\n             The Laboratory,\n             Citadel Hill',
              postalCode: 'PL1 2PB',
              city: 'Plymouth',
              country: '',
              administrativeArea: '',
            },
          ],
          recordGroup: 'dd9aa6b8e92f53c77370e6e9418d2be4',
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
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
            langeng:
              'Net Gain Final Recommendations (31 August 2011 Version 1.2). Submission to Natural England and JNCC. http://jncc.defra.gov.uk/PDF/120718_MCZAP_120702_NG_Final_report_version_1.2.pdf',
          },
          OrgResourceTitleObject: {
            default:
              '2011 Lincolnshire Wildlife Trust, Location of Peat within and adjacent to Net Gain site 5, Lincs Belt',
            langeng:
              '2011 Lincolnshire Wildlife Trust, Location of Peat within and adjacent to Net Gain site 5, Lincs Belt',
          },
          OrgResourceIdentifier: {
            code: 'NETGAIN0020',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: ['Data should be acknowledged to David Robinson, Lincolnshire Wildlife Trust.'],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_dd9aa6b8e92f53c77370e6e9418d2be4',
              sourceSystemReferenceID: 'Medin_dd9aa6b8e92f53c77370e6e9418d2be4',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Marine habitats',
                  code: 'lv2-003',
                  classifiers: [
                    {
                      name: 'Benthic general',
                      code: 'lv3-200',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Natural capital valuation',
              code: 'lvl1-003',
              classifiers: [
                {
                  name: 'Monetary',
                  code: 'lv2-009',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: 'dd9aa6b8e92f53c77370e6e9418d2be4',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:51:12.257Z',
          id: '158775',
          createDate: '2024-10-18T09:53:01.594Z',
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
        _id: '4f4c4942-4343-5764-6473-313134373337',
        _score: 8.663944,
        _ignored: ['OrgResourceConstraints.OrgOtherConstraints.keyword'],
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '4f4c4942-4343-5764-6473-313134373337',
          standardNameObject: {
            default: 'MEDIN Discovery Metadata Standard',
            langeng: 'MEDIN Discovery Metadata Standard',
          },
          standardVersionObject: {
            default: 'Version 2.3.8',
            langeng: 'Version 2.3.8',
          },
          indexingDate: '2024-10-22T02:10:06Z',
          dateStamp: '2021-04-06T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          pointOfContactOrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contact: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              organisationValue: 'ne', // added for filtering
              role: 'pointOfContact',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
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
            default: 'Priority Marine Habitats of Wales: Peat and Clay',
            langeng: 'Priority Marine Habitats of Wales: Peat and Clay',
          },
          resourceAltTitleObject: [
            {
              default: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru (Mawn a chlai)',
              langeng: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru (Mawn a chlai)',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Points.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Points.LYR',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
            },
          ],
          publicationDateForResource: ['2015-11-18T00:00:00.000Z', '2015-11-18T00:00:00.000Z'],
          publicationYearForResource: ['2015', '2015'],
          publicationMonthForResource: ['2015-11', '2015-11'],
          revisionDateForResource: ['2005-08-22T00:00:00.000Z', '2005-08-22T00:00:00.000Z'],
          revisionYearForResource: ['2005', '2005'],
          revisionMonthForResource: ['2005-08', '2005-08'],
          resourceDate: [
            {
              type: 'publication',
              date: '2015-11-18T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2005-08-22T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2015-11-18T00:00:00.000Z',
              lte: '2015-11-18T00:00:00.000Z',
            },
            {
              gte: '2005-08-22T00:00:00.000Z',
              lte: '2005-08-22T00:00:00.000Z',
            },
            {
              gte: '1995-12-31T00:00:00.000Z',
              lte: '2015-11-18T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '114737',
              codeSpace: 'https://naturalresources.wales',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'UK Biodiversity Action Plan (BAP) priority habitats cover a wide range of semi-natural habitat types, and were those that were identified as being the most threatened and requiring conservation action under the UK Biodiversity Action Plan (UK BAP). The UK BAP habitats and species lists have been used to draw statutory lists of priority habitats as required under Section 42 of the Natural Environmental and Rural Communities (NERC) Act 2006. The habitats listed as priority habitats include; blue mussel beds, Fragile sponge and anthozoan communities, Tide swept channels, Horse mussel beds, Maerl beds, Honeycomb worm reefs, Seagrass beds, Oyster beds, Intertidal boulder communities, Intertidal mudflats, mud habitats in deep water, Sheltered muddy gravels, subtidal mixed muddy sediments\n, Estuarine rocky habitats, Peat and clay exposures, Carbonate reefs, Musculus discors beds, Saline lagoons, Coastal Saltmarsh and Subtidal sands and gravels.\n\nThe data is related to Peat and Clay only. Seabeds formed of exposed peat or clay, or in some cases both, are uncommon. Where they do occur, they have been found between the tides as well as fully underwater. They can be buried by sand or other sediments and then exposed again on a regular basis. These unique and fragile habitats are irreplaceable, as they were formed millions of years ago from ancient lakebeds and forested peatland. They are threatened by coastal infrastructure development, cable laying, dredging and other activities that disturb the seabed, mussel fisheries and the collection of the piddocks for bait. Majority of the records are from the 1960s onwards. This data is still in draft format and has not yet been finalised. All habitat records include a confidence measure.\n Decisions about how these were applied are documented in the processing notes for each habitats.',
            langeng:
              'UK Biodiversity Action Plan (BAP) priority habitats cover a wide range of semi-natural habitat types, and were those that were identified as being the most threatened and requiring conservation action under the UK Biodiversity Action Plan (UK BAP). The UK BAP habitats and species lists have been used to draw statutory lists of priority habitats as required under Section 42 of the Natural Environmental and Rural Communities (NERC) Act 2006. The habitats listed as priority habitats include; blue mussel beds, Fragile sponge and anthozoan communities, Tide swept channels, Horse mussel beds, Maerl beds, Honeycomb worm reefs, Seagrass beds, Oyster beds, Intertidal boulder communities, Intertidal mudflats, mud habitats in deep water, Sheltered muddy gravels, subtidal mixed muddy sediments\n, Estuarine rocky habitats, Peat and clay exposures, Carbonate reefs, Musculus discors beds, Saline lagoons, Coastal Saltmarsh and Subtidal sands and gravels.\n\nThe data is related to Peat and Clay only. Seabeds formed of exposed peat or clay, or in some cases both, are uncommon. Where they do occur, they have been found between the tides as well as fully underwater. They can be buried by sand or other sediments and then exposed again on a regular basis. These unique and fragile habitats are irreplaceable, as they were formed millions of years ago from ancient lakebeds and forested peatland. They are threatened by coastal infrastructure development, cable laying, dredging and other activities that disturb the seabed, mussel fisheries and the collection of the piddocks for bait. Majority of the records are from the 1960s onwards. This data is still in draft format and has not yet been finalised. All habitat records include a confidence measure.\n Decisions about how these were applied are documented in the processing notes for each habitats.',
          },
          OrgForResourceObject: [
            {
              default: 'Natural Resources Wales (NRW)',
              langeng: 'Natural Resources Wales (NRW)',
            },
            {
              default: 'Countryside Council for Wales (CCW)',
              langeng: 'Countryside Council for Wales (CCW)',
            },
            {
              default: 'Various',
              langeng: 'Various',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForResource: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'custodian',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Countryside Council for Wales (CCW)',
              role: 'originator',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Countryside Council for Wales, Maes y Ffynnon, LL57 2DW',
              deliveryPoint: 'Countryside Council for Wales, Maes y Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Various',
              role: 'originator',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '01248 385500',
              address: 'Enquiries Unit, Maes y Fynnon, LL57 2DW',
              deliveryPoint: 'Enquiries Unit, Maes y Fynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          originatorOrgForResourceObject: [
            {
              default: 'Countryside Council for Wales (CCW)',
              langeng: 'Countryside Council for Wales (CCW)',
            },
            {
              default: 'Various',
              langeng: 'Various',
            },
          ],
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
            },
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
            },
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
          ],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
            },
          ],
          th_SeaDataNetParameterDiscoveryVocabularyNumber: '1',
          th_SeaDataNetParameterDiscoveryVocabulary: [
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
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
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
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
                },
              ],
            },
            th_SeaDataNetParameterDiscoveryVocabulary: {
              title: 'SeaDataNet Parameter Discovery Vocabulary',
              theme: '',
              keywords: [
                {
                  default: 'Habitat extent',
                  langeng: 'Habitat extent',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default:
                "© CNC/NRW and various third party recorders 2011 NRW owns the copyright of the collation, but the ownership of the records themselves rests with the originator. There are no use restrictions on this data. Recipients may re-use, reproduce, disseminate this data free of charge in any format or medium, provided they do so accurately, acknowledging both the source and the copyright of NRW/third party recorders and do not use it in a misleading context. It is the recipient's responsibility to ensure the data is fit for the intended purpose, that dissemination or publishing does not result in duplication and that it is fairly interpreted. Advice on interpretation should be sought where required. To avoid re-using old data, users should periodically obtain\nthe latest version from the original source.",
              langeng:
                "© CNC/NRW and various third party recorders 2011 NRW owns the copyright of the collation, but the ownership of the records themselves rests with the originator. There are no use restrictions on this data. Recipients may re-use, reproduce, disseminate this data free of charge in any format or medium, provided they do so accurately, acknowledging both the source and the copyright of NRW/third party recorders and do not use it in a misleading context. It is the recipient's responsibility to ensure the data is fit for the intended purpose, that dissemination or publishing does not result in duplication and that it is fairly interpreted. Advice on interpretation should be sought where required. To avoid re-using old data, users should periodically obtain\nthe latest version from the original source.",
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policies permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely.',
              langeng:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policies permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely.',
            },
          ],
          licenseObject: [
            {
              default:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policies permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely.',
              langeng:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policies permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely.',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-6.823423, 50.922591],
                [-2.662927, 50.922591],
                [-2.662927, 54.013838],
                [-6.823423, 54.013838],
                [-6.823423, 50.922591],
              ],
            ],
          },
          location: '52.4682145,-4.743175',
          resourceTemporalExtentDateRange: [
            {
              gte: '1995-12-31T00:00:00.000Z',
              lte: '2015-11-18T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1995-12-31',
              },
              end: {
                date: '2015-11-18',
              },
            },
          ],
          resourceVerticalRange: [],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::WGS84'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::WGS84',
              codeSpace: 'OGP',
              name: 'urn:ogc:def:crs:EPSG::WGS84',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'The data was collated from a wide range of sources, including but not limited to Marine Recorder, Phase 1 Intertidal, HabMap, Marine Monitoring Data. Habitats layers were produced as both polygon and point data for many of the habitats. Each layer is accompanied by processing notes detailing data sources and all decisions made in creating the layers. A standard template was also produced and documented for attributing the GIS layers and general assumptions that could be made. The habitat layers build on and replaced work started in the CCW BAP Atlas.',
            langeng:
              'The data was collated from a wide range of sources, including but not limited to Marine Recorder, Phase 1 Intertidal, HabMap, Marine Monitoring Data. Habitats layers were produced as both polygon and point data for many of the habitats. Each layer is accompanied by processing notes detailing data sources and all decisions made in creating the layers. A standard template was also produced and documented for attributing the GIS layers and general assumptions that could be made. The habitat layers build on and replaced work started in the CCW BAP Atlas.',
          },
          OrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          distributorOrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForDistribution: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'distributor',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          recordGroup: '4f4c4942-4343-5764-6473-313134373337',
          mainLanguageFullName: '',
          OrgGeographicElement: [
            {
              ciTitle: 'ISO3166 Countries',
              type: 'publication',
              date: '2022-02-05',
              code: 'Wales (WLS)',
              url: '',
            },
            {
              ciTitle: 'SeaVoX Vertical Co-ordinate Coverages',
              type: 'publication',
              date: '2010-05-18',
              code: 'benthic boundary layer',
              url: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          OrgResourceTitleObject: {
            default: 'Priority Marine Habitats of Wales: Peat and Clay',
            langeng: 'Priority Marine Habitats of Wales: Peat and Clay',
          },
          OrgResourceAltTitleObject: [
            {
              default: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru (Mawn a chlai)',
              langeng: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru (Mawn a chlai)',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Points.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Points.LYR',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
            },
          ],
          OrgResourceIdentifier: {
            code: '114737',
            codeSpace: 'https://naturalresources.wales',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: [
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policies permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely.',
              ],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_4f4c4942-4343-5764-6473-313134373337',
              sourceSystemReferenceID: 'Medin_4f4c4942-4343-5764-6473-313134373337',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
          recordOwner: 'admin admin',
          uuid: '4f4c4942-4343-5764-6473-313134373337',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:33:04.22Z',
          id: '147762',
          createDate: '2024-10-18T09:35:20.837Z',
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
        _id: '3ee09ec4eee4da764a29b4ee3845074c',
        _score: 8.565469,
        _ignored: ['lineageObject.langeng.keyword', 'lineageObject.default.sort', 'lineageObject.default.keyword'],
        _source: {
          status: 'retired', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '3ee09ec4eee4da764a29b4ee3845074c',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:07:39Z',
          dateStamp: '2019-04-08T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          pointOfContactOrgObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          contact: [
            {
              organisationName: 'Data Archive for Seabed Species and Habitats (DASSH)',
              organisationValue: 'mmo', // added for filtering
              role: 'pointOfContact',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'Esther Hughes',
              position: 'Data Manager',
              phone: '01752 633102',
              address:
                'Marine Biological Association of the UK,\n         The Laboratory,\n         Citadel Hill, Plymouth, PL1 2PB',
              deliveryPoint:
                'Marine Biological Association of the UK,\n         The Laboratory,\n         Citadel Hill',
              postalCode: 'PL1 2PB',
              city: 'Plymouth',
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
            default:
              '2009 Defra MB0102 2C Possible Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
            langeng:
              '2009 Defra MB0102 2C Possible Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
          },
          publicationDateForResource: ['2009-09-01T00:00:00.000Z', '2009-09-01T00:00:00.000Z'],
          publicationYearForResource: ['2009', '2009'],
          publicationMonthForResource: ['2009-09', '2009-09'],
          resourceDate: [
            {
              type: 'publication',
              date: '2009-09-01T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2009-09-01T00:00:00.000Z',
              lte: '2009-09-01T00:00:00.000Z',
            },
            {
              gte: '1883-01-01T00:00:00.000Z',
              lte: '2010-01-01T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'MB010200002C0020',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'This layer shows the area in which peat exposures are liekly to occur. This may indicate the potential for the presence of peat and clay exposure communities.\n Method: Data from Archeological sources including the English Heritage database was used to identify area where peat exposures were liekly to occur. \n This layer forms one of a set of data layers created for the Defra MB0102 contract. This work will support the delivery of a network of Marine Protected Areas as required to meet existing international and national obligations and commitments, including Marine Conservation Zones (MCZs), a new measure to be delivered as part of the Marine and Coastal Access Bill, and equivalent measures under Scottish legislation. The availability of these data layers will also be of importance in underpinning Marine Planning (e.g. licensing) in our marine area.',
            langeng:
              'This layer shows the area in which peat exposures are liekly to occur. This may indicate the potential for the presence of peat and clay exposure communities.\n Method: Data from Archeological sources including the English Heritage database was used to identify area where peat exposures were liekly to occur. \n This layer forms one of a set of data layers created for the Defra MB0102 contract. This work will support the delivery of a network of Marine Protected Areas as required to meet existing international and national obligations and commitments, including Marine Conservation Zones (MCZs), a new measure to be delivered as part of the Marine and Coastal Access Bill, and equivalent measures under Scottish legislation. The availability of these data layers will also be of importance in underpinning Marine Planning (e.g. licensing) in our marine area.',
          },
          OrgForResourceObject: [
            {
              default: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              langeng: 'Department for Environment, Food and Rural Affairs (DEFRA)',
            },
            {
              default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            },
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
            },
          ],
          originatorOrgForResourceObject: [
            {
              default: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              langeng: 'Department for Environment, Food and Rural Affairs (DEFRA)',
            },
            {
              default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            },
          ],
          contactForResource: [
            {
              organisationName: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              role: 'originator',
              email: 'SPIRE@defra.gsi.gov.uk',
              website: '',
              logo: '',
              individual: 'Jo Myers',
              position: 'R and D Programme Manager',
              phone: '',
              address: 'Nobel House\n17 Smith Square, London, SW1P 3JR',
              deliveryPoint: 'Nobel House\n17 Smith Square',
              postalCode: 'SW1P 3JR',
              city: 'London',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              role: 'originator',
              email: 'comment@jncc.gov.uk',
              website: '',
              logo: '',
              individual: 'Beth  Stoker',
              position: 'Marine Officer',
              phone: '',
              address: 'Monkstone House\nCity Road, Peterborough, PE1 1JY',
              deliveryPoint: 'Monkstone House\nCity Road',
              postalCode: 'PE1 1JY',
              city: 'Peterborough',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Marine Environmental Data and Information Network',
              role: 'custodian',
              email: 'gaev@bodc.ac.uk',
              website: '',
              logo: '',
              individual: 'Gaynor Evans',
              position: 'MEDIN Core Team',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Marine Environmental Data and Information Network',
            langeng: 'Marine Environmental Data and Information Network',
          },
          supplementalInformationObject: {
            default:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
            langeng:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
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
              default: 'Habitat characterisation',
              langeng: 'Habitat characterisation',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
            },
          ],
          tagNumber: '3',
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
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
          ],
          th_SeaDataNetP021parameterdiscoveryvocabularyNumber: '1',
          th_SeaDataNetP021parameterdiscoveryvocabulary: [
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
                  default: 'Habitat characterisation',
                  langeng: 'Habitat characterisation',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          resolutionDistance: [
            '100 http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Freely available under Open Government Licence',
              langeng: 'Freely available under Open Government Licence',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              langeng:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
            },
          ],
          licenseObject: [
            {
              default:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              langeng:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-7.5113, 49.9123],
                [2.9979, 49.9123],
                [2.9979, 57.7738],
                [-7.5113, 57.7738],
                [-7.5113, 49.9123],
              ],
            ],
          },
          location: '53.843050000000005,-2.2567000000000004',
          resourceTemporalExtentDateRange: [
            {
              gte: '1883-01-01T00:00:00.000Z',
              lte: '2010-01-01T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1883-01-01',
              },
              end: {
                date: '2010-01-01',
              },
            },
          ],
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
              'This dataset was created as part of the Defra MB0102 contract. Data was collated from a range of conservation and academic organisations and through a literature search. \n Full survey information is available from the survey table in the project geodatabase which can be joined to the layer by the Survey ID \n \n Field Explanations. \n Original Habitat Name: \n The habitat code, species name or feature recorded in the original survey. \n Habitat Name: \n The current accepted name for the habitat as described by the relevent designation \n Survey ID: \n A link to survey information. Where data is entered in to Marine Recorder this refers to the MR SurveyID. A few surveys could not be entered into Marine Recorder without risk of duplication occuring. e.g. Seasearch data that will be entered into MR at a later date, data from polygons etc. These have been given a project surveyID using the reference: MPALAYERS0000XX \n Date: \n The date the habitat was recorded if known. Vague dates have been entered as the first of a month, if only the month is known, e.g. 01/03/89 or as the first of January if only the year is known, e.g. 01/01/78. Unknown dates show as 00:00:00. \n Location Name: \n The location or site name where provided. \n SampleID: \n For Marine Recorder surveys the sample_key field has been entered. \n Event name: \n Where known an event name has been provided. \n Latitude: \n The latitude of the sample point. \n Longitude: \n The longitude of the sample point. \n Determiner: \n Where known the determiner of the habitat record as specified in Marine Recorder. For non MR surveys the recorder has been inputted into this field as it has been assumed that the recorder is the determiner unless otherwise stated. \n Classification:\n The classification used to establish the original habitat e.g EUNIS version 2004, if the habitat has been classified directly from species data then the designation e.g. BAP is used.\n Designation: \n The conservation designation appropriate e.g. BAP, OSPAR. Please note that The OSPAR and BAP definitions may differ so not all records may have the same designation.\n Status: \n The biotope status as defined by two terms; \n Certain - A certain record of the habitat. \n Habitat likely - A record where evidence, e.g. species abundances, suggests that the \n Coordinate Precision: \n An estimate of the spatial resolution in metres of the co-ordinate, based on survey method, date and the derivation of the co-ordinates . This ranges from 10-10000 metres.',
            langeng:
              'This dataset was created as part of the Defra MB0102 contract. Data was collated from a range of conservation and academic organisations and through a literature search. \n Full survey information is available from the survey table in the project geodatabase which can be joined to the layer by the Survey ID \n \n Field Explanations. \n Original Habitat Name: \n The habitat code, species name or feature recorded in the original survey. \n Habitat Name: \n The current accepted name for the habitat as described by the relevent designation \n Survey ID: \n A link to survey information. Where data is entered in to Marine Recorder this refers to the MR SurveyID. A few surveys could not be entered into Marine Recorder without risk of duplication occuring. e.g. Seasearch data that will be entered into MR at a later date, data from polygons etc. These have been given a project surveyID using the reference: MPALAYERS0000XX \n Date: \n The date the habitat was recorded if known. Vague dates have been entered as the first of a month, if only the month is known, e.g. 01/03/89 or as the first of January if only the year is known, e.g. 01/01/78. Unknown dates show as 00:00:00. \n Location Name: \n The location or site name where provided. \n SampleID: \n For Marine Recorder surveys the sample_key field has been entered. \n Event name: \n Where known an event name has been provided. \n Latitude: \n The latitude of the sample point. \n Longitude: \n The longitude of the sample point. \n Determiner: \n Where known the determiner of the habitat record as specified in Marine Recorder. For non MR surveys the recorder has been inputted into this field as it has been assumed that the recorder is the determiner unless otherwise stated. \n Classification:\n The classification used to establish the original habitat e.g EUNIS version 2004, if the habitat has been classified directly from species data then the designation e.g. BAP is used.\n Designation: \n The conservation designation appropriate e.g. BAP, OSPAR. Please note that The OSPAR and BAP definitions may differ so not all records may have the same designation.\n Status: \n The biotope status as defined by two terms; \n Certain - A certain record of the habitat. \n Habitat likely - A record where evidence, e.g. species abundances, suggests that the \n Coordinate Precision: \n An estimate of the spatial resolution in metres of the co-ordinate, based on survey method, date and the derivation of the co-ordinates . This ranges from 10-10000 metres.',
          },
          OrgForDistributionObject: {
            default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
          },
          distributorOrgForDistributionObject: {
            default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
          },
          contactForDistribution: [
            {
              organisationName: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              role: 'distributor',
              email: 'comment@jncc.gov.uk',
              website: '',
              logo: '',
              individual: 'Beth  Stoker',
              position: 'Marine Officer',
              phone: '',
              address: 'Monkstone House\nCity Road, Peterborough, PE1 1JY',
              deliveryPoint: 'Monkstone House\nCity Road',
              postalCode: 'PE1 1JY',
              city: 'Peterborough',
              country: '',
              administrativeArea: '',
            },
          ],
          linkUrl: 'https://www.bodc.ac.uk/data/download/asset/2478/generic/',
          linkProtocol: ['http-fd'], // changed for filtering
          linkUrlProtocol: 'https://www.bodc.ac.uk/data/download/asset/2478/generic/',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'https://www.bodc.ac.uk/data/download/asset/2478/generic/',
              },
              descriptionObject: {
                default: 'A link to the web service or dataset',
                langeng: 'A link to the web service or dataset',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '3ee09ec4eee4da764a29b4ee3845074c',
          mainLanguageFullName: '',
          OrgResolutionDistance: {
            distance: '100',
            uom: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          },
          OrgSupplementalInformationObject: {
            default:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
            langeng:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
          },
          OrgResourceTitleObject: {
            default:
              '2009 Defra MB0102 2C Possible Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
            langeng:
              '2009 Defra MB0102 2C Possible Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
          },
          OrgResourceIdentifier: {
            code: 'MB010200002C0020',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: [
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              ],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_3ee09ec4eee4da764a29b4ee3845074c',
              sourceSystemReferenceID: 'Medin_3ee09ec4eee4da764a29b4ee3845074c',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
          recordOwner: 'admin admin',
          uuid: '3ee09ec4eee4da764a29b4ee3845074c',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:38:40.339Z',
          id: '146653',
          createDate: '2024-10-18T09:41:00.288Z',
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
        _id: '4f4c4942-4343-5764-6473-313134393432',
        _score: 8.276622,
        _ignored: ['OrgResourceConstraints.OrgOtherConstraints.keyword'],
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '4f4c4942-4343-5764-6473-313134393432',
          standardNameObject: {
            default: 'MEDIN Discovery Metadata Standard',
            langeng: 'MEDIN Discovery Metadata Standard',
          },
          standardVersionObject: {
            default: 'Version 2.3.8',
            langeng: 'Version 2.3.8',
          },
          indexingDate: '2024-10-22T02:10:08Z',
          dateStamp: '2018-07-03T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          pointOfContactOrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contact: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              organisationValue: 'ne', // added for filtering
              role: 'pointOfContact',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
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
            default:
              'Intertidal Monitoring of Piddock Beds in Carmarthen Bay and Estuaries Special Areas of Conservation (SACs) 2009',
            langeng:
              'Intertidal Monitoring of Piddock Beds in Carmarthen Bay and Estuaries Special Areas of Conservation (SACs) 2009',
          },
          resourceAltTitleObject: [
            {
              default: 'Gwaith Monitro Rhynglanwol ar Welau Pidogau yn ACA Bae Caerfyrddin ac Aberoedd 2009',
              langeng: 'Gwaith Monitro Rhynglanwol ar Welau Pidogau yn ACA Bae Caerfyrddin ac Aberoedd 2009',
            },
            {
              default: '2009 CCW / ASML Carmarthen Bay SAC intertidal piddock bed monitoring  MRCCW16300000022',
              langeng: '2009 CCW / ASML Carmarthen Bay SAC intertidal piddock bed monitoring  MRCCW16300000022',
            },
          ],
          publicationDateForResource: ['2012-06-30T00:00:00.000Z', '2012-06-30T00:00:00.000Z'],
          publicationYearForResource: ['2012', '2012'],
          publicationMonthForResource: ['2012-06', '2012-06'],
          revisionDateForResource: ['2012-06-30T00:00:00.000Z', '2012-06-30T00:00:00.000Z'],
          revisionYearForResource: ['2012', '2012'],
          revisionMonthForResource: ['2012-06', '2012-06'],
          resourceDate: [
            {
              type: 'publication',
              date: '2012-06-30T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2012-06-30T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2012-06-30T00:00:00.000Z',
              lte: '2012-06-30T00:00:00.000Z',
            },
            {
              gte: '2009-09-20T00:00:00.000Z',
              lte: '2009-09-21T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '114942',
              codeSpace: 'https://naturalresources.wales',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'The Habitats Directive establishes that the management of Special Areas of Conservation (SACs) should aim to achieve the favourable conservation status of habitat and species features listed within its Annex I and Annex II. This data was captured to support a number of reporting requirements. These were namely reporting on conservation status of the piddock feature; mapping the boundary of the clay and peat exposures; to record the density of the piddock holes; and evaluate the best sampling methods. Carmarthen Bay SAC was designated for five Annex I intertidal habitat features: Estuaries; Mudflats and sandflats not covered by seawater at low tide; Large shallow inlets and bays; Salicornia and other annuals colonising mud and sand; Atlantic salt meadows (Glauco- Puccinellietalia mar\nitimae). Specific areas of interest include the peat and clay beds burrowed by piddocks and the monitoring aimed to map the boundary of the clay/peat exposures, record the density of the piddock holes and evaluate the best sampling methods.',
            langeng:
              'The Habitats Directive establishes that the management of Special Areas of Conservation (SACs) should aim to achieve the favourable conservation status of habitat and species features listed within its Annex I and Annex II. This data was captured to support a number of reporting requirements. These were namely reporting on conservation status of the piddock feature; mapping the boundary of the clay and peat exposures; to record the density of the piddock holes; and evaluate the best sampling methods. Carmarthen Bay SAC was designated for five Annex I intertidal habitat features: Estuaries; Mudflats and sandflats not covered by seawater at low tide; Large shallow inlets and bays; Salicornia and other annuals colonising mud and sand; Atlantic salt meadows (Glauco- Puccinellietalia mar\nitimae). Specific areas of interest include the peat and clay beds burrowed by piddocks and the monitoring aimed to map the boundary of the clay/peat exposures, record the density of the piddock holes and evaluate the best sampling methods.',
          },
          OrgForResourceObject: [
            {
              default: 'Natural Resources Wales (NRW)',
              langeng: 'Natural Resources Wales (NRW)',
            },
            {
              default: 'Countryside Council for Wales (CCW). Marine and Freshwater Ecosystems Group',
              langeng: 'Countryside Council for Wales (CCW). Marine and Freshwater Ecosystems Group',
            },
            {
              default: 'Aquatic Survey and Monitoring Ltd (ASML)',
              langeng: 'Aquatic Survey and Monitoring Ltd (ASML)',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForResource: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'custodian',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Countryside Council for Wales (CCW). Marine and Freshwater Ecosystems Group',
              role: 'originator',
              email: 'enquiries@ccw.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '01248 38550',
              address: 'Maes y Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes y Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Aquatic Survey and Monitoring Ltd (ASML)',
              role: 'originator',
              email: 'tom@aquatic-environments.co.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '01388 528 015',
              address: 'Whitfield Brow, DL13 2SZ',
              deliveryPoint: 'Whitfield Brow',
              postalCode: 'DL13 2SZ',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          originatorOrgForResourceObject: [
            {
              default: 'Countryside Council for Wales (CCW). Marine and Freshwater Ecosystems Group',
              langeng: 'Countryside Council for Wales (CCW). Marine and Freshwater Ecosystems Group',
            },
            {
              default: 'Aquatic Survey and Monitoring Ltd (ASML)',
              langeng: 'Aquatic Survey and Monitoring Ltd (ASML)',
            },
          ],
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
            {
              default: 'Species distribution',
              langeng: 'Species distribution',
            },
            {
              default: 'Zoobenthos taxonomy-related counts',
              langeng: 'Zoobenthos taxonomy-related counts',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/ZOOB',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/ZOOB',
            },
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
          ],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Species distribution',
              langeng: 'Species distribution',
            },
          ],
          th_SeaDataNetParameterDiscoveryVocabularyNumber: '2',
          th_SeaDataNetParameterDiscoveryVocabulary: [
            {
              default: 'Zoobenthos taxonomy-related counts',
              langeng: 'Zoobenthos taxonomy-related counts',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/ZOOB',
            },
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
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
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
                },
              ],
            },
            'th_GEMET-INSPIREthemesversion1-0': {
              title: 'GEMET - INSPIRE themes, version 1.0',
              theme: '',
              keywords: [
                {
                  default: 'Species distribution',
                  langeng: 'Species distribution',
                },
              ],
            },
            th_SeaDataNetParameterDiscoveryVocabulary: {
              title: 'SeaDataNet Parameter Discovery Vocabulary',
              theme: '',
              keywords: [
                {
                  default: 'Zoobenthos taxonomy-related counts',
                  langeng: 'Zoobenthos taxonomy-related counts',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/ZOOB',
                },
                {
                  default: 'Habitat extent',
                  langeng: 'Habitat extent',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default:
                '© CNC/NRW and © Crown copyright 2012. All rights reserved. Natural Resources Wales, 100019741. Third parties seeking to re-use this data require a Licence issued by NRW. It allows re-use, reproduction and dissemination in any format or medium but only for non-commercial purposes, according to the terms and conditions of the Licence. Those seeking commercial re-use require a commercial licence available from the OS.',
              langeng:
                '© CNC/NRW and © Crown copyright 2012. All rights reserved. Natural Resources Wales, 100019741. Third parties seeking to re-use this data require a Licence issued by NRW. It allows re-use, reproduction and dissemination in any format or medium but only for non-commercial purposes, according to the terms and conditions of the Licence. Those seeking commercial re-use require a commercial licence available from the OS.',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                'The following data is considered OS derived data and is therefore jointly owned by NRW and the Ordnance Survey.  NRW may release, publish or disseminate this data freely; providing recipients are made aware of use restrictions (See general use restrictions).',
              langeng:
                'The following data is considered OS derived data and is therefore jointly owned by NRW and the Ordnance Survey.  NRW may release, publish or disseminate this data freely; providing recipients are made aware of use restrictions (See general use restrictions).',
            },
          ],
          licenseObject: [
            {
              default:
                'The following data is considered OS derived data and is therefore jointly owned by NRW and the Ordnance Survey.  NRW may release, publish or disseminate this data freely; providing recipients are made aware of use restrictions (See general use restrictions).',
              langeng:
                'The following data is considered OS derived data and is therefore jointly owned by NRW and the Ordnance Survey.  NRW may release, publish or disseminate this data freely; providing recipients are made aware of use restrictions (See general use restrictions).',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-4.613131, 51.732978],
                [-4.597651, 51.732978],
                [-4.597651, 51.738776],
                [-4.613131, 51.738776],
                [-4.613131, 51.732978],
              ],
            ],
          },
          location: '51.735877,-4.605391',
          resourceTemporalExtentDateRange: [
            {
              gte: '2009-09-20T00:00:00.000Z',
              lte: '2009-09-21T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2009-09-20',
              },
              end: {
                date: '2009-09-21',
              },
            },
          ],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::BNG'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::BNG',
              codeSpace: 'OGP',
              name: 'urn:ogc:def:crs:EPSG::BNG',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'The bed was divided into three blocks (western, eastern, central) and to sample randomly thrown quadrats (0.25 m2) within each block. In the event, it was found that the piddock distribution was clumped along the edges of channels and thus the randomly thrown quadrats were missing most of the piddocks. Because of this, part of the way through the exercise the method was adapted to targeting areas of piddock holes rather than sampling the whole clay exposure. In addition to the quadrat work, a number of timed counts of piddock holes were also carried out, with the intention of making a comparison between the two approaches to help with planning future monitoring work. Piddock beds were first mapped at Marros Sands near Pendine and Whiteford Point on the north G\nower coast during Phase 1 surveys carried out by CCW in 2000.The piddock beds are vulnerable to shifting beach sand, a natural phenomenon. No beds were found at Whiteford Point in 2009, although monitored previously in 2004. Data quality and confidence is considered high as all surveys were completed by professional and experienced marine field surveyors. Piddock beds were first mapped at Marros Sands near Pendine and Whiteford Point on the north Gower coast during Phase 1 surveys carried out by CCW in 2000.',
            langeng:
              'The bed was divided into three blocks (western, eastern, central) and to sample randomly thrown quadrats (0.25 m2) within each block. In the event, it was found that the piddock distribution was clumped along the edges of channels and thus the randomly thrown quadrats were missing most of the piddocks. Because of this, part of the way through the exercise the method was adapted to targeting areas of piddock holes rather than sampling the whole clay exposure. In addition to the quadrat work, a number of timed counts of piddock holes were also carried out, with the intention of making a comparison between the two approaches to help with planning future monitoring work. Piddock beds were first mapped at Marros Sands near Pendine and Whiteford Point on the north G\nower coast during Phase 1 surveys carried out by CCW in 2000.The piddock beds are vulnerable to shifting beach sand, a natural phenomenon. No beds were found at Whiteford Point in 2009, although monitored previously in 2004. Data quality and confidence is considered high as all surveys were completed by professional and experienced marine field surveyors. Piddock beds were first mapped at Marros Sands near Pendine and Whiteford Point on the north Gower coast during Phase 1 surveys carried out by CCW in 2000.',
          },
          OrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          distributorOrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForDistribution: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'distributor',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          recordGroup: '4f4c4942-4343-5764-6473-313134393432',
          mainLanguageFullName: '',
          OrgGeographicElement: {
            ciTitle: 'SeaVoX Vertical Co-ordinate Coverages',
            type: 'publication',
            date: '2010-05-18',
            code: 'benthic boundary layer',
            url: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
          },
          OrgResourceTitleObject: {
            default:
              'Intertidal Monitoring of Piddock Beds in Carmarthen Bay and Estuaries Special Areas of Conservation (SACs) 2009',
            langeng:
              'Intertidal Monitoring of Piddock Beds in Carmarthen Bay and Estuaries Special Areas of Conservation (SACs) 2009',
          },
          OrgResourceAltTitleObject: [
            {
              default: 'Gwaith Monitro Rhynglanwol ar Welau Pidogau yn ACA Bae Caerfyrddin ac Aberoedd 2009',
              langeng: 'Gwaith Monitro Rhynglanwol ar Welau Pidogau yn ACA Bae Caerfyrddin ac Aberoedd 2009',
            },
            {
              default: '2009 CCW / ASML Carmarthen Bay SAC intertidal piddock bed monitoring  MRCCW16300000022',
              langeng: '2009 CCW / ASML Carmarthen Bay SAC intertidal piddock bed monitoring  MRCCW16300000022',
            },
          ],
          OrgResourceIdentifier: {
            code: '114942',
            codeSpace: 'https://naturalresources.wales',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: [
                'The following data is considered OS derived data and is therefore jointly owned by NRW and the Ordnance Survey.  NRW may release, publish or disseminate this data freely; providing recipients are made aware of use restrictions (See general use restrictions).',
              ],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_4f4c4942-4343-5764-6473-313134393432',
              sourceSystemReferenceID: 'Medin_4f4c4942-4343-5764-6473-313134393432',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Coastal and estuarine habitats',
                  code: 'lv2-002',
                },
                {
                  name: 'Ecosystem component',
                  code: 'lv2-005',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: '4f4c4942-4343-5764-6473-313134393432',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:33:52.624Z',
          id: '147779',
          createDate: '2024-10-18T09:36:09.265Z',
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
        _id: '2cbc391c-4f5e-3aa1-93e4-9e64ba0c053b',
        _score: 7.8367724,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '2cbc391c-4f5e-3aa1-93e4-9e64ba0c053b',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:05:36Z',
          dateStamp: '2021-05-06T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
          pointOfContactOrgObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
          contact: [
            {
              organisationName: 'Archaeology Data Service',
              organisationValue: 'ea', // added for filtering
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
            default: 'Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores',
            langeng: 'Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores',
          },
          publicationDateForResource: ['2010-11-29T00:00:00.000Z', '2010-11-29T00:00:00.000Z'],
          publicationYearForResource: ['2010', '2010'],
          publicationMonthForResource: ['2010-11', '2010-11'],
          resourceDate: [
            {
              type: 'publication',
              date: '2010-11-29T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2010-11-29T00:00:00.000Z',
              lte: '2010-11-29T00:00:00.000Z',
            },
            {
              gte: '2008-01-01T00:00:00.000Z',
              lte: '2008-12-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'englishh1-87573',
              codeSpace: 'http://oasis.ac.uk',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'The sediments recorded in all three boreholes represented bands of claus, silts, sands and gravel deposits either in fluvial or estuarine conditions. It did not represent a land surface or peat deposits but could possibly have been from a mudflat.',
            langeng:
              'The sediments recorded in all three boreholes represented bands of claus, silts, sands and gravel deposits either in fluvial or estuarine conditions. It did not represent a land surface or peat deposits but could possibly have been from a mudflat.',
          },
          OrgForResourceObject: [
            {
              default: 'DASSH, The Archive for Marine Species and Habitat Data',
              langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
            },
            {
              default: 'Archaeology Data Service',
              langeng: 'Archaeology Data Service',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'DASSH, The Archive for Marine Species and Habitat Data',
            langeng: 'DASSH, The Archive for Marine Species and Habitat Data',
          },
          contactForResource: [
            {
              organisationName: 'DASSH, The Archive for Marine Species and Habitat Data',
              role: 'originator',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'Eric Greenhough',
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
          custodianOrgForResourceObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
          supplementalInformationObject: {
            default:
              'Peglar, S. (2008) Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores, Lancaster : Oxford Archaeology North, Report: 2008-09/818. Oxford Archaeology North: Lancaster',
            langeng:
              'Peglar, S. (2008) Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores, Lancaster : Oxford Archaeology North, Report: 2008-09/818. Oxford Archaeology North: Lancaster',
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
          ],
          tagNumber: '3',
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
          },
          cl_topic: [
            {
              key: 'environment',
              default: 'Environment',
              langeng: 'Environment',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Restrictions Apply',
              langeng: 'Restrictions Apply',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'Terms and Conditions apply to reuse.',
              langeng: 'Terms and Conditions apply to reuse.',
            },
          ],
          licenseObject: [
            {
              default: 'Terms and Conditions apply to reuse.',
              langeng: 'Terms and Conditions apply to reuse.',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [1.2779, 51.7558],
                [1.2781, 51.7558],
                [1.2781, 51.756],
                [1.2779, 51.756],
                [1.2779, 51.7558],
              ],
            ],
          },
          location: '51.7559,1.278',
          resourceTemporalExtentDateRange: [
            {
              gte: '2008-01-01T00:00:00.000Z',
              lte: '2008-12-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2008-01-01',
              },
              end: {
                date: '2008-12-31',
              },
            },
          ],
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
          OrgForDistributionObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
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
          recordGroup: '2cbc391c-4f5e-3aa1-93e4-9e64ba0c053b',
          mainLanguageFullName: '',
          OrgSupplementalInformationObject: {
            default:
              'Peglar, S. (2008) Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores, Lancaster : Oxford Archaeology North, Report: 2008-09/818. Oxford Archaeology North: Lancaster',
            langeng:
              'Peglar, S. (2008) Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores, Lancaster : Oxford Archaeology North, Report: 2008-09/818. Oxford Archaeology North: Lancaster',
          },
          OrgResourceTitleObject: {
            default: 'Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores',
            langeng: 'Gunfleet Sands 2, Offshore, Windfarm, Essex. Archaeological Recording of Cores',
          },
          OrgResourceIdentifier: {
            code: 'englishh1-87573',
            codeSpace: 'http://oasis.ac.uk',
            link: '',
          },
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
              catalogueEntry: 'Medin_2cbc391c-4f5e-3aa1-93e4-9e64ba0c053b',
              sourceSystemReferenceID: 'Medin_2cbc391c-4f5e-3aa1-93e4-9e64ba0c053b',
            },
          },
          OrgNceaClassifiers: [{}],
          recordOwner: 'admin admin',
          uuid: '2cbc391c-4f5e-3aa1-93e4-9e64ba0c053b',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:42:19.339Z',
          id: '145707',
          createDate: '2024-10-18T09:44:21.687Z',
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
        _id: '77738544-e31a-4719-a551-d1b616109b8e',
        _score: 7.311495,
        _source: {
          status: 'retired', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '77738544-e31a-4719-a551-d1b616109b8e',
          indexingDate: '2024-09-27T15:37:56Z',
          dateStamp: '2018-05-17T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contact: [
            {
              organisationName: 'Digital and Data Solutions, JNCC',
              organisationValue: 'jncc', // added for filtering
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
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
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
            default: 'Habitat point records from 1997 MNCR north Norfolk littoral survey',
            langeng: 'Habitat point records from 1997 MNCR north Norfolk littoral survey',
          },
          publicationDateForResource: ['2001-08-29T00:00:00.000Z', '2001-08-29T00:00:00.000Z'],
          publicationYearForResource: ['2001', '2001'],
          publicationMonthForResource: ['2001-08', '2001-08'],
          resourceDate: [
            {
              type: 'publication',
              date: '2001-08-29T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2001-08-29T00:00:00.000Z',
              lte: '2001-08-29T00:00:00.000Z',
            },
            {
              gte: '1997-09-17T00:00:00.000Z',
              lte: '1997-09-19T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '77738544-e31a-4719-a551-d1b616109b8e',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'Survey of the sediment shores between Hunstanton and Brancaster over a period of 3 days. Five littoral sites were completed with 19 sediment core samples and two epibiota records. The majority of the habitats were of clean sand with polychaetes whilst other habitats included a saltmarsh creek, peat outcrop and scoured boulders.',
            langeng:
              'Survey of the sediment shores between Hunstanton and Brancaster over a period of 3 days. Five littoral sites were completed with 19 sediment core samples and two epibiota records. The majority of the habitats were of clean sand with polychaetes whilst other habitats included a saltmarsh creek, peat outcrop and scoured boulders.',
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
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000689',
              langeng: 'JNCCMNCR10000689',
            },
            {
              default: 'Habitat',
              langeng: 'Habitat',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'th_otherKeywords-Number': '5',
          'th_otherKeywords-': [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000689',
              langeng: 'JNCCMNCR10000689',
            },
            {
              default: 'Habitat',
              langeng: 'Habitat',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                },
                {
                  default: 'Marine Recorder',
                  langeng: 'Marine Recorder',
                },
                {
                  default: 'JNCCMNCR10000689',
                  langeng: 'JNCCMNCR10000689',
                },
                {
                  default: 'Habitat',
                  langeng: 'Habitat',
                },
                {
                  default: 'MNCR',
                  langeng: 'MNCR',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'oceans',
              default: 'Oceans',
              langeng: 'Oceans',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default: 'Open Government Licence v3.0',
              langeng: 'Open Government Licence v3.0',
            },
          ],
          licenseObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [0.45348, 52.932072],
                [0.605878, 52.932072],
                [0.605878, 52.99177],
                [0.45348, 52.99177],
                [0.45348, 52.932072],
              ],
            ],
          },
          location: '52.961921000000004,0.529679',
          resourceTemporalExtentDateRange: [
            {
              gte: '1997-09-17T00:00:00.000Z',
              lte: '1997-09-19T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1997-09-17',
              },
              end: {
                date: '1997-09-19',
              },
            },
          ],
          lineageObject: {
            default: 'This survey was extracted from a Marine Recorder snapshot.',
            langeng: 'This survey was extracted from a Marine Recorder snapshot.',
          },
          // format: ['Comma Separated Values'],
          format: ['csv'], // changed for filtering
          linkUrl:
            'http://data.jncc.gov.uk/data/77738544-e31a-4719-a551-d1b616109b8e-1997-MNCR-north-Norfolk-littoral-survey.csv',
          linkProtocol: ['http-fd'], // changed for filtering
          linkUrlProtocol:
            'http://data.jncc.gov.uk/data/77738544-e31a-4719-a551-d1b616109b8e-1997-MNCR-north-Norfolk-littoral-survey.csv',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default:
                  'http://data.jncc.gov.uk/data/77738544-e31a-4719-a551-d1b616109b8e-1997-MNCR-north-Norfolk-littoral-survey.csv',
              },
              nameObject: {
                default: '1997-MNCR-north-Norfolk-littoral-survey.csv',
                langeng: '1997-MNCR-north-Norfolk-littoral-survey.csv',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '77738544-e31a-4719-a551-d1b616109b8e',
          mainLanguageFullName: '',
          OrgResourceTitleObject: {
            default: 'Habitat point records from 1997 MNCR north Norfolk littoral survey',
            langeng: 'Habitat point records from 1997 MNCR north Norfolk littoral survey',
          },
          OrgResourceIdentifier: {
            code: '77738544-e31a-4719-a551-d1b616109b8e',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: {
            OrgOtherConstraints: ['no limitations'],
            OrgAccessConstraints: ['otherRestrictions'],
          },
          OrgDistributionFormats: {
            name: 'Comma Separated Values',
            version: '',
          },
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Jncc_77738544-e31a-4719-a551-d1b616109b8e',
              sourceSystemReferenceID: 'Jncc_77738544-e31a-4719-a551-d1b616109b8e',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Marine habitats',
                  code: 'lv2-003',
                  classifiers: [
                    {
                      name: 'Benthic general',
                      code: 'lv3-200',
                    },
                  ],
                },
                {
                  name: 'Ecosystem component',
                  code: 'lv2-005',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: '77738544-e31a-4719-a551-d1b616109b8e',
          harvesterUuid: '93f27e43-0f8f-48c0-8f0e-24275513a838',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-09-27T09:04:01.007Z',
          id: '127541',
          createDate: '2024-09-27T09:04:01.007Z',
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
        _score: 7.311495,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
          indexingDate: '2024-09-27T15:37:29Z',
          dateStamp: '2018-05-17T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contact: [
            {
              organisationName: 'Digital and Data Solutions, JNCC',
              organisationValue: 'jncc', // added for filtering
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
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
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
            default: 'Species point records from 1997 MNCR north Norfolk littoral survey',
            langeng: 'Species point records from 1997 MNCR north Norfolk littoral survey',
          },
          publicationDateForResource: ['2001-08-29T00:00:00.000Z', '2001-08-29T00:00:00.000Z'],
          publicationYearForResource: ['2001', '2001'],
          publicationMonthForResource: ['2001-08', '2001-08'],
          resourceDate: [
            {
              type: 'publication',
              date: '2001-08-29T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2001-08-29T00:00:00.000Z',
              lte: '2001-08-29T00:00:00.000Z',
            },
            {
              gte: '1997-09-17T00:00:00.000Z',
              lte: '1997-09-19T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'Survey of the sediment shores between Hunstanton and Brancaster over a period of 3 days. Five littoral sites were completed with 19 sediment core samples and two epibiota records. The majority of the habitats were of clean sand with polychaetes whilst other habitats included a saltmarsh creek, peat outcrop and scoured boulders.',
            langeng:
              'Survey of the sediment shores between Hunstanton and Brancaster over a period of 3 days. Five littoral sites were completed with 19 sediment core samples and two epibiota records. The majority of the habitats were of clean sand with polychaetes whilst other habitats included a saltmarsh creek, peat outcrop and scoured boulders.',
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
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000689',
              langeng: 'JNCCMNCR10000689',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
            {
              default: 'Species',
              langeng: 'Species',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'th_otherKeywords-Number': '5',
          'th_otherKeywords-': [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000689',
              langeng: 'JNCCMNCR10000689',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
            {
              default: 'Species',
              langeng: 'Species',
            },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                },
                {
                  default: 'Marine Recorder',
                  langeng: 'Marine Recorder',
                },
                {
                  default: 'JNCCMNCR10000689',
                  langeng: 'JNCCMNCR10000689',
                },
                {
                  default: 'MNCR',
                  langeng: 'MNCR',
                },
                {
                  default: 'Species',
                  langeng: 'Species',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'oceans',
              default: 'Oceans',
              langeng: 'Oceans',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default: 'Open Government Licence v3.0',
              langeng: 'Open Government Licence v3.0',
            },
          ],
          licenseObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [0.45348, 52.932072],
                [0.605878, 52.932072],
                [0.605878, 52.99177],
                [0.45348, 52.99177],
                [0.45348, 52.932072],
              ],
            ],
          },
          location: '52.961921000000004,0.529679',
          resourceTemporalExtentDateRange: [
            {
              gte: '1997-09-17T00:00:00.000Z',
              lte: '1997-09-19T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1997-09-17',
              },
              end: {
                date: '1997-09-19',
              },
            },
          ],
          lineageObject: {
            default: 'This survey was extracted from a Marine Recorder snapshot.',
            langeng: 'This survey was extracted from a Marine Recorder snapshot.',
          },
          // format: ['Comma Separated Values'],
          format: ['csv'], // changed for filtering
          linkUrl:
            'http://data.jncc.gov.uk/data/47a9f1f7-13cb-42f3-9616-89ec8edc2d19-1997-MNCR-north-Norfolk-littoral-survey.csv',
          linkProtocol: ['http-fd'], // changed for filtering
          linkUrlProtocol:
            'http://data.jncc.gov.uk/data/47a9f1f7-13cb-42f3-9616-89ec8edc2d19-1997-MNCR-north-Norfolk-littoral-survey.csv',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default:
                  'http://data.jncc.gov.uk/data/47a9f1f7-13cb-42f3-9616-89ec8edc2d19-1997-MNCR-north-Norfolk-littoral-survey.csv',
              },
              nameObject: {
                default: '1997-MNCR-north-Norfolk-littoral-survey.csv',
                langeng: '1997-MNCR-north-Norfolk-littoral-survey.csv',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
          mainLanguageFullName: '',
          OrgResourceTitleObject: {
            default: 'Species point records from 1997 MNCR north Norfolk littoral survey',
            langeng: 'Species point records from 1997 MNCR north Norfolk littoral survey',
          },
          OrgResourceIdentifier: {
            code: '47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: {
            OrgOtherConstraints: ['no limitations'],
            OrgAccessConstraints: ['otherRestrictions'],
          },
          OrgDistributionFormats: {
            name: 'Comma Separated Values',
            version: '',
          },
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Jncc_47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
              sourceSystemReferenceID: 'Jncc_47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Marine habitats',
                  code: 'lv2-003',
                  classifiers: [
                    {
                      name: 'Benthic general',
                      code: 'lv3-200',
                    },
                  ],
                },
                {
                  name: 'Ecosystem component',
                  code: 'lv2-005',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: '47a9f1f7-13cb-42f3-9616-89ec8edc2d19',
          harvesterUuid: '93f27e43-0f8f-48c0-8f0e-24275513a838',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-09-27T09:05:29.219Z',
          id: '127278',
          createDate: '2024-09-27T09:05:29.219Z',
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '4f4c4942-4343-5764-6473-313032303335',
        _score: 6.883801,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '4f4c4942-4343-5764-6473-313032303335',
          standardNameObject: {
            default: 'MEDIN Discovery Metadata Standard',
            langeng: 'MEDIN Discovery Metadata Standard',
          },
          standardVersionObject: {
            default: 'Version 2.3.8',
            langeng: 'Version 2.3.8',
          },
          indexingDate: '2024-10-22T02:09:38Z',
          dateStamp: '2018-07-03T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          pointOfContactOrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contact: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              organisationValue: 'ne', // added for filtering
              role: 'pointOfContact',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
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
            default: 'Carmarthen Bay Intertidal Attributes and Monitoring Techniques - Monitoring of Piddocks',
            langeng: 'Carmarthen Bay Intertidal Attributes and Monitoring Techniques - Monitoring of Piddocks',
          },
          resourceAltTitleObject: [
            {
              default: 'Technegau Monitro a Phriodoleddau Rhynglanwol Bae Caerfyrddin - Monitro Pidogau',
              langeng: 'Technegau Monitro a Phriodoleddau Rhynglanwol Bae Caerfyrddin - Monitro Pidogau',
            },
            {
              default:
                '2004 CCW / IECS Carmarthen Bay and Estuaries SAC piddocks in clay/peat monitoring  MRCCW30200000013',
              langeng:
                '2004 CCW / IECS Carmarthen Bay and Estuaries SAC piddocks in clay/peat monitoring  MRCCW30200000013',
            },
          ],
          publicationDateForResource: ['2009-01-31T00:00:00.000Z', '2009-01-31T00:00:00.000Z'],
          publicationYearForResource: ['2009', '2009'],
          publicationMonthForResource: ['2009-01', '2009-01'],
          revisionDateForResource: ['2009-01-31T00:00:00.000Z', '2009-01-31T00:00:00.000Z'],
          revisionYearForResource: ['2009', '2009'],
          revisionMonthForResource: ['2009-01', '2009-01'],
          resourceDate: [
            {
              type: 'publication',
              date: '2009-01-31T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2009-01-31T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2009-01-31T00:00:00.000Z',
              lte: '2009-01-31T00:00:00.000Z',
            },
            {
              gte: '2004-09-15T00:00:00.000Z',
              lte: '2004-09-17T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '102035',
              codeSpace: 'https://naturalresources.wales',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'Under the 1992 EC Habitats and Species Directive, the UK submitted a list of candidate Special Areas of Conservation (cSACs) to the European Commission (EC). Each cSAC is selected for one or more of the habitat types and species listed in Annexes I and II of the Directive. This process was undertaken largely in 1995-1996. The piddock Pholas dactylus occurs in Britain from Kent along the south and south-west coasts including south Wales, Anglesey and Solway (Hill 2004). It has also been recorded from several sites on the east coasts of Yorkshire and Northumbria and southwest Ireland. The surface of the peat or clay bed is characterised by dense algal mats and pools of standing water (JNCC 2004). The presence of piddocks is instantly identified by holes in the substratum. The aim o\nf this data capture was to map the current known extent and density of boring molluscs, piddocks, across the biotope at Marros Sands and Whiteford Point, and record any mussel spat or seed on the biotope. Piddocks are bivalves that bore clay and peat exposures. The survey work is largely a trial to determine the best means by which to record the extent of the exposures as well as the populations of piddocks. Sand levels are found to change over time, seasonally, annually and as a result of one off weather events (storms), and thus the areas of populated peat and clay also vary. A non-destructive means of assessing the piddock population is considered.',
            langeng:
              'Under the 1992 EC Habitats and Species Directive, the UK submitted a list of candidate Special Areas of Conservation (cSACs) to the European Commission (EC). Each cSAC is selected for one or more of the habitat types and species listed in Annexes I and II of the Directive. This process was undertaken largely in 1995-1996. The piddock Pholas dactylus occurs in Britain from Kent along the south and south-west coasts including south Wales, Anglesey and Solway (Hill 2004). It has also been recorded from several sites on the east coasts of Yorkshire and Northumbria and southwest Ireland. The surface of the peat or clay bed is characterised by dense algal mats and pools of standing water (JNCC 2004). The presence of piddocks is instantly identified by holes in the substratum. The aim o\nf this data capture was to map the current known extent and density of boring molluscs, piddocks, across the biotope at Marros Sands and Whiteford Point, and record any mussel spat or seed on the biotope. Piddocks are bivalves that bore clay and peat exposures. The survey work is largely a trial to determine the best means by which to record the extent of the exposures as well as the populations of piddocks. Sand levels are found to change over time, seasonally, annually and as a result of one off weather events (storms), and thus the areas of populated peat and clay also vary. A non-destructive means of assessing the piddock population is considered.',
          },
          OrgForResourceObject: [
            {
              default: 'Natural Resources Wales (NRW)',
              langeng: 'Natural Resources Wales (NRW)',
            },
            {
              default: 'Countryside Council for Wales (CCW)',
              langeng: 'Countryside Council for Wales (CCW)',
            },
            {
              default: 'Hull University. Institute Of Estuarine And Coastal Studies',
              langeng: 'Hull University. Institute Of Estuarine And Coastal Studies',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForResource: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'custodian',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Countryside Council for Wales (CCW)',
              role: 'originator',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Countryside Council for Wales, Maes y Ffynnon, LL57 2DW',
              deliveryPoint: 'Countryside Council for Wales, Maes y Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Hull University. Institute Of Estuarine And Coastal Studies',
              role: 'originator',
              email: 'iecs@hull.ac.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '01482 464120',
              address: 'The University of Hull, HU6 7RX',
              deliveryPoint: 'The University of Hull',
              postalCode: 'HU6 7RX',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          originatorOrgForResourceObject: [
            {
              default: 'Countryside Council for Wales (CCW)',
              langeng: 'Countryside Council for Wales (CCW)',
            },
            {
              default: 'Hull University. Institute Of Estuarine And Coastal Studies',
              langeng: 'Hull University. Institute Of Estuarine And Coastal Studies',
            },
          ],
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
            {
              default: 'Species distribution',
              langeng: 'Species distribution',
            },
            {
              default: 'Shellfish abundance and biomass in water bodies',
              langeng: 'Shellfish abundance and biomass in water bodies',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/SABB',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/SABB',
            },
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
          ],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Species distribution',
              langeng: 'Species distribution',
            },
          ],
          th_SeaDataNetParameterDiscoveryVocabularyNumber: '1',
          th_SeaDataNetParameterDiscoveryVocabulary: [
            {
              default: 'Shellfish abundance and biomass in water bodies',
              langeng: 'Shellfish abundance and biomass in water bodies',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/SABB',
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
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
                },
              ],
            },
            'th_GEMET-INSPIREthemesversion1-0': {
              title: 'GEMET - INSPIRE themes, version 1.0',
              theme: '',
              keywords: [
                {
                  default: 'Species distribution',
                  langeng: 'Species distribution',
                },
              ],
            },
            th_SeaDataNetParameterDiscoveryVocabulary: {
              title: 'SeaDataNet Parameter Discovery Vocabulary',
              theme: '',
              keywords: [
                {
                  default: 'Shellfish abundance and biomass in water bodies',
                  langeng: 'Shellfish abundance and biomass in water bodies',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/SABB',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          resolutionDistance: [
            '10 http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default:
                "© CNC/NRW 2009. There are no use restrictions on this data.  Recipients may re-use, reproduce, disseminate this data free of charge in any format or medium, provided they do so accurately, acknowledging both the source and NRW's copyright, and do not use it in a misleading context. It is the recipient's responsibility to ensure the data is fit for the intended purpose, that dissemination or publishing does not result in duplication, and that it is fairly interpreted. Advice on interpretation should be sought where required. To avoid re-using old data, users should periodically obtain the latest version from the original source.",
              langeng:
                "© CNC/NRW 2009. There are no use restrictions on this data.  Recipients may re-use, reproduce, disseminate this data free of charge in any format or medium, provided they do so accurately, acknowledging both the source and NRW's copyright, and do not use it in a misleading context. It is the recipient's responsibility to ensure the data is fit for the intended purpose, that dissemination or publishing does not result in duplication, and that it is fairly interpreted. Advice on interpretation should be sought where required. To avoid re-using old data, users should periodically obtain the latest version from the original source.",
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                'There are no access restrictions to this data. NRW may release, publish or disseminate it freely.',
              langeng:
                'There are no access restrictions to this data. NRW may release, publish or disseminate it freely.',
            },
          ],
          licenseObject: [
            {
              default:
                'There are no access restrictions to this data. NRW may release, publish or disseminate it freely.',
              langeng:
                'There are no access restrictions to this data. NRW may release, publish or disseminate it freely.',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-4.661367, 51.598872],
                [-4.166842, 51.598872],
                [-4.166842, 51.828492],
                [-4.661367, 51.828492],
                [-4.661367, 51.598872],
              ],
            ],
          },
          location: '51.713682,-4.4141045000000005',
          resourceTemporalExtentDateRange: [
            {
              gte: '2004-09-15T00:00:00.000Z',
              lte: '2004-09-17T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2004-09-15',
              },
              end: {
                date: '2004-09-17',
              },
            },
          ],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::BNG'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::BNG',
              codeSpace: 'OGP',
              name: 'urn:ogc:def:crs:EPSG::BNG',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'Two sites the Carmarthen Bay SAC, where piddocks had previously been mapped, were chosen; Marros Sands, near Pendine and Whiteford Point. Surveys were carried out 3 hours either side of low water and involved sampling points at 10 m intervals along transect lines chosen to correspond with specific northing lines across the peat and clay exposures. At each sampling point a GPS coordinate and photograph was taken and a 25 cm x 25 cm transect was used to record the following information: Slope of the quadrat, number of live and dead piddocks within the burrows, mussel spat or seed on the surface, cover of Enteromorpha sp, fucoids and associated faunal species (a way of assessing overall habitat quality), description of substratum. Piddocks had previously been map\nped on the north Gower coast during Phase 1 survey.',
            langeng:
              'Two sites the Carmarthen Bay SAC, where piddocks had previously been mapped, were chosen; Marros Sands, near Pendine and Whiteford Point. Surveys were carried out 3 hours either side of low water and involved sampling points at 10 m intervals along transect lines chosen to correspond with specific northing lines across the peat and clay exposures. At each sampling point a GPS coordinate and photograph was taken and a 25 cm x 25 cm transect was used to record the following information: Slope of the quadrat, number of live and dead piddocks within the burrows, mussel spat or seed on the surface, cover of Enteromorpha sp, fucoids and associated faunal species (a way of assessing overall habitat quality), description of substratum. Piddocks had previously been map\nped on the north Gower coast during Phase 1 survey.',
          },
          OrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          distributorOrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForDistribution: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'distributor',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          recordGroup: '4f4c4942-4343-5764-6473-313032303335',
          mainLanguageFullName: '',
          OrgResolutionDistance: {
            distance: '10',
            uom: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          },
          OrgGeographicElement: [
            {
              ciTitle: 'ISO3166 Countries',
              type: 'publication',
              date: '2022-02-05',
              code: 'Wales (WLS)',
              url: '',
            },
            {
              ciTitle: 'SeaVoX Vertical Co-ordinate Coverages',
              type: 'publication',
              date: '2010-05-18',
              code: 'benthic boundary layer',
              url: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          OrgResourceTitleObject: {
            default: 'Carmarthen Bay Intertidal Attributes and Monitoring Techniques - Monitoring of Piddocks',
            langeng: 'Carmarthen Bay Intertidal Attributes and Monitoring Techniques - Monitoring of Piddocks',
          },
          OrgResourceAltTitleObject: [
            {
              default: 'Technegau Monitro a Phriodoleddau Rhynglanwol Bae Caerfyrddin - Monitro Pidogau',
              langeng: 'Technegau Monitro a Phriodoleddau Rhynglanwol Bae Caerfyrddin - Monitro Pidogau',
            },
            {
              default:
                '2004 CCW / IECS Carmarthen Bay and Estuaries SAC piddocks in clay/peat monitoring  MRCCW30200000013',
              langeng:
                '2004 CCW / IECS Carmarthen Bay and Estuaries SAC piddocks in clay/peat monitoring  MRCCW30200000013',
            },
          ],
          OrgResourceIdentifier: {
            code: '102035',
            codeSpace: 'https://naturalresources.wales',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: [
                'There are no access restrictions to this data. NRW may release, publish or disseminate it freely.',
              ],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_4f4c4942-4343-5764-6473-313032303335',
              sourceSystemReferenceID: 'Medin_4f4c4942-4343-5764-6473-313032303335',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
          recordOwner: 'admin admin',
          uuid: '4f4c4942-4343-5764-6473-313032303335',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:33:35.328Z',
          id: '147552',
          createDate: '2024-10-18T09:35:52.957Z',
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
        _id: 'c18e1393-d5fc-4559-b5bb-2501f63a3465',
        _score: 6.087425,
        _source: {
          status: 'retired', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: 'c18e1393-d5fc-4559-b5bb-2501f63a3465',
          indexingDate: '2024-09-27T15:38:38Z',
          dateStamp: '2018-05-17T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contact: [
            {
              organisationName: 'Digital and Data Solutions, JNCC',
              organisationValue: 'jncc', // added for filtering
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
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
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
            default: 'Habitat point records from 1988 MNCR Shetland littoral and sublittoral survey',
            langeng: 'Habitat point records from 1988 MNCR Shetland littoral and sublittoral survey',
          },
          publicationDateForResource: ['2007-05-03T00:00:00.000Z', '2007-05-03T00:00:00.000Z'],
          publicationYearForResource: ['2007', '2007'],
          publicationMonthForResource: ['2007-05', '2007-05'],
          resourceDate: [
            {
              type: 'publication',
              date: '2007-05-03T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2007-05-03T00:00:00.000Z',
              lte: '2007-05-03T00:00:00.000Z',
            },
            {
              gte: '1988-05-28T00:00:00.000Z',
              lte: '1988-06-04T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'c18e1393-d5fc-4559-b5bb-2501f63a3465',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'This survey was carried out to fill gaps in the survey coverage of the earlier OPRU/MNCR surveys of Shetland, Foula and Fair Isle (Hiscock 1986; Howson 1987). 6 littoral sites, 31 sublittoral dive sites and 14 sublittoral dredging sites were surveyed. These sites were located mainly around Unst and Fetlar and west of Scalloway with an exposed littoral site on the west mainland. Shallow peat sediments in the Vadills and Marlee loch were also surveyed. A full survey report has not been produced. Records currently considered sensitive have been removed from this dataset.',
            langeng:
              'This survey was carried out to fill gaps in the survey coverage of the earlier OPRU/MNCR surveys of Shetland, Foula and Fair Isle (Hiscock 1986; Howson 1987). 6 littoral sites, 31 sublittoral dive sites and 14 sublittoral dredging sites were surveyed. These sites were located mainly around Unst and Fetlar and west of Scalloway with an exposed littoral site on the west mainland. Shallow peat sediments in the Vadills and Marlee loch were also surveyed. A full survey report has not been produced. Records currently considered sensitive have been removed from this dataset.',
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
            default:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
            langeng:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
          },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000001',
              langeng: 'JNCCMNCR10000001',
            },
            {
              default: 'Habitat',
              langeng: 'Habitat',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'th_otherKeywords-Number': '5',
          'th_otherKeywords-': [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000001',
              langeng: 'JNCCMNCR10000001',
            },
            {
              default: 'Habitat',
              langeng: 'Habitat',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                },
                {
                  default: 'Marine Recorder',
                  langeng: 'Marine Recorder',
                },
                {
                  default: 'JNCCMNCR10000001',
                  langeng: 'JNCCMNCR10000001',
                },
                {
                  default: 'Habitat',
                  langeng: 'Habitat',
                },
                {
                  default: 'MNCR',
                  langeng: 'MNCR',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'oceans',
              default: 'Oceans',
              langeng: 'Oceans',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default: 'Open Government Licence v3.0',
              langeng: 'Open Government Licence v3.0',
            },
          ],
          licenseObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-1.895691, 60.10946],
                [-0.796918, 60.10946],
                [-0.796918, 60.838739],
                [-1.895691, 60.838739],
                [-1.895691, 60.10946],
              ],
            ],
          },
          location: '60.474099499999994,-1.3463045',
          resourceTemporalExtentDateRange: [
            {
              gte: '1988-05-28T00:00:00.000Z',
              lte: '1988-06-04T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1988-05-28',
              },
              end: {
                date: '1988-06-04',
              },
            },
          ],
          lineageObject: {
            default: 'This survey was extracted from a Marine Recorder snapshot.',
            langeng: 'This survey was extracted from a Marine Recorder snapshot.',
          },
          // format: ['Comma Separated Values'],
          format: ['csv'], // changed for filtering
          linkUrl:
            'http://data.jncc.gov.uk/data/c18e1393-d5fc-4559-b5bb-2501f63a3465-1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
          linkProtocol: ['http-fd'], // changed for filtering
          linkUrlProtocol:
            'http://data.jncc.gov.uk/data/c18e1393-d5fc-4559-b5bb-2501f63a3465-1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default:
                  'http://data.jncc.gov.uk/data/c18e1393-d5fc-4559-b5bb-2501f63a3465-1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
              },
              nameObject: {
                default: '1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
                langeng: '1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: 'c18e1393-d5fc-4559-b5bb-2501f63a3465',
          mainLanguageFullName: '',
          OrgSupplementalInformationObject: {
            default:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
            langeng:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
          },
          OrgResourceTitleObject: {
            default: 'Habitat point records from 1988 MNCR Shetland littoral and sublittoral survey',
            langeng: 'Habitat point records from 1988 MNCR Shetland littoral and sublittoral survey',
          },
          OrgResourceIdentifier: {
            code: 'c18e1393-d5fc-4559-b5bb-2501f63a3465',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: {
            OrgOtherConstraints: ['no limitations'],
            OrgAccessConstraints: ['otherRestrictions'],
          },
          OrgDistributionFormats: {
            name: 'Comma Separated Values',
            version: '',
          },
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Jncc_c18e1393-d5fc-4559-b5bb-2501f63a3465',
              sourceSystemReferenceID: 'Jncc_c18e1393-d5fc-4559-b5bb-2501f63a3465',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Marine habitats',
                  code: 'lv2-003',
                  classifiers: [
                    {
                      name: 'Benthic general',
                      code: 'lv3-200',
                    },
                  ],
                },
                {
                  name: 'Ecosystem component',
                  code: 'lv2-005',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: 'c18e1393-d5fc-4559-b5bb-2501f63a3465',
          harvesterUuid: '93f27e43-0f8f-48c0-8f0e-24275513a838',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-09-27T09:03:47.735Z',
          id: '127952',
          createDate: '2024-09-27T09:03:47.735Z',
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '5c16e038-557a-401d-b5cd-d96d7cd1eea5',
        _score: 6.087425,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '5c16e038-557a-401d-b5cd-d96d7cd1eea5',
          indexingDate: '2024-09-27T15:37:43Z',
          dateStamp: '2018-05-17T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contact: [
            {
              organisationName: 'Digital and Data Solutions, JNCC',
              organisationValue: 'jncc', // added for filtering
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
              key: 'dataset',
              default: 'Dataset',
              langeng: 'Dataset',
              link: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/gmxCodelists.xml#MD_ScopeCode',
              text: 'dataset',
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
            default: 'Species point records from 1988 MNCR Shetland littoral and sublittoral survey',
            langeng: 'Species point records from 1988 MNCR Shetland littoral and sublittoral survey',
          },
          publicationDateForResource: ['2007-05-03T00:00:00.000Z', '2007-05-03T00:00:00.000Z'],
          publicationYearForResource: ['2007', '2007'],
          publicationMonthForResource: ['2007-05', '2007-05'],
          resourceDate: [
            {
              type: 'publication',
              date: '2007-05-03T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2007-05-03T00:00:00.000Z',
              lte: '2007-05-03T00:00:00.000Z',
            },
            {
              gte: '1988-05-28T00:00:00.000Z',
              lte: '1988-06-04T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '5c16e038-557a-401d-b5cd-d96d7cd1eea5',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'This survey was carried out to fill gaps in the survey coverage of the earlier OPRU/MNCR surveys of Shetland, Foula and Fair Isle (Hiscock 1986; Howson 1987). 6 littoral sites, 31 sublittoral dive sites and 14 sublittoral dredging sites were surveyed. These sites were located mainly around Unst and Fetlar and west of Scalloway with an exposed littoral site on the west mainland. Shallow peat sediments in the Vadills and Marlee loch were also surveyed. A full survey report has not been produced. Records currently considered sensitive have been removed from this dataset.',
            langeng:
              'This survey was carried out to fill gaps in the survey coverage of the earlier OPRU/MNCR surveys of Shetland, Foula and Fair Isle (Hiscock 1986; Howson 1987). 6 littoral sites, 31 sublittoral dive sites and 14 sublittoral dredging sites were surveyed. These sites were located mainly around Unst and Fetlar and west of Scalloway with an exposed littoral site on the west mainland. Shallow peat sediments in the Vadills and Marlee loch were also surveyed. A full survey report has not been produced. Records currently considered sensitive have been removed from this dataset.',
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
            default:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
            langeng:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
          },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000001',
              langeng: 'JNCCMNCR10000001',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
            {
              default: 'Species',
              langeng: 'Species',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'th_otherKeywords-Number': '5',
          'th_otherKeywords-': [
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Marine Recorder',
              langeng: 'Marine Recorder',
            },
            {
              default: 'JNCCMNCR10000001',
              langeng: 'JNCCMNCR10000001',
            },
            {
              default: 'MNCR',
              langeng: 'MNCR',
            },
            {
              default: 'Species',
              langeng: 'Species',
            },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                },
                {
                  default: 'Marine Recorder',
                  langeng: 'Marine Recorder',
                },
                {
                  default: 'JNCCMNCR10000001',
                  langeng: 'JNCCMNCR10000001',
                },
                {
                  default: 'MNCR',
                  langeng: 'MNCR',
                },
                {
                  default: 'Species',
                  langeng: 'Species',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'oceans',
              default: 'Oceans',
              langeng: 'Oceans',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default: 'Open Government Licence v3.0',
              langeng: 'Open Government Licence v3.0',
            },
          ],
          licenseObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-1.895691, 60.10946],
                [-0.796918, 60.10946],
                [-0.796918, 60.838739],
                [-1.895691, 60.838739],
                [-1.895691, 60.10946],
              ],
            ],
          },
          location: '60.474099499999994,-1.3463045',
          resourceTemporalExtentDateRange: [
            {
              gte: '1988-05-28T00:00:00.000Z',
              lte: '1988-06-04T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1988-05-28',
              },
              end: {
                date: '1988-06-04',
              },
            },
          ],
          lineageObject: {
            default: 'This survey was extracted from a Marine Recorder snapshot.',
            langeng: 'This survey was extracted from a Marine Recorder snapshot.',
          },
          // format: ['Comma Separated Values'],
          format: ['csv'], // changed for filtering
          linkUrl:
            'http://data.jncc.gov.uk/data/5c16e038-557a-401d-b5cd-d96d7cd1eea5-1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
          linkProtocol: ['http-fd'], // changed for filtering
          linkUrlProtocol:
            'http://data.jncc.gov.uk/data/5c16e038-557a-401d-b5cd-d96d7cd1eea5-1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default:
                  'http://data.jncc.gov.uk/data/5c16e038-557a-401d-b5cd-d96d7cd1eea5-1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
              },
              nameObject: {
                default: '1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
                langeng: '1988-MNCR-Shetland-littoral-and-sublittoral-survey.csv',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '5c16e038-557a-401d-b5cd-d96d7cd1eea5',
          mainLanguageFullName: '',
          OrgSupplementalInformationObject: {
            default:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
            langeng:
              'Hiscock (1988) Marine Nature Conservation Review: Marine biological surveys in Shetland, 28th May - 5th June 1988. Field Report.\n\nHiscock (1986) Marine biological surveys in Shetland. August 1986.\n\nHowson (1988) Marine Nature Conservation Review: survey of Shetland, Foula and Fair Isle, 1987.',
          },
          OrgResourceTitleObject: {
            default: 'Species point records from 1988 MNCR Shetland littoral and sublittoral survey',
            langeng: 'Species point records from 1988 MNCR Shetland littoral and sublittoral survey',
          },
          OrgResourceIdentifier: {
            code: '5c16e038-557a-401d-b5cd-d96d7cd1eea5',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: {
            OrgOtherConstraints: ['no limitations'],
            OrgAccessConstraints: ['otherRestrictions'],
          },
          OrgDistributionFormats: {
            name: 'Comma Separated Values',
            version: '',
          },
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Jncc_5c16e038-557a-401d-b5cd-d96d7cd1eea5',
              sourceSystemReferenceID: 'Jncc_5c16e038-557a-401d-b5cd-d96d7cd1eea5',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
              classifiers: [
                {
                  name: 'Marine habitats',
                  code: 'lv2-003',
                  classifiers: [
                    {
                      name: 'Benthic general',
                      code: 'lv3-200',
                    },
                  ],
                },
                {
                  name: 'Ecosystem component',
                  code: 'lv2-005',
                },
              ],
            },
          ],
          recordOwner: 'admin admin',
          uuid: '5c16e038-557a-401d-b5cd-d96d7cd1eea5',
          harvesterUuid: '93f27e43-0f8f-48c0-8f0e-24275513a838',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-09-27T09:04:22.931Z',
          id: '127392',
          createDate: '2024-09-27T09:04:22.931Z',
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: 'f4fdb861719553e0757a2d2cc4d02d8e',
        _score: 5.8778534,
        _ignored: ['lineageObject.langeng.keyword', 'lineageObject.default.sort', 'lineageObject.default.keyword'],
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: 'f4fdb861719553e0757a2d2cc4d02d8e',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:34:49Z',
          dateStamp: '2019-04-08T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          pointOfContactOrgObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          contact: [
            {
              organisationName: 'Data Archive for Seabed Species and Habitats (DASSH)',
              organisationValue: 'cefas', // added for filtering
              role: 'pointOfContact',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'Esther Hughes',
              position: 'Data Manager',
              phone: '01752 633102',
              address:
                'Marine Biological Association of the UK,\n         The Laboratory,\n         Citadel Hill, Plymouth, PL1 2PB',
              deliveryPoint:
                'Marine Biological Association of the UK,\n         The Laboratory,\n         Citadel Hill',
              postalCode: 'PL1 2PB',
              city: 'Plymouth',
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
            default:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from polygon data) in the UK and Isle of Man',
            langeng:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from polygon data) in the UK and Isle of Man',
          },
          publicationDateForResource: ['2009-09-01T00:00:00.000Z', '2009-09-01T00:00:00.000Z'],
          publicationYearForResource: ['2009', '2009'],
          publicationMonthForResource: ['2009-09', '2009-09'],
          resourceDate: [
            {
              type: 'publication',
              date: '2009-09-01T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2009-09-01T00:00:00.000Z',
              lte: '2009-09-01T00:00:00.000Z',
            },
            {
              gte: '1996-06-18T00:00:00.000Z',
              lte: '2009-03-06T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'MB010200002C0021b',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'This layer shows the distribution of polygon records of peat and clay exposures with piddocks, a Biodiversity Action Plan Habitat.\n This layer forms one of a set of data layers created for the Defra MB0102 contract. This work will support the delivery of a network of Marine Protected Areas as required to meet existing international and national obligations and commitments, including Marine Conservation Zones (MCZs), a new measure to be delivered as part of the Marine and Coastal Access Bill, and equivalent measures under Scottish legislation. The availability of these data layers will also be of importance in underpinning Marine Planning (e.g. licensing) in our marine area.',
            langeng:
              'This layer shows the distribution of polygon records of peat and clay exposures with piddocks, a Biodiversity Action Plan Habitat.\n This layer forms one of a set of data layers created for the Defra MB0102 contract. This work will support the delivery of a network of Marine Protected Areas as required to meet existing international and national obligations and commitments, including Marine Conservation Zones (MCZs), a new measure to be delivered as part of the Marine and Coastal Access Bill, and equivalent measures under Scottish legislation. The availability of these data layers will also be of importance in underpinning Marine Planning (e.g. licensing) in our marine area.',
          },
          OrgForResourceObject: [
            {
              default: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              langeng: 'Department for Environment, Food and Rural Affairs (DEFRA)',
            },
            {
              default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            },
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
            },
          ],
          originatorOrgForResourceObject: [
            {
              default: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              langeng: 'Department for Environment, Food and Rural Affairs (DEFRA)',
            },
            {
              default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            },
          ],
          contactForResource: [
            {
              organisationName: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              role: 'originator',
              email: 'SPIRE@defra.gsi.gov.uk',
              website: '',
              logo: '',
              individual: 'Jo Myers',
              position: 'R and D Programme Manager',
              phone: '',
              address: 'Nobel House\n17 Smith Square, London, SW1P 3JR',
              deliveryPoint: 'Nobel House\n17 Smith Square',
              postalCode: 'SW1P 3JR',
              city: 'London',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              role: 'originator',
              email: 'comment@jncc.gov.uk',
              website: '',
              logo: '',
              individual: 'Beth  Stoker',
              position: 'Marine Officer',
              phone: '',
              address: 'Monkstone House\nCity Road, Peterborough, PE1 1JY',
              deliveryPoint: 'Monkstone House\nCity Road',
              postalCode: 'PE1 1JY',
              city: 'Peterborough',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Marine Environmental Data and Information Network',
              role: 'custodian',
              email: 'gaev@bodc.ac.uk',
              website: '',
              logo: '',
              individual: 'Gaynor Evans',
              position: 'MEDIN Core Team',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Marine Environmental Data and Information Network',
            langeng: 'Marine Environmental Data and Information Network',
          },
          supplementalInformationObject: {
            default:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
            langeng:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
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
              default: 'Habitat characterisation',
              langeng: 'Habitat characterisation',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
            },
          ],
          tagNumber: '3',
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
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
          ],
          th_SeaDataNetP021parameterdiscoveryvocabularyNumber: '1',
          th_SeaDataNetP021parameterdiscoveryvocabulary: [
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
                  default: 'Habitat characterisation',
                  langeng: 'Habitat characterisation',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          resolutionDistance: [
            '100 http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Freely available under Open Government Licence',
              langeng: 'Freely available under Open Government Licence',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              langeng:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
            },
          ],
          licenseObject: [
            {
              default:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              langeng:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-4.6124, 51.356],
                [1.0325, 51.356],
                [1.0325, 53.3967],
                [-4.6124, 53.3967],
                [-4.6124, 51.356],
              ],
            ],
          },
          location: '52.37635,-1.7899500000000002',
          resourceTemporalExtentDateRange: [
            {
              gte: '1996-06-18T00:00:00.000Z',
              lte: '2009-03-06T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1996-06-18',
              },
              end: {
                date: '2009-03-06',
              },
            },
          ],
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
              'This dataset was created as part of the Defra MB0102 contract. Data was collated from a range of conservation and academic organisations and through a literature search. \n Full survey information is available from the survey table in the project geodatabase which can be joined to the layer by the Survey ID \n \n Field Explanations. \n Original Habitat Name: \n The habitat code, species name or feature recorded in the original survey. \n Habitat Name: \n The current accepted name for the habitat as described by the relevent designation \n Survey ID: \n A link to survey information. Where data is entered in to Marine Recorder this refers to the MR SurveyID. A few surveys could not be entered into Marine Recorder without risk of duplication occuring. e.g. Seasearch data that will be entered into MR at a later date, data from polygons etc. These have been given a project surveyID using the reference: MPALAYERS0000XX \n Date: \n The date the habitat was recorded if known. Vague dates have been entered as the first of a month, if only the month is known, e.g. 01/03/89 or as the first of January if only the year is known, e.g. 01/01/78. Unknown dates show as 00:00:00. \n Location Name: \n The location or site name where provided. \n SampleID: \n For Marine Recorder surveys the sample_key field has been entered. \n Event name: \n Where known an event name has been provided. \n Latitude: \n The latitude of the sample point. \n Longitude: \n The longitude of the sample point. \n Determiner: \n Where known the determiner of the habitat record as specified in Marine Recorder. For non MR surveys the recorder has been inputted into this field as it has been assumed that the recorder is the determiner unless otherwise stated. \n Classification:\n The classification used to establish the original habitat e.g EUNIS version 2004, if the habitat has been classified directly from species data then the designation e.g. BAP is used.\n Designation: \n The conservation designation appropriate e.g. BAP, OSPAR. Please note that The OSPAR and BAP definitions may differ so not all records may have the same designation.\n Status: \n The biotope status as defined by two terms; \n Certain - A certain record of the habitat. \n Habitat likely - A record where evidence, e.g. species abundances, suggests that the \n Coordinate Precision: \n An estimate of the spatial resolution in metres of the co-ordinate, based on survey method, date and the derivation of the co-ordinates . This ranges from 10-10000 metres.',
            langeng:
              'This dataset was created as part of the Defra MB0102 contract. Data was collated from a range of conservation and academic organisations and through a literature search. \n Full survey information is available from the survey table in the project geodatabase which can be joined to the layer by the Survey ID \n \n Field Explanations. \n Original Habitat Name: \n The habitat code, species name or feature recorded in the original survey. \n Habitat Name: \n The current accepted name for the habitat as described by the relevent designation \n Survey ID: \n A link to survey information. Where data is entered in to Marine Recorder this refers to the MR SurveyID. A few surveys could not be entered into Marine Recorder without risk of duplication occuring. e.g. Seasearch data that will be entered into MR at a later date, data from polygons etc. These have been given a project surveyID using the reference: MPALAYERS0000XX \n Date: \n The date the habitat was recorded if known. Vague dates have been entered as the first of a month, if only the month is known, e.g. 01/03/89 or as the first of January if only the year is known, e.g. 01/01/78. Unknown dates show as 00:00:00. \n Location Name: \n The location or site name where provided. \n SampleID: \n For Marine Recorder surveys the sample_key field has been entered. \n Event name: \n Where known an event name has been provided. \n Latitude: \n The latitude of the sample point. \n Longitude: \n The longitude of the sample point. \n Determiner: \n Where known the determiner of the habitat record as specified in Marine Recorder. For non MR surveys the recorder has been inputted into this field as it has been assumed that the recorder is the determiner unless otherwise stated. \n Classification:\n The classification used to establish the original habitat e.g EUNIS version 2004, if the habitat has been classified directly from species data then the designation e.g. BAP is used.\n Designation: \n The conservation designation appropriate e.g. BAP, OSPAR. Please note that The OSPAR and BAP definitions may differ so not all records may have the same designation.\n Status: \n The biotope status as defined by two terms; \n Certain - A certain record of the habitat. \n Habitat likely - A record where evidence, e.g. species abundances, suggests that the \n Coordinate Precision: \n An estimate of the spatial resolution in metres of the co-ordinate, based on survey method, date and the derivation of the co-ordinates . This ranges from 10-10000 metres.',
          },
          OrgForDistributionObject: {
            default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
          },
          distributorOrgForDistributionObject: {
            default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
          },
          contactForDistribution: [
            {
              organisationName: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              role: 'distributor',
              email: 'comment@jncc.gov.uk',
              website: '',
              logo: '',
              individual: 'Beth  Stoker',
              position: 'Marine Officer',
              phone: '',
              address: 'Monkstone House\nCity Road, Peterborough, PE1 1JY',
              deliveryPoint: 'Monkstone House\nCity Road',
              postalCode: 'PE1 1JY',
              city: 'Peterborough',
              country: '',
              administrativeArea: '',
            },
          ],
          linkUrl: 'https://www.bodc.ac.uk/data/download/asset/2490/generic/',
          linkProtocol: ['http-fd'], // changed for filtering
          linkUrlProtocol: 'https://www.bodc.ac.uk/data/download/asset/2490/generic/',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'https://www.bodc.ac.uk/data/download/asset/2490/generic/',
              },
              descriptionObject: {
                default: 'A link to the web service or dataset',
                langeng: 'A link to the web service or dataset',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: 'f4fdb861719553e0757a2d2cc4d02d8e',
          mainLanguageFullName: '',
          OrgResolutionDistance: {
            distance: '100',
            uom: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          },
          OrgSupplementalInformationObject: {
            default:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
            langeng:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
          },
          OrgResourceTitleObject: {
            default:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from polygon data) in the UK and Isle of Man',
            langeng:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from polygon data) in the UK and Isle of Man',
          },
          OrgResourceIdentifier: {
            code: 'MB010200002C0021b',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: [
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              ],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_f4fdb861719553e0757a2d2cc4d02d8e',
              sourceSystemReferenceID: 'Medin_f4fdb861719553e0757a2d2cc4d02d8e',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
          recordOwner: 'admin admin',
          uuid: 'f4fdb861719553e0757a2d2cc4d02d8e',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:50:43.121Z',
          id: '160162',
          createDate: '2024-10-18T09:52:33.778Z',
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
        _id: '80a19d9af3e4ac1cbaf0ac9f4dadb801',
        _score: 5.724451,
        _ignored: ['lineageObject.langeng.keyword', 'lineageObject.default.sort', 'lineageObject.default.keyword'],
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '80a19d9af3e4ac1cbaf0ac9f4dadb801',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:15:37Z',
          dateStamp: '2019-04-08T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          pointOfContactOrgObject: {
            default: 'Data Archive for Seabed Species and Habitats (DASSH)',
            langeng: 'Data Archive for Seabed Species and Habitats (DASSH)',
          },
          contact: [
            {
              organisationName: 'Data Archive for Seabed Species and Habitats (DASSH)',
              organisationValue: 'cefas', // added for filtering
              role: 'pointOfContact',
              email: 'dassh.enquiries@mba.ac.uk',
              website: '',
              logo: '',
              individual: 'Esther Hughes',
              position: 'Data Manager',
              phone: '01752 633102',
              address:
                'Marine Biological Association of the UK,\n         The Laboratory,\n         Citadel Hill, Plymouth, PL1 2PB',
              deliveryPoint:
                'Marine Biological Association of the UK,\n         The Laboratory,\n         Citadel Hill',
              postalCode: 'PL1 2PB',
              city: 'Plymouth',
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
            default:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
            langeng:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
          },
          publicationDateForResource: ['2009-09-01T00:00:00.000Z', '2009-09-01T00:00:00.000Z'],
          publicationYearForResource: ['2009', '2009'],
          publicationMonthForResource: ['2009-09', '2009-09'],
          resourceDate: [
            {
              type: 'publication',
              date: '2009-09-01T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2009-09-01T00:00:00.000Z',
              lte: '2009-09-01T00:00:00.000Z',
            },
            {
              gte: '1996-06-01T00:00:00.000Z',
              lte: '2009-02-13T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'MB010200002C0021a',
              codeSpace: '',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'This layer shows the distribution of polygon records of blue mussel beds, a Biodiversity Action Plan Habitat.\n This layer forms one of a set of data layers created for the Defra MB0102 contract. This work will support the delivery of a network of Marine Protected Areas as required to meet existing international and national obligations and commitments, including Marine Conservation Zones (MCZs), a new measure to be delivered as part of the Marine and Coastal Access Bill, and equivalent measures under Scottish legislation. The availability of these data layers will also be of importance in underpinning Marine Planning (e.g. licensing) in our marine area.',
            langeng:
              'This layer shows the distribution of polygon records of blue mussel beds, a Biodiversity Action Plan Habitat.\n This layer forms one of a set of data layers created for the Defra MB0102 contract. This work will support the delivery of a network of Marine Protected Areas as required to meet existing international and national obligations and commitments, including Marine Conservation Zones (MCZs), a new measure to be delivered as part of the Marine and Coastal Access Bill, and equivalent measures under Scottish legislation. The availability of these data layers will also be of importance in underpinning Marine Planning (e.g. licensing) in our marine area.',
          },
          OrgForResourceObject: [
            {
              default: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              langeng: 'Department for Environment, Food and Rural Affairs (DEFRA)',
            },
            {
              default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            },
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
            },
          ],
          originatorOrgForResourceObject: [
            {
              default: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              langeng: 'Department for Environment, Food and Rural Affairs (DEFRA)',
            },
            {
              default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            },
          ],
          contactForResource: [
            {
              organisationName: 'Department for Environment, Food and Rural Affairs (DEFRA)',
              role: 'originator',
              email: 'SPIRE@defra.gsi.gov.uk',
              website: '',
              logo: '',
              individual: 'Jo Myers',
              position: 'R and D Programme Manager',
              phone: '',
              address: 'Nobel House\n17 Smith Square, London, SW1P 3JR',
              deliveryPoint: 'Nobel House\n17 Smith Square',
              postalCode: 'SW1P 3JR',
              city: 'London',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              role: 'originator',
              email: 'comment@jncc.gov.uk',
              website: '',
              logo: '',
              individual: 'Beth  Stoker',
              position: 'Marine Officer',
              phone: '',
              address: 'Monkstone House\nCity Road, Peterborough, PE1 1JY',
              deliveryPoint: 'Monkstone House\nCity Road',
              postalCode: 'PE1 1JY',
              city: 'Peterborough',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Marine Environmental Data and Information Network',
              role: 'custodian',
              email: 'gaev@bodc.ac.uk',
              website: '',
              logo: '',
              individual: 'Gaynor Evans',
              position: 'MEDIN Core Team',
              phone: '',
              address: '',
              deliveryPoint: '',
              postalCode: '',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Marine Environmental Data and Information Network',
            langeng: 'Marine Environmental Data and Information Network',
          },
          supplementalInformationObject: {
            default:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
            langeng:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
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
              default: 'Habitat characterisation',
              langeng: 'Habitat characterisation',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
            },
          ],
          tagNumber: '3',
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
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
          ],
          th_SeaDataNetP021parameterdiscoveryvocabularyNumber: '1',
          th_SeaDataNetP021parameterdiscoveryvocabulary: [
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
                  default: 'Habitat characterisation',
                  langeng: 'Habitat characterisation',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBCH/',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          resolutionDistance: [
            '100 http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Freely available under Open Government Licence',
              langeng: 'Freely available under Open Government Licence',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              langeng:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
            },
          ],
          licenseObject: [
            {
              default:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              langeng:
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-5.6595, 50.2368],
                [1.441, 50.2368],
                [1.441, 55.9533],
                [-5.6595, 55.9533],
                [-5.6595, 50.2368],
              ],
            ],
          },
          location: '53.09505,-2.1092500000000003',
          resourceTemporalExtentDateRange: [
            {
              gte: '1996-06-01T00:00:00.000Z',
              lte: '2009-02-13T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1996-06-01',
              },
              end: {
                date: '2009-02-13',
              },
            },
          ],
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
              'This dataset was created as part of the Defra MB0102 contract. Data was collated from a range of conservation and academic organisations and through a literature search. \n Full survey information is available from the survey table in the project geodatabase which can be joined to the layer by the Survey ID \n \n Field Explanations. \n Original Habitat Name: \n The habitat code, species name or feature recorded in the original survey. \n Habitat Name: \n The current accepted name for the habitat as described by the relevent designation \n Survey ID: \n A link to survey information. Where data is entered in to Marine Recorder this refers to the MR SurveyID. A few surveys could not be entered into Marine Recorder without risk of duplication occuring. e.g. Seasearch data that will be entered into MR at a later date, data from polygons etc. These have been given a project surveyID using the reference: MPALAYERS0000XX \n Date: \n The date the habitat was recorded if known. Vague dates have been entered as the first of a month, if only the month is known, e.g. 01/03/89 or as the first of January if only the year is known, e.g. 01/01/78. Unknown dates show as 00:00:00. \n Location Name: \n The location or site name where provided. \n SampleID: \n For Marine Recorder surveys the sample_key field has been entered. \n Event name: \n Where known an event name has been provided. \n Latitude: \n The latitude of the sample point. \n Longitude: \n The longitude of the sample point. \n Determiner: \n Where known the determiner of the habitat record as specified in Marine Recorder. For non MR surveys the recorder has been inputted into this field as it has been assumed that the recorder is the determiner unless otherwise stated. \n Classification:\n The classification used to establish the original habitat e.g EUNIS version 2004, if the habitat has been classified directly from species data then the designation e.g. BAP is used.\n Designation: \n The conservation designation appropriate e.g. BAP, OSPAR. Please note that The OSPAR and BAP definitions may differ so not all records may have the same designation.\n Status: \n The biotope status as defined by two terms; \n Certain - A certain record of the habitat. \n Habitat likely - A record where evidence, e.g. species abundances, suggests that the \n Coordinate Precision: \n An estimate of the spatial resolution in metres of the co-ordinate, based on survey method, date and the derivation of the co-ordinates . This ranges from 10-10000 metres.',
            langeng:
              'This dataset was created as part of the Defra MB0102 contract. Data was collated from a range of conservation and academic organisations and through a literature search. \n Full survey information is available from the survey table in the project geodatabase which can be joined to the layer by the Survey ID \n \n Field Explanations. \n Original Habitat Name: \n The habitat code, species name or feature recorded in the original survey. \n Habitat Name: \n The current accepted name for the habitat as described by the relevent designation \n Survey ID: \n A link to survey information. Where data is entered in to Marine Recorder this refers to the MR SurveyID. A few surveys could not be entered into Marine Recorder without risk of duplication occuring. e.g. Seasearch data that will be entered into MR at a later date, data from polygons etc. These have been given a project surveyID using the reference: MPALAYERS0000XX \n Date: \n The date the habitat was recorded if known. Vague dates have been entered as the first of a month, if only the month is known, e.g. 01/03/89 or as the first of January if only the year is known, e.g. 01/01/78. Unknown dates show as 00:00:00. \n Location Name: \n The location or site name where provided. \n SampleID: \n For Marine Recorder surveys the sample_key field has been entered. \n Event name: \n Where known an event name has been provided. \n Latitude: \n The latitude of the sample point. \n Longitude: \n The longitude of the sample point. \n Determiner: \n Where known the determiner of the habitat record as specified in Marine Recorder. For non MR surveys the recorder has been inputted into this field as it has been assumed that the recorder is the determiner unless otherwise stated. \n Classification:\n The classification used to establish the original habitat e.g EUNIS version 2004, if the habitat has been classified directly from species data then the designation e.g. BAP is used.\n Designation: \n The conservation designation appropriate e.g. BAP, OSPAR. Please note that The OSPAR and BAP definitions may differ so not all records may have the same designation.\n Status: \n The biotope status as defined by two terms; \n Certain - A certain record of the habitat. \n Habitat likely - A record where evidence, e.g. species abundances, suggests that the \n Coordinate Precision: \n An estimate of the spatial resolution in metres of the co-ordinate, based on survey method, date and the derivation of the co-ordinates . This ranges from 10-10000 metres.',
          },
          OrgForDistributionObject: {
            default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
          },
          distributorOrgForDistributionObject: {
            default: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
            langeng: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
          },
          contactForDistribution: [
            {
              organisationName: 'Joint Nature Conservation Committee (JNCC) - Marine Conservation Branch, Peterborough',
              role: 'distributor',
              email: 'comment@jncc.gov.uk',
              website: '',
              logo: '',
              individual: 'Beth  Stoker',
              position: 'Marine Officer',
              phone: '',
              address: 'Monkstone House\nCity Road, Peterborough, PE1 1JY',
              deliveryPoint: 'Monkstone House\nCity Road',
              postalCode: 'PE1 1JY',
              city: 'Peterborough',
              country: '',
              administrativeArea: '',
            },
          ],
          linkUrl: 'https://www.bodc.ac.uk/data/download/asset/2489/generic/',
          linkProtocol: ['http-fd'], // changed for filtering
          linkUrlProtocol: 'https://www.bodc.ac.uk/data/download/asset/2489/generic/',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'https://www.bodc.ac.uk/data/download/asset/2489/generic/',
              },
              descriptionObject: {
                default: 'A link to the web service or dataset',
                langeng: 'A link to the web service or dataset',
              },
              function: '',
              applicationProfile: '',
              group: 0,
            },
          ],
          recordGroup: '80a19d9af3e4ac1cbaf0ac9f4dadb801',
          mainLanguageFullName: '',
          OrgResolutionDistance: {
            distance: '100',
            uom: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          },
          OrgSupplementalInformationObject: {
            default:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
            langeng:
              'This information was extracted from ESRIISO metadata (incorporating ISO and FGDC elements) using the EsriIsoToMedin xslt version 1.0;ISO Resource created in environment: Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 2; ESRI ArcCatalog 9.3.0.1770',
          },
          OrgResourceTitleObject: {
            default:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
            langeng:
              '2009 Defra MB0102 2C Distribution of Peat and Clay Exposures (from point data) in the United Kingdom and Isle of Man',
          },
          OrgResourceIdentifier: {
            code: 'MB010200002C0021a',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: [
                'Freely Available via MEDIN Data Archive Centre with the exception of Native oyster (Ostrea edulis); Carbonate Mounds; Cold-water coral reefs where Pub',
              ],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_80a19d9af3e4ac1cbaf0ac9f4dadb801',
              sourceSystemReferenceID: 'Medin_80a19d9af3e4ac1cbaf0ac9f4dadb801',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
          recordOwner: 'admin admin',
          uuid: '80a19d9af3e4ac1cbaf0ac9f4dadb801',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:36:36.172Z',
          id: '150361',
          createDate: '2024-10-18T09:38:54.108Z',
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
        _id: '0acff943-5ea1-225b-e054-002128a47908',
        _score: 5.665843,
        _ignored: [
          'OrgResourceConstraints.OrgOtherConstraints.keyword',
          'link.descriptionObject.langeng.keyword',
          'link.descriptionObject.default.keyword',
        ],
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '0acff943-5ea1-225b-e054-002128a47908',
          standardNameObject: {
            default: 'MEDIN Discovery Metadata Standard',
            langeng: 'MEDIN Discovery Metadata Standard',
          },
          standardVersionObject: {
            default: 'Version 2.3.5',
            langeng: 'Version 2.3.5',
          },
          indexingDate: '2024-10-22T02:00:47Z',
          dateStamp: '2024-04-12T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'British Geological Survey (BGS)',
            langeng: 'British Geological Survey (BGS)',
          },
          pointOfContactOrgObject: {
            default: 'British Geological Survey (BGS)',
            langeng: 'British Geological Survey (BGS)',
          },
          contact: [
            {
              organisationName: 'British Geological Survey (BGS)',
              organisationValue: 'ea', // added for filtering
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
          resourceDate: [
            {
              type: 'publication',
              date: '2014-03-31T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2014-03-31T00:00:00.000Z',
              lte: '2014-03-31T00:00:00.000Z',
            },
            {
              gte: '2014-03-13T00:00:00.000Z',
              lte: '2014-03-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'BGS_CMD_REF853',
              codeSpace: 'British Geological Survey',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              "Drop camera survey collecting seabed images and sediment samples from three specified locations from within the East Farnes recomended Marine Conservation Zone (rMCZ) to client's specfications, namely Joint Nature Conservation Committee (JNCC), specifically to verify the presence of circalittoral rock and peat. Sampling equipment: Drop Camera; Hamon Grab. These data are archived with the Marine Environmental Data and Information Network (MEDIN) Data Archive Centres (DACs) including the British Geological Survey (BGS) DAC for geology and geophysics, The Archive for Marine Species and Habitats Data (DASSH) and the United Kingdom Hydrographic Office (UKHO) bathymetry DAC. The full site data package including raw is also available on request from BGS.",
            langeng:
              "Drop camera survey collecting seabed images and sediment samples from three specified locations from within the East Farnes recomended Marine Conservation Zone (rMCZ) to client's specfications, namely Joint Nature Conservation Committee (JNCC), specifically to verify the presence of circalittoral rock and peat. Sampling equipment: Drop Camera; Hamon Grab. These data are archived with the Marine Environmental Data and Information Network (MEDIN) Data Archive Centres (DACs) including the British Geological Survey (BGS) DAC for geology and geophysics, The Archive for Marine Species and Habitats Data (DASSH) and the United Kingdom Hydrographic Office (UKHO) bathymetry DAC. The full site data package including raw is also available on request from BGS.",
          },
          OrgForResourceObject: [
            {
              default: 'British Geological Survey (BGS)',
              langeng: 'British Geological Survey (BGS)',
            },
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
            {
              default: 'Farne',
              langeng: 'Farne',
            },
            {
              default: 'Northern North Sea',
              langeng: 'Northern North Sea',
            },
            {
              default: 'NORTH SEA',
              langeng: 'NORTH SEA',
            },
          ],
          tagNumber: '8',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Farne',
              langeng: 'Farne',
            },
            {
              default: 'Northern North Sea',
              langeng: 'Northern North Sea',
            },
            {
              default: 'NORTH SEA',
              langeng: 'NORTH SEA',
            },
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
            {
              default: 'Lithology',
              langeng: 'Lithology',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/LITH',
            },
          ],
          'th_SeaVoXVerticalCo-ordinateCoveragesL131Number': '2',
          'th_SeaVoXVerticalCo-ordinateCoveragesL131': [
            {
              default: 'soil and sediment',
              langeng: 'soil and sediment',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/SD',
            },
            {
              default: 'crust',
              langeng: 'crust',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/CR',
            },
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
                {
                  default: 'crust',
                  langeng: 'crust',
                  link: 'http://vocab.nerc.ac.uk/collection/L13/current/CR',
                },
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
            {
              default: 'Farne',
              langeng: 'Farne',
            },
            {
              default: 'Northern North Sea',
              langeng: 'Northern North Sea',
            },
            {
              default: 'NORTH SEA',
              langeng: 'NORTH SEA',
            },
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
          resourceTemporalExtentDateRange: [
            {
              gte: '2014-03-13T00:00:00.000Z',
              lte: '2014-03-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2014-03-13',
              },
              end: {
                date: '2014-03-31',
              },
            },
          ],
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
          // linkProtocol: ['HTTP'],
          linkProtocol: ['http-wr'], // changed for filtering
          linkUrlProtocolHTTP: 'http://mapapps2.bgs.ac.uk/geoindex_offshore/home.html?cruise=MCZ_FRNE_cend0514',
          link: [
            {
              protocol: 'HTTP',
              mimeType: '',
              urlObject: {
                default: 'http://mapapps2.bgs.ac.uk/geoindex_offshore/home.html?cruise=MCZ_FRNE_cend0514',
              },
              nameObject: {
                default: 'BGS Offshore Geoindex',
                langeng: 'BGS Offshore Geoindex',
              },
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
          OrgResolutionDistance: {
            distance: '5',
            uom: 'urn:ogc:def:uom:EPSG::9001',
          },
          OrgGeographicElement: [
            {
              ciTitle: 'BGS Gazetteer',
              type: 'revision',
              date: '2024-04-12',
              code: 'Farne',
              url: '',
            },
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
          OrgResourceIdentifier: {
            code: 'BGS_CMD_REF853',
            codeSpace: 'British Geological Survey',
            link: '',
          },
          OrgResourceConstraints: [
            {
              OrgAccessConstraints: ['otherRestrictions', ''],
            },
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
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
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
        _id: '4945cf20c014b1941ee939fd88478cfc',
        _score: 5.308798,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '4945cf20c014b1941ee939fd88478cfc',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:08:49Z',
          dateStamp: '2023-04-26T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'SeaStar Survey',
            langeng: 'SeaStar Survey',
          },
          pointOfContactOrgObject: {
            default: 'SeaStar Survey',
            langeng: 'SeaStar Survey',
          },
          contact: [
            {
              organisationName: 'SeaStar Survey',
              organisationValue: 'ne', // added for filtering
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
            {
              type: 'publication',
              date: '2023-03-29T00:00:00.000Z',
            },
            {
              type: 'creation',
              date: '2023-03-29T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2023-03-29T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2023-03-29T00:00:00.000Z',
              lte: '2023-03-29T00:00:00.000Z',
            },
            {
              gte: '2022-09-26T00:00:00.000Z',
              lte: '2022-10-01T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'NE_2165',
              codeSpace: 'http://https://www.natural-england.org.uk',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              'Yarmouth to Cowes Marine Conservation Zone (MCZ) is an inshore site along the northwest coast of the Isle of Wight, from Yarmouth Pier in the west to the village of Gurnard in the east. The site was designated in May 2019, however as of summer 2022 no survey of the intertidal features of the site had yet been conducted. In order to inform a Conservation Advice Package for the site, Natural England commissioned Seastar Survey Ltd. (âSeastarâ) to undertake a Phase I and Phase II baseline survey of three of the features of the MCZ: intertidal rock habitats; intertidal underboulder communities; and peat and clay exposures.\n The objectives for the survey were:\n â¢\tTo map the extent and distribution of the three features of interest (i.e. intertidal rock, intertidal underboulder communities and peat and clay exposures) and their associated communities within the Yarmouth to Cowes MCZ;\n â¢\tTo identify and map the extent and distribution of biotopes and biotope complexes associated with the three features of interest;\n â¢\tTo characterise the habitats observed by providing semi-quantitative data on species composition of representative and notable biotopes;\n â¢\tTo provide semi-quantitative data on the physical structure of the intertidal rocky substrate, including surface and structural complexity and stability; \n â¢\tTo record the presence and abundance of any non-indigenous species (NIS);\n â¢\tTo acquire high-quality biological data of suitable resolution to enable key attributes of condition for each of the three intertidal features of interest to be assessed according to Common Standards Monitoring (CSM) guidance;\n â¢\tTo identify anthropogenic influences impacting on the ability of the features of interest to achieve favourable condition;\n â¢\tEnsure that the collected data are suitable for future use as baseline data to allow assessments of the direction of potential ecological change.',
            langeng:
              'Yarmouth to Cowes Marine Conservation Zone (MCZ) is an inshore site along the northwest coast of the Isle of Wight, from Yarmouth Pier in the west to the village of Gurnard in the east. The site was designated in May 2019, however as of summer 2022 no survey of the intertidal features of the site had yet been conducted. In order to inform a Conservation Advice Package for the site, Natural England commissioned Seastar Survey Ltd. (âSeastarâ) to undertake a Phase I and Phase II baseline survey of three of the features of the MCZ: intertidal rock habitats; intertidal underboulder communities; and peat and clay exposures.\n The objectives for the survey were:\n â¢\tTo map the extent and distribution of the three features of interest (i.e. intertidal rock, intertidal underboulder communities and peat and clay exposures) and their associated communities within the Yarmouth to Cowes MCZ;\n â¢\tTo identify and map the extent and distribution of biotopes and biotope complexes associated with the three features of interest;\n â¢\tTo characterise the habitats observed by providing semi-quantitative data on species composition of representative and notable biotopes;\n â¢\tTo provide semi-quantitative data on the physical structure of the intertidal rocky substrate, including surface and structural complexity and stability; \n â¢\tTo record the presence and abundance of any non-indigenous species (NIS);\n â¢\tTo acquire high-quality biological data of suitable resolution to enable key attributes of condition for each of the three intertidal features of interest to be assessed according to Common Standards Monitoring (CSM) guidance;\n â¢\tTo identify anthropogenic influences impacting on the ability of the features of interest to achieve favourable condition;\n â¢\tEnsure that the collected data are suitable for future use as baseline data to allow assessments of the direction of potential ecological change.',
          },
          OrgForResourceObject: [
            {
              default: 'SeaStar Survey',
              langeng: 'SeaStar Survey',
            },
            {
              default: 'Natural England',
              langeng: 'Natural England',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'SeaStar Survey',
            langeng: 'SeaStar Survey',
          },
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
          custodianOrgForResourceObject: {
            default: 'Natural England',
            langeng: 'Natural England',
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
              default: 'MCZ',
              langeng: 'MCZ',
              link: '',
            },
            {
              default: 'UK project',
              langeng: 'UK project',
              link: '',
            },
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
              key: 'http://vocab.nerc.ac.uk/collection/P22/current/31/',
            },
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
            },
            {
              default: 'Marine Environment Monitoring',
              langeng: 'Marine Environment Monitoring',
              link: '',
            },
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: '',
            },
            {
              default: 'Species Distribution',
              langeng: 'Species Distribution',
              link: '',
            },
            {
              default: 'environment',
              langeng: 'environment',
              link: '',
            },
            {
              default: 'Protected Areas',
              langeng: 'Protected Areas',
              link: '',
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
            {
              default: 'Eastern Channel',
              langeng: 'Eastern Channel',
            },
            {
              default: '30E8',
              langeng: '30E8',
            },
            {
              default: 'littoral',
              langeng: 'littoral',
            },
          ],
          tagNumber: '15',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Eastern Channel',
              langeng: 'Eastern Channel',
            },
            {
              default: '30E8',
              langeng: '30E8',
            },
            {
              default: 'littoral',
              langeng: 'littoral',
            },
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
          th_100: [
            {
              default: 'MCZ',
              langeng: 'MCZ',
              link: '',
            },
          ],
          th_BODCprojectcategoriesNumber: '1',
          th_BODCprojectcategories: [
            {
              default: 'UK project',
              langeng: 'UK project',
              link: '',
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
          th_GardlineNumber: '1',
          th_Gardline: [
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
            },
          ],
          th_GlobalChangeMasterDirectoryScienceKeywordsV5Number: '1',
          th_GlobalChangeMasterDirectoryScienceKeywordsV5: [
            {
              default: 'Marine Environment Monitoring',
              langeng: 'Marine Environment Monitoring',
              link: '',
            },
          ],
          th_INSPIRETHEMESNumber: '1',
          th_INSPIRETHEMES: [
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
              link: '',
            },
          ],
          th_INSPIRENumber: '1',
          th_INSPIRE: [
            {
              default: 'Species Distribution',
              langeng: 'Species Distribution',
              link: '',
            },
          ],
          th_InternationalStandardsOrganisationISO19115TopicCategoriesNumber: '1',
          th_InternationalStandardsOrganisationISO19115TopicCategories: [
            {
              default: 'environment',
              langeng: 'environment',
              link: '',
            },
          ],
          th_MEDINNumber: '1',
          th_MEDIN: [
            {
              default: 'Protected Areas',
              langeng: 'Protected Areas',
              link: '',
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
            th_100: {
              title: '100',
              theme: '',
              keywords: [
                {
                  default: 'MCZ',
                  langeng: 'MCZ',
                  link: '',
                },
              ],
            },
            th_BODCprojectcategories: {
              title: 'BODC project categories',
              theme: '',
              keywords: [
                {
                  default: 'UK project',
                  langeng: 'UK project',
                  link: '',
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
            th_Gardline: {
              title: 'Gardline',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                  link: '',
                },
              ],
            },
            th_GlobalChangeMasterDirectoryScienceKeywordsV5: {
              title: 'Global Change Master Directory Science Keywords V5',
              theme: '',
              keywords: [
                {
                  default: 'Marine Environment Monitoring',
                  langeng: 'Marine Environment Monitoring',
                  link: '',
                },
              ],
            },
            th_INSPIRETHEMES: {
              title: 'INSPIRE THEMES',
              theme: '',
              keywords: [
                {
                  default: 'Habitats and biotopes',
                  langeng: 'Habitats and biotopes',
                  link: '',
                },
              ],
            },
            th_INSPIRE: {
              title: 'INSPIRE',
              theme: '',
              keywords: [
                {
                  default: 'Species Distribution',
                  langeng: 'Species Distribution',
                  link: '',
                },
              ],
            },
            th_InternationalStandardsOrganisationISO19115TopicCategories: {
              title: 'International Standards Organisation ISO19115 Topic Categories',
              theme: '',
              keywords: [
                {
                  default: 'environment',
                  langeng: 'environment',
                  link: '',
                },
              ],
            },
            th_MEDIN: {
              title: 'MEDIN',
              theme: '',
              keywords: [
                {
                  default: 'Protected Areas',
                  langeng: 'Protected Areas',
                  link: '',
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
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          resolutionDistance: [
            '750 http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/uom/gmxUom.xml#m',
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Not suitable for use in navigation',
              langeng: 'Not suitable for use in navigation',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'No restrictions to public access',
              langeng: 'No restrictions to public access',
            },
          ],
          licenseObject: [
            {
              default: 'No restrictions to public access',
              langeng: 'No restrictions to public access',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Eastern Channel',
              langeng: 'Eastern Channel',
            },
            {
              default: '30E8',
              langeng: '30E8',
            },
            {
              default: 'littoral',
              langeng: 'littoral',
            },
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
          resourceTemporalExtentDateRange: [
            {
              gte: '2022-09-26T00:00:00.000Z',
              lte: '2022-10-01T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2022-09-26',
              },
              end: {
                date: '2022-10-01',
              },
            },
          ],
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
          OrgForDistributionObject: {
            default: 'Natural England',
            langeng: 'Natural England',
          },
          distributorOrgForDistributionObject: {
            default: 'Natural England',
            langeng: 'Natural England',
          },
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
            {
              ciTitle: 'ICES Rectangles',
              type: 'creation',
              date: '2009-05-01',
              code: '30E8',
              url: '',
            },
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
          OrgResourceIdentifier: {
            code: 'NE_2165',
            codeSpace: 'http://https://www.natural-england.org.uk',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: ['No restrictions to public access'],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_4945cf20c014b1941ee939fd88478cfc',
              sourceSystemReferenceID: 'Medin_4945cf20c014b1941ee939fd88478cfc',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
        _score: 5.132653,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
          indexingDate: '2024-09-27T15:37:37Z',
          dateStamp: '2018-05-17T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['nonGeographicDataset'],
          OrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          contact: [
            {
              organisationName: 'Digital and Data Solutions, JNCC',
              organisationValue: 'jncc', // added for filtering
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
            default: 'UK Ramsar habitat cover',
            langeng: 'UK Ramsar habitat cover',
          },
          publicationDateForResource: ['2016-04-27T00:00:00.000Z', '2016-04-27T00:00:00.000Z'],
          publicationYearForResource: ['2016', '2016'],
          publicationMonthForResource: ['2016-04', '2016-04'],
          resourceDate: [
            {
              type: 'publication',
              date: '2016-04-27T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2016-04-27T00:00:00.000Z',
              lte: '2016-04-27T00:00:00.000Z',
            },
            {
              gte: '1976-01-01T00:00:00.000Z',
              lte: '2015-10-17T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
              codeSpace: '',
              link: '',
            },
          ],
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
            {
              default: 'Freshwater',
              langeng: 'Freshwater',
            },
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Terrestrial',
              langeng: 'Terrestrial',
            },
            {
              default: 'Protected Areas',
              langeng: 'Protected Areas',
            },
            {
              default: 'Wetlands',
              langeng: 'Wetlands',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'th_otherKeywords-Number': '5',
          'th_otherKeywords-': [
            {
              default: 'Freshwater',
              langeng: 'Freshwater',
            },
            {
              default: 'Marine',
              langeng: 'Marine',
            },
            {
              default: 'Terrestrial',
              langeng: 'Terrestrial',
            },
            {
              default: 'Protected Areas',
              langeng: 'Protected Areas',
            },
            {
              default: 'Wetlands',
              langeng: 'Wetlands',
            },
          ],
          allKeywords: {
            'th_otherKeywords-': {
              title: 'otherKeywords-',
              theme: '',
              keywords: [
                {
                  default: 'Freshwater',
                  langeng: 'Freshwater',
                },
                {
                  default: 'Marine',
                  langeng: 'Marine',
                },
                {
                  default: 'Terrestrial',
                  langeng: 'Terrestrial',
                },
                {
                  default: 'Protected Areas',
                  langeng: 'Protected Areas',
                },
                {
                  default: 'Wetlands',
                  langeng: 'Wetlands',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'environment',
              default: 'Environment',
              langeng: 'Environment',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          MD_LegalConstraintsUseLimitationObject: [
            {
              default:
                'Released under the Open Government Licence v3.0. Attribution statement: "Contains public sector data © JNCC/NE/NRW/SNH/DOENI. Licence: OGL"',
              langeng:
                'Released under the Open Government Licence v3.0. Attribution statement: "Contains public sector data © JNCC/NE/NRW/SNH/DOENI. Licence: OGL"',
            },
          ],
          licenseObject: [
            {
              default: 'no limitations',
              langeng: 'no limitations',
            },
          ],
          resourceTemporalExtentDateRange: [
            {
              gte: '1976-01-01T00:00:00.000Z',
              lte: '2015-10-17T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1976-01-01',
              },
              end: {
                date: '2015-10-17',
              },
            },
          ],
          lineageObject: {
            default:
              'This information has been extracted from the Ramsar Information Sheets compiled by the Statutory Nature Conservation Body.',
            langeng:
              'This information has been extracted from the Ramsar Information Sheets compiled by the Statutory Nature Conservation Body.',
          },
          // format: ['Comma Separated Values'],
          format: ['csv'], // changed for filtering
          linkUrl:
            'http://data.jncc.gov.uk/data/536bfee9-794f-4889-b2ad-2ee9a74ded35-UK-Ramsar-habitat-cover-201510.csv',
          linkProtocol: ['http-fd'], // changed for filtering
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
          OrgResourceTitleObject: {
            default: 'UK Ramsar habitat cover',
            langeng: 'UK Ramsar habitat cover',
          },
          OrgResourceIdentifier: {
            code: '536bfee9-794f-4889-b2ad-2ee9a74ded35',
            codeSpace: '',
            link: '',
          },
          OrgResourceConstraints: {
            OrgOtherConstraints: ['no limitations'],
            OrgAccessConstraints: ['otherRestrictions'],
          },
          OrgDistributionFormats: {
            name: 'Comma Separated Values',
            version: '',
          },
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Jncc_536bfee9-794f-4889-b2ad-2ee9a74ded35',
              sourceSystemReferenceID: 'Jncc_536bfee9-794f-4889-b2ad-2ee9a74ded35',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: 'ad049067-4107-3647-9a95-cda0ead55ca8',
        _score: 4.8296547,
        _source: {
          status: 'active', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: 'ad049067-4107-3647-9a95-cda0ead55ca8',
          standardNameObject: {
            default: 'MEDIN Discovery metadata standard',
            langeng: 'MEDIN Discovery metadata standard',
          },
          standardVersionObject: {
            default: '2.3.8',
            langeng: '2.3.8',
          },
          indexingDate: '2024-10-22T02:22:26Z',
          dateStamp: '2021-05-12T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
          pointOfContactOrgObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
          contact: [
            {
              organisationName: 'Archaeology Data Service',
              organisationValue: 'ea', // added for filtering
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
            {
              type: 'publication',
              date: '2011-03-18T00:00:00.000Z',
            },
            {
              type: 'creation',
              date: '2006-12-31T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2011-03-18T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2011-03-18T00:00:00.000Z',
              lte: '2011-03-18T00:00:00.000Z',
            },
            {
              gte: '2006-12-31T00:00:00.000Z',
              lte: '2006-12-31T00:00:00.000Z',
            },
            {
              gte: '2005-01-01T00:00:00.000Z',
              lte: '2006-12-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: 'englishh1-88889',
              codeSpace: 'http://oasis.ac.uk',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              "Geophysical and Geotechnical survey of a 64ha area located in the south-eastern part of dredging area 254 (licensed to United Marine Aggregates Ltd), some 10km east of Great Yarmouth. The survey was commissionned by English Heritage and funded though Round 2 of the Aggregate Levy Sustainability Fund (ALSF). The survey was part of the wider ALSF 'Seabed Prehistory' project, and comprised sub-bottom profiling, sidescan sonar, single beam echosounder and vibrocores.The digital elevation model of the area's bathymetry revealed a mound, and sub-bottom profiler data indicated coarse sand and gravel overlain by intermittent fiine-grained sediment potentially containing peat, which was in turn overlain by gravelly sand. The vibrocores were assessed for polen, molluscan, waterlogged plant, diatom and other remains, and yielded charcoal deposited as early as the Cromerian Complex period. (Study area coords: E424329, N5827029; E425224, N5827037; E424319, N5826238; E425219, N2856240 - WGS84, UTM zone 31).",
            langeng:
              "Geophysical and Geotechnical survey of a 64ha area located in the south-eastern part of dredging area 254 (licensed to United Marine Aggregates Ltd), some 10km east of Great Yarmouth. The survey was commissionned by English Heritage and funded though Round 2 of the Aggregate Levy Sustainability Fund (ALSF). The survey was part of the wider ALSF 'Seabed Prehistory' project, and comprised sub-bottom profiling, sidescan sonar, single beam echosounder and vibrocores.The digital elevation model of the area's bathymetry revealed a mound, and sub-bottom profiler data indicated coarse sand and gravel overlain by intermittent fiine-grained sediment potentially containing peat, which was in turn overlain by gravelly sand. The vibrocores were assessed for polen, molluscan, waterlogged plant, diatom and other remains, and yielded charcoal deposited as early as the Cromerian Complex period. (Study area coords: E424329, N5827029; E425224, N5827037; E424319, N5826238; E425219, N2856240 - WGS84, UTM zone 31).",
          },
          OrgForResourceObject: [
            {
              default: 'Archaeology Data Service',
              langeng: 'Archaeology Data Service',
            },
            {
              default: 'Archaeology Data Service',
              langeng: 'Archaeology Data Service',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
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
          custodianOrgForResourceObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
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
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
            },
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
          th_UNESCO: [
            {
              default: 'Marine',
              langeng: 'Marine',
              link: '',
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
            th_UNESCO: {
              title: 'UNESCO',
              theme: '',
              keywords: [
                {
                  default: 'Marine',
                  langeng: 'Marine',
                  link: '',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'environment',
              default: 'Environment',
              langeng: 'Environment',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default: 'Restrictions Apply',
              langeng: 'Restrictions Apply',
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default: 'Terms and Conditions apply to reuse.',
              langeng: 'Terms and Conditions apply to reuse.',
            },
          ],
          licenseObject: [
            {
              default: 'Terms and Conditions apply to reuse.',
              langeng: 'Terms and Conditions apply to reuse.',
            },
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
          resourceTemporalExtentDateRange: [
            {
              gte: '2005-01-01T00:00:00.000Z',
              lte: '2006-12-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '2005-01-01',
              },
              end: {
                date: '2006-12-31',
              },
            },
          ],
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
          OrgForDistributionObject: {
            default: 'Archaeology Data Service',
            langeng: 'Archaeology Data Service',
          },
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
          linkProtocol: ['http-wr'], // changed for filtering
          linkUrlProtocol: 'http://dx.doi.org/10.5284/1009323',
          link: [
            {
              protocol: '',
              mimeType: '',
              urlObject: {
                default: 'http://dx.doi.org/10.5284/1009323',
              },
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
          OrgResourceIdentifier: {
            code: 'englishh1-88889',
            codeSpace: 'http://oasis.ac.uk',
            link: '',
          },
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
              classifiers: [
                {
                  name: 'Terrestrial and freshwater habitats',
                  code: 'lv2-001',
                },
              ],
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
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '4f4c4942-4343-5764-6473-313134363734',
        _score: 4.691185,
        _ignored: ['OrgResourceConstraints.OrgOtherConstraints.keyword'],
        _source: {
          status: 'retired', // added for filtering
          docType: 'metadata',
          document: '',
          metadataIdentifier: '4f4c4942-4343-5764-6473-313134363734',
          standardNameObject: {
            default: 'MEDIN Discovery Metadata Standard',
            langeng: 'MEDIN Discovery Metadata Standard',
          },
          standardVersionObject: {
            default: 'Version 2.3.8',
            langeng: 'Version 2.3.8',
          },
          indexingDate: '2024-10-22T02:10:05Z',
          dateStamp: '2022-06-23T00:00:00.000Z',
          mainLanguage: 'eng',
          resourceType: ['dataset'],
          OrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          pointOfContactOrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contact: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              organisationValue: 'rpa', // added for filtering
              role: 'pointOfContact',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
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
            default: 'Priority Marine Habitats of Wales (Archived 2012)',
            langeng: 'Priority Marine Habitats of Wales (Archived 2012)',
          },
          resourceAltTitleObject: [
            {
              default: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru',
              langeng: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru',
            },
            {
              default: 'Habitats Archived.lyr',
              langeng: 'Habitats Archived.lyr',
            },
            {
              default: 'Marine Bap Habitats Carbonate Reefs.LYR',
              langeng: 'Marine Bap Habitats Carbonate Reefs.LYR',
            },
            {
              default: 'Marine Bap Habitats Fragile Sponges Anthozoan.LYR',
              langeng: 'Marine Bap Habitats Fragile Sponges Anthozoan.LYR',
            },
            {
              default: 'Marine Bap Habitats Fragile Sponges Biotopes.LYR',
              langeng: 'Marine Bap Habitats Fragile Sponges Biotopes.LYR',
            },
            {
              default: 'Marine Bap Habitats Horse Mussel Beds.LYR',
              langeng: 'Marine Bap Habitats Horse Mussel Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Intertidal Mudflats.LYR',
              langeng: 'Marine Bap Habitats Intertidal Mudflats.LYR',
            },
            {
              default: 'Marine Bap Habitats Intertidal Underboulder Points.LYR',
              langeng: 'Marine Bap Habitats Intertidal Underboulder Points.LYR',
            },
            {
              default: 'Marine Bap Habitats Intertidal Underboulder Polygons.LYR',
              langeng: 'Marine Bap Habitats Intertidal Underboulder Polygons.LYR',
            },
            {
              default: 'Marine Bap Habitats Maerl Beds.LYR',
              langeng: 'Marine Bap Habitats Maerl Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Mud in Deep Water WGS84.LYR',
              langeng: 'Marine Bap Habitats Mud in Deep Water WGS84.LYR',
            },
            {
              default: 'Marine Bap Habitats Musculus Discors Beds.LYR',
              langeng: 'Marine Bap Habitats Musculus Discors Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Points.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Points.LYR',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
            },
            {
              default: 'Marine Bap Habitats Sabellaria Alveolata Reef.LYR',
              langeng: 'Marine Bap Habitats Sabellaria Alveolata Reef.LYR',
            },
            {
              default: 'Marine Bap Habitats Saline Lagoons.LYR',
              langeng: 'Marine Bap Habitats Saline Lagoons.LYR',
            },
            {
              default: 'Marine Bap Habitats Saline Lagoons 2009.LYR',
              langeng: 'Marine Bap Habitats Saline Lagoons 2009.LYR',
            },
            {
              default: 'Marine Bap Habitats Seagrass Beds.LYR',
              langeng: 'Marine Bap Habitats Seagrass Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Sheltered Muddy Gravels.LYR',
              langeng: 'Marine Bap Habitats Sheltered Muddy Gravels.LYR',
            },
            {
              default: 'Marine Bap Habitats Subtidal Mixed Muddy Sediment WGS84.LYR',
              langeng: 'Marine Bap Habitats Subtidal Mixed Muddy Sediment WGS84.LYR',
            },
            {
              default: 'Marine BAP Habitats subtidal mixed muddy sediments points.LYR',
              langeng: 'Marine BAP Habitats subtidal mixed muddy sediments points.LYR',
            },
            {
              default: 'Marine Bap Habitats Subtidal Sands and Gravels BGS.LYR',
              langeng: 'Marine Bap Habitats Subtidal Sands and Gravels BGS.LYR',
            },
            {
              default: 'Marine Bap Habitats Tidal Swept Channels.LYR',
              langeng: 'Marine Bap Habitats Tidal Swept Channels.LYR',
            },
            {
              default: 'Marine Bap Habitats Underboulder Target Notes.LYR',
              langeng: 'Marine Bap Habitats Underboulder Target Notes.LYR',
            },
          ],
          publicationDateForResource: ['2012-12-31T00:00:00.000Z', '2012-12-31T00:00:00.000Z'],
          publicationYearForResource: ['2012', '2012'],
          publicationMonthForResource: ['2012-12', '2012-12'],
          revisionDateForResource: ['2011-04-26T00:00:00.000Z', '2011-04-26T00:00:00.000Z'],
          revisionYearForResource: ['2011', '2011'],
          revisionMonthForResource: ['2011-04', '2011-04'],
          resourceDate: [
            {
              type: 'publication',
              date: '2012-12-31T00:00:00.000Z',
            },
            {
              type: 'revision',
              date: '2011-04-26T00:00:00.000Z',
            },
          ],
          resourceTemporalDateRange: [
            {
              gte: '2012-12-31T00:00:00.000Z',
              lte: '2012-12-31T00:00:00.000Z',
            },
            {
              gte: '2011-04-26T00:00:00.000Z',
              lte: '2011-04-26T00:00:00.000Z',
            },
            {
              gte: '1960-01-01T00:00:00.000Z',
              lte: '2012-12-31T00:00:00.000Z',
            },
          ],
          resourceIdentifier: [
            {
              code: '114674',
              codeSpace: 'https://naturalresources.wales',
              link: '',
            },
          ],
          resourceAbstractObject: {
            default:
              "The UK Biodiversity Action Plan (UK BAP) was published back in 1994, and was the UK Government’s response to the Convention on Biological Diversity (CBD), which the UK signed up to in 1992 in Rio de Janeiro. Similarly under Section 42 of the Natural Environment and Rural Communities (NERC) Act, 2006 it is required that the a 'list of the living organisms and types of habitat which in the Assembly's opinion are of principal importance for the purpose of conserving biodiversity'. Priority marine habitats in Wales are those identified as BAP habitats, Section 42 habitats or OSPAR habitats. These habitats include: blue mussel beds, Fragile sponge and anthozoan communities, Tide swept channels, Horse mussel beds, Maerl beds, Honeycomb worm reefs, Seagrass beds, Oys\nter beds, Intertidal boulder communities, Intertidal mudflats, mud habitats in deep water, Sheltered muddy gravels, subtidal mixed muddy sediments, Estuarine rocky habitats, Peat and clay exposures, Carbonate reefs, Musculus discors beds, Saline lagoons, Coastal Saltmarsh and Subtidal sands and gravels.",
            langeng:
              "The UK Biodiversity Action Plan (UK BAP) was published back in 1994, and was the UK Government’s response to the Convention on Biological Diversity (CBD), which the UK signed up to in 1992 in Rio de Janeiro. Similarly under Section 42 of the Natural Environment and Rural Communities (NERC) Act, 2006 it is required that the a 'list of the living organisms and types of habitat which in the Assembly's opinion are of principal importance for the purpose of conserving biodiversity'. Priority marine habitats in Wales are those identified as BAP habitats, Section 42 habitats or OSPAR habitats. These habitats include: blue mussel beds, Fragile sponge and anthozoan communities, Tide swept channels, Horse mussel beds, Maerl beds, Honeycomb worm reefs, Seagrass beds, Oys\nter beds, Intertidal boulder communities, Intertidal mudflats, mud habitats in deep water, Sheltered muddy gravels, subtidal mixed muddy sediments, Estuarine rocky habitats, Peat and clay exposures, Carbonate reefs, Musculus discors beds, Saline lagoons, Coastal Saltmarsh and Subtidal sands and gravels.",
          },
          OrgForResourceObject: [
            {
              default: 'Natural Resources Wales (NRW)',
              langeng: 'Natural Resources Wales (NRW)',
            },
            {
              default: 'Countryside Council for Wales (CCW)',
              langeng: 'Countryside Council for Wales (CCW)',
            },
          ],
          custodianOrgForResourceObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForResource: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'custodian',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
            {
              organisationName: 'Countryside Council for Wales (CCW)',
              role: 'originator',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Countryside Council for Wales, Maes y Ffynnon, LL57 2DW',
              deliveryPoint: 'Countryside Council for Wales, Maes y Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          originatorOrgForResourceObject: {
            default: 'Countryside Council for Wales (CCW)',
            langeng: 'Countryside Council for Wales (CCW)',
          },
          supplementalInformationObject: {
            default:
              'This dataset has now been updated and superseded by a more up-to-date version of this dataset known as Marine Biodiversity Action Plan (BAP) species in Wales - GIS Dataset (see related titles).',
            langeng:
              'This dataset has now been updated and superseded by a more up-to-date version of this dataset known as Marine Biodiversity Action Plan (BAP) species in Wales - GIS Dataset (see related titles).',
          },
          hasOverview: 'false',
          resourceLanguage: ['eng'],
          tag: [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
              key: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
            },
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
              key: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
            },
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          tagNumber: '5',
          isOpenData: 'false',
          'keywordType-place': [
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          'th_otherKeywords-Number': '1',
          'th_otherKeywords-': [
            {
              default: 'Marine Environmental Data and Information Network',
              langeng: 'Marine Environmental Data and Information Network',
              link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
            },
          ],
          'th_GEMET-INSPIREthemesversion1-0Number': '1',
          'th_GEMET-INSPIREthemesversion1-0': [
            {
              default: 'Habitats and biotopes',
              langeng: 'Habitats and biotopes',
            },
          ],
          th_SeaDataNetParameterDiscoveryVocabularyNumber: '1',
          th_SeaDataNetParameterDiscoveryVocabulary: [
            {
              default: 'Habitat extent',
              langeng: 'Habitat extent',
              link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
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
                  link: 'http://vocab.nerc.ac.uk/collection/N01/current/NDGO0001',
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
                },
              ],
            },
            th_SeaDataNetParameterDiscoveryVocabulary: {
              title: 'SeaDataNet Parameter Discovery Vocabulary',
              theme: '',
              keywords: [
                {
                  default: 'Habitat extent',
                  langeng: 'Habitat extent',
                  link: 'http://vocab.nerc.ac.uk/collection/P02/current/HBEX',
                },
              ],
            },
          },
          cl_topic: [
            {
              key: 'biota',
              default: 'Biota',
              langeng: 'Biota',
            },
          ],
          MD_ConstraintsUseLimitationObject: [
            {
              default:
                "© CNC/NRW and various third party recorders   NRW owns the copyright of the collation, but the ownership of the records themselves rests with the originator. The redacted data may be re-used under the terms of the Open Government Licence providing it is done so, acknowledging both the source and NRW's copyright.  It is the recipient's responsibility to ensure the data is fit for the intended purpose.",
              langeng:
                "© CNC/NRW and various third party recorders   NRW owns the copyright of the collation, but the ownership of the records themselves rests with the originator. The redacted data may be re-used under the terms of the Open Government Licence providing it is done so, acknowledging both the source and NRW's copyright.  It is the recipient's responsibility to ensure the data is fit for the intended purpose.",
            },
          ],
          MD_LegalConstraintsOtherConstraintsObject: [
            {
              default:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policy permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely. Part of this dataset is sensitive and restricted as it contains data [ the location of oyster beds (IMX.Ost) ] exempt from general release under EIR.  Sensitive data must be kept confidential; general release is not permitted due to risk of harm to the environment or third parties. [See NRW guidance on Ecological data and information exempt from general release]',
              langeng:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policy permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely. Part of this dataset is sensitive and restricted as it contains data [ the location of oyster beds (IMX.Ost) ] exempt from general release under EIR.  Sensitive data must be kept confidential; general release is not permitted due to risk of harm to the environment or third parties. [See NRW guidance on Ecological data and information exempt from general release]',
            },
          ],
          licenseObject: [
            {
              default:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policy permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely. Part of this dataset is sensitive and restricted as it contains data [ the location of oyster beds (IMX.Ost) ] exempt from general release under EIR.  Sensitive data must be kept confidential; general release is not permitted due to risk of harm to the environment or third parties. [See NRW guidance on Ecological data and information exempt from general release]',
              langeng:
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policy permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely. Part of this dataset is sensitive and restricted as it contains data [ the location of oyster beds (IMX.Ost) ] exempt from general release under EIR.  Sensitive data must be kept confidential; general release is not permitted due to risk of harm to the environment or third parties. [See NRW guidance on Ecological data and information exempt from general release]',
            },
          ],
          extentIdentifierObject: [
            {
              default: 'Wales (WLS)',
              langeng: 'Wales (WLS)',
            },
            {
              default: 'benthic boundary layer',
              langeng: 'benthic boundary layer',
              link: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          geom: {
            type: 'Polygon',
            coordinates: [
              [
                [-6.819548, 50.794294],
                [-3.038661, 50.794294],
                [-3.038661, 54.139348],
                [-6.819548, 54.139348],
                [-6.819548, 50.794294],
              ],
            ],
          },
          location: '52.466820999999996,-4.9291045',
          resourceTemporalExtentDateRange: [
            {
              gte: '1960-01-01T00:00:00.000Z',
              lte: '2012-12-31T00:00:00.000Z',
            },
          ],
          resourceTemporalExtentDetails: [
            {
              start: {
                date: '1960-01-01',
              },
              end: {
                date: '2012-12-31',
              },
            },
          ],
          resourceVerticalRange: [],
          coordinateSystem: ['urn:ogc:def:crs:EPSG::WGS84'],
          crsDetails: [
            {
              ciTitle: '',
              code: 'urn:ogc:def:crs:EPSG::WGS84',
              codeSpace: 'OGP',
              name: 'urn:ogc:def:crs:EPSG::WGS84',
              url: '',
            },
          ],
          lineageObject: {
            default:
              'The data was collated from a wide range of sources, including but not limited to Marine Recorder, Phase 1 Intertidal, HabMap and Marine Monitoring Data. Habitats layers were produced as both polygon and point data for many of the habitats. Each layer is accompanied by processing notes detailing data sources and all decision made in creating the layers. A standard template was also produced and documented for attributing the GIS layers and general assumptions that could be made. This dataset is kept as an archive only. Users are advised to refer to more recent data NRW_DS111154.',
            langeng:
              'The data was collated from a wide range of sources, including but not limited to Marine Recorder, Phase 1 Intertidal, HabMap and Marine Monitoring Data. Habitats layers were produced as both polygon and point data for many of the habitats. Each layer is accompanied by processing notes detailing data sources and all decision made in creating the layers. A standard template was also produced and documented for attributing the GIS layers and general assumptions that could be made. This dataset is kept as an archive only. Users are advised to refer to more recent data NRW_DS111154.',
          },
          OrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          distributorOrgForDistributionObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          contactForDistribution: [
            {
              organisationName: 'Natural Resources Wales (NRW)',
              role: 'distributor',
              email: 'enquiries@naturalresourceswales.gov.uk',
              website: '',
              logo: '',
              individual: '',
              position: '',
              phone: '0300 065 3000',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              deliveryPoint: 'Maes-y-Ffynnon',
              postalCode: 'LL57 2DW',
              city: '',
              country: '',
              administrativeArea: '',
            },
          ],
          recordGroup: '4f4c4942-4343-5764-6473-313134363734',
          mainLanguageFullName: '',
          OrgGeographicElement: [
            {
              ciTitle: 'ISO3166 Countries',
              type: 'publication',
              date: '2022-06-24',
              code: 'Wales (WLS)',
              url: '',
            },
            {
              ciTitle: 'SeaVoX Vertical Co-ordinate Coverages',
              type: 'publication',
              date: '2010-05-18',
              code: 'benthic boundary layer',
              url: 'http://vocab.nerc.ac.uk/collection/L13/current/NB',
            },
          ],
          OrgSupplementalInformationObject: {
            default:
              'This dataset has now been updated and superseded by a more up-to-date version of this dataset known as Marine Biodiversity Action Plan (BAP) species in Wales - GIS Dataset (see related titles).',
            langeng:
              'This dataset has now been updated and superseded by a more up-to-date version of this dataset known as Marine Biodiversity Action Plan (BAP) species in Wales - GIS Dataset (see related titles).',
          },
          OrgResourceTitleObject: {
            default: 'Priority Marine Habitats of Wales (Archived 2012)',
            langeng: 'Priority Marine Habitats of Wales (Archived 2012)',
          },
          OrgResourceAltTitleObject: [
            {
              default: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru',
              langeng: 'Cynefinoedd Morol a blaenoriaeth yng Nghymru',
            },
            {
              default: 'Habitats Archived.lyr',
              langeng: 'Habitats Archived.lyr',
            },
            {
              default: 'Marine Bap Habitats Carbonate Reefs.LYR',
              langeng: 'Marine Bap Habitats Carbonate Reefs.LYR',
            },
            {
              default: 'Marine Bap Habitats Fragile Sponges Anthozoan.LYR',
              langeng: 'Marine Bap Habitats Fragile Sponges Anthozoan.LYR',
            },
            {
              default: 'Marine Bap Habitats Fragile Sponges Biotopes.LYR',
              langeng: 'Marine Bap Habitats Fragile Sponges Biotopes.LYR',
            },
            {
              default: 'Marine Bap Habitats Horse Mussel Beds.LYR',
              langeng: 'Marine Bap Habitats Horse Mussel Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Intertidal Mudflats.LYR',
              langeng: 'Marine Bap Habitats Intertidal Mudflats.LYR',
            },
            {
              default: 'Marine Bap Habitats Intertidal Underboulder Points.LYR',
              langeng: 'Marine Bap Habitats Intertidal Underboulder Points.LYR',
            },
            {
              default: 'Marine Bap Habitats Intertidal Underboulder Polygons.LYR',
              langeng: 'Marine Bap Habitats Intertidal Underboulder Polygons.LYR',
            },
            {
              default: 'Marine Bap Habitats Maerl Beds.LYR',
              langeng: 'Marine Bap Habitats Maerl Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Mud in Deep Water WGS84.LYR',
              langeng: 'Marine Bap Habitats Mud in Deep Water WGS84.LYR',
            },
            {
              default: 'Marine Bap Habitats Musculus Discors Beds.LYR',
              langeng: 'Marine Bap Habitats Musculus Discors Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Points.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Points.LYR',
            },
            {
              default: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
              langeng: 'Marine Bap Habitats Peat and Clay Polygons.LYR',
            },
            {
              default: 'Marine Bap Habitats Sabellaria Alveolata Reef.LYR',
              langeng: 'Marine Bap Habitats Sabellaria Alveolata Reef.LYR',
            },
            {
              default: 'Marine Bap Habitats Saline Lagoons.LYR',
              langeng: 'Marine Bap Habitats Saline Lagoons.LYR',
            },
            {
              default: 'Marine Bap Habitats Saline Lagoons 2009.LYR',
              langeng: 'Marine Bap Habitats Saline Lagoons 2009.LYR',
            },
            {
              default: 'Marine Bap Habitats Seagrass Beds.LYR',
              langeng: 'Marine Bap Habitats Seagrass Beds.LYR',
            },
            {
              default: 'Marine Bap Habitats Sheltered Muddy Gravels.LYR',
              langeng: 'Marine Bap Habitats Sheltered Muddy Gravels.LYR',
            },
            {
              default: 'Marine Bap Habitats Subtidal Mixed Muddy Sediment WGS84.LYR',
              langeng: 'Marine Bap Habitats Subtidal Mixed Muddy Sediment WGS84.LYR',
            },
            {
              default: 'Marine BAP Habitats subtidal mixed muddy sediments points.LYR',
              langeng: 'Marine BAP Habitats subtidal mixed muddy sediments points.LYR',
            },
            {
              default: 'Marine Bap Habitats Subtidal Sands and Gravels BGS.LYR',
              langeng: 'Marine Bap Habitats Subtidal Sands and Gravels BGS.LYR',
            },
            {
              default: 'Marine Bap Habitats Tidal Swept Channels.LYR',
              langeng: 'Marine Bap Habitats Tidal Swept Channels.LYR',
            },
            {
              default: 'Marine Bap Habitats Underboulder Target Notes.LYR',
              langeng: 'Marine Bap Habitats Underboulder Target Notes.LYR',
            },
          ],
          OrgResourceIdentifier: {
            code: '114674',
            codeSpace: 'https://naturalresources.wales',
            link: '',
          },
          OrgResourceConstraints: [
            {},
            {
              OrgOtherConstraints: [
                'This data is comprised of a mixture of third party owned records and NRW records. NRW policy permits access to and release of this data under the same terms as its own data.  There are no access restrictions on this data. NRW may release, publish or disseminate it freely. Part of this dataset is sensitive and restricted as it contains data [ the location of oyster beds (IMX.Ost) ] exempt from general release under EIR.  Sensitive data must be kept confidential; general release is not permitted due to risk of harm to the environment or third parties. [See NRW guidance on Ecological data and information exempt from general release]',
              ],
              OrgAccessConstraints: ['otherRestrictions'],
            },
          ],
          OrgNceaIdentifiers: {
            projectId: '',
            masterReferenceID: {
              catalogueEntry: 'Medin_4f4c4942-4343-5764-6473-313134363734',
              sourceSystemReferenceID: 'Medin_4f4c4942-4343-5764-6473-313134363734',
            },
          },
          OrgNceaClassifiers: [
            {
              name: 'Natural asset',
              code: 'lvl1-001',
            },
          ],
          recordOwner: 'admin admin',
          uuid: '4f4c4942-4343-5764-6473-313134363734',
          harvesterUuid: '82f7f193-d9d1-4f0c-b211-f631b46538f0',
          displayOrder: '0',
          groupPublishedId: '1',
          popularity: '0',
          userinfo: 'admin|admin|admin|Administrator',
          groupPublished: 'all',
          isPublishedToAll: 'true',
          record: 'record',
          draft: 'n',
          changeDate: '2024-10-21T09:34:58.064Z',
          id: '147745',
          createDate: '2024-10-18T09:37:17.496Z',
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
