import { FormattedTabOptions } from '../../src/interfaces/detailsTab.interface';
import { ISearchItem } from '../../src/interfaces/searchResponse.interface';
import { formattedDetailsFullResponse } from '../data/documentDetailsResponse';

describe('Process details tab data function', () => {
  let originalWindow: Window | undefined;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();

    originalWindow = global.window;

    global.window = {
      location: {
        hostname: 'seabed.admiralty.co.uk',
      },
    } as unknown as Window & typeof globalThis;
  });

  afterEach(() => {
    global.window = originalWindow as unknown as Window & typeof globalThis;
  });

  it('should process details tab data correctly', async () => {
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
  });

  it('should filter out options with label "Other Constraint" and empty displayValue', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { 'Other Constraint': 'emptyValue' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData['mock']).toHaveLength(0);
  });

  it('should include options with label "Other Constraint" and non-empty displayValue', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { 'Other Constraint': 'title' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();

    const mockData = processedData['mock'];
    expect(mockData).toBeDefined();
    if (mockData) {
      expect(mockData.length).toBeGreaterThan(0);

      if (mockData[0]) {
        expect(mockData[0].label).toBe('Other Constraint');
        expect(mockData[0].displayValue).toBe(docDetails.title);
      }
    }
  });

  it('should filter out options with label "Other Constraint" and empty displayValue', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { 'Other Constraint': 'emptyValue' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData['mock']).toHaveLength(0);
  });
  it('should process when column has parentheses and the value is not an URL', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { Title: '(title)' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData?.['mock']?.[0]?.displayValue).toBe(`(${docDetails.title})`);
  });

  it('should process when column has parentheses and the value is an URL', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { Title: '(resourceLocator)' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData?.['mock']?.[0]?.displayValue).toBe(
      `(<a class="govuk-link" href="${docDetails.resourceLocator}" target="_blank">${docDetails.resourceLocator}</a>)`,
    );
  });

  it('should process when column having the value as an URL without parentheses', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { Title: 'resourceLocator' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData?.['mock']?.[0]?.displayValue).toBe(
      `<a class="govuk-link" href="${docDetails.resourceLocator}" target="_blank">${docDetails.resourceLocator}</a>`,
    );
  });

  it('should process when column and display plain value', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { Title: 'title' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData?.['mock']?.[0]?.displayValue).toBe(docDetails.title);
  });

  it('should process the empty displayValue', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { Title: 'title12' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData?.['mock']?.[0]?.displayValue).toBe('');
  });

  it('should process the value with the given format when having two columns', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { Title: 'title (resourceLocator)' },
      },
    }));
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData?.['mock']?.[0]?.displayValue).toBe(
      `${docDetails.title} (<a class="govuk-link" href="${docDetails.resourceLocator}" target="_blank">${docDetails.resourceLocator}</a>)`,
    );
  });

  it('should process the value with the given format when having two columns and link having target', async () => {
    jest.mock('../../src/utils/constants', () => ({
      detailsTabOptions: {
        mock: { Title: 'title (resourceLocator)' },
      },
    }));
    global.window!.location.hostname = 'localhost:4000';
    const { processDetailsTabData } = require('../../src/utils/processDetailsTabData');
    const docDetails: ISearchItem = {
      ...(formattedDetailsFullResponse.items[0] as ISearchItem),
    };
    const processedData: FormattedTabOptions = await processDetailsTabData(docDetails);
    expect(processedData).toBeDefined();
    expect(processedData['mock']).toBeDefined();
    expect(processedData?.['mock']?.[0]?.displayValue).toBe(
      `${docDetails.title} (<a class="govuk-link" href="${docDetails.resourceLocator}" target="_blank">${docDetails.resourceLocator}</a>)`,
    );
  });
});

describe('appendFormattedValue function', () => {
  let displayValue: string[];
  const { appendFormattedValue } = require('../../src/utils/processDetailsTabData');

  beforeEach(() => {
    displayValue = [];
  });

  it('should return early when value is null', () => {
    appendFormattedValue(null, 'field', displayValue);
    expect(displayValue).toEqual([]);
  });

  it('should return early when value is undefined', () => {
    appendFormattedValue(undefined, 'field', displayValue);
    expect(displayValue).toEqual([]);
  });

  it('should handle array of strings and join them', () => {
    appendFormattedValue(['tag1', 'tag2', 'tag3'], 'tags', displayValue);
    expect(displayValue).toEqual(['tag1, tag2, tag3']);
  });

  it('should return early when value is an object', () => {
    appendFormattedValue({ key: 'value' }, 'field', displayValue);
    expect(displayValue).toEqual([]);
  });

  it('should add string value to displayValue', () => {
    appendFormattedValue('simple text', 'field', displayValue);
    expect(displayValue).toEqual(['simple text']);
  });

  it('should wrap value with parentheses when part contains them', () => {
    appendFormattedValue('example', '(field)', displayValue);
    expect(displayValue).toEqual(['(example)']);
  });

  it('should format URL values as links', () => {
    appendFormattedValue('https://example.com', 'url', displayValue);
    expect(displayValue).toEqual([
      '<a class="govuk-link" href="https://example.com" target="_blank">https://example.com</a>',
    ]);
  });

  it('should not format host_catalogue_number URLs as links', () => {
    appendFormattedValue('https://example.com', 'host_catalogue_number', displayValue);
    expect(displayValue).toEqual(['https://example.com']);
  });
});

describe('getRawValue function', () => {
  const { getRawValue } = require('../../src/utils/processDetailsTabData');

  it('should return undefined when option is undefined', () => {
    const result = getRawValue(undefined, {}, {});
    expect(result).toBeUndefined();
  });

  it('should return undefined when option results in empty sanitized key', () => {
    const result = getRawValue('', {}, {});
    expect(result).toBeUndefined();
  });

  it('should extract value from docDetails when not in entry', () => {
    const docDetails = { child_records: [{ id: '456' }] };
    const result = getRawValue('child_records', {}, docDetails);
    expect(result).toEqual([{ id: '456' }]);
  });

  it('should prioritize entry over docDetails', () => {
    const entry = { field: 'entry value' };
    const docDetails = { field: 'doc value' };
    const result = getRawValue('field', entry, docDetails);
    expect(result).toBe('entry value');
  });

  it('should handle keys with parentheses by removing them', () => {
    const entry = { title: 'Test Title' };
    const result = getRawValue('(title)', entry, {});
    expect(result).toBe('Test Title');
  });

  it('should handle multi-word options by taking first word', () => {
    const entry = { parent_records: [{ id: '123' }] };
    const result = getRawValue('parent_records child_records', entry, {});
    expect(result).toEqual([{ id: '123' }]);
  });

  it('should return undefined when key does not exist in either source', () => {
    const result = getRawValue('nonexistent', {}, {});
    expect(result).toBeUndefined();
  });

  it('should handle complex parent records structure', () => {
    const parentRecords = [
      { id: '123', title: 'Parent 1', grandparent: [{ id: '456' }] },
      { id: '789', title: 'Parent 2', grandparent: null },
    ];
    const entry = { parent_records: parentRecords };
    const result = getRawValue('parent_records', entry, {});
    expect(result).toEqual(parentRecords);
  });
});
