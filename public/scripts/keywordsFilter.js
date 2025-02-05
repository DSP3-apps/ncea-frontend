import { filtersInstance } from './filters.js';

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
 */
const createBadge = (keyword) => {
  // get and duplicate the template so we can modify it
  const template = $('#keyword-badge-template').clone();

  // listen for click so the keyword can be deleted if clicked on
  template.on('click', () => {
    template.remove();
    removeKeywordFromUrl(keyword);
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
  $(`#keyword-badge-container-${filtersInstance}`).append(template);
};

/**
 * Creates badges for every keyword active when the page loads
 */
const createBadgesFromExistingKeywords = () => {
  const params = new URLSearchParams(window.location.search);

  const keywords = params.get('keywords');
  if (!keywords) {
    return;
  }

  //split, remove any empty strings and create badges
  keywords
    .split(',')
    .filter((k) => k)
    .forEach((k) => createBadge(k));
};

$(document).ready(function () {
  createBadgesFromExistingKeywords();

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
  $('#keyboard-filter-list').on('click', 'li', function () {
    const selectedValue = $(this).text();
    keywordInput.val('');
    keywordInput.focus();
    $('.filter-options__keyboard-filter-content').hide();

    createBadge(selectedValue);

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
  });
});
