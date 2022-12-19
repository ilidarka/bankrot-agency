

function digits_int(target) {

    val = $(target).val().replace(/[^0-9]/g, '');

    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    $(target).val(val); 

}



$(function ($) {

    $('body').on('input', '.space', function (e) {

        digits_int(this);

    });

    digits_int('.space');

});
