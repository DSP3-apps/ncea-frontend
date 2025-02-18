'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { pageTitles } from '@/utils/constants';

/**
 * This code snippet exports a module named CategoriesController.
 * The soilAndVegHandler method is an asynchronous function that takes a Request object and a ResponseToolkit object as parameters.
 * It returns a Promise that resolves to a ResponseObject. It will defines the content for the Soils and Vegetation.
 */

const CategoriesController = {
  soilAndVegHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/categories/template', {
      pageTitle: pageTitles.categorySoilAndVeg,
      heading: 'Soils and Vegetation',
      overView: {
        content: [
          'Natural capital is the parts of our natural environment that hold value for people, giving environmental, economic, societal and cultural benefits. It is nature’s stock of living and non-living resources – including ecosystems, species, freshwater, land, soils, minerals, air, and ocean – that provide flows of environmental (ecosystem) services.',
          'Natural capital is the parts of our natural environment that hold value for people, giving environmental, economic, societal and cultural benefits. It is nature’s stock of living and non-living resources – including ecosystems, species, freshwater, land, soils, minerals, air, and ocean – that provide flows of environmental (ecosystem) services.',
        ],
        imageUrl:
          'https://assets.publishing.service.gov.uk/media/6759bfcc4e36e2691ab0edba/ERH_East_Sussex_coast_path__Hastings_to_Fairlight_Cove-42__CREDIT_Explore_Kent___East_Sussex_County_Council.jpg',
      },
      products: [
        {
          title: 'product 1',
          link: 'https://www.gov.uk/government/news/royal-route-around-england-takes-next-step',
        },
        {
          title: 'product 2',
          link: 'https://www.gov.uk/government/news/royal-route-around-england-takes-next-step',
        },
        {
          title: 'product 3',
          link: 'https://www.gov.uk/government/news/royal-route-around-england-takes-next-step',
        },
      ],
    });
  },

  waterHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/categories/template', {
      pageTitle: pageTitles.categoryWater,
      heading: 'Water',
    });
  },
  treesHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/categories/template', {
      pageTitle: pageTitles.categoryTrees,
      heading: 'Trees',
    });
  },
  citizenScienceHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/categories/template', {
      pageTitle: pageTitles.categoryCitizenScience,
      heading: 'Citizen Science',
    });
  },
};

export { CategoriesController };
