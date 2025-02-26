import fs from 'fs';
import path from 'path';

import vision from '@hapi/vision';
import nunjucks from 'nunjucks';
import dateFilter from 'nunjucks-date-filter';

import { environmentConfig } from '../../config/environmentConfig';
import { BASE_PATH, headerNavigationLinks, webRoutePaths } from '../../utils/constants';

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const {
  results: searchResults,
  guidedClassifierSearch: guidedSearch,
  guidedDateSearch,
  getMapResults,
  getMapFilters,
  filterResourceType,
  filterStudyPeriod,
  help,
  accessibilityStatement,
  termsAndConditions,
  privacyPolicy,
  cookiePolicy,
  login,
  logout,
  atom,
} = webRoutePaths;

const customHapiViews = {
  plugin: vision,
  options: {
    engines: {
      njk: {
        compile: (src: string, options: { environment: nunjucks.Environment | undefined }) => {
          const template = nunjucks.compile(src, options.environment);

          return (context: object | undefined) => {
            return template.render(context);
          };
        },
        prepare: (
          options: {
            compileOptions: { environment: nunjucks.Environment };
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            relativeTo: any;
            path: string;
          },
          /* eslint-disable  @typescript-eslint/no-explicit-any */
          next: () => any,
        ) => {
          options.compileOptions.environment = nunjucks.configure(
            [path.join(options.relativeTo, options.path), 'node_modules/govuk-frontend/dist'],
            {
              autoescape: true,
              watch: false,
            },
          );
          options.compileOptions.environment.addFilter('date', dateFilter);
          options.compileOptions.environment.addFilter('merge', (obj1, obj2) => {
            return { ...obj1, ...obj2 };
          });

          return next();
        },
      },
    },
    path: '../../views',
    relativeTo: __dirname,
    isCached: process.env.NODE_ENV !== 'production',
    context: {
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
        help: `${BASE_PATH}${help}`,
        accessibilityStatement: `${BASE_PATH}${accessibilityStatement}`,
        termsAndConditions: `${BASE_PATH}${termsAndConditions}`,
        privacyPolicy: `${BASE_PATH}${privacyPolicy}`,
        cookiePolicy: `${BASE_PATH}${cookiePolicy}`,
        logOut: `${BASE_PATH}${logout}`,
        logIn: environmentConfig.isLocal ? '' : login, // dont want the base path on this URL as it should navigate to the core platform instead
        feeds: `${BASE_PATH}${atom}`,
      },
      appInsightsConnectionString: environmentConfig.appInsightsConnectionString,
      gtmId: environmentConfig.gtmId,
      appVersion: packageJson.version,
      keyboardFiltersBaseUrl: environmentConfig.keyboardFiltersBaseUrl,
      headerNavigationLinks: headerNavigationLinks,
    },
  },
};

export { customHapiViews };
