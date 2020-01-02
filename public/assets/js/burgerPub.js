$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newDevour");

    var newDevourState = {
      devour: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devour to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Button Clicked");

    var newBurger = {
      name: $("#ca")
        .val()
        .trim(),
      devour: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //   $(".delete-burger").on("click", function(event) {
  //     var id = $(this).data("id");

  //     // Send the DELETE request.
  //     $.ajax("/api/burgers/" + id, {
  //       type: "DELETE"
  //     }).then(function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     });
  //   });
});
