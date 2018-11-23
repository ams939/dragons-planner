
// Function for building query to get info of building
exports.buildingInfo = function(building_code) {
    var building_table = 'buildings';
    var coordinate_table = 'coordinates';

    //var query = 'SELECT * FROM ' + building_table + ' WHERE ' + ' code=' + "'" + building_code + "'";

    var query = `
      SELECT a.* FROM (
      SELECT b.*, c.lat, c.lon FROM ` + building_table +
      ` b, ` + coordinate_table + ` c WHERE b.building_id=c.building_id
      ) a WHERE code=` + building_code;


    return query;
}

// Function for building query that returns coordinates for building 
exports.buildingCoords = function(building_code) {
  var building_table = 'buildings';
  var coordinate_table = 'coordinates';

  var query = `
    SELECT a.* FROM (
    SELECT c.lat, c.lon FROM ` + building_table +
    ` b, ` + coordinate_table + ` c WHERE b.building_id=c.building_id
    ) a WHERE code=` + building_code;

}
