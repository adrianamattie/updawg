// Dependencies
// =============================================================


// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require('../config/connection');

// Create an "adopter" model with the following configuration
var Adopter = sequelize.define("adopter", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uid: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63de74668d8517b43662a6fcf3870f22&auto=format&fit=crop&w=774&q=80"
    },
    bio: {
        type: Sequelize.TEXT,

    },
    conditions: {
        type: Sequelize.TEXT,
    },
    profile: {
        type: Sequelize.STRING,
    },
    interested: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});
Adopter.sync();

module.exports = Adopter;