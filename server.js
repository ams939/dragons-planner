
var express = require('express');
var fs = require('fs');
var app = express();
var request = require('request');
var databaseFunctions = require('./dbquery.js');
var queryBuilder = require('./queryBuilder.js');
var database = new databaseFunctions.Database();
var connection = databaseFunctions.connectDB();

// Check that connection to DB could be made.
if (connection != null) {
  console.log("Connected to database.");
} else {
  console.log("Error connecting to database.");
  process.exit(0);
}

// Server works in directory server script is located in
app.use(express.static('.'));


// Function for returning building information from database in JSON format
app.get('/getBuilding', function(req, resp) {
  console.log(req.url);
  var queryString = req.query;
  var buildingCode = queryString.code;

  // Prevent SQL injections
  buildingCode = connection.escape(buildingCode);

  // Build query for getting building info & coordinate info
  var query = queryBuilder.buildingInfo(buildingCode);

  database.once('records', function(msg) {
    var building_info_json = [];

      if (msg != null) {
        //console.log(msg);
        building_info_json = msg;

      } else {
        console.log("Error");
        building_info_json = ["Error"];
      }
      resp.json(building_info_json);
      resp.end();
  });

  database.getRecords(query);


});

// Start server
app.listen(8080, function() {
  console.log('Server started!');
});
