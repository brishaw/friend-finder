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
  // Create New Characters - takes in JSON input
  app.post("/api/strangers", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newStranger = req.body;
    var userResponses = newStranger.scores;
    console.log("userResponses: " + userResponses);
    // Compute best friend match
    var findName = "";
    var findImage = "";
    var totalDifference = 10000; // Make the initial value big for comparison

    // Examine all existing strangers in the list
    for (var i = 0; i < strangers.length; i++) {
      console.log('strangers = ' + JSON.stringify(strangers[i]));

      // Compute differenes for each question
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(strangers[i].scores[j] - userResponses[j]);
      }
      console.log('diff = ' + diff);

      // If lowest difference, record the strangers match
      if (diff < totalDifference) {
        console.log('closest match found = ' + diff);
        console.log('strangers name = ' + strangers[i].name);
        console.log('strangers image = ' + strangers[i].photo);

        totalDifference = diff;
        findName = strangers[i].name;
        findImage = strangers[i].photo;
      }
    }




		// console.log('userResponses = ' + userResponses);
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newStranger.routeName = newStranger.name.replace(/\s+/g, "").toLowerCase();

    console.log(newStranger);
    
    // Add new stranger
    strangers.push(newStranger);

    //res.json(newStranger);

    // Send appropriate response
    res.json({ status: 'OK', findName: findName, findImage: findImage });

  });// end app.post

} // end module.exports