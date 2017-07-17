// Dependencies
var express = require("express");

var mongojs = require("mongojs");

//Initializa Express
var app = express();

//DataBae configuration
var databaseUrl = "nyt";
var collection = ["news"];

//Use mongojs to hook the database to teh db variables. 
var db = mongojs(databaseUrl, collections);

// Makes sure errors are logged
db.on("error", function(error) {
    console.log("database error", error);
});