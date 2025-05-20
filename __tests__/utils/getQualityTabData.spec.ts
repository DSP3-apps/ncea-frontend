'use strict';

import { IQuality } from '../../src/interfaces/searchResponse.interface';
import { getQualityTabData, getRecordsDates, getDistributionFormats } from '../../src/utils/getQualityTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('Quality tab fields', () => {
  it('should have values for the fields', () => {
    const result: IQuality = getQualityTabData(MORE_INFO_MOCK_DATA);

    expect(result).toEqual({
      publicationInformation: '11 February 2017',
      creationInformation: '10 March 2023',
      revisionInformation: '10 June 2024',
      metadataDate: '',
      lineage: 'An RDF Vocabulary to described data on exotic notifiable disease investigations.',
      available_formats: '',
      frequency_of_update: 'unknown',
      character_encoding: 'utf8',
    });
  });

  it('should call getRecordsDates and pass the empty string', () => {
    const result = getRecordsDates('');
    expect(result).toEqual('');
  });

  it('should call getRecordsDates and validate the output', async () => {
    const result = getRecordsDates('2017-02-11T00:00:00Z');
    expect(result).toEqual('11 February 2017');
  });

  it('should call getDistributionFormats and create a list of distribution formats', () => {
    const resources = [
      {
        url: 'https://environment-test.data.gov.uk/explore/9bceae16-607b-49d6-a980-289289fc4643?download=true',
        name: 'Living England Segmentation (2019) Download',
        type: 'HTTP Application',
        language: 'eng',
        distributionFormat: ['ZIP'],
      },
      {
        url: 'https://environment-test.data.gov.uk/spatialdata/living-england-segmentation-2019/wfs',
        name: 'Living England Segmentation (2019) WFS',
        type: 'WFS',
        language: 'eng',
        distributionFormat: ['ZIP'],
      },
      {
        url: 'https://environment-test.data.gov.uk/spatialdata/living-england-segmentation-2019/wms',
        name: 'Living England Segmentation (2019) WMS',
        type: 'WMS',
        language: 'eng',
        distributionFormat: ['PDF'],
      },
    ];
    expect(getDistributionFormats(resources)).toEqual('ZIP, PDF');
  });
  it('should call getDistributionFormats and create a list of empty string if distributionFormat is null', () => {
    expect(getDistributionFormats(MORE_INFO_MOCK_DATA.resources)).toEqual('');
  });
});
