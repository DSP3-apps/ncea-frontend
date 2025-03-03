export const CLASSIFIER_SEARCH_RESPONSE = {
  took: 2,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 3, relation: 'eq' },
    max_score: 1,
    hits: [
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de',
        _score: 1,
        _source: {
          OrgNceaClassifiers: [
            {
              code: 'lvl1-001',
              name: 'Natural asset',
              classifiers: [
                {
                  code: 'lv2-001',
                  name: 'Terrestrial and freshwater habitats',
                  classifiers: [
                    { code: 'lv3-002', name: 'Coniferous woodland' },
                    { code: 'lv3-001', name: 'Broadleaved, mixed and yew woodland' },
                  ],
                },
              ],
            },
          ],
          resourceIdentifier: [{ code: '2cb959e1-4a0f-4604-bf5f-37eb93ded6de', link: '', codeSpace: '' }],
          resourceAbstractObject: {
            default:
              "This dataset is an Excel workbook containing results from JNCC's completion of the Open Data Institute's Open Data Pathway assessment of open data maturity in May 2018, updated in November 2018. The data includes the questions posed by the model, the answers provided, the resulting scores per section as well as summary scores and the suggested improvements provided by the model.\n\nFor background on the model see ODI's Open Data Pathway site: http://pathway.theodi.org/.",
            langeng:
              "This dataset is an Excel workbook containing results from JNCC's completion of the Open Data Institute's Open Data Pathway assessment of open data maturity in May 2018, updated in November 2018. The data includes the questions posed by the model, the answers provided, the resulting scores per section as well as summary scores and the suggested improvements provided by the model.\n\nFor background on the model see ODI's Open Data Pathway site: http://pathway.theodi.org/.",
          },
          pointOfContactOrgObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          resourceTitleObject: {
            default: 'Open Data Pathway - Maturity Model Results 2018',
            langeng: 'Open Data Pathway - Maturity Model Results 2018',
          },
          contactForResource: [
            {
              deliveryPoint: '',
              country: '',
              website: '',
              role: 'distributor',
              address: '',
              individual: '',
              city: '',
              postalCode: '',
              administrativeArea: '',
              organisationName: '\n            Digital and Data Solutions, JNCC\n          ',
              phone: '',
              logo: '',
              position: '',
              email: 'data@jncc.gov.uk',
            },
          ],
          linkUrl:
            'http://data.jncc.gov.uk/data/2cb959e1-4a0f-4604-bf5f-37eb93ded6de-JNCC-DATA-MATURITY-MODEL-20181126-public.xlsx',
          resourceTemporalExtentDetails: [{ start: { date: '2015-07-02' }, end: { date: '2018-11-26' } }],
          geom: {
            coordinates: [
              [
                [-8.65, 49.77],
                [2, 49.77],
                [2, 61],
                [-8.65, 61],
                [-8.65, 49.77],
              ],
            ],
            type: 'Polygon',
          },
          distributorOrgForResourceObject: {
            default: 'Digital and Data Solutions, JNCC',
            langeng: 'Digital and Data Solutions, JNCC',
          },
          resourceType: ['nonGeographicDataset'],
        },
      },
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: '4f4c4942-4343-5764-6473-313135353132',
        _score: 1,
        _ignored: ['OrgResourceConstraints.OrgOtherConstraints.keyword'],
        _source: {
          custodianOrgForResourceObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          OrgNceaClassifiers: [
            {
              code: 'lvl1-001',
              name: 'Natural asset',
              classifiers: [{ code: 'lv2-002', name: 'Coastal and estuarine habitats' }],
            },
            {
              code: 'lvl1-004',
              name: 'Pressure',
              classifiers: [
                { code: 'lv2-011', name: 'Climate change', classifiers: [{ code: 'lv3-063', name: 'Sea-level rise' }] },
              ],
            },
          ],
          resourceIdentifier: [{ code: '115512', link: '', codeSpace: 'https://naturalresources.wales' }],
          resourceAbstractObject: {
            default:
              "Long-term and broad-scale datasets are essential to any investigation of change in natural communities. This dataset includes the collation of aerial imagery for 44 sites around the Welsh coastline, selected to contain rocky shore, saltmarsh or Sabellaria alveolata across temporal scales providing suitable data for comparisons of change through time, both anthropogenic and biological. In order for comparisons to present day imagery, current aerial imagery was also obtained in this study. Photographic aerial images containing features of conservation value (specifically rocky shores, Sabellaria alveolata inhabited shores and saltmarsh areas) within Wales were obtained. Historic photographic aerial images that contained features of conservation value (specifically rocky shores, Sabella\nria alveolata inhabited shores and saltmarsh areas) within Wales were selected from expert knowledge and Countryside Council for Wales's collection of habitat maps. The aim of this project was to collate, digitise and georeference aerial photographic imagery for sites that had multi-year overlap. Accuracies of less than 5 m RMS was obtained (with the exception of Treath Lafan, 1995, and the Dyfi Estuary, 1975). At these saltmarsh locations, there were too few ground control points to achieve this accuracy.",
            langeng:
              "Long-term and broad-scale datasets are essential to any investigation of change in natural communities. This dataset includes the collation of aerial imagery for 44 sites around the Welsh coastline, selected to contain rocky shore, saltmarsh or Sabellaria alveolata across temporal scales providing suitable data for comparisons of change through time, both anthropogenic and biological. In order for comparisons to present day imagery, current aerial imagery was also obtained in this study. Photographic aerial images containing features of conservation value (specifically rocky shores, Sabellaria alveolata inhabited shores and saltmarsh areas) within Wales were obtained. Historic photographic aerial images that contained features of conservation value (specifically rocky shores, Sabella\nria alveolata inhabited shores and saltmarsh areas) within Wales were selected from expert knowledge and Countryside Council for Wales's collection of habitat maps. The aim of this project was to collate, digitise and georeference aerial photographic imagery for sites that had multi-year overlap. Accuracies of less than 5 m RMS was obtained (with the exception of Treath Lafan, 1995, and the Dyfi Estuary, 1975). At these saltmarsh locations, there were too few ground control points to achieve this accuracy.",
          },
          pointOfContactOrgObject: {
            default: 'Natural Resources Wales (NRW)',
            langeng: 'Natural Resources Wales (NRW)',
          },
          resourceTitleObject: {
            default: 'Historic Aerial Imagery to Monitor Temporal Change in Intertidal Habitats',
            langeng: 'Historic Aerial Imagery to Monitor Temporal Change in Intertidal Habitats',
          },
          contactForResource: [
            {
              deliveryPoint: 'Maes-y-Ffynnon',
              country: '',
              website: '',
              role: 'custodian',
              address: 'Maes-y-Ffynnon, LL57 2DW',
              individual: '',
              city: '',
              postalCode: 'LL57 2DW',
              administrativeArea: '',
              organisationName: '\n            Natural Resources Wales (NRW)\n          ',
              phone: '0300 065 3000',
              logo: '',
              position: '',
              email: 'enquiries@naturalresourceswales.gov.uk',
            },
            {
              deliveryPoint: '',
              country: '',
              website: '',
              role: 'originator',
              address: 'LL57 2DG',
              individual: '',
              city: '',
              postalCode: 'LL57 2DG',
              administrativeArea: '',
              organisationName: '\n            University of Wales, Bangor. School of Ocean Sciences\n          ',
              phone: '01248 382842',
              logo: '',
              position: '',
              email: 'oss011@bangor.ac.uk',
            },
          ],
          resourceTemporalExtentDetails: [{ start: { date: '1969-01-01' }, end: { date: '2013-12-31' } }],
          geom: {
            coordinates: [
              [
                [-5.777741, 51.240829],
                [-2.608865, 51.240829],
                [-2.608865, 53.513067],
                [-5.777741, 53.513067],
                [-5.777741, 51.240829],
              ],
            ],
            type: 'Polygon',
          },
          originatorOrgForResourceObject: {
            default: 'University of Wales, Bangor. School of Ocean Sciences',
            langeng: 'University of Wales, Bangor. School of Ocean Sciences',
          },
          resourceType: ['dataset'],
        },
      },
      {
        _index: 'gn-records',
        _type: '_doc',
        _id: 'CEFAS969e1824-ccb8-4ae2-ae4c-32a1d3d4a8a9',
        _score: 1,
        _source: {
          pointOfContactOrgObject: {
            default: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
            langeng: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
          },
          resourceTitleObject: {
            default: 'Fladen experimental fishing impact recovery data - Acoustic data',
            langeng: 'Fladen experimental fishing impact recovery data - Acoustic data',
          },
          contactForResource: [
            {
              deliveryPoint: 'Cefas Lowestoft Laboratory, Pakefield Road',
              country: 'UK',
              website: '',
              role: 'originator',
              address: 'Cefas Lowestoft Laboratory, Pakefield Road, Lowestoft, Suffolk, NR33 0HT, UK',
              individual: '',
              city: 'Lowestoft',
              postalCode: 'NR33 0HT',
              administrativeArea: 'Suffolk',
              organisationName:
                '\n            Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)\n          ',
              phone: '',
              logo: '',
              position: '',
              email: 'data.manager@cefas.co.uk',
            },
            {
              deliveryPoint: 'Cefas Lowestoft Laboratory, Pakefield Road',
              country: 'UK',
              website: '',
              role: 'custodian',
              address: 'Cefas Lowestoft Laboratory, Pakefield Road, Lowestoft, Suffolk, NR33 0HT, UK',
              individual: '',
              city: 'Lowestoft',
              postalCode: 'NR33 0HT',
              administrativeArea: 'Suffolk',
              organisationName:
                '\n            Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)\n          ',
              phone: '',
              logo: '',
              position: '',
              email: 'data.manager@cefas.co.uk',
            },
            {
              deliveryPoint: 'Cefas Lowestoft Laboratory, Pakefield Road',
              country: 'UK',
              website: '',
              role: 'distributor',
              address: 'Cefas Lowestoft Laboratory, Pakefield Road, Lowestoft, Suffolk, NR33 0HT, UK',
              individual: '',
              city: 'Lowestoft',
              postalCode: 'NR33 0HT',
              administrativeArea: 'Suffolk',
              organisationName:
                '\n            Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)\n          ',
              phone: '',
              logo: '',
              position: '',
              email: 'data.manager@cefas.co.uk',
            },
            {
              deliveryPoint: '',
              country: '',
              website: '',
              role: 'owner',
              address: '',
              individual: '',
              city: '',
              postalCode: '',
              administrativeArea: '',
              organisationName:
                '\n            Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)\n          ',
              phone: '',
              logo: '',
              position: '',
              email: 'data.manager@cefas.co.uk',
            },
          ],
          geom: {
            coordinates: [
              [
                [0, 58],
                [0.5, 58],
                [0.5, 58.25],
                [0, 58.25],
                [0, 58],
              ],
            ],
            type: 'Polygon',
          },
          distributorOrgForResourceObject: {
            default: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
            langeng: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
          },
          custodianOrgForResourceObject: {
            default: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
            langeng: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
          },
          OrgNceaClassifiers: [
            {
              code: 'lvl1-001',
              name: 'Natural asset',
              classifiers: [
                {
                  code: 'lv2-001',
                  name: 'Terrestrial and freshwater habitats',
                  classifiers: [
                    { code: 'lv3-002', name: 'Coniferous woodland' },
                    { code: 'lv3-001', name: 'Broadleaved, mixed and yew woodland' },
                  ],
                },
              ],
            },
            { code: 'lvl1-004', name: 'Pressure', classifiers: [{ code: 'lv2-015', name: 'Land and sea use change' }] },
          ],
          resourceIdentifier: [{ code: 'CEFAS19706', link: '', codeSpace: 'https://data.cefas.co.uk' }],
          ownerOrgForResourceObject: {
            default: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
            langeng: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
          },
          resourceAbstractObject: {
            default:
              'Output imagery of multibeam echosounder backscatter (tiffs) from within six \nexperimental boxes (three treatments and three control) during a fishing \nimpact recovery survey within the Fladen Grounds. Data were collected at three \ntime points (before impact (time 0), immediately after impact (time 1) and 8 \nmonths after impact (time 2) during two research surveys on the RV Cefas \nEndeavour in April 2015 and November 2015.',
            langeng:
              'Output imagery of multibeam echosounder backscatter (tiffs) from within six \nexperimental boxes (three treatments and three control) during a fishing \nimpact recovery survey within the Fladen Grounds. Data were collected at three \ntime points (before impact (time 0), immediately after impact (time 1) and 8 \nmonths after impact (time 2) during two research surveys on the RV Cefas \nEndeavour in April 2015 and November 2015.',
          },
          linkUrl: 'https://data.cefas.co.uk/view/19706',
          resourceTemporalExtentDetails: [{ start: { date: '2015-04-18' }, end: { date: '2015-11-26' } }],
          originatorOrgForResourceObject: {
            default: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
            langeng: 'Centre for Environment, Fisheries and Aquaculture Science, Lowestoft Laboratory (CEFAS)',
          },
          resourceType: ['dataset'],
        },
      },
    ],
  },
};
