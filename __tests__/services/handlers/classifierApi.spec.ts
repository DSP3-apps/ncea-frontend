import axios from 'axios';
import { getClassifierThemes } from '../../../src/services/handlers/classifierApi';
import {
  level1ApiResponse,
  level2ApiResponse,
  level3ApiResponse,
  level3MissingClassifiersApiResponse,
  level1ClassifierItems,
  level2ClassifierItems,
  level3ClassifierItems,
  level3MissingClassifierItems,
} from '../../data/classifierSearch';
import { CLASSIFIER_LEVEL_2 } from '../../../src/services/handlers/mocks/classifier-themes-level-2';
import { CLASSIFIER_LEVEL_1 } from '../../../src/services/handlers/mocks/classifier-themes-level-1';
import { CLASSIFIER_LEVEL_3 } from '../../../src/services/handlers/mocks/classifier-themes-level-3';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('../../../src/utils/keyvault', () => ({
  getSecret: jest.fn(),
}));

describe('Classifier API', () => {
  describe('getClassifierThemes', () => {
    it('should call classifier list api for level 1', async () => {
      mockedAxios.get.mockResolvedValue({ data: level1ApiResponse });
      const classifierItems1 = await getClassifierThemes('1');
      expect(classifierItems1).toEqual(CLASSIFIER_LEVEL_1);
    });

    it('should call classifier list api for level 2', async () => {
      mockedAxios.get.mockResolvedValue({ data: level2ApiResponse });
      const classifierItems2 = await getClassifierThemes('2', 'lvl1-003');
      expect(classifierItems2).toEqual(CLASSIFIER_LEVEL_2);
    });

    it('should call classifier list api for level 3', async () => {
      mockedAxios.get.mockResolvedValue({ data: level3ApiResponse });
      const classifierItems3 = await getClassifierThemes('3', 'lvl2-001,lvl2-003');
      expect(classifierItems3).toEqual(CLASSIFIER_LEVEL_3);
    });

    xit('classifier list error', async () => {
      mockedAxios.get.mockRejectedValue('Network error: Something went wrong');
      const classifierItems4 = await getClassifierThemes('3', 'lvl2-001,lvl2-003');
      expect(classifierItems4).toEqual([]);
    });
    it('no classifiers for some of the level 2 categories', async () => {
      mockedAxios.get.mockResolvedValue({ data: level3MissingClassifiersApiResponse });
      const classifierItems4 = await getClassifierThemes('3', 'lvl2-001,lvl2-003');
      expect(classifierItems4).toEqual(CLASSIFIER_LEVEL_3);
    });
  });
});
