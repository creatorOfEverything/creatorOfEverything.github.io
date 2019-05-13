$(document).ready(function() {
  $(".main-slider").slick({
    arrows: false,
    dots: true
  });

  $(".news-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<i class="fa fa-chevron-left news-slider__prev-arrow"></i>',
    nextArrow: '<i class="fa fa-chevron-right news-slider__next-arrow"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
});
