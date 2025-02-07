import { filtersInstance } from './filters.js';
import { invokeMapResults } from './location.js';

/**
 * @param {string} toRemove
 */
const removeKeywordFromUrl = (toRemove) => {
  const params = new URLSearchParams(window.location.search);

  const keywords = params.get('keywords');
  if (!keywords) {
    return;
  }

  params.set(
    'keywords',
    keywords.split(',').filter((k) => k != toRemove),
  );

  const url = new URL(window.location.href);
  url.search = params.toString();

  window.history.pushState({}, '', url);
};

/**
 * Adds a badge below the input for a given keyword.
 *
 * @param {string} keyword
 * @param {string} filtersInstanceId
 *
 */
const createBadge = (keyword, filtersInstanceId) => {
  // get and duplicate the template so we can modify it
  const template = $('#keyword-badge-template').clone();

  // listen for click so the keyword can be deleted if clicked on
  template.on('click', () => {
    template.remove();
    removeKeywordFromUrl(keyword);
    if (filtersInstanceId === '#keyword-badge-container-map_results') {
      invokeMapResults();
    }
  });

  // use `createTextNode` for safety as these keywords are user controlled
  const templateText = template.children('#keyword-badge-text');
  templateText.append(document.createTextNode(keyword));

  // remove all the IDs so there arent elements with duplicate IDs
  templateText.removeAttr('id');
  template.removeAttr('id');

  // remove display-none and make the badge visible
  template.removeClass('display-none');

  // add the keyword to the container
  $(`${filtersInstanceId}`).append(template);
};

/**
 * Creates badges for every keyword active when the page loads
 */
const createBadgesFromExistingKeywords = (filtersInstanceId) => {
  const params = new URLSearchParams(window.location.search);

  const keywords = params.get('keywords');
  if (!keywords) {
    return;
  }

  //split, remove any empty strings and create badges
  keywords
    .split(',')
    .filter((k) => k)
    .forEach((k) => createBadge(k, filtersInstanceId));
};

/**
 * Select a keyword from the dropdown list
 */
const keywordsDropdownListAction = (keywordInput) => {
  keywordInput.val('');
  keywordInput.on(
    'input',
    $.debounce(300, function () {
      const value = $(this).val().toLowerCase();
      $('.filter-options__keyboard-filter-list li').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        $('.filter-options__keyboard-filter-content').css('display', 'block');
      });
    }),
  );
};

/**
 * Check the duplicate value exist in the seleced the badges
 */
const checkDuplicateKeywords = (filtersInstanceId, keyword) => {
  const keywordBadgesList = Array.from(document.querySelectorAll(`${filtersInstanceId} li`));
  const badgeText = keywordBadgesList.map((item) => item.innerText);
  if (badgeText.includes(keyword)) {
    return true;
  }
  return false;
};

$(document).ready(function () {
  createBadgesFromExistingKeywords('#keyword-badge-container-search_results');

  const keywordInput = $(`#filters-keywords-${filtersInstance}`);

  const getTagsApiUrl = Boolean(keyboardFiltersBaseUrlValue)
    ? `${keyboardFiltersBaseUrlValue}/backend/catalog/api/catalog/tags`
    : '/backend/catalog/api/catalog/tags';
  $.ajax({
    url: `${getTagsApiUrl}`,
    type: 'GET',
    headers: { 'Content-Type': 'application/json' },
    success: function (data) {
      let liElement = $();
      data?.tags?.map((item) => {
        liElement = liElement.add('<li class="govuk-font-family">' + item.label + '</li>');
      });
      $('.filter-options__keyboard-filter-list').append(liElement);
    },
  });
  $(document).click(function (event) {
    if (
      !$(event.target).closest('#filters-keywords-search_results').length &&
      !$(event.target).closest('.filter-options__keyboard-filter-content').length
    ) {
      $('.filter-options__keyboard-filter-content').hide();
    }
  });
  keywordsDropdownListAction(keywordInput);
  $('#keyboard-filter-list').on('click', 'li', function () {
    const selectedValue = $(this).text();
    keywordInput.val('');
    keywordInput.focus();
    $('.filter-options__keyboard-filter-content').hide();

    if (!checkDuplicateKeywords('#keyword-badge-container-search_results', selectedValue)) {
      createBadge(selectedValue, '#keyword-badge-container-search_results');

      const params = new URLSearchParams(window.location.search);
      if (!!params.get('keywords')) {
        const updatedValue = `${params.get('keywords')},${selectedValue}`;
        params.set('keywords', updatedValue);
      } else {
        params.set('keywords', selectedValue);
      }

      const url = new URL(window.location.href);
      url.search = params.toString();

      window.history.pushState({}, '', url);
    }
  });
});

export { createBadge, keywordsDropdownListAction, checkDuplicateKeywords, createBadgesFromExistingKeywords };
