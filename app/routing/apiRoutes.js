// Your`apiRoutes.js` file should contain two routes:

//    * A GET route with the url`/api/friends`.This will be used to display a JSON of all possible friends.
//    * A POST routes`/api/friends`.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.

var path = require('path');
// Import the list of strangers 
var strangers = require('../data/friends.js');
// Export API routes
module.exports = function (app) {
// Displays all strangers
app.get("/api/strangers", function (req, res) {
  return res.json(strangers);
});
  // Create strangers - takes in JSON input
  app.post("/api/strangers", function (req, res) {
    var newStranger = req.body;
    var userResponses = newStranger.scores;
    // Determine best match
    var findName = "";
    var findImage = "";
    var totalDifference = 1000; 
    // Examine all strangers in the list
    for (var i = 0; i < strangers.length; i++) {
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(strangers[i].scores[j] - userResponses[j]);
      }
      // Get the lowest difference, then find the strangers match
      if (diff < totalDifference) {
        totalDifference = diff;
        findName = strangers[i].name;
        findImage = strangers[i].photo;
      }
    }
    newStranger.routeName = newStranger.name.replace(/\s+/g, "").toLowerCase();
    // Add new stranger
    strangers.push(newStranger);
    // Send response
    res.json(
      { 
        findName: findName, 
        findImage: findImage 
      }
    );
  });// end app.post
} // end module.exports