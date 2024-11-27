/**
 * @jest-environment jsdom
 */

'use strict';

import { Server, ServerInjectResponse } from '@hapi/hapi';

import { initializeServer } from '../../../src/infrastructure/server';
import { BASE_PATH, webRoutePaths } from '../../../src/utils/constants';

jest.mock('../../../src/infrastructure/plugins/appinsights-logger', () => ({
  info: jest.fn(),
}));

jest.mock('../../../src/utils/keyvault', () => ({
  getSecret: jest.fn(),
}));

jest.mock('../../../src/config/elasticSearchClient', () => ({
  performQuery: jest.fn(() => {
    return Promise.resolve({ data: 'mocked response' });
  }),
}));

describe('Home Screen', () => {
  let server: Server;
  let response: ServerInjectResponse<object>;
  let document: Document;

  beforeAll((done) => {
    initializeServer().then(async (s: Server) => {
      server = s;

      const options = {
        method: 'GET',
        url: `${BASE_PATH}`,
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

  describe('Home > Sanpshot verification', () => {
    it('should match the home screen snapshot', async () => {
      expect(response.payload).toMatchSnapshot();
    });
  });

  describe('Home > Check home route status code', () => {
    it('should / route works with status code 200', async () => {
      expect(response.statusCode).toEqual(200);
    });
  });

  describe('Home > Hero block', () => {
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
  });

  describe('Home > Search block', () => {
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
  });

  describe('Home > Educational Copy block', () => {
    describe('Educational Copy block classes', () => {
      it('renders custom Educational Copy container class', async () => {
        expect(document.querySelector('.educational-copy-container')).toBeTruthy();
      });
    });

    describe('Educational Copy block elements', () => {
      it('should render 11 child elements', async () => {
        const videoContainer = document?.querySelector('.educational-copy-container');
        expect(videoContainer?.childElementCount).toEqual(11);
      });
    });
  });

  describe('Natural capital container block heading', () => {
    it('should render the Natural capital container heading', async () => {
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
