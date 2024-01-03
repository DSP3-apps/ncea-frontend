'use strict';

import { Server } from '@hapi/hapi';

import { createServer } from '../../../src/infrastructure/server';

describe('Home Routes', () => {
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

  it('should GET / route works', async () => {
    const options = {
      method: 'GET',
      url: '/',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual('Hello, Natural Capital Search Service');
  });
});
