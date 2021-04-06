getCountries = () => {
    
    if ( )
    $.ajax({
        url: 'http://localhost:8000/countries',
        success: (data, status, response) => {

            for (i = 0; i < data.length; i++) {
                $('ul').append(`<li>${data[i]}</li>`);
            }
        }
    })
}

$( () => {

    $('#btnShowCountries').after('<ul></ul>');

    $('#btnShowCountries').click(() => getCountries());
});