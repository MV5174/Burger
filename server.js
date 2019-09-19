var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

require("./config/connection");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//server start
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});