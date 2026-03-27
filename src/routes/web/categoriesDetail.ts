'use strict';

import { CategoriesDetailController } from '../../controllers/web/CategoriesDetailController';

const categoriesDetail = [
  {
    method: 'GET',
    path: '/categoriesDetail/{category}',
    handler: CategoriesDetailController.renderCategoriesDetailHandler,
  },
];
export { categoriesDetail };
