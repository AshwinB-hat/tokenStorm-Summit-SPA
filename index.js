var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path")

app.use(express.static(path.join(__dirname, 'views')));
app.set("view engine", "ejs");

app.get("/",function(req,res){
	res.render("index");
});

app.listen(process.env.PORT,function(req,res){
	console.log("began listening");
});