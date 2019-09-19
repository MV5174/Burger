var orm = require("orm.js");

var burger = {
    //table
    selectAll: function(table, cb){
        orm.selectAll("burgers", function (res){
            cb(res);
        })
    },
    //table, val1, val2, name, devoured
    insertOne: function(table, val1, val2, name, devoured, cb){
        orm.insertOne("burgers", "name", "devoured", name, devoured, function(res){
            cb(res);
        })
    },
    //table, objVal, condition
    updateOne: function(table, objVal, condition){
        orm.updateOne("burgers", objVal, condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger;