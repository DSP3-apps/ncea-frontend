$(document).ready(function () {
    const getTagsApiUrl = Boolean(keyboardFiltersBaseUrlValue) ? `${keyboardFiltersBaseUrlValue}/backend/catalog/api/catalog/tags` : '/backend/catalog/api/catalog/tags'
    $.ajax({
        url: `${getTagsApiUrl}`,
        type: 'GET',
        headers: { 'Content-Type': 'application/json' },
        success: function(data) {
            let liElement = $()
                data?.tags?.map(item => {
                    liElement = liElement.add('<li class="govuk-font-family">' + item.label + '</li>')
                })
            $(".filter-options__keyboard-filter-list").append(liElement)     
        }
    });
    $('#filters-keywords-search_results').val('');
    $('#filters-keywords-search_results').on('input', $.debounce(300, function() {
        const value = $(this).val().toLowerCase();
        $('.filter-options__keyboard-filter-list li').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            $('.filter-options__keyboard-filter-content').css('display', 'block')
        });
    }));
    $('#keyboard-filter-list').on('click', 'li', function () {
        const selectedValue = $(this).text()
        $('#filters-keywords-search_results').val(selectedValue);
        $('.filter-options__keyboard-filter-content').hide();

        const params = new URLSearchParams(window.location.search);
        if (!!(params.get('keywords'))) {
            const updatedValue = `${params.get('keywords')},${selectedValue}`
            params.set('keywords', updatedValue)
        } else {
            params.set('keywords', selectedValue)
        }

        const url = new URL(window.location.href);
        url.search = params.toString();

        window.history.pushState({}, '', url);
    });
})
