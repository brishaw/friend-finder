// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
//
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));




// Add the application routes
require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);










// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on port: " + PORT);
});