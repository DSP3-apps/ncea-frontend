'use strict';
import {
  createBadge,
  keywordsDropdownListAction,
  checkDuplicateKeywords,
  createBadgesFromExistingKeywords,
} from './keywordsFilter.js';
import { setMapFilterFormValues, addMapFilterFormSubmitListener, addMapFilterFormResetListener } from './filters.js';

let scrollPositionY = 0;
const overlayContainer = document.getElementById('overlay');

const toggleModalContainer = (modalClass) => {
  const modalContainer = document.querySelector(`.${modalClass}`);
  modalContainer.classList.toggle('active');
};

const toggleOverlayContainer = () => {
  overlayContainer.classList.toggle('active');
};

const freezeScroll = () => {
  scrollPositionY = window.scrollY;

  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
};

const unfreezeScroll = () => {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';

  window.scrollTo(0, scrollPositionY);
};

document.addEventListener('DOMContentLoaded', () => {
  function openDataModal(organisationName, resourceLocator, isOnMap = false) {
    toggleModalContainer('resource-modal');
    toggleOverlayContainer();
    freezeScroll();
    const resourcePartyElement = document.getElementById('resource_party');
    const resourceLocatorLink = document.getElementById('resource-locator-link');
    if (isOnMap) {
      overlayContainer.style.zIndex = 1001;
    }
    if (resourcePartyElement) {
      resourcePartyElement.innerHTML = organisationName;
    }
    if (resourceLocatorLink) {
      resourceLocatorLink.href = resourceLocator;
    }
  }

  function closeDataModal() {
    toggleModalContainer('resource-modal');
    toggleOverlayContainer();
    unfreezeScroll();
    overlayContainer.style.zIndex = 999;
  }

  function invokeKeyboardFilters() {
    const filterType = 'map_results';
    createBadgesFromExistingKeywords('#keyword-badge-container-map_results');
    const keywordInput = $(`#filters-keywords-map_results`);
    keywordsDropdownListAction(keywordInput, filterType);

    $('#keyboard-filter-list').on('click', 'li', function () {
      const selectedValue = $(this).text();
      keywordInput.val('');
      keywordInput.focus();
      $('.filter-options__keyboard-filter-content-' + filterType).hide();

      if (!checkDuplicateKeywords('#keyword-badge-container-map_results', selectedValue)) {
        createBadge(selectedValue, '#keyword-badge-container-map_results');
        $(`.keyword-input-${filterType}-error-message`).hide();
        $(`#filters-keywords-${filterType}`).removeClass('govuk-input--error');
      }
    });
    $(document).click(function (event) {
      if (
        !$(event.target).closest('#filters-keywords-map_results').length &&
        !$(event.target).closest('.filter-options__keyboard-filter-content-' + filterType).length
      ) {
        $('.filter-options__keyboard-filter-content-' + filterType).hide();
      }
    });
  }

  function openMapModal() {
    toggleModalContainer('map-modal');
    freezeScroll();
    setMapFilterFormValues('map_results', 'search_results');
    addMapFilterFormSubmitListener('map_results');
    addMapFilterFormResetListener('map_results');
    invokeKeyboardFilters();
  }

  function closeMapModal() {
    toggleModalContainer('map-modal');
    unfreezeScroll();
  }

  function openSkipQuestionnaireModal(skipPath) {
    toggleModalContainer('skip-questionnaire-modal');
    freezeScroll();
    toggleOverlayContainer();
    const resourcePartyElement = document.getElementById('skip');
    if (resourcePartyElement) {
      resourcePartyElement.href = skipPath;
    }
  }

  function closeSkipQuestionnaireModal() {
    toggleModalContainer('skip-questionnaire-modal');
    toggleOverlayContainer();
    unfreezeScroll();
  }

  window.openDataModal = openDataModal;
  window.closeDataModal = closeDataModal;
  window.openMapModal = openMapModal;
  window.closeMapModal = closeMapModal;
  window.openSkipQuestionnaireModal = openSkipQuestionnaireModal;
  window.closeSkipQuestionnaireModal = closeSkipQuestionnaireModal;
});
