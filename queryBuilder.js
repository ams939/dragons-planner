
// Function for building query to get info of building
exports.buildingInfo = function(building_code) {
    var building_table = 'buildings';

    //var query = 'SELECT * FROM ' + building_table + ' WHERE ' + ' code=' + "'" + building_code + "'";

    var query = `
      SELECT * FROM ` + building_table + ` WHERE code=` + building_code;

    return query;
}

// Function for building query that returns coordinates for building
exports.buildingCoords = function(building_code) {
  var building_table = 'buildings';

  var query = `
    SELECT lat,lon FROM ` + building_table + ` WHERE code=` + building_code;

  return query;
}

// Insert building information into table
exports.insertBuildingInfo = function(building_json) {
  var building_table = 'buildings';

  var query = `
  INSERT INTO ` + building_table + ` (code, name, description, department, street_address, image_url, lat, lon)`
  + ` VALUES (`
  + building_json.code + `,`
  + building_json.name + `,`
  + building_json.description + `,`
  + building_json.department + `,`
  + building_json.street_address + `,`
  + building_json.image_url + `,`
  + building_json.lat.toString() + `,`
  + building_json.lon.toString()
  + `)`

  return query

}


// Function for building query to get location info by type
exports.locationInfoByType = function(location_type) {
    var location_table = 'locations';

    var query = `
      SELECT * FROM ` + location_table + ` WHERE type='` + location_type + `'`;

    return query;
}

// Function for building query to get all location info
exports.locationInfo = function() {
    var location_table = 'locations';

    var query = `
      SELECT * FROM ` + location_table;

    return query;
}

// Insert location information into table
exports.insertLocationInfo = function(location_json) {
  var location_table = 'locations';

  var query = `
  INSERT INTO ` + location_table + ` (name, description, type, image_url, lat, lon)`
  + ` VALUES (`
  + location_json.loc_name + `,`
  + location_json.description + `,`
  + location_json.loc_type + `,`
  + location_json.image_url + `,`
  + location_json.lat.toString() + `,`
  + location_json.lon.toString()
  + `)`

  return query

}
