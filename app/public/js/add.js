// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newAdopter = {
    firstName: $("#firstName").val().trim(),
    lastName: $("#lastName").val().trim(),
    bio: $("#bio").val().trim(),
    conditions: $("#livingCondition").val(),
    profile: $("select").val(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newAdopter)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#firstName").val("");
  $("#lastName").val("");
  $("#bio").val("");
  $("#livingCondition").val("");

});
