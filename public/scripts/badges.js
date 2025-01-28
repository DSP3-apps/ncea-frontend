/**
 * Takes any input element and resets it's value. As opposed to resetting the whole form, which is
 * undesierable, this will reset just a single input.
 */
const resetInputElement = (element) => {
  // add more types to this if more filter input types are added
  switch (element.attr('type')) {
    case 'text':
    case 'number':
      $(element).val('');
      break;
    case 'checkbox':
      element.prop('checked', false);
      break;
  }
};

/**
 * Attaches the click event listeners to the badges so they can remove
 * their filters when clicked.
 * @param {string} instance
 */
const addBadgeClickEventListeners = () => {
  const badges = $('[data-badge-button]');
  badges.each(function () {
    const badge = $(this);

    badge.on('click', () => {
      // gets the id of the filter input the badge is associated with
      // this is needed because when a badge is clicked it resets the filter it is associated with
      const inputId = badge.attr('data-input');

      const input = $(`#${inputId}`);
      resetInputElement(input);

      badge.remove();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  addBadgeClickEventListeners();
});
