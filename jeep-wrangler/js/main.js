$(document).ready(function() {
  var mySwiper = new Swiper(".utilities-slider", {
    loop: false,
    autoHeight: true,
    slidesPerView: 4,
    watchOverflow: true,
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".utilities-slider2", {
    loop: false,
    slidesPerView: 3,
    watchOverflow: true,
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".suspension-slider", {
    loop: false,
    slidesPerView: 3,
    watchOverflow: true,
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".details-slider", {
    loop: false,
    autoHeight: true,
    slidesPerView: 3,
    watchOverflow: true,
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".safety-slider", {
    loop: false,
    autoHeight: true,
    slidesPerView: 3,
    watchOverflow: true,
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".roofs-tabs", {
    loop: false,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 5,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".roofs-tabs__nav_next",
      prevEl: ".roofs-tabs__nav_prev"
    },
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".doors-tabs", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 5,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".doors-tabs__nav_next",
      prevEl: ".doors-tabs__nav_prev"
    },
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".engine-tabs", {
    loop: false,
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 5,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".engine-tabs__nav_next",
      prevEl: ".engine-tabs__nav_prev"
    },
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  var mySwiper = new Swiper(".wheels-tabs", {
    loop: false,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 5,
    watchOverflow: true,
    navigation: {
      nextEl: ".wheels-tabs__nav_next",
      prevEl: ".wheels-tabs__nav_prev"
    },
    breakpoints: {
      1000: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      }
    }
  });

  // popup
  $(".car-modifier__about-modal").on("click", function(e) {
    e.preventDefault();
    var theme = $(this).data("popup");
    var popupContainer = $(".car-modifier__modal");
    var popupImg = popupContainer.find(".car-modifier__modal-img img");
    var popupTitle = popupContainer.find(".car-modifier__modal-title");
    var popupText = popupContainer.find(".car-modifier__modal-text");

    $.each(popupInfo, function(key, value) {
      if (value.key == theme) {
        popupImg.prop("src", value.img);
        popupTitle.html(value.title);
        popupText.html(value.text);
        $("." + theme).css({ opacity: "1", "z-index": "9999" });
      }
    });
    $("body").addClass("noscroll");
    $("html").addClass("noscroll");
  });

  //Close popup
  $(".car-modifier__modal").on("click", function(e) {
    var target = e.target;
    e.preventDefault();

    if (
      $(target).hasClass("car-modifier__modal") ||
      $(target).hasClass("car-modifier__modal-close")
    ) {
      $("body").css("overflow", "auto");
      $(this).css({ opacity: "0", "z-index": "-1" });
      $("body").removeClass("noscroll");
      $("html").removeClass("noscroll");
    }
  });

  $(".interior-block-tabs__item").on("click", function() {
    var container = $(this).parents(".interior-block"),
      item = $(this),
      img = item.data("img"),
      name = item.data("name"),
      // desc
      desc = item.data("desc"),
      nameContainer = container.find(".interior-block-tabs__title"),
      // descContainer
      descContainer = container.find(".interior-block-tabs__desc");
    imgContainer = container.find(".interior-block__img img");
    imgContainer.prop("src", img);
    nameContainer.text(name);
    descContainer.text(desc);
    container
      .find(".interior-block-tabs__item")
      .removeClass("interior-block-tabs__item_active");
    item.addClass("interior-block-tabs__item_active");
  });

  $(".interior-tabs__item").on("click", function() {
    var model = $(this).data("model"),
      container = $(".interior-block_" + model);
    $(".interior-tabs__item").removeClass("interior-tabs__item_active");
    $(this).addClass("interior-tabs__item_active");
    $(".interior-block").removeClass("interior-block_active");
    container.addClass("interior-block_active");
  });

  $(".roofs-tabs__item").on("click", function(e) {
    $(".roofs-tabs__item").removeClass("slider-tabs__item_active");
    $(this).addClass("slider-tabs__item_active");
    var img = $(this).data("img");
    $(".roofs__img img").prop("src", img);
  });

  $(".doors-tabs__item").on("click", function(e) {
    $(".doors-tabs__item").removeClass("slider-tabs__item_active");
    $(this).addClass("slider-tabs__item_active");
    var img = $(this).data("img");
    $(".doors__img img").prop("src", img);
  });

  $(".wheels-tabs__item").on("click", function(e) {
    $(".wheels-tabs__item").removeClass("slider-tabs__item_active");
    $(this).addClass("slider-tabs__item_active");
    var img = $(this).data("img");
    $(".wheels__img img").prop("src", img);
  });

  //headlight
  $(".headlight .radio__input").on("change", function() {
    if ($(this).prop("checked")) {
      var img = $(this).data("img");
      container = $(this).parents(".headlight");
      container.find(".headlight__img img").prop("src", img);
    }
  });

  $(".headlight-tabs__item").on("click", function() {
    var tabName = $(this).data("tab");
    $(".headlight-tabs__item").removeClass("headlight-tabs__item_active");
    $(this).addClass("headlight-tabs__item_active");
    $(".headlight").removeClass("headlight_active");
    $(".headlight_" + tabName).addClass("headlight_active");
  });

  // Jquery для множества однотипных табов на странице
  $(".l-container-tabs").click(function(event) {
    var target = event.target;

    while (target !== $(this)) {
      if ($(target).hasClass("tabs__input")) {
        $(this)
          .find(".l-container-tabs__tab")
          .css("display", "none");
        $(".l-container-tabs__tab_" + $(target).data("tab")).css(
          "display",
          "block"
        );
        return;
      }
      return;
    }
  });

  // Смена картинок фич машины
  $(".l-container-tabs__tab .radio__input").on("change", function() {
    if ($(this).prop("checked")) {
      var img = $(this).data("img");
      container = $(this).parents(".l-container-tabs__tab");
      container.find("img").prop("src", img);
    }
  });

  // Начало скриптов jeep-wrangler, possibilities
  // Счетчик ширины загрузки
  var loadingWidth = 0;

  // Скролл по окну браузера
  if ($(".js-towing").length > 0) {
    $(window).scroll(function() {
      var towing = $(".js-towing");
      var towingLoadTape = $(".towing__load-tape");
      var towingLoadProgress = $(".towing__load-tape_loading");
      var towingInfo = $(".towing__load-info");
      var towingImg = $(".towing_display-img");
      // Нижний скролл равен верхнему скроллу + высоте текущего окна
      var scrollBottom = $(this).scrollTop() + $(this).height();
      // Отступ искомого элемента
      var towingOffsetTop = towing.offset().top;

      // Если нижний скролл равен отступу искомого элемента, то подключаем анимацию стилей с помощью интервала
      if (scrollBottom > towingOffsetTop) {
        $(".towing__load-tape_loading").animate(
          { width: "90%" },
          1500,
          function() {
            towingImg.css("opacity", "1");
            towingInfo.css("opacity", "1");
          }
        );
      }
    });
  }
});
