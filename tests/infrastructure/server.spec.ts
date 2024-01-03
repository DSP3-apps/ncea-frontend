import { createServer } from '../../src/infrastructure/server';

describe('HTTP server', () => {
  it('should response 404 when request unregistered route', async () => {
    const server = await createServer();

    const response = await server.inject({
      method: 'GET',
      url: '/unregisteredRoute',
    });

    expect(response.statusCode).toEqual(404);
  });
});
