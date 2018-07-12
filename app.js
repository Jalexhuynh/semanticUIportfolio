var express = require("express");
	app     = express();
	bodyParser = require('body-parser');

'use strict';
const nodemailer = require('nodemailer');


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/about", function(req, res) {
	res.render("about");
});

app.get("/portfolio", function(req, res) {
	res.render("portfolio");
});

app.get("/contact", function(req, res) {
	res.render("contact");
});

app.post("/contact", function(req, res) {
	var mailOpts, smtpTrans;

	//Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
	smtpTrans = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS 
		}
	});

	var first   = req.body.firstName;
	var last    = req.body.lastName;
	var name    = first + " " + last;
	var email   = req.body.email;
	var subject	= req.body.subject;
	var message = req.body.message;


	//Mail options
	mailOpts = {
		// Grab form data from the request body object
		from: "'" + name + "'" + ' <' + email + '>', 
		to: '<j.alexhuynh@gmail.com>',
		subject: 'Contact Form: ' + subject,
		html:   "<h3>This message is from:</h3> " + name	+ "\n" 
				+ " &lt;" + email + "&gt;"					+ "\n" 
				+ "<br><br>" 								+ "\n"
				+ "====================" 					+ "\n"
				+ "<br><br>" 								+ "\n"
				+ req.body.message 							+ "\n"
				+ "<br><br>" 								+ "\n"
				+ "====================" 					+ "\n"

	};

	smtpTrans.sendMail(mailOpts, function (error, response) {
		// Email not sent
		if (error) {
			return console.log(error);
		}

		// Yay!! Email sent
		else {
			res.redirect("/contact");
		}
	});
});

app.listen(3000, function() {
	console.log("Server online at localhost:3000");
});

// app.listen(process.env.PORT, process.env.IP);
