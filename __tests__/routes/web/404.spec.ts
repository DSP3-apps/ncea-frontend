/**
 * @jest-environment jsdom
 */

'use strict';

import { Server, ServerInjectResponse } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import { BASE_PATH } from '../../../src/utils/constants';

jest.mock('../../../src/infrastructure/plugins/appinsights-logger', () => ({
  logger: jest.fn(),
}));

jest.mock('../../../src/utils/keyvault', () => ({
  getSecret: jest.fn(),
}));

describe('404 Screen', () => {
  let server: Server;
  let response: ServerInjectResponse<object>;
  let document: Document;

  beforeAll((done) => {
    initializeServer().then(async (s: Server) => {
      server = s;

      const options = {
        method: 'GET',
        url: `${BASE_PATH}/404route`,
      };

      response = await server.inject(options);
      const rawHTML = response.payload;
      const parser = new DOMParser();
      document = parser.parseFromString(rawHTML, 'text/html');
      done();
    });
  });

  afterAll((done) => {
    server.stop().then(() => done());
  });

  describe('404 > Sanpshot verification', () => {
    it('should match the 404 screen snapshot', async () => {
      expect(response.payload).toMatchSnapshot();
    });
  });

  describe('404 > Check home route status code', () => {
    it('should / route works with status code 404', async () => {
      expect(response.statusCode).toEqual(404);
    });
  });

  describe('404 > Heading', () => {
    it('should render the 404 content heading', async () => {
      expect(document?.querySelectorAll('.govuk-heading-m')?.[1]?.textContent?.trim()).toBe('Error 404 page not found');
    });
  });
});
