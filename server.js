var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
require("./config/connection");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//server start
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});