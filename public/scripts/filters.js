import { invokeMapResultsFormFilters } from './location.js';
import { checkDuplicateKeywords } from './keywordsFilter.js';
const filtersInstance = 'search_results';

const searchResultSortFormId = 'sort_results';
const dateBeforePrefix = 'date-before';
const dateAfterPrefix = 'date-after';

const formGroupErrorClass = 'govuk-form-group--error';
const displayNoneClass = 'display-none';

const validYearRegex = /^$|^[0-9]{4}$/; // matches empty string OR 4 digit number

/**
 * Attatch event listeners to the filters accordions so
 * they can be interacted with (opened and closed).
 *
 * @param {string} instance
 */
const addCategoryAccordionToggleListeners = (instance) => {
  const categories = document.querySelectorAll(`[data-category-${instance}]`);

  for (const category of categories) {
    const categoryName = category.getAttribute(`data-category-${instance}`);

    const input = document.getElementById(`filters-${categoryName}-accordion-toggle-${instance}`);
    const icon = document.getElementById(`filters-${categoryName}-accordion-icon-${instance}`);
    const filters = document.getElementById(`filters-${categoryName}-filters-${instance}`);

    input.addEventListener('click', () => {
      const expanded = input.getAttribute('data-expanded');

      if (expanded === 'false') {
        input.setAttribute('data-expanded', 'true');
        input.setAttribute('aria-expanded', 'true');

        icon.classList.add('filter-options__accordion--open');
        filters.classList.remove('filter-options__filters--hidden');
      } else {
        input.setAttribute('data-expanded', 'false');
        input.setAttribute('aria-expanded', 'false');

        icon.classList.remove('filter-options__accordion--open');
        filters.classList.add('filter-options__filters--hidden');
      }
    });
  }
};

/**
 * Attaches event listeners to every `All` checkbox of every
 * category. When the checkbox is toggled it will toggle
 * all other checkboxes in the category.
 *
 * @param {string} instance
 */
const addAllCheckboxListeners = (instance) => {
  const categories = $(`[data-category-${instance}]`);

  categories.each(function () {
    const categoryName = $(this).attr(`data-category-${instance}`);

    const allInput = $(`[name='${categoryName}'][value='all']`); // get the input of this category that has the `all` value
    const otherInputs = $(`[name='${categoryName}']:not([value='all'])`); // get every other input that does not have the `all` value

    // listen for the `All` checkbox to change and set every other checkbox to its value
    allInput.on('change', function () {
      otherInputs.prop('checked', this.checked);
    });

    // if the `All` checkbox is selected, but someone manually deselects another checkbox
    // the `All` checkbox should be unchecked, and if they reselect that checkbox, `All`
    // should be checked again therfore we also need listeners on each input
    otherInputs.on('change', function () {
      allInput.prop('checked', otherInputs.length === otherInputs.filter(':checked').length);
    });
  });
};

/**
 * Appends meta filter paramters to a new set of params.
 *
 * When the params get replaced in the url, we do not want to lose
 * the query or related entries, so this will add them back.
 *
 * @param {URLSearchParams} filterParams
 */
const appendMetaSearchParams = (filterParams) => {
  const params = new URLSearchParams(window.location.search);

  for (const [key, value] of params.entries()) {
    if (!filterParams.has(key)) {
      filterParams.set(key, value);
    }
    if (!!params.get('keywords')) {
      filterParams.set('keywords', params.get('keywords')); // set the keywords
    }
  }
};

/**
 * Takes a filters form element and converts it to a `FormData` object.
 * It makes sure the filters that are applied are within the selected scope.
 * If they are not, it removes them from the `FormData`.
 *
 * @param {HTMLFormElement} form
 * @returns {FormData}
 */
const filterFormToFormData = (form) => {
  const data = new FormData(form);

  // validate selected keywords
  if (!!data.get('keywords')) {
    const keywordInput = document.getElementById('filters-keywords-search_results').value;
    const keywordListItems = Array.from(document.querySelectorAll('#keyboard-filter-list li'));
    const keywordsListItemTexts = keywordListItems.filter((item) => item.textContent === keywordInput);
    if (keywordsListItemTexts.length === 0) {
      // will set the current keyword to empty if it doesn't match with the list
      data.set('keywords', '');
    }
  }
  return data;
};

/**
 * Attatch event listener to the form reset
 * so it resets the filters correctly, instead of relying on default
 * reset behaviour.
 *
 * @param {string} instance
 */
const addFilterFormResetListener = (instance) => {
  const formSubmit = document.getElementById(`filters-${instance}`);
  const resetButton = document.getElementById(`filters-reset-${instance}`);

  formSubmit.addEventListener('reset', (e) => {
    e.preventDefault();

    window.location.href = resetButton.getAttribute('data-reset-url');
  });
};

/**
 * Takes the form surrounding the filters, validates it,
 * and converts it to a `FormData` object
 *
 * @param {HTMLFormElement} form
 * @param {string} instance
 * @returns {FormData | null}
 */
const getValidatedFormData = (form, instance) => {
  const scopeForm = $(`#scope-form-${instance}`);

  const data = filterFormToFormData(form);

  // if the date filters fail to validate, don't submit
  if (!validateDateFilters(instance)) {
    return null;
  }

  const scopeData = new FormData(scopeForm.get(0));
  data.set('scope', scopeData.get('scope'));

  return data;
};

/**
 * Takes a `FormData`, converts it to a URL, appends the
 * search parameters, and redirects user to new URL.
 *
 * @param {FormData} data
 */
const applyFormDataAndSubmit = (data) => {
  const url = new URLSearchParams(data);
  appendMetaSearchParams(url);

  window.location.search = url.toString();
};

/**
 * Attatch event listener to the form submission
 * so the validation can take place before submission.
 *
 * @param {string} instance
 */
const addFilterFormSubmitListener = (instance) => {
  const form = document.getElementById(`filters-${instance}`);

  form.addEventListener('submit', (e) => {
    // prevent form from submitting
    e.preventDefault();

    const data = getValidatedFormData(form, instance);
    if (!validateKeywordFilters(instance)) {
      return;
    }
    if (!data) {
      return;
    }

    applyFormDataAndSubmit(data);
  });
};

/**
 * Attaches the event listeners to the form
 * surrounding the scope buttons and calls a callback with
 * the validated form data when they change.
 * The need for a callback is due to the fact that the search
 * and map view have slightly different behaviour, but the
 * rest of the validation is the same.
 *
 * @param {string} instance
 * @param {(data: FormData) => void} cb
 */
const addScopeChangeListener = (instance, cb) => {
  const scopeForm = $(`#scope-form-${instance}`);
  // we also need the form around the filters as when you
  // change the scope it should apply the pending filters
  // otherwise changing the scope would reset any unapplied
  // filters
  const filterForm = $(`#filters-${instance}`);

  scopeForm.on('change', () => {
    // `.get(0)` returns the HTML element as the function only accepts that
    // not the jQuery wrapper
    const data = getValidatedFormData(filterForm.get(0), instance);
    if (!data) {
      return;
    }

    cb(data);
  });
};

const searchResultsScopeCallback = (data) => applyFormDataAndSubmit(data);

/**
 * Shows an error messasge for either of the date inputs.
 *
 * @param {string} instance
 * @param {'before' | 'after'} input
 * @param {string} message
 */
const showDateFilterError = (instance, input, message) => {
  const prefix = input === 'before' ? dateBeforePrefix : dateAfterPrefix;

  // add the govuk error class to the group containing the date field
  $(`#${prefix}-group-${instance}`).addClass(formGroupErrorClass);
  // remove the `display: none` from the error message so it appears
  $(`#${prefix}-error-${instance}`).removeClass(displayNoneClass);
  // set the contents of the error message
  $(`#${prefix}-error-message-${instance}`).html(message);
  // apply the error class to the accordion so it is clear where the error is if it is closed
  $(`[data-category-${instance}='date']`).addClass('box-shadow-error');
};

/**
 * Hides any error messasge for either of the date inputs.
 *
 * @param {string} instance
 * @param {'before' | 'after'} input
 */
const hideDateFilterError = (instance, input) => {
  const prefix = input === 'before' ? dateBeforePrefix : dateAfterPrefix;

  $(`#${prefix}-group-${instance}`).remove(formGroupErrorClass);
  $(`#${prefix}-error-${instance}`).add(displayNoneClass);
};

/**
 * Validates the keyword filter. If the typed keyword filter exist in the list, then it return `true`.
 * Otherwise, it will return `false` with error message/
 *
 * @param {string} instance
 * @returns {boolean}
 */
const validateKeywordFilters = (instance) => {
  const keywordValue = document.getElementById(`filters-keywords-${instance}`).value;

  if (keywordValue && !checkDuplicateKeywords(`#keyword-badge-container-${instance}`, keywordValue)) {
    $(`#filters-keywords-${instance}`).addClass('govuk-input--error');
    $(`.keyword-input-${instance}-error-message`).show();
    return false;
  }
  return true;
};

/**
 * Validates the date filters. If they fail to validate it will display an error and the function will return `false`.
 * Otherwise, it will return `true`/
 *
 * @param {string} instance
 * @returns {boolean}
 */
