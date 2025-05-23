/**
 * @jest-environment jsdom
 */

'use strict';

import { Server, ServerInjectResponse } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import { BASE_PATH } from '../../../src/utils/constants';

jest.mock('../../../src/utils/keyvault', () => ({
  getSecret: jest.fn(),
}));

describe('Feeds Screen', () => {
  let server: Server;
  let response: ServerInjectResponse<object>;
  let document: Document;

  beforeAll((done) => {
    initializeServer().then(async (s: Server) => {
      server = s;

      const options = {
        method: 'GET',
        url: `${BASE_PATH}/newsfeed`,
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

  describe('Feeds > Sanpshot verification', () => {
    it('should match the Feeds screen snapshot', async () => {
      expect(response.payload).toMatchSnapshot();
    });
  });

  describe('Feeds > Heading', () => {
    it('should render the Feeds content heading', async () => {
      expect(document?.querySelectorAll('.govuk-heading-m')?.[1]?.textContent?.trim()).toBe('Defra - NCEA');
      expect(document?.querySelectorAll('.govuk-heading-m')?.[2]?.textContent?.trim()).toBe('Natural England - NCEA');
    });
  });
});
