"use strict";

$(document).ready(function () {
  $('.main-slider').slick({
    prevArrow: '<button type="button" class="main-slider__prev main-slider__arrow"></button>',
    nextArrow: '<button type="button" class="main-slider__next main-slider__arrow"></button>'
  });
  $('.features-slides__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'features-slides__dots',
    appendDots: $('.features-slides__nav')
  });
});