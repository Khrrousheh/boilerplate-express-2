require('dotenv').config()

var express = require('express');
var app = express();

// First exercise 
// console.log("Hello World")

// Second exercise
// app.get("/",
// function(req, res) {
//   res.send('Hello Express');
// })

// Third exercise
var homePage = __dirname+ '/views/index.html'

app.get("/",(req,res)=>{
	res.sendFile(homePage)
})

// Fourth exercise
app.use("/public", express.static(__dirname + "/public"));

// Fifth exercise
// app.get("/json",(req,res)=>{
// 	res.json(
// 		{"message": "Hello json"}
// 	)
// })

console.log(process.env.MESSAGE_STYLE)
// sixth exercise

app.get("/json",(req,res)=>{
	res.json(
		{"message": process.env.MESSAGE_STYLE == "uppercase"? "HELLO WORLD": "Hello World"}
	)
})


























 module.exports = app;
