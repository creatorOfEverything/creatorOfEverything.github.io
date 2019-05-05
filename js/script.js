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
