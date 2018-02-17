// Import the ORM to create functions to interact with the DB
var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callback(res);
        });
    },

    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;