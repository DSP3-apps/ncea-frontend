'use strict';

import { CategoriesController } from '@/controllers/web/CategoriesController';

import { webRoutePaths } from '../../utils/constants';

const categoriesRoutes = [
  {
    method: 'GET',
    path: webRoutePaths.soilsAndVeg,
    handler: CategoriesController.soilAndVegHandler,
  },
  {
    method: 'GET',
    path: webRoutePaths.water,
    handler: CategoriesController.waterHandler,
  },
  {
    method: 'GET',
    path: webRoutePaths.trees,
    handler: CategoriesController.treesHandler,
  },
  {
    method: 'GET',
    path: webRoutePaths.citizenScience,
    handler: CategoriesController.citizenScienceHandler,
  },
];

export { categoriesRoutes };
