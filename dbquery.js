'use strict'
var mysql = require('mysql');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

// Function for connecting to local database
exports.connectDB = function() {
  var credentialsCSV;

  // Read credentials from csv file with credentials in form:
  //  "hostname, user, password, databasename"
  try {
    credentialsCSV = fs.readFileSync('./DatabaseCredentials.csv','utf8');
  } catch (err) {

  }

  // Process credentials read from file
  var credentialsArray = credentialsCSV.split(",");
  var connection;

  // Make sure the CSV file has the correct fields
  if (credentialsArray.length >= 4) {
    var host = credentialsArray[0];
    var user = credentialsArray[1];
    var password = credentialsArray[2];
    var db = credentialsArray[3];

    // Create database connection
      connection = mysql.createConnection({
      host : host,
      user : user,
      password : password,
      database : db
    });
  } else {
      connection = null;
  }
  return connection;
}



// Database object for making queries into local mysql database
class Database extends EventEmitter {
  constructor() {
    super();
  }

  getRecords(query) {
    var self = this;
    var connection = exports.connectDB();
    connection.query(query, function(err,rows,fields) {
      if (err) {
        self.emit('records', null);
      } else {
        self.emit('records', rows);
      }
    });
  }

}

exports.Database = Database;
