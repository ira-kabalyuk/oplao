console.log('\'Allo \'Allo!');

$('#js-button').on('click', function(){
    if ($(this).hasClass('options')) {
        $(this).removeClass('options').addClass('options.active');
        return
    }
    $(this).removeClass('options.active').addClass('options');
});
