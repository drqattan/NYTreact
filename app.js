//Dependencies

var express = require("express");

var bodyParser = require("body-parser");

var mongojs = require("mongojs")

var Mongoose = require("mongoose");

var request = require("request");

var cheerio = require("cheerio");

var PORT = process.env.port || 3000;


// bring in our models here (search, results and saved articles)
//example var Note = require("./models/note.js");

// Set mongoose to leverage built in JavaScript ES6 promises
// mongoose.Promise = Promise;

//Initializing Express
var app = express();

// Use morgan and body parser with our app
// app.use(logger("dev"));
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

console.log("Scrapping the website for articles")

request("https://www.nhl.com", function(error, response, html) {
    var $ = cheerio.load(html);

    var result = [];

    $("h4.headline-link").each(function(i, element) {
        var title = $(this).text();

        var link = $(element).parent().attr("href");

        result.push({
            title: title,
            link: link
        });
        db.scrapedData.save({
            title: title,
            link: link
        })
    });

    console.log(result);




});

//dont forget the router in this area. 

app.listen(3000, function() {
    console.log("app running on port 3000")
})