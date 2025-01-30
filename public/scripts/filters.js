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
 * Appends meta filter paramters to a new set of params.
 *
 * When the params get replaced in the url, we do not want to lose
 * the query or related entries, so this will add them back.
 *
 * @param {URLSearchParams} filterParams
 */
const appendMetaSearchParams = (filterParams) => {
  const params = new URLSearchParams(window.location.search);

  filterParams.set('q', params.get('q')); // query
  filterParams.set('rpp', params.get('rpp')); // results per page
  filterParams.set('srt', params.get('srt')); // sort
  filterParams.set('jry', params.get('jry')); // journey (quick / classifier)
  filterParams.set('pg', params.get('pg')); // current page
  if (!!params.get('keywords')) {
    filterParams.set('keywords', params.get('keywords')); // set the keywords
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

  // this is also defined in `utils/searchFilters.ts`
  const isNCEAOnly = data.get('scope') === 'ncea';

  // remove any applied filters not in the selected scope
  if (isNCEAOnly) {
    const allNCEA = document.querySelectorAll("[data-ncea-only='false']");

    for (const nceaCb of allNCEA) {
      for (const key of data.keys()) {
        const values = data.getAll(key);

        data.set(
          key,
          values.filter((v) => v != nceaCb.value),
        );
      }
    }
  }

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

    const data = filterFormToFormData(form);
    const url = new URLSearchParams(data);
    appendMetaSearchParams(url);

    // if the date filters fail to validate, don't submit
    if (!validateDateFilters(instance)) {
      return;
    }

    window.location.search = url.toString();
  });
};

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

document.addEventListener('DOMContentLoaded', () => {
  attachSearchResultsSortChangeListener();

  addCategoryAccordionToggleListeners(filtersInstance);
  addFilterFormSubmitListener(filtersInstance);
  addFilterFormResetListener(filtersInstance);
});

export { addCategoryAccordionToggleListeners, filterFormToFormData, appendMetaSearchParams, filtersInstance };
