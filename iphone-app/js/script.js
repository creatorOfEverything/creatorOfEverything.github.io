// $(document).ready(() => {
//   $('.page4-slider').slick({
//     infinite: false,
//     appendArrows: $('.l-page4-arrows'),
//     prevArrow: '<div class="page4-slider__prev page4-slider__btn"></div>',
//     nextArrow: '<div class="page4-slider__next page4-slider__btn"></div>',
//   });
// })



$(document).ready(() => {
    // Wow Animations
    var wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    )
    wow.init();

    // Magnific Popup
    $(".lightbox").magnificPopup();

    $('.js-nav-toggler').click(() => {
       $('.slide-out-menu').toggleClass('slide-out-menu_show');
    });

    $('.js-nav-close').click(() => {
        $('.slide-out-menu').removeClass('slide-out-menu_show');
    });

    $(window).scroll(() => {
        var scrolled = $(window).scrollTop();

        scrolled > 50 
        ? $('.navigation').addClass('navigation_scrolled'): 
        $('.navigation').removeClass('navigation_scrolled')

        scrolled > 50 
        ? $('.l-slide-out-menu-header').addClass('l-slide-out-menu-header_scrolled'): 
        $('.l-slide-out-menu-header').removeClass('l-slide-out-menu-header_scrolled')
    });

    $('.carousel').carousel({
        interval: 20000
    });

    $('.tabs-toggler__tab').click(function () {
        var moveTo = $(this).position().left;
        var plan = $(this).data('plan');
        // С учетом отступов
        $('.tabs-toggler__switcher').css('left', `${moveTo - 4}px`);
        $('.tabs-toggler__tab').removeClass('tabs-toggler__tab_active');
        $(this).addClass('tabs-toggler__tab_active');

        $('.cards').removeClass('cards_active');
        $(`.cards`).find('.cards__card-container').removeClass('cards__card-container_active');
        $(`.cards#${plan}`).addClass('cards_active');
        $(`.cards#${plan}`).find('.cards__card-container').addClass('cards__card-container_active');
    });
})