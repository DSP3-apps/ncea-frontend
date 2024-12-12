const fromYearId = 'start_year';
const toYearId = 'to_year';
const filterSPFormId = 'study_period_filter';
const filterRTFormId = 'resource_type_filter';
const searchResultSortFormId = 'sort_results';

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
};

/**
 * Attatch event listener to the form containing the filters
 * so the page responds when filter is changed.
 *
 * @param {string} instance
 */
const addFilterFormChangeListener = (instance) => {
  const form = document.getElementById(`filters-${instance}`);

  form.addEventListener('change', () => {
    const data = new FormData(form);

    // this is also defined in `utils/searchFilters.ts`
    const isNCEAOnly = data.get('scope') === 'ncea';

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

    const url = new URLSearchParams(data);
    appendMetaSearchParams(url);

    window.location.search = url.toString();
  });
};

const addFilterHeadingClickListeners = (instance) => {
  const filterHeadingElement = document.getElementById(`toggle_resource_type-${instance}`);
  if (filterHeadingElement) {
    filterHeadingElement.addEventListener('click', function () {
      const parentNode = filterHeadingElement.parentNode;
      const openClass = 'defra-filter-options__heading--open';
      const closedClass = 'defra-filter-options__heading--closed';
      const parentOpenClass = 'defra-filter-options--open';
      const parentClosedClass = 'defra-filter-options--closed';
      if (filterHeadingElement.classList.contains(openClass)) {
        filterHeadingElement.classList.remove(openClass);
        filterHeadingElement.classList.add(closedClass);
        parentNode.classList.remove(parentOpenClass);
        parentNode.classList.add(parentClosedClass);
      } else if (filterHeadingElement.classList.contains(closedClass)) {
        filterHeadingElement.classList.remove(closedClass);
        filterHeadingElement.classList.add(openClass);
        parentNode.classList.add(parentOpenClass);
        parentNode.classList.remove(parentClosedClass);
      }
    });
  }
};

const submitSearchResultsFilter = (formId) => {
  const formElement = document.getElementById(formId);
  if (formElement) {
    formElement.submit();
  }
};

const updateFromYear = (toYearElement, doSubmit) => {
  const value = toYearElement.value;
  const id = toYearElement.getAttribute('id');
  const instance = id.split('-')[0].trim();
  const fromYearElement = document.getElementById(`${instance}-${fromYearId}`);
  if (parseInt(value) < parseInt(fromYearElement.value)) {
    for (let i = fromYearElement.options.length - 1; i >= 0; i--) {
      if (parseInt(fromYearElement.options[i].value) <= parseInt(value)) {
        fromYearElement.value = fromYearElement.options[i].value;
        if (doSubmit) {
          setTimeout(() => {
            submitSearchResultsFilter(`${filterSPFormId}-${instance}`);
          }, 100);
        }
        break;
      }
    }
  } else {
    doSubmit && submitSearchResultsFilter(`${filterSPFormId}-${instance}`);
  }
};

const updateToYear = (startYearElement, doSubmit) => {
  const value = startYearElement.value;
  const id = startYearElement.getAttribute('id');
  const instance = id.split('-')[0].trim();
  const toYearElement = document.getElementById(`${instance}-${toYearId}`);
  if (parseInt(value) > parseInt(toYearElement.value)) {
    for (let i = 0; i < toYearElement.options.length; i++) {
      if (parseInt(toYearElement.options[i].value) >= parseInt(value)) {
        toYearElement.value = toYearElement.options[i].value;
        if (doSubmit) {
          setTimeout(() => {
            submitSearchResultsFilter(`${filterSPFormId}-${instance}`);
          }, 100);
        }
        break;
      }
    }
  } else {
    doSubmit && submitSearchResultsFilter(`${filterSPFormId}-${instance}`);
  }
};

const attachStudyPeriodChangeListener = (instance, doSubmit = false) => {
  const fromYearElement = document.getElementById(`${instance}-${fromYearId}`);
  const toYearElement = document.getElementById(`${instance}-${toYearId}`);
  if (fromYearElement && toYearElement) {
    fromYearElement.addEventListener('change', function () {
      updateToYear(this, doSubmit);
    });
    toYearElement.addEventListener('change', function () {
      updateFromYear(this, doSubmit);
    });
  }
};

const attachSearchResultsFilterCheckboxChangeListener = () => {
  const searchResultsFilterCheckboxes = document.querySelectorAll('[data-instance="search_results"]');
  if (searchResultsFilterCheckboxes.length) {
    searchResultsFilterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        submitSearchResultsFilter(`${filterRTFormId}-${'search_results'}`);
      });
    });
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
  addFilterHeadingClickListeners('search_results');
  // attachStudyPeriodChangeListener('search_results', true);
  attachSearchResultsFilterCheckboxChangeListener();
  attachSearchResultsSortChangeListener();

  addCategoryAccordionToggleListeners('search_results');
  addFilterFormChangeListener('search_results');
});

export { addFilterHeadingClickListeners, attachStudyPeriodChangeListener, addCategoryAccordionToggleListeners };
