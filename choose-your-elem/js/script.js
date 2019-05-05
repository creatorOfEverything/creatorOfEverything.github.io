$(document).ready(function() {
  // Маска телефона
  $(".conference-form__phone").mask("+79999999999");

  // Проверка на ввод данных
  $(
    ".conference-form__container input, .conference-form__container textarea"
  ).keyup(function() {
    if ($(this).val().length !== 0) {
      $(this)
        .parents(".conference-form__container")
        .find(".js-required")
        .remove();
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
          $(".form-success").addClass("form-active");
        }
      },

      error: function() {
        console.log("error");
      }
    });
  });
});
