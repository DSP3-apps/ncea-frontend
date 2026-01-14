'use strict';

import { getGeneralTabData, getResourceLanguages } from '../../src/utils/getGeneralTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('General tab fields', () => {
  it('should have values for the fields', () => {
    const result = getGeneralTabData(MORE_INFO_MOCK_DATA);
    expect(result).toEqual({
      content: expect.stringContaining(
        'This dataset provides a codelist for the reason why a sample resulting in Non Negative Lab Result was submitted'
      ),
      studyPeriod: '1 January 2008 to 31 December 2015',
      language: 'ENG',
      keywords: 'surveillance, animal disease',
      topicCategories: 'environment',
    });
  });

  it('should call getResourceLanguages and validate the output if resources are empty', () => {
    expect(getResourceLanguages([])).toStrictEqual('');
  });

  it('should call getResourceLanguages and validate the output', () => {
    const resources = [
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
        language: 'ger',
        distributionFormat: null,
      },
      {
        url: 'https://environment-test.data.gov.uk/arcgis/rest/services/NE/LivingEnglandSegmentation2019/MapServer',
        name: 'Living England Segmentation (2019) REST Map Service',
        type: 'ESRI REST API',
        language: 'ita',
        distributionFormat: null,
      },
    ];
    expect(getResourceLanguages(resources)).toStrictEqual('ENG, GER, ITA');
  });
});
