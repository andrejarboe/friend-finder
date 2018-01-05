// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    console.log(friendsData);
    var bestMatchScore;
    var bestMatchPerson;
    var tempMatchScore = 0;

    //loop over friends data
    for (var i = 0; i < friendsData.length; i++) {

      //Math for friend match
      for (var j = 0; j < req.body.scores.length; j++) {
        tempMatchScore += Math.abs(req.body.scores[j] - friendsData[i].scores[j]);
      }

      if (!bestMatchScore) {
        bestMatchScore = tempMatchScore;
      }else if (tempMatchScore < bestMatchScore) {
        bestMatchScore = tempMatchScore;
        bestMatchPerson = friendsData[i];
      }

      console.log("friend " + i + " match score is: " + tempMatchScore);
      console.log("best match so far is: "+bestMatchScore +"\n");

      tempMatchScore = 0;
    }

    console.log("---------------------------");
    console.log("The best match is: "+bestMatchPerson);
    console.log("---------------------------");
    res.json(bestMatchPerson);
    // console.log(friendsData[0].scores); 
    friendsData.push(req.body);
  });
}