$(document).ready(function () {
  e.preventDefault();
  $("#course").on("change", function () {
    var $option = $(this).find("option:selected");
    var value = $option.val();

    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $("#" + value).offset().top,
        },
        2000
      );
    }, 500);
  });
});
