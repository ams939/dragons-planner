
var express = require('express');
var fs = require('fs');

var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var databaseFunctions = require('./js/dbquery.js');
var queryBuilder = require('./js/queryBuilder.js');
var database = new databaseFunctions.Database();
var connection = databaseFunctions.connectDB();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

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
      resp.json(msg);
      resp.end();
  });

  database.getRecords(query);


});

// Function for returning building information from database in JSON format
app.post('/insertBuilding', function(req, resp) {
  console.log(req.url);
  var building_info = req.body;

  // Prevent SQL injections
  for (var key of Object.keys(building_info)) {
    if (key === 'lat' || key === 'lon') {
      continue;
    } else {
      building_info[key] = connection.escape(building_info[key]);
    }
  }

  // Build query for getting building info & coordinate info
  var query = queryBuilder.insertBuildingInfo(building_info);

  //Send results to client
  database.once('records', function(msg) {
      resp.json(msg);
      resp.end();
  });

  database.getRecords(query);


});

// Function for returning locations of specific type from database in JSON format
app.get('/getLocationsByType', function(req, resp) {
  console.log(req.url);
  var queryString = req.query;
  var type = queryString.type;

  // Build query for getting location info
  var query = queryBuilder.locationInfoByType(type);

  database.once('records', function(msg) {
      resp.json(msg);
      resp.end();
  });

  database.getRecords(query);


});

// Function for returning all locations from database in JSON format
app.get('/getAllLocations', function(req, resp) {
  console.log(req.url);

  // Build query
  var query = queryBuilder.locationInfo();

  database.once('records', function(msg) {
      resp.json(msg);
      resp.end();
  });

  database.getRecords(query);


});

// Function for returning location information from database in JSON format
app.post('/insertLocation', function(req, resp) {
  console.log(req.url);
  var location_info = req.body;

  // Prevent SQL injections
  for (var key of Object.keys(location_info)) {
    if (key === 'lat' || key === 'lon') {
      continue;
    } else {
      location_info[key] = connection.escape(location_info[key]);
    }
  }

  // Build query for getting building info & coordinate info
  var query = queryBuilder.insertLocationInfo(location_info);

  // Send results to client
  database.once('records', function(msg) {
      resp.json(msg);
      resp.end();
  });

  database.getRecords(query);


});

// Start server
app.listen(8080, function() {
  console.log('Server started!');
});
