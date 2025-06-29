import { environmentConfig } from '../../../src/config/environmentConfig';
import path from 'path';
import {
  accessibilityStatementUrl,
  BASE_PATH,
  cookiePolicyUrl,
  privacyPolicyUrl,
  supportUrl,
  termsAndConditionsUrl,
  webRoutePaths,
  feedbackLinkUrl,
} from '../../../src/utils/constants';
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
  help,
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
      pageTitle: 'About the Natural Capital Ecosystem Assessment - NCEA – programme',
      routes: {
        rootPath: '/',
        homePage: `${BASE_PATH}`,
        searchResults: `${BASE_PATH}${searchResults}`,
        guidedSearch: `${BASE_PATH}${guidedSearch}`,
        guidedDateSearch: `${BASE_PATH}${guidedDateSearch}`,
        getMapResults: `${BASE_PATH}${getMapResults}`,
        getMapFilters: `${BASE_PATH}${getMapFilters}`,
        filterResourceType: `${BASE_PATH}${filterResourceType}`,
        filterStudyPeriod: `${BASE_PATH}${filterStudyPeriod}`,
        accessibilityStatement: accessibilityStatementUrl,
        help: `${BASE_PATH}${help}`,
        termsAndConditions: termsAndConditionsUrl,
        privacyPolicy: privacyPolicyUrl,
        cookiePolicy: cookiePolicyUrl,
        support: supportUrl,
        logOut: `${BASE_PATH}${logout}`,
        logIn: environmentConfig.isLocal ? '' : login,
        feeds: `${BASE_PATH}${atom}`,
        feedbackLink: feedbackLinkUrl,
      },
      appInsightsConnectionString: environmentConfig.appInsightsConnectionString,
      gtmId: environmentConfig.gtmId,
      appVersion: process.env.npm_package_version,
      keyboardFiltersBaseUrl: '',
      isLocal: false,
      headerNavigationLinks: [
        {
          text: 'Home',
          href: `${BASE_PATH}`,
          icon: 'home',
        },
        {
          text: 'About',
          href: `${BASE_PATH}${webRoutePaths.about}`,
          icon: 'info',
        },
        {
          text: 'News Feed',
          href: `${BASE_PATH}${webRoutePaths.atom}`,
          icon: 'feeds',
        },
      ],
      currentYear: new Date().getFullYear(),
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
