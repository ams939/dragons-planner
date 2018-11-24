
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
    SELECT coordinates FROM ` + building_table + ` WHERE code=` + building_code;
}

// Insert building information into table
exports.insertBuildingInfo = function(building_json) {
  var building_table = 'buildings';
  // WIP
}
