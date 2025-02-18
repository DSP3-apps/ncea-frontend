'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

import { BASE_PATH } from '../../utils/constants';

const AboutController = {
  renderAboutHandler: (request: Request, response: ResponseToolkit): ResponseObject => {
    return response.view('screens/about/template', {
      pageHeading: 'NCEA Programme',
      introText: {
        content: [
          'Natural capital is the parts of our natural environment that hold value for people, giving environmental, economic, societal and cultural benefits. It is nature’s stock of living and non-living resources – including ecosystems, species, freshwater, land, soils, minerals, air, and ocean – that provide flows of environmental (ecosystem) services.',
          'Natural capital is the parts of our natural environment that hold value for people, giving environmental, economic, societal and cultural benefits. It is nature’s stock of living and non-living resources – including ecosystems, species, freshwater, land, soils, minerals, air, and ocean – that provide flows of environmental (ecosystem) services.',
        ],
        imageUrl: `${BASE_PATH}/assets/images/introText.jpg`,
      },
      categories: [
        {
          text: 'NRW’s 10 week public consultation on a new National Park',
          imgUrl: `${BASE_PATH}/assets/images/newsfp.jpg`,
        },
        {
          text: 'Newborough National Nature Reserve and Forest, Anglesey',
          imgUrl: `${BASE_PATH}/assets/images/llanddwyn.jpg`,
        },
        {
          text: 'Bwlch Nant yr Arian Visitor Centre, near Aberystwyth',
          imgUrl: `${BASE_PATH}/assets/images/bnya2.jpg`,
        },
        {
          text: 'Coed y Brenin Visitor Centre, near Dolgellau',
          imgUrl: `${BASE_PATH}/assets/images/dronecoe.jpg`,
        },
      ],
    });
  },
};

export { AboutController };
