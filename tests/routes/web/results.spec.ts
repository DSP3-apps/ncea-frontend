/**
 * @jest-environment jsdom
 */

'use strict';

import { Server } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import { webRoutePaths } from '../../../src/utils/constants';

describe('Results Routes', () => {
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

  it('should match the /results snapshot', async () => {
    const options = {
      method: 'GET',
      url: webRoutePaths.results,
    };

    const response = await server.inject(options);
    expect(response.payload).toMatchSnapshot();
  });

  it('should GET /results route works with status code 200', async () => {
    const options = {
      method: 'GET',
      url: webRoutePaths.results,
    };

    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should check for the text Search', async () => {
    const options = {
      method: 'GET',
      url: webRoutePaths.results,
    };

    const response = await server.inject(options);
    const rawHTML = response.payload;
    const parser = new DOMParser();
    const document = parser.parseFromString(rawHTML, 'text/html');
    expect(
      document
        ?.querySelector('.quick_search-container__heading-m')
        ?.textContent?.trim()
    ).toBe('Search');
  });
});
