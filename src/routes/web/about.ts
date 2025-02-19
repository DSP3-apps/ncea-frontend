'use strict';

import { AboutController } from '@/controllers/web/AboutController';

import { webRoutePaths } from '../../utils/constants';

const aboutRoutes = [
  {
    method: 'GET',
    path: webRoutePaths.about,
    handler: AboutController.renderAboutHandler,
  },
];

export { aboutRoutes };
