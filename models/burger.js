// Import the ORM to create functions to interact with the DB
var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

    selectAll: function(table, callback) {
        orm.selectAll(table, function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(burgerID, callback) {
        orm.updateOne(burgerID, function(res) {
            callback(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;