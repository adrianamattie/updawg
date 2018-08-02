// Dependencies
// =============================================================
var Sequelize = require("sequelize");
// Require the sequelize library
// Require the connection to the database (connection.js)

// Create an "adopter" model with the following configuration
module.exports = function(sequelize, DataTypes){
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
return Adopter;
};