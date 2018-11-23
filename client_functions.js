// Clientside javascript functions

// Querying local server for building info
function getBuilding () {

    // Extract building code from HTML text input box
    var building_code = $("#buildingcode").val().toUpperCase();

    // Local server endpoint
    var reqUrl = "http://localhost:8080/getBuilding";

    // Create query string with building code
    var queryString = {"code" : building_code};

    // Make Ajax query to local server to get building info as JSON
    $.ajax({
      type : "GET",
      url : reqUrl,
      data : queryString,
      dataType : "json",
      success : function(msg) {
        var building_json = msg;
        // Populate div in html code with result from server
        setDiv(building_json);
      },
      error : function(jqXHR, textStatus, errorThrown) {
        $("#status_div").html("Server could not be reached!");
      }
    });
}


// Function for setting building info in page html
function setDiv(building_json) {
  // Set HTML in test page
  $("#status_div").html("Building info:");
  $("#building_name").html(building_json[0].name);
  $("#building_code").html(building_json[0].code);
  $("#building_address").html(building_json[0].street_address);
  $("#building_desc").html(building_json[0].description);
  $("#building_loc").html(building_json[0].lat.toString() + "," + building_json[0].lon.toString());
}
