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
  app.get("/api/adoptee", function (req, res) {
    Adopter.findAll({
      where: {
        profile: "adoptee",
      }
    }).then(function (results) {
      res.json(results)
    })
  });

  app.get("/api/adopter", function (req, res) {
    Adopter.findAll({
      where: {
        profile: "adopter",
      }
    }).then(function (results) {
      res.json(results)
    })
  });

  // Add sequelize code to create adopter profile
  app.post("/api/new", function (req, res) {
    Adopter.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio:req.body.bio,
      picture: req.body.picture,
      conditions: req.body.conditions,
      profile: req.body.profile,
      uid:req.body.uid,
      interested: false
    });
  });

  //ADD THIS PLEASE get profile data for different uids**************************************************************
  app.get('/api/profiles/:uid',function(req,res){
    db.Adopter.findAll({
        where:{
            uid:req.params.uid
        }
    }).then(function(data){
        
        //send user data to html and js file [data]
        res.json(data);
        
    })
});
//get all users that like my page
app.get('/api/interested',function(req,res){
    db.Adopter.findAll({
        where:{
            interested:true
        }
    }).then(function(data){
        
        //send user data to html and js file [data]
        res.json(data);
        console.log(data);
        
    })
});

//END HERE*****************************************************************************************************************************

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