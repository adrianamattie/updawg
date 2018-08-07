
// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].firstName + " " + data[i].lastName+ "</h2>");
    $("#book-well-" + i).append("<h3>About Me: " + data[i].bio + "</h4>");
    $("#book-well-" + i).append("<h3>Me in My Place: " + data[i].conditions + "</h4>");
  }
});



$.get("/api/all", function(data) {
  //api/adoptee
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].firstName + " " + data[i].lastName+ "</h2>");
    $("#book-well-" + i).append("<h3>About Me: " + data[i].bio + "</h4>");
    $("#book-well-" + i).append("<h3>Me in My Place: " + data[i].conditions + "</h4>");
    $("#book-well-" + i).append("<h3>Picture: " + data[i].picture + "</h4>");
  }
});
