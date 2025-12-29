$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  const level = Number(params.get('level'));
  const parent = params.getAll('parent[]');

  if (level === 3) {
    const form = $('#classifier-search');
    const messages = {
      lvl2_009: 'Monetary',
      lvl2_010: 'Non-monetary',
    };

    Object.entries(messages).forEach(([key, label]) => {
      if (parent.includes(key)) {
        $(`legend`)
          .filter(function () {
            return $(this).text().trim() === label;
          })
          .after(
            '<div class="govuk-body">This category has no subcategories, so all its records will be selected.</div>',
          );
        $('<input>', {
          type: 'hidden',
          name: 'parent[]',
          value: key,
        }).appendTo(form);
      }
    });
  }

  $('#classifier-search').on('submit', function (event) {
    let skipFormValidation = false;
    const selectedCheckboxes = $('input[name="parent[]"]:checked');
    const checkboxGroups = $('.govuk-checkboxes');
    const isAnyCheckboxNotSelected = selectedCheckboxes.length === 0;
    const formData = new FormData(this);
    const parentValues = formData.getAll('parent[]');

    if (
      (parentValues.includes('lvl2_009') && parentValues.includes('lvl2_010')) ||
      parentValues.includes('lvl2_009') ||
      parentValues.includes('lvl2_010')
    ) {
      skipFormValidation = true;
    }

    if (isAnyCheckboxNotSelected && !skipFormValidation) {
      event.preventDefault();
      $('#errorBlock').css('display', '');
      checkboxGroups.each(function () {
        handleError(this, 'apply');
      });
    } else {
      checkboxGroups.each(function () {
        handleError(this, 'remove');
      });
    }
  });
});
