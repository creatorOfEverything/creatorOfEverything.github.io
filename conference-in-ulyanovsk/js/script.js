$(document).ready(function() {
  // Маска телефона
  $(".conference-form__phone").mask("+79999999999");

  $(".button__close").on("click", function() {
    $(".feedback__success").hide();
    $(".overlay").hide();
    document.getElementById("thai__form").reset();
  });

  $(".conference-form__type-check_conference").click(function() {
    if ($(this).attr("checked") === "checked") {
      $(".conference-form__type-check_conference")
        .not($(this))
        .attr("disabled", true);
      $(".conference-form__type-check_conference")
        .not($(this))
        .next()
        .addClass("conference-form__type-check_conference_disabled");
    } else {
      $(".conference-form__type-check_conference").attr("disabled", false);
      $(".conference-form__type-check_conference")
        .next()
        .removeClass("conference-form__type-check_conference_disabled");
    }
  });

  // Проверка на ввод данных
  $(
    ".conference-form__container input, .conference-form__container textarea"
  ).change(function() {
    if ($(this).val().length !== 0) {
      $(this)
        .parents(".conference-form__container")
        .find(".js-required")
        .remove();
    }
  });

  $("#conference-form").on("submit", function(e) {
    e.preventDefault();

    var form = document.querySelector("#conference-form");
    var formData = new FormData(form);

    $(".js-required").remove();

    $.ajax({
      url: "send.php",
      type: "POST",
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false,

      success: function(data) {
        var form = $(".conference-form");
        console.log(data);

        if (data["error"]) {
          var errors = data["error"];
          $.each(data["error"], function(index, value) {
            var errSpan = document.createElement("span");
            var selectParent = form
              .find('[name="required[' + index + ']"]')
              .parents(".conference-form__container");
            console.log(selectParent);

            if (form.find('[name="required[' + index + ']"]').length >= 1) {
              errSpan.classList.add("js-required");
              errSpan.innerHTML = value;
              selectParent.append(errSpan);
            }
          });
        } else {
          $(".conference-form__container")
            .children(".js-required")
            .remove();
          $(".feedback__success").show();
        }
      },

      error: function() {
        console.log("error");
      }
    });
  });
});
