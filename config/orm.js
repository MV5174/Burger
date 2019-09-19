var connection = require("./connection");

var orm = {
    selectAll: function(table){
        var query = "SELECT * FROM" + table + ";";
        connection.query(query, function(err, result){
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    insertOne: function(table, val1, val2, name, devoured){
        var query = "INSERT INTO " + table + ";";
        query += "(" + val1 + "," + val2 ")";
        query += "VALUES (" + name + "," + devoured + ")";

        connection.query(query, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(table, objVal, condition){
        var query = "UPDATE " + table;
        query += " SET " + objVal;
        query += " WHERE " + condition;

        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;