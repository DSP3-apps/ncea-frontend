/**
 * @jest-environment jsdom
 */

'use strict';

import { Server } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import supertest from 'supertest';
import { BASE_PATH, webRoutePaths } from '../../../src/utils/constants';

jest.mock('../../../src/infrastructure/plugins/appinsights-logger', () => ({
  info: jest.fn(),
}));

jest.mock('../../../src/utils/keyvault', () => ({
  getSecret: jest.fn(),
}));

let serverRequest;

const invokeRoute = async (route, payload, method = 'post') => {
  let response;
  if (method === 'post') {
    response = await serverRequest.post(route).send(payload);
  } else {
    response = await serverRequest.get(route).query({ ...payload });
  }
  const rawHTML = response.text;
  const parser = new DOMParser();
  const document = parser.parseFromString(rawHTML, 'text/html');
  return { response, document };
};

const successPayload = {
  search_term: 'test',
  pageName: 'home',
};

describe('Results Screen', () => {
  let server: Server;

  beforeAll(async () => {
    initializeServer().then(async (s: Server) => {
      server = s;
      serverRequest = supertest(server.listener);
    });
  });

  afterAll((done) => {
    server.stop().then(() => done());
  });

  describe('Sanpshot verification & status code', () => {
    let response;

    beforeAll(async () => {
      const responseObject = await invokeRoute(`${BASE_PATH}${webRoutePaths.results}`, successPayload);
      response = responseObject.response;
    });

    it('should match the results screen snapshot', async () => {
      expect(response.text).toMatchSnapshot();
    });

    it('should route works with status code 302', async () => {
      expect(response.statusCode).toEqual(302);
    });
  });

  describe('Quick search POST verification on results page', () => {
    let document;
    let response;
    const redirectedRoute = `${BASE_PATH}${webRoutePaths.results}?q=test&jry=qs&pg=1&rpp=20&srt=most_relevant`;

    beforeAll(async () => {
      const responseObject = await invokeRoute(`${BASE_PATH}${webRoutePaths.results}`, successPayload);
      response = responseObject.response;
      const redirectedResponseObject = await invokeRoute(response.headers.location, {
        q: 'test',
        jry: 'qs',
        pg: '1',
        rpp: '20',
        srt: 'most_relevant',
        rty: 'all',
      });
      document = redirectedResponseObject.document;
    });

    describe('Check the redirection', () => {
      it('should redirect to the results get route with query params', async () => {
        expect(response.status).toBe(302);
        expect(response.headers.location).toBe(redirectedRoute);
      });
    });

    describe('Search container content elements', () => {
      it('should not render caption on results screen', async () => {
        expect(document?.querySelector('.quick_search-container__caption-m')).toBeNull();
      });
    });
  });

  describe('Quick search POST validation on results page', () => {
    it('fail action - empty search term', async () => {
      const responseObject = await invokeRoute(`${BASE_PATH}${webRoutePaths.results}`, {
        search_term: '',
        pageName: 'results',
      });
      expect(responseObject.response.statusCode).toEqual(400);
    });
    it('fail action - min length validation', async () => {
      const responseObject = await invokeRoute(`${BASE_PATH}${webRoutePaths.results}`, {
        search_term: 'foo',
        pageName: 'results',
      });
      expect(responseObject.response.statusCode).toEqual(400);
    });
  });

  describe('Quick search POST validation on home page', () => {
    let document;

    beforeAll(async () => {
      const responseObject = await invokeRoute(`${BASE_PATH}${webRoutePaths.results}`, {
        search_term: '',
        pageName: 'home',
      });
      document = responseObject.document;
    });

    describe('Breadcrumb classes', () => {
      it('should not render the breadcrumb class', async () => {
        expect(document.querySelector('.govuk-breadcrumbs')).toBeNull();
      });
    });

    describe('Hero content block classes', () => {
      it('renders custom full width class', async () => {
        expect(document.querySelector('.full-width-banner')).toBeTruthy();
      });

      it('renders custom banner container class', async () => {
        expect(document.querySelector('.banner-container')).toBeTruthy();
      });
    });

    describe('Hero content elements', () => {
      it('should render 4 child elements', async () => {
        const bannerContainer = document?.querySelector('.banner-container');
        expect(bannerContainer?.childElementCount).toEqual(4);
      });
    });

    describe('Hero content block heading', () => {
      it('should render the hero content heading', async () => {
        expect(document?.querySelector('.banner-container__heading-xl')?.textContent?.trim()).toBe(
          'Find natural capital data',
        );
      });
    });

    describe('Search block classes', () => {
      it('renders custom quick search container class', async () => {
        expect(document.querySelector('.quick_search-container')).toBeTruthy();
      });

      it('renders custom search block class', async () => {
        expect(document.querySelector('.search-block')).toBeTruthy();
      });
    });

    describe('Search block custom options', () => {
      it('renders attributes correctly', async () => {
        const searchBlock = document.querySelector('.search-block');
        expect(searchBlock?.getAttribute('data-module')).toEqual('search');
      });
    });

    describe('Search container content elements', () => {
      it('should render 3 child elements', async () => {
        const bannerContainer = document?.querySelector('.quick_search-container');
        expect(bannerContainer?.childElementCount).toEqual(3);
      });

      it('should render caption on home screen', async () => {
        expect(document?.querySelector('.quick_search-container__caption-m')).toBeTruthy();
      });
    });

    describe('Search container block heading', () => {
      it('should render the search container heading', async () => {
        expect(document?.querySelector('.quick_search-container__heading-m')?.textContent?.trim()).toBe('Quick search');
      });

      it('should not render the custom large class for heading', async () => {
        expect(
          document
            ?.querySelector('.quick_search-container__heading-m')
            ?.classList.contains('quick_search-container__heading-m--large'),
        ).toBeFalsy();
      });
    });

    describe('Search container form', () => {
      it('should render the form', async () => {
        const formElement = document?.querySelector('.search-block')?.firstElementChild;
        expect(formElement?.tagName.toLowerCase()).toBe('form');
      });

      it('should render the form with options', async () => {
        const formElement = document?.querySelector('.search-block')?.firstElementChild;
        expect(formElement?.getAttribute('role')).toBe('search');
        expect(formElement?.getAttribute('action')).toBe(`${BASE_PATH}${webRoutePaths.results}`);
      });

      it('should render the form classes', async () => {
        const formElement = document?.querySelector('.search-block')?.firstElementChild;
        expect(formElement?.classList.contains('search-block__form')).toBeTruthy();
        expect(formElement?.firstElementChild?.classList.contains('govuk-form-group')).toBeTruthy();
      });
    });

    describe('Search container input field', () => {
      it('does render the input wrapper', () => {
        const wrapper = document?.querySelector('.govuk-form-group > .govuk-input__wrapper');
        expect(wrapper).toBeTruthy();
      });

      it('should render the input element', async () => {
        const inputElement = document?.querySelector('.govuk-form-group > .govuk-input__wrapper')?.firstElementChild;
        expect(inputElement?.tagName.toLowerCase()).toBe('input');
      });

      it('should renders with custom class', () => {
        const inputElement = document?.querySelector('.govuk-form-group > .govuk-input__wrapper')?.firstElementChild;
        expect(inputElement?.classList.contains('search-block__input')).toBeTruthy();
      });

      it('should renders with id', () => {
        const inputElement = document?.querySelector('.search-block__input');
        expect(inputElement?.getAttribute('id')).toEqual('search_term');
      });

      it('should renders with name', () => {
        const inputElement = document?.querySelector('.search-block__input');
        expect(inputElement?.getAttribute('name')).toEqual('search_term');
      });

      it('should renders with type="text" by default', () => {
        const inputElement = document?.querySelector('.search-block__input');
        expect(inputElement?.getAttribute('type')).toEqual('text');
      });

      it('should renders with spellcheck attribute set to false', () => {
        const inputElement = document?.querySelector('.search-block__input');
        expect(inputElement?.getAttribute('spellcheck')).toEqual('false');
      });
    });

    describe('Search container when it includes a suffix', () => {
      it('should renders the suffix inside the wrapper', () => {
        const suffix = document?.querySelector('.govuk-form-group > .govuk-input__wrapper > .govuk-input__suffix');
        expect(suffix).toBeTruthy();
      });

      it('should renders a button in the suffix', () => {
        const buttonElement = document?.querySelector(
          '.govuk-form-group > .govuk-input__wrapper > .govuk-input__suffix',
        )?.firstElementChild;
        expect(buttonElement?.tagName?.toLowerCase()).toBe('button');
      });

      it('should renders a button with custom class in the suffix', () => {
        const buttonElement = document?.querySelector(
          '.govuk-form-group > .govuk-input__wrapper > .govuk-input__suffix',
        )?.firstElementChild;
        expect(buttonElement?.classList?.contains('search-block__button')).toBeTruthy();
      });
    });

    describe('Educational Copy block classes', () => {
      it('renders educational copy container class', async () => {
        expect(document.querySelector('.educational-copy-container')).toBeTruthy();
      });
    });

    describe('Educational Copy block elements', () => {
      it('should render 11 child elements', async () => {
        const videoContainer = document?.querySelector('.educational-copy-container');
        expect(videoContainer?.childElementCount).toEqual(11);
      });
    });

    describe('Category search container block heading', () => {
      it('should render the Category search container heading', async () => {
        expect(document?.querySelectorAll('.govuk-heading-m')?.[2]?.textContent?.trim()).toBe('Natural capital');
      });

      it('should not render the custom large class for heading', async () => {
        expect(
          document?.querySelectorAll('.govuk-heading-m')?.[1]?.classList.contains('govuk-heading-m--large'),
        ).toBeFalsy();
      });
    });

    describe('Category search block action', () => {
      it('should render the Category search button', () => {
        const anchorElement = document?.querySelector('.govuk-button--start');
        expect(anchorElement?.tagName?.toLowerCase()).toBe('a');
      });
    });
  });
});
