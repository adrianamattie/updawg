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
  app.get("/api/pets", function (req, res) {
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
  app.post("/api/userProfiles", function (req, res) {
    Adopter.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      picture: req.body.picture,
      bio:req.body.bio,
      conditions: req.body.conditions,
      profile: req.body.profile,
      uid:req.body.uid,
      interested: false
    });
    res.sendStatus(200);
  });

  //ADD THIS PLEASE get profile data for different uids**************************************************************
  app.get('/api/profiles/:uid',function(req,res){
    Adopter.findAll({
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
    Adopter.findAll({
        where:{
            interested:true
        }
    }).then(function(data){
        
        //send user data to html and js file [data]
        res.json(data);
        console.log(data);
        
    })
});

app.post("/api/allpets", function(req, res){
  Adopter.update({
    interested: req.body.interested
  },{
    where:{
      uid: req.body.uid
    }
  }).then(function(updated){
    res.json(updated);
  })
})

//END HERE*****************************************************************************************************************************


};