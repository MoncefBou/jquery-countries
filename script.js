getCountries = () => {

        $.ajax({
            url: 'http://localhost:8000/countries',
            success: (data, status, response) => {
               
                $('ul').empty();

                for (i = 0; i < data.length; i++) {
                    $('ul').append(`<li>${data[i]}</li>`);
                }
            }
        })
}

$(() => {

    $('#btnShowCountries').after('<ul></ul>');

    $('#btnShowCountries').click(() => getCountries());
});