'use strict';

import { Request } from '@hapi/hapi';

module.exports = {
  async renderSample2Handler(request: Request, response: any) {
    return response.view('sample', {
      title: 'Hapi ' + request.server.version,
      message: 'Hello Nunjucks!',
    });
  },
};
