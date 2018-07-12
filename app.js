var express = require("express");
	app 	= express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(res, res) {
	res.render("index");
});

app.get("/about", function(res, res) {
	res.render("about");
});

app.get("/portfolio", function(res, res) {
	res.render("portfolio");
});

app.get("/contact", function(res, res) {
	res.render("contact");
});

app.listen(3000, function() {
	console.log("Server online at localhost:3000");
});

// app.listen(process.env.PORT, process.env.IP);