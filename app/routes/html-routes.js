// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // add code to send the view.html file
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"))
  });

  // add code to send the add.html page, where users can enter new profiles to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"))
  });

  // add code to send the all.html page, where all profiles in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"))
  });

};
