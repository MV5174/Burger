var express = require("express");
var router = express.Router();

require("../models/burger");

//Create the routes and set logic
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    })
})

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.name, req.body.devoured, function(result){
        res.json({id: result.id})
    })
})
module.exports = router;