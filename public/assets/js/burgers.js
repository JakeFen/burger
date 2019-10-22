$(document).ready(function() {
  $(".create_burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $(".burgerName")
        .val()
        .trim()
    };

    $.post("/api/burger", newBurger, function(data) {
      location.reload();
    });
  });

  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    // $.put("/api/burger/" + id, { devourStatus }, function() {
    //   location.reload();
    // });
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(function() {
      location.reload();
    });
  });
});
