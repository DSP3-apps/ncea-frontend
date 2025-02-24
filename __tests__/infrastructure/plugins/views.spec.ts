import { environmentConfig } from '../../../src/config/environmentConfig';
import path from 'path';
import { BASE_PATH, webRoutePaths } from '../../../src/utils/constants';
import nunjucks, { Environment } from 'nunjucks';
import { customHapiViews } from '../../../src/infrastructure/plugins/views';

jest.mock('nunjucks');

const {
  home: homePage,
  results: searchResults,
  guidedClassifierSearch: guidedSearch,
  guidedDateSearch,
  getMapResults,
  getMapFilters,
  filterResourceType,
  filterStudyPeriod,
  accessibilityStatement,
  help,
  termsAndConditions,
  privacyPolicy,
  cookiePolicy,
  login,
  logout,
  atom,
} = webRoutePaths;

describe('Vision Plugin Configuration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should configure nunjucks and return the plugin configuration', async () => {
    const nunjucksMock = jest.requireMock('nunjucks');
    const { options } = customHapiViews;
    nunjucksMock.configure.mockImplementation(() => ({ addFilter: jest.fn() }));
    const mockEnvironment: Environment = {
      addFilter: jest.fn(),
    } as unknown as Environment;
    jest.spyOn(nunjucks, 'configure').mockReturnValueOnce(mockEnvironment);

    const nextMock = jest.fn();
    await options.engines.njk.prepare(
      {
        compileOptions: { environment: mockEnvironment },
        relativeTo: 'mockedRelativeTo',
        path: 'mockedPath',
      },
      nextMock,
    );
    expect(nunjucksMock.configure).toHaveBeenCalledWith(
      [path.join('mockedRelativeTo', 'mockedPath'), 'node_modules/govuk-frontend/dist'],
      { autoescape: true, watch: false },
    );
    expect(nextMock).toHaveBeenCalledTimes(1);
    expect(options.engines.njk.compile).toBeDefined();
    expect(options.path).toBe('../../views');
    expect(options.isCached).toBe(process.env.NODE_ENV !== 'production');
    expect(options.context).toEqual({
      assetPath: `${BASE_PATH}/assets`,
      serviceName: 'Find natural capital data',
      pageTitle: 'Find natural capital data - GOV.UK',
      routes: {
        homePage: `${BASE_PATH}`,
        searchResults: `${BASE_PATH}${searchResults}`,
        guidedSearch: `${BASE_PATH}${guidedSearch}`,
        guidedDateSearch: `${BASE_PATH}${guidedDateSearch}`,
        getMapResults: `${BASE_PATH}${getMapResults}`,
        getMapFilters: `${BASE_PATH}${getMapFilters}`,
        filterResourceType: `${BASE_PATH}${filterResourceType}`,
        filterStudyPeriod: `${BASE_PATH}${filterStudyPeriod}`,
        accessibilityStatement: `${BASE_PATH}${accessibilityStatement}`,
        help: `${BASE_PATH}${help}`,
        termsAndConditions: `${BASE_PATH}${termsAndConditions}`,
        privacyPolicy: `${BASE_PATH}${privacyPolicy}`,
        cookiePolicy: `${BASE_PATH}${cookiePolicy}`,
        logOut: `${BASE_PATH}${logout}`,
        logIn: environmentConfig.isLocal ? '' : login,
        feeds: `${BASE_PATH}${atom}`,
      },
      appInsightsConnectionString: environmentConfig.appInsightsConnectionString,
      gtmId: environmentConfig.gtmId,
      appVersion: process.env.npm_package_version,
      keyboardFiltersBaseUrl: '',
      headerNavigationLinks: [
        {
          text: 'About',
          href: `${BASE_PATH}${webRoutePaths.about}`,
        },
        {
          text: 'Feeds',
          href: `${BASE_PATH}${webRoutePaths.atom}`,
        },
      ],
    });
    expect(mockEnvironment.addFilter).toHaveBeenCalledTimes(2);
  });
  it('should compile and render the template', () => {
    const nunjucksMock = jest.requireMock('nunjucks');
    const { options } = customHapiViews;
    nunjucksMock.compile.mockImplementation((src: string, env: nunjucks.Environment) => {
      const template = {
        render: (context: object | undefined) => `renderedTemplate: ${JSON.stringify(context)}`,
      };
      return template;
    });
    const mockEnvironment: nunjucks.Environment = {} as any;
    const src = '<div>{{ data }}</div>';
    const compiledTemplate = options.engines.njk.compile(src, {
      environment: mockEnvironment,
    });
    const renderedTemplate = compiledTemplate({ data: 'testData' });
    expect(nunjucksMock.compile).toHaveBeenCalledWith(src, mockEnvironment);
    expect(renderedTemplate).toBe('renderedTemplate: {"data":"testData"}');
  });
  it('should add a custom date filter to the environment', () => {
    const nunjucksMock = jest.requireMock('nunjucks');
    const { options } = customHapiViews;
    const mockEnvironment: Environment = {
      addFilter: jest.fn(),
    } as unknown as Environment;
    nunjucksMock.configure.mockReturnValueOnce(mockEnvironment);
    const nextMock = jest.fn();
    options.engines.njk.prepare(
      {
        compileOptions: { environment: mockEnvironment },
        relativeTo: 'mockedRelativeTo',
        path: 'mockedPath',
      },
      nextMock,
    );
    expect(mockEnvironment.addFilter).toHaveBeenCalledWith('date', expect.any(Function));
  });

  it('should add a custom merge filter to the environment', () => {
    const nunjucksMock = jest.requireMock('nunjucks');
    const { options } = customHapiViews;

    const mockEnvironment: Environment = {
      addFilter: jest.fn(),
    } as unknown as Environment;

    nunjucksMock.configure.mockReturnValueOnce(mockEnvironment);

    const nextMock = jest.fn();
    options.engines.njk.prepare(
      {
        compileOptions: { environment: mockEnvironment },
        relativeTo: 'mockedRelativeTo',
        path: 'mockedPath',
      },
      nextMock,
    );

    const addFilterMock = mockEnvironment.addFilter as jest.Mock;
    const mergeFilterFunction = addFilterMock.mock.calls.find((call) => call[0] === 'merge')[1] as Function;

    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const mergedObject = mergeFilterFunction(obj1, obj2);

    expect(mergedObject).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});
