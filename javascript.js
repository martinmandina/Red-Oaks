$(document).ready(function() {
    $(".card").hover(
      function() {
        $(this)
          .find(".overlay")
          .show();
      },
      function() {
        $(this)
          .find(".overlay")
          .hide();
      }
    );
  });
