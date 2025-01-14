$(document).ready(function () {
    const getTagsApiUrl = Boolean(keyboardFiltersBaseUrlValue) ? `${keyboardFiltersBaseUrlValue}/backend/catalog/api/catalog/tags` : 'backend/catalog/api/catalog/tags'
    $.ajax({
        url: `${getTagsApiUrl}`,
        type: 'GET',
        headers: { 'Content-Type': 'application/json' },
        success: function(data) {
            let liElement = $()
            if (data.tags.length > 0) {
                data.tags.map(item => {
                    liElement = liElement.add('<li>' + item.label + '</li>')
                })
            }
            $(".filter-options__keyboard-filter-list").append(liElement)     
        }
    });
    $('#keywords-search_results').val('');
    $('#keywords-search_results').on('input', $.debounce(300, function() {
        const value = $(this).val().toLowerCase();
        $('.filter-options__keyboard-filter-list li').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            $('.filter-options__keyboard-filter-content').css('display', 'block')
        });
    }));
    $('#keyboard-filter-list').on('click', 'li', function () {
        const selectedValue = $(this).text()
        $('#keywords-search_results').val(selectedValue);
        $('.filter-options__keyboard-filter-content').hide();

        const params = new URLSearchParams(window.location.search);
        if (Boolean(params.get('keywords'))) {
            const updatedValue = `${params.get('keywords')},${selectedValue}`
            params.set('keywords', updatedValue)
        } else {
            params.set('keywords', selectedValue)
        }
        window.location.search = params.toString();        
    });
})
