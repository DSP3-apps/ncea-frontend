'use strict';

import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';

const SampleApiController = {
  apiSampleHandler: async (request: Request, response: ResponseToolkit): Promise<ResponseObject> => {
    return response
      .response({
        title: 'Hapi ' + request.server.version,
        message: 'Hello Nunjucks!',
      })
      .code(200);
  },
};

export { SampleApiController };
