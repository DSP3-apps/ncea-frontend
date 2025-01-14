'use strict';

import { HomeController } from '../../controllers/web/HomeController';
import { webRoutePaths } from '../../utils/constants';

const homeRoutes = [
  {
    method: 'GET',
    path: webRoutePaths.home,
    handler: HomeController.renderHomeHandler,
    options: {
      state: {
        parse: false, // Parse cookies before setting them.
        failAction: 'log', // Return a 400 error code upon cookie parsing error.
      },
    },
  },
  {
    method: 'GET',
    path: webRoutePaths.help,
    handler: HomeController.helpHandler,
  },
  {
    method: 'GET',
    path: `${webRoutePaths.intermediate}/{step}`,
    handler: HomeController.intermediateHandler,
  },
  {
    method: 'GET',
    path: webRoutePaths.accessibilityStatement,
    handler: HomeController.accessibilityHandler,
  },
  {
    method: 'GET',
    path: webRoutePaths.termsAndConditions,
    handler: HomeController.termsConditionsHandler,
  },
  {
    method: 'GET',
    path: webRoutePaths.privacyPolicy,
    handler: HomeController.privacyPolicyHandler,
  },
  {
    method: 'GET',
    path: webRoutePaths.cookiePolicy,
    handler: HomeController.cookiePolicyHandler,
  },
];

export { homeRoutes };
