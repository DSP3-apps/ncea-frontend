'use strict';

import { Server } from '@hapi/hapi';

const createServer = require('../../../src/infrastructure/server');

describe('Sample Routes', () => {
  let server: Server;

  beforeAll((done) => {
    createServer().then((s: Server) => {
      server = s;
      done();
    });
  });

  afterAll((done) => {
    server.stop().then(() => done());
  });

  it('should GET /sample route works', async () => {
    const options = {
      method: 'GET',
      url: '/sample',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
