$('.choose-car__model').click(function () {

    // Обнуление и добавление классов
    $('.choose-car__model').removeClass('choose-car__model_active');
    $(this).addClass('choose-car__model_active');
    $('.request-docs').addClass('request-docs_active');

    // Плавный скролл до нужного элемента
    var offset = $('.links-container').offset();
    $('html, body').animate({
        scrollTop: offset.top,
        scrollLeft: offset.left
    });

    // Дата-ссылки
    var brochure = $(this).data('brochure');
    var price = $(this).data('price');
    var configurator = $(this).data('configurator');

    $('.request-docs__brochure').attr('href', brochure);
    $('.request-docs__price').attr('href', price);
    $('.configurator-docs__configurator').attr('href', configurator);

});
