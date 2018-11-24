
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
  INSERT INTO ` + building_table + ` (code, name, description, department, street_address, lat, lon)`
  + ` VALUES (`
  + building_json.code + `,`
  + building_json.name + `,`
  + building_json.description + `,`
  + building_json.department + `,`
  + building_json.street_address + `,`
  + building_json.lat.toString() + `,`
  + building_json.lon.toString()
  + `)`

  return query

}
