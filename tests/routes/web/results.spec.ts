/**
 * @jest-environment jsdom
 */

'use strict';

import { Server } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import { webRoutePaths } from '../../../src/utils/constants';

describe('Results Screen', () => {
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

  describe('Results > Sanpshot verification', () => {
    it('should match the results screen snapshot', async () => {
      const options = {
        method: 'GET',
        url: webRoutePaths.results,
      };

      const response = await server.inject(options);
      expect(response.payload).toMatchSnapshot();
    });
  });

  describe('Results > Check /results route status code', () => {
    it('should / route works with status code 200', async () => {
      const options = {
        method: 'GET',
        url: webRoutePaths.results,
      };

      const response = await server.inject(options);
      expect(response.statusCode).toEqual(200);
    });
  });

  describe('Results > Breadcrumb block', () => {
    describe('Breadcrumb classes', () => {
      it('renders the container class', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        expect(document.querySelector('.govuk-breadcrumbs')).toBeTruthy();
      });

      it('renders the breadcrumb list class', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        expect(document.querySelector('.govuk-breadcrumbs__list')).toBeTruthy();
      });
    });

    describe('Breadcrumb list items', () => {
      it('should render 2 list items', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        const breadcrumbList = document?.querySelector(
          '.govuk-breadcrumbs__list'
        );
        expect(breadcrumbList?.childElementCount).toEqual(2);
      });
    });

    describe('Breadcrumb list item options', () => {
      it('should render home list item as a first child', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        const item = document.querySelector('.govuk-breadcrumbs__list')
          ?.firstElementChild;
        const anchor = item?.firstElementChild;
        expect(anchor?.tagName.toLowerCase()).toBe('a');
        expect(anchor?.getAttribute('class')).toEqual(
          'govuk-breadcrumbs__link'
        );
        expect(anchor?.getAttribute('href')).toEqual(webRoutePaths.home);
        expect(anchor?.textContent?.trim()).toEqual('Home');
      });
    });

    it('should render search list item as a second child', async () => {
      const options = {
        method: 'GET',
        url: webRoutePaths.results,
      };

      const response = await server.inject(options);
      const rawHTML = response.payload;
      const parser = new DOMParser();
      const document = parser.parseFromString(rawHTML, 'text/html');
      const item = document.querySelector('.govuk-breadcrumbs__list')
        ?.lastElementChild;
      const anchor = item?.firstElementChild;
      expect(anchor?.tagName.toLowerCase()).toBe('a');
      expect(anchor?.getAttribute('class')).toEqual('govuk-breadcrumbs__link');
      expect(anchor?.getAttribute('href')).toEqual('#');
      expect(anchor?.textContent?.trim()).toEqual('Search results');
    });
  });

  describe('Results > Search block', () => {
    describe('Search block classes', () => {
      it('renders custom quick search container class', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        expect(document.querySelector('.quick_search-container')).toBeTruthy();
      });

      it('renders custom search block class', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.home,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        expect(document.querySelector('.search-block')).toBeTruthy();
      });
    });

    describe('Search block custom options', () => {
      it('renders attributes correctly', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        const searchBlock = document.querySelector('.search-block');
        expect(searchBlock?.getAttribute('data-module')).toEqual('search');
      });
    });

    describe('Search container content elements', () => {
      it('should render 2 child elements', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        const bannerContainer = document?.querySelector(
          '.quick_search-container'
        );
        expect(bannerContainer?.childElementCount).toEqual(2);
      });

      it('should not render caption on results screen', async () => {
        const options = {
          method: 'GET',
          url: webRoutePaths.results,
        };

        const response = await server.inject(options);
        const rawHTML = response.payload;
        const parser = new DOMParser();
        const document = parser.parseFromString(rawHTML, 'text/html');
        expect(
          document?.querySelector('.quick_search-container__caption-m')
        ).toBeNull();
      });
    });

    describe('Search container block heading', () => {
      it('should render the search container heading', async () => {
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
  });
});
