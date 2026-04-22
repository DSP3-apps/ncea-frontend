'use strict';

import { getGeneralTabData, getKeywords } from '../../src/utils/getGeneralTabData';
import { IGeneralItem, ITaxonomyKeyword } from '../../src/interfaces/searchResponse.interface';
import { MORE_INFO_MOCK_DATA } from '../../src/services/handlers/mocks/more-info-response';

describe('General tab fields', () => {
  it('should have values for the fields', () => {
    const payload: IGeneralItem = {
      ...MORE_INFO_MOCK_DATA,
      description: MORE_INFO_MOCK_DATA.abstract,
      temporalExtent: {
        begin: MORE_INFO_MOCK_DATA.temporalExtent.beginPosition,
        end: MORE_INFO_MOCK_DATA.temporalExtent.endPosition,
      },
      topics: MORE_INFO_MOCK_DATA.topicCategories,
      taxonomyKeywords: (MORE_INFO_MOCK_DATA.keywords ?? []).map((value) => ({ valueLabel: value })),
      metadataLanguage: MORE_INFO_MOCK_DATA.metadata.language,
    };
    const result = getGeneralTabData(payload);
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

describe('getKeywords', () => {
  it.each<[ITaxonomyKeyword[] | null, string]>([
    [[], ''],
    [null, ''],
  ])('should return empty string for empty or null input: %j → "%s"', (input: ITaxonomyKeyword[] | null, expected: string) => {
    expect(getKeywords(input as ITaxonomyKeyword[])).toBe(expected);
  });

  it.each<[ITaxonomyKeyword[], string]>([
    [[{ valueLabel: 'flood' }], 'flood'],
    [[{ valueLabel: 'flood' }, { valueLabel: 'environment' }], 'flood, environment'],
  ])('should return joined keywords: %j → "%s"', (input: ITaxonomyKeyword[], expected: string) => {
    expect(getKeywords(input)).toBe(expected);
  });

  it.each<[ITaxonomyKeyword[], string]>([
    [[{ valueLabel: 'Flood' }, { valueLabel: 'flood' }], 'Flood'],
    [[{ valueLabel: 'environment' }, { valueLabel: 'Environment' }], 'environment'],
    [[{ valueLabel: 'Flood' }, { valueLabel: 'environment' }, { valueLabel: 'flood' }, { valueLabel: 'Environment' }], 'Flood, environment'],
  ])('should deduplicate case-insensitively and preserve first-seen casing: %j → "%s"', (input: ITaxonomyKeyword[], expected: string) => {
    expect(getKeywords(input)).toBe(expected);
  });

  it.each<[ITaxonomyKeyword[], string]>([
    [[{ valueLabel: '' }, { valueLabel: 'flood' }], 'flood'],
    [[{ valueLabel: '' }, { valueLabel: '' }], ''],
  ])('should filter out empty valueLabel entries: %j → "%s"', (input: ITaxonomyKeyword[], expected: string) => {
    expect(getKeywords(input)).toBe(expected);
  });
});