const validateDateFilters = (instance) => {
  const beforeYear = $(`#filters-${dateBeforePrefix}-${instance}`).val();
  const afterYear = $(`#filters-${dateAfterPrefix}-${instance}`).val();

  if (!validYearRegex.test(beforeYear)) {
    showDateFilterError(instance, 'before', 'Before year must be a valid year.');

    return false;
  } else {
    hideDateFilterError(instance, 'before');
  }

  if (!validYearRegex.test(afterYear)) {
    showDateFilterError(instance, 'after', 'After year must be a valid year.');

    return false;
  } else {
    hideDateFilterError(instance, 'after');
  }

  // use `Number` instead of `parseInt` as it has stricter rules on what is a valid number
  // they should be valid here anyway due the the regex validation
  const nBeforeYear = Number(beforeYear);
  const nAfterYear = Number(afterYear);

  if (nAfterYear > 0 && nAfterYear < nBeforeYear) {
    showDateFilterError(instance, 'after', 'After year must be greater than the before year.');

    return false;
  }

  return true;
};

const submitSearchResultsFilter = (formId) => {
  const formElement = document.getElementById(formId);
  if (formElement) {
    formElement.submit();
  }
};

const attachSearchResultsSortChangeListener = () => {
  const sortElement = document.getElementById('sort');
  if (sortElement) {
    sortElement.addEventListener('change', function () {
      submitSearchResultsFilter(searchResultSortFormId);
    });
  }
  const rowPerPageElement = document.getElementById('page-results');
  if (rowPerPageElement) {
    rowPerPageElement.addEventListener('change', function () {
      submitSearchResultsFilter(searchResultSortFormId);
    });
  }
};

/**
 * Set the values for map result form compared with its value with search result form.
 * @param {string} mapResultInstance
 * @param {string} searchResultInstance
 */
const setMapFilterFormValues = (mapResultInstance, searchResultInstance) => {
  const searchResutlForm = document.getElementById(`filters-${searchResultInstance}`);
  const mapResultForm = document.getElementById(`filters-${mapResultInstance}`);

  Array.from(searchResutlForm).forEach((element) => {
    const elementName = element.name;
    const elementValue = element.value;
    const mapResultFormElements = mapResultForm.querySelector('[name="' + elementName + '"]');
    const checkboxValue = elementValue === 'all' ? elementName : elementValue;
    const mapResultCheckedElements = document.getElementById(`filters-${checkboxValue}-map_results`);

    if (element.type === 'checkbox' && mapResultCheckedElements) {
      mapResultCheckedElements.checked = element.checked;
    }

    if (element.type === 'text' && mapResultFormElements) {
      mapResultFormElements.value = elementValue;
    }
  });
  // manually checked the checkbox value for retired archived from search results form to map results form
  document.getElementById(`filters-retired-archived-${mapResultInstance}`).checked = document.getElementById(
    `filters-retired-archived-${searchResultInstance}`,
  ).checked;
};

/**
 * Add the subnit form event listner for map results page
 * @param {string} instance
 */
const addMapFilterFormSubmitListener = (instance) => {
  const form = document.getElementById(`filters-${instance}`);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateKeywordFilters(instance)) {
      return;
    }
    const data = getValidatedFormData(form, instance);
    invokeMapResultsFormFilters(true, data);
  });
};

/**
 * Add the reset form event listner for map results page
 * @param {string} instance
 */
const addMapFilterFormResetListener = (instance) => {
  const formSubmit = document.getElementById(`filters-${instance}`);

  formSubmit.addEventListener('reset', (e) => {
    e.preventDefault();
    // reset all the map form fields
    formSubmit.reset();
    const checkboxes = document.querySelectorAll('.govuk-checkboxes__input');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    document.getElementById('filters-date-before-map_results').value = '';
    document.getElementById('filters-date-after-map_results').value = '';
    document.getElementById('filters-licence-map_results').value = '';
    document.getElementById('filters-keywords-map_results').value = '';
    invokeMapResultsFormFilters(true);
    document.getElementById(`filters-retired-archived-map_results`).checked = false;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  attachSearchResultsSortChangeListener();

  addCategoryAccordionToggleListeners(filtersInstance);
  addFilterFormSubmitListener(filtersInstance);
  addFilterFormResetListener(filtersInstance);
  addScopeChangeListener(filtersInstance, searchResultsScopeCallback);
});

export {
  addCategoryAccordionToggleListeners,
  addAllCheckboxListeners,
  filterFormToFormData,
  appendMetaSearchParams,
  filtersInstance,
  addScopeChangeListener,
  getValidatedFormData,
  setMapFilterFormValues,
  addMapFilterFormResetListener,
  addMapFilterFormSubmitListener,
};
