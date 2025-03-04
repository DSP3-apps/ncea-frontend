'use strict';

import { IQuality } from '../../src/interfaces/searchResponse.interface';
import { getQualityTabData, getRecordsDates } from '../../src/utils/getQualityTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe.only('Quality tab fields', () => {
  it('should have values for the fields', () => {
    const result: IQuality = getQualityTabData(MORE_INFO_MOCK_DATA);

    expect(result).toEqual({
      publicationInformation: '11 February 2017',
      creationInformation: '10 March 2023',
      revisionInformation: '10 June 2024',
      metadataDate: '',
      lineage: 'An RDF Vocabulary to described data on exotic notifiable disease investigations.',
      additionalInformation: '',
      conformity: '',
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
});
