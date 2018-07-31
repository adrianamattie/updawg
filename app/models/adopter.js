// Dependencies
// =============================================================
var Sequelize = require("sequelize");
// Require the sequelize library
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
        },
    }, {
        timestamps: false
    });


// Sync model with DB
Adopter.sync();
// Export the book model for other files to use
module.exports = Adopter;