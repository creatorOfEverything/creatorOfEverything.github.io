"use strict";

$(document).ready(function() {
  $(function() {
    $('[data-toggle="tooltip"]').tooltip({
      delay: {
        show: 200,
        hide: 1500
      }
    });
  });

  window.onscroll = function() {
    if ($(document).scrollTop() > 80) {
      $("header").addClass("header_scrolled");
    } else {
      $("header").removeClass("header_scrolled");
    }
  };

  objectFitImages();
});

var lazy = [];

registerListener("load", setLazy);
registerListener("load", lazyLoad);
registerListener("scroll", lazyLoad);
registerListener("resize", lazyLoad);

function setLazy() {
  lazy = document.getElementsByClassName("lazy");
}

function lazyLoad() {
  for (var i = 0; i < lazy.length; i++) {
    if (isInViewport(lazy[i])) {
      if (lazy[i].getAttribute("data-src")) {
        lazy[i].src = lazy[i].getAttribute("data-src");
        lazy[i].onload = function() {
          this.classList.add("img-loaded-js");
        };
        lazy[i].removeAttribute("data-src");
      }
    }
  }

  cleanLazy();
}

function cleanLazy() {
  lazy = Array.prototype.filter.call(lazy, function(l) {
    return l.getAttribute("data-src");
  });
}

function isInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function registerListener(event, func) {
  if (window.addEventListener) {
    window.addEventListener(event, func);
  } else {
    window.attachEvent("on" + event, func);
  }
}
