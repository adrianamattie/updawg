// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Adopter = require("../models/adopter.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function (req, res) {
    Adopter.findAll({}).then(function (results) {
      res.json(results)
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/book/:book", function (req, res) {
    Adopter.findOne({
      where: {
        title: req.params.book
      }
    }).then(function (results) {
      res.json(results)
    })
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function (req, res) {
    Adopter.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function (results) {
      res.json(results)
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function (req, res) {
    Adopter.findAll({
      where: {
        author: req.params.author
      }
    }).then(function (results) {
      res.json(results)
    });
  });

  // Add sequelize code to get profiles set to "ADOPTER"
  app.get("/api/profile/adopter", function (req, res) {
    Adopter.findAll({
      where: {
        //Profile {
          //where Adoptee is set to true 
      }
    }).then(function (results) {
      res.json(results)
    });
  });

  // Add sequelize code to get profiles set to "ADOPTEE"
  app.get("/api/profile/adoptee", function (req, res) {
    Adopter.findAll({
      where: {
        //Profile {
          //where Adoptee is set to true 
      }
    }).then(function (results) {
      res.json(results)
    });
  });

  // Add sequelize code to create adopter profile
  app.post("/api/new", function (req, res) {
    Adopter.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio:req.body.bio,
      conditions: req.body.conditions,
      interested: false
    });
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    Book.destroy({
      where: {
        id: req.body.id
      }
    });
  });



};