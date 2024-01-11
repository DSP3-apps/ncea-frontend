/**
 * @jest-environment jsdom
 */

'use strict';

import { Server } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import { webRoutePaths } from '../../../src/utils/constants';

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
      url: webRoutePaths.home,
    };

    const response = await server.inject(options);
    const rawHTML = response.payload;
    const parser = new DOMParser();
    const document = parser.parseFromString(rawHTML, 'text/html');
    expect(response.statusCode).toEqual(200);
    expect(
      document?.querySelector('.banner-container__heading-xl')?.textContent
    ).toBe('Natural Capital Search Service');
    expect(
      document?.querySelector('.video-container__caption-m')?.textContent
    ).toBe('What is natural capital?');
  });
});
