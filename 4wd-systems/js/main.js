$( document ).ready(function() {

  var mySwiper = new Swiper ('.four-wd-tabs', {
    loop: false,
    autoHeight: true,
    slidesPerView: 4,
    watchOverflow: true,
    navigation: {
      nextEl: '.four-wd-tabs__nav_next',
      prevEl: '.four-wd-tabs__nav_prev',
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      }
    }
    
  });

  // popup
  $('.car-modifier__about-modal').on('click', function(e){

    e.preventDefault();
    var theme = $(this).data('popup');
    var popupContainer = $('.car-modifier__modal');
    var popupImg = popupContainer.find('.car-modifier__modal-img img');
    var popupTitle = popupContainer.find('.car-modifier__modal-title');
    var popupText = popupContainer.find('.car-modifier__modal-text');
    $.each(popupInfo, function(key, value){
      if(value.key == theme) {
        console.log(true)
        popupImg.prop('src', value.img);
        popupTitle.html(value.title);
        popupText.html(value.text);
        $('.' + theme).css({'opacity' : '1', 'z-index' : '9999'});
      }
    })
    $('body').addClass('noscroll');
    $('html').addClass('noscroll');

  });

  //Close popup
  $('.car-modifier__modal').on('click', function(e){
    
    var target = e.target;
    e.preventDefault();

    if ($(target).hasClass('car-modifier__modal') || $(target).hasClass('car-modifier__modal-close')) {
      $('body').css('overflow', 'auto');
      $(this).css({'opacity' : '0', 'z-index' : '-1'});
      $('body').removeClass('noscroll');
      $('html').removeClass('noscroll');
    }

  });

  // Переключение возможностей моделей
  $('.four-wd-tabs__item').on('click', function(e){
    
    $('.car-modifier_hide').css('display', 'none');
    $('.four-wd-tabs__item').removeClass('slider-tabs__item_model-active');
    $(this).addClass('slider-tabs__item_model-active');
    var tab = $(this).data('tab');
    $('.' + tab).css('display', 'block');

  });

  // Jquery для множества однотипных табов на странице
  $('.l-container-tabs').click(function (event) {
    var target = event.target;
    
    while (target !== $(this)) {

      if ($(target).hasClass('tabs__input')) {
          $(this).find('.l-container-tabs__tab').css('display', 'none');
          $('.l-container-tabs__tab_' + $(target).data('tab')).css('display', 'block');
          return;
      };
      return;
    }

  });

  // Смена картинок фич машины
  $('.l-container-tabs__tab .radio__input').on('change', function(){

    if($(this).prop('checked')){
      var img = $(this).data('img');
          container = $(this).parents('.l-container-tabs__tab');
          container.find('img').prop('src', img)
    }

  });

  // Начало скриптов jeep-wrangler, possibilities
  // Счетчик ширины загрузки
  var loadingWidth = 0;
  
  // Скролл по окну браузера
  if ($('.js-towing').length > 0) {

    $(window).scroll(function() {

      var towing = $('.js-towing');
      var towingLoadTape = $('.towing__load-tape');
      var towingLoadProgress = $('.towing__load-tape_loading');
      var towingInfo = $('.towing__load-info');
      var towingImg = $('.towing_display-img');
      var scrollBottom = $(this).scrollTop() + $(this).height();
      var towingOffsetTop = towing.offset().top;
      
      if (scrollBottom > towingOffsetTop) {
        
       $('.towing__load-tape_loading').animate({width: '90%'}, 1500, function () {
          towingImg.css('opacity', '1');
          towingInfo.css('opacity', '1')
       });
  
      }
      
    });

  };
  
});
