'use strict';

import { FeedsController } from '../../controllers/web/FeedsController';
import { webRoutePaths } from '../../utils/constants';

const atomFeedRoutes = [
  {
    method: 'GET',
    path: webRoutePaths.atom,
    handler: FeedsController.renderAtomFeedHandler,
  },
];

export { atomFeedRoutes };
