//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get(__dirname + "/", function(req, res) {
	res.render("login.ejs");
});
app.get(__dirname + "/login", function(req, res) {
	res.render("login.ejs");
});

app.get(__dirname + "/register", function(req, res) {
	res.render("register.ejs");
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
});