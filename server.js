// const express = require("express");

// const mongoose = require("mongoose");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');
// Load enviroment variables from .env into process.env
require('dotenv').config()
/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// Initialize express under app variable
const app = express();
const PORT = process.env.PORT || 3001;
/* BODY PARSERS */
// node.js body parsing middleware avaiable under req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
/* LOGGERS */
/* morgan set to 'dev':
	RED         Server Error Codes
	YELLOW      Client Error Codes
	CYAN        Redirection Codes
	UNCOLORED   Other Codes         */
const logger = require('morgan');
app.use(logger('dev'));
/*****************|
|* SET UP ROUTES *| 
|*****************/
// Setup app to serve static files from React App depending on dev/prod
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, './client', 'build')));
}
/*********************************|
|* LISTEN FOR CONNECTION ON PORT *| 
|*********************************/
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });