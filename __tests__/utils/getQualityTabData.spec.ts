'use strict';

import { IQuality, IQualityItem } from '../../src/interfaces/searchResponse.interface';
import { getQualityTabData, getRecordsDates, getDistributionFormats } from '../../src/utils/getQualityTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('Quality tab fields', () => {
  it('should have values for the fields', () => {
    const payload: IQualityItem = {
      ...MORE_INFO_MOCK_DATA,
      datasetReferenceDate: MORE_INFO_MOCK_DATA.datasetReferenceDate,
      createdAt: 1678406400000,
      published: 1486771200000,
      modified: 1717977600000,
      metadataModified: Number.NaN,
    };
    const result: IQuality = getQualityTabData(payload);

    expect(result).toEqual({
      publicationInformation: '11 February 2017',
      creationInformation: '10 March 2023',
      revisionInformation: '10 June 2024',
      metadataDate: '',
      lineage: 'An RDF Vocabulary to described data on exotic notifiable disease investigations.',
      available_formats: '',
      frequency_of_update: '',
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

  it('should call getDistributionFormats and validate the output for dataFormats', () => {
    const dataFormats = [
      {
        dataFormat: 'Shapefile',
        version: 'unknown',
      },
    ];
    expect(getDistributionFormats(dataFormats)).toEqual('Shapefile');
  });

  it('should call getDistributionFormats and validate the output for dataFormats', () => {
    const dataFormats = [
      {
        dataFormat: 'Shapefile',
        version: 'unknown',
      },
      {
        dataFormat: 'shapefile',
        version: 'unknown',
      },
    ];
    expect(getDistributionFormats(dataFormats).toLowerCase()).toEqual('shapefile');
  });

  it('should call getDistributionFormats and validate the output for dataFormats', () => {
    const dataFormats = [
      {
        dataFormat: 'Shapefile',
        version: 'unknown',
      },
      {
        dataFormat: 'ZIP',
        version: 'unknown',
      },
    ];
    expect(getDistributionFormats(dataFormats).toLowerCase()).toEqual('shapefile, zip');
  });

  it('should call getDistributionFormats and validate the dataFormats output when it is empty', () => {
    const dataFormats = [
      {
        dataFormat: '',
        version: 'unknown',
      },
    ];
    expect(getDistributionFormats(dataFormats)).toEqual('');
  });
});
