function getCountries() {
    $.ajax({
        url: 'http://localhost:8000/countries',
        success: function (data, status, response) {

            
            for (i = 0; i < data.length; i++) {
                $('ul').append(`<li>${data[i]}</li>`);
            }
        }
    })
}

$(function () {
    
    $('#btnShowCountries').after('<ul></ul>');

    $('#btnShowCountries').click(function () {
        getCountries();
    });
});