// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#newBurgerButton").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#commentField").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });
  $(".change-devour").on("click", function (event) {
    event.preventDefault();
    const id = $(this).attr("data-id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function () {
        location.reload();
      }
    );
  });
});
