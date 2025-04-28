import { filtersInstance } from './filters.js';
import { invokeMapResults, setBadgeValue } from './location.js';

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
      setBadgeValue();
      invokeMapResults(true);
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
const keywordsDropdownListAction = (keywordInput, filterInstanceId) => {
  keywordInput.val('');
  keywordInput.on(
    'input',
    $.debounce(300, function () {
      const value = $(this).val().toLowerCase();
      let matchedCount = 0;

      $('#keyboard-filter-list li').each(function () {
        if (!$(this).hasClass('keyword-filter-no-record-found')) {
          if ($(this).text().toLowerCase().indexOf(value) > -1) {
            $(this).show();
            matchedCount++;
          } else {
            $(this).hide();
          }
        }
      });

      if (matchedCount === 0) {
        $('.keyword-filter-no-record-found').show();
      } else {
        $('.keyword-filter-no-record-found').hide();
      }

      $('.filter-options__keyboard-filter-content-' + filterInstanceId).show();
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

const loadKeyboardListData = () => {
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
      liElement = liElement.add(
        '<li class="govuk-font-family keyword-filter-no-record-found">No matching keywords found</li>',
      );
      $('.filter-options__keyboard-filter-list').append(liElement);
    },
  });
};

const keywordSelectEventHandlder = (keywordInput, filterType) => {
  $('#keyboard-filter-list').on('click', 'li', function () {
    const selectedValue = $(this).text();
    keywordInput.val('');
    keywordInput.focus();
    if (!$(this).hasClass('keyword-filter-no-record-found')) {
      keywordInput.val($(this).text());
      $('.filter-options__keyboard-filter-content-' + filterType).hide();
    }

    if (!checkDuplicateKeywords('#keyword-badge-container-search_results', selectedValue)) {
      createBadge(selectedValue, '#keyword-badge-container-search_results');
      keywordInput.val('');
      keywordInput.focus();
      $(`.keyword-input-${filterType}-error-message`).hide();
      $(`#filters-keywords-${filterType}`).removeClass('govuk-input--error');
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
};

$(document).ready(function () {
  createBadgesFromExistingKeywords('#keyword-badge-container-search_results');
  loadKeyboardListData();
  const filterType = 'search_results';
  const keywordInput = $(`#filters-keywords-${filtersInstance}`);
  $(document).click(function (event) {
    if (
      !$(event.target).closest('#filters-keywords-search_results').length &&
      !$(event.target).closest('filter-options__keyboard-filter-content-' + filterType).length
    ) {
      $('.filter-options__keyboard-filter-content-' + filterType).hide();
    }
  });
  keywordsDropdownListAction(keywordInput, filterType);
  keywordSelectEventHandlder(keywordInput, filterType);
});

export {
  createBadge,
  keywordsDropdownListAction,
  checkDuplicateKeywords,
  createBadgesFromExistingKeywords,
  loadKeyboardListData,
  keywordSelectEventHandlder,
};
