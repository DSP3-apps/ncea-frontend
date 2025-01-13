$(document).ready(function () {
    const isAppLocal = window.isAppLocal
    const BASE_URL = 'https://environment-test.data.gov.uk'
    const getTagsApiUrl = isAppLocal ? `${BASE_URL}/backend/catalog/api/catalog/tags` : 'backend/catalog/api/catalog/tags'
    $.ajax({
        url: `${getTagsApiUrl}`,
        type: 'GET',
        headers: { 'Content-Type': 'application/json' },
        success: function(data) {
            let liElement = $()
            for(let i = 0; i < data.tags.length; i++) {
                liElement = liElement.add('<li>' + data.tags[i].label + '</li>')
            }
            $(".filter-options__keyboard-filter-list").append(liElement)     
        }
    });
    $('#keywords-search_results').val('');
    $('#keywords-search_results').on('input', function () {
        const value = $(this).val().toLowerCase();
        $('.filter-options__keyboard-filter-list li').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            $('.filter-options__keyboard-filter-content').css('display', 'block')
        });
    });
    $('#keyboard-filter-list').on('click', 'li', function () {
        const selectedValue = $(this).text()
        $('#keywords-search_results').val(selectedValue);
        $('.filter-options__keyboard-filter-content').hide();

        const params = new URLSearchParams(window.location.search);
        if (!(params.get('keywords') === '')) {
            const updatedValue = `${params.get('keywords')},${selectedValue}`
            params.set('keywords', updatedValue)
        } else {
            params.set('keywords', selectedValue)
        }
        window.location.search = params.toString();        
    });
})
