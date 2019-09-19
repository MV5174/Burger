var orm = require("../config/orm.js");

var burger = {
    //table
    selectAll: function(cb){
        orm.selectAll("burgers", function (res){
            cb(res);
        })
    },
    //table, val1, val2, name, devoured
    insertOne: function(name, devoured, cb){
        orm.insertOne("burgers", "name", "devoured", name, devoured, function(res){
            cb(res);
        })
    },
    //table, objVal, condition
    updateOne: function(objVal, condition){
        orm.updateOne("burgers", objVal, condition, function(res){
            cb(res);
        })
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
}

module.exports = burger;