'use strict';

import { CategoriesDetailController } from '../../controllers/web/CategoriesDetailController';
import { webRoutePaths } from '../../utils/constants';

const categoriesDetail = [
  {
    method: 'GET',
    // path: webRoutePaths.categoriesDetail,
    path: '/categoriesDetail',
    handler: CategoriesDetailController.renderCategoriesDetailHandler,
  },
];

export { categoriesDetail };