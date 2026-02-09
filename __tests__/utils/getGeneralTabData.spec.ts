'use strict';

import { getGeneralTabData } from '../../src/utils/getGeneralTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('General tab fields', () => {
  it('should have values for the fields', () => {
    const result = getGeneralTabData(MORE_INFO_MOCK_DATA);
    expect(result).toEqual({
      content: expect.stringContaining(
        'This dataset provides a codelist for the reason why a sample resulting in Non Negative Lab Result was submitted',
      ),
      studyPeriod: '1 January 2008 to 31 December 2015',
      language: 'ENG',
      keywords: 'surveillance, animal disease',
      topicCategories: 'environment',
    });
  });
});
