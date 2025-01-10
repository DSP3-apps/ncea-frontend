
import { getClassifierThemes } from '../../../src/services/handlers/classifierApi';
import { CLASSIFIER_LEVEL_2_MOCK_DATA, LEVEL2_API_RESPONSE } from '../../../src/services/handlers/mocks/classifier-themes-level-2';
import { CLASSIFIER_LEVEL_1, LEVEL1_API_RESPONSE } from '../../../src/services/handlers/mocks/classifier-themes-level-1';
import { CLASSIFIER_LEVEL_3_MOCK_DATA, NO_CLASSIFIER_LEVEL_2_MOCK_DATA, LEVEL3_API_RESPONSE, LEVEL3_MISSING_CLASSIFIER_API_RESPONSE } from '../../../src/services/handlers/mocks/classifier-themes-level-3';

describe.only('Classifier API', () => {
  describe.only('getClassifierThemes', () => {
    it('should call classifier list api for level 1', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(LEVEL1_API_RESPONSE)
      });
      
      const classifierItems1 = await getClassifierThemes('1');
      expect(classifierItems1).toEqual(CLASSIFIER_LEVEL_1);
    });

    it('should call classifier list api for level 2', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(LEVEL2_API_RESPONSE)
      });
      const classifierItems2 = await getClassifierThemes('2', 'lvl1-003');
      expect(classifierItems2).toEqual(CLASSIFIER_LEVEL_2_MOCK_DATA);
    });

    it('should call classifier list api for level 3', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(LEVEL3_API_RESPONSE)
      });
      const classifierItems3 = await getClassifierThemes('3', 'lvl2-001,lvl2-003');
      expect(classifierItems3).toEqual(CLASSIFIER_LEVEL_3_MOCK_DATA);
    });

    it('classifier list error', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.reject('Network error: Something went wrong')
      });
      const classifierItems4 = await getClassifierThemes('3', 'lvl2-001,lvl2-003');
      expect(classifierItems4).toEqual([]);
    });
    it('no classifiers for some of the level 2 categories', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(LEVEL3_MISSING_CLASSIFIER_API_RESPONSE)
      });
      const classifierItems4 = await getClassifierThemes('3', 'lvl2-001,lvl2-003');
      expect(classifierItems4).toEqual(NO_CLASSIFIER_LEVEL_2_MOCK_DATA);
    });
  });
});
