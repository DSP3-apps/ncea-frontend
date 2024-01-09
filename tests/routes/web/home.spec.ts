'use strict';

import { Server } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';

describe('Home Routes', () => {
  let server: Server;

  beforeAll((done) => {
    initializeServer().then((s: Server) => {
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
  });
});
