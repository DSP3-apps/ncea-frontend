'use strict';

import { getGeneralTabData } from '../../src/utils/getGeneralTabData';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('General tab fields', () => {
  it('should have values for the fields', () => {
    const result = getGeneralTabData(MORE_INFO_MOCK_DATA);
    expect(result).toEqual({
      content:
        "This dataset provides a codelist for the reason why a sample resulting in Non Negative Lab Result was submitted  that resulted an Exotic Notifiable Disease investigations carried out by the Animal and Plant Health Agency. Investigations that follow the report of an exotic notifiable disease are called 'report cases'. Notifiable diseases in this context are animal diseases that an animal owner/keeper is under legal obligation to report to the Animal and Plant Health Agency (APHA), even if there is only a suspicion that an animal may be affected. 'Exotic diseases' are defined as diseases that are not currently present within the United Kingdom. Reason for Submission is the reason why a sample resulting in Non Negative Lab Result was submitted this could be a result of: \nActive Surveillance These are investigations where a surveillance program is in place that actively samples certain premises in order to provide assurance of national disease freedom.  \nTesting to Exclude: Testing for exclusion is specifically intended for use in cases where NAD or West Nile Fever is not formally suspected, but cannot be excluded from the differential diagnosis of a health or production problem. This service may help to detect disease at the earliest opportunity in those cases where the clinical signs do not give rise to a level of suspicion of a NAD or West Nile Fever that justifies either a consultation case or a statutory notification and official inquiry in the first instance. For more information on testing for exclusion scheme for NAD please see http://ahvla.defra.gov.uk/documents/nad/vr-534.3.full_.pdf  \nPre Export: Samples submitted as part of import controls\nPost Import: Samples submitted as part of import controls\nPrivate Samples: Samples collected for private diagnostic work\nPre Breeding: Samples submitted before an animal breeds\nNot Disclosed: Samples which are submitted for undeclared reason.",
      studyPeriod: '1 January 2008 to 31 December 2015',
      language: 'ENG',
      keywords: 'surveillance, animal disease',
      topicCategories: 'environment',
    });
  });
});
