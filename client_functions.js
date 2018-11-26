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
        if (msg.success) {
          if (msg.result.length == 0) {
            $("#status_div").html("No buildings found for code " + building_code + "<br><br>");
          } else {
            // Populate div in html code with result from server
            setDiv(msg.result);
          }
        } else {
          setStatusDiv("An error occurred:<br>" + JSON.stringify(msg));
        }


      },
      error : function(jqXHR, textStatus, errorThrown) {
        $("#status_div").html("Server could not be reached!");
      }
    });
}

// Function for inserting a building into the database
function insertBuilding() {
    // Extract building info from HTML text input box
    var code = $("#building_code").val().toUpperCase();
    var name = $("#building_name").val();
    var desc = $("#building_desc").val();
    var department = $("#building_department").val();
    var address = $("#building_address").val();
    var lat = $("#lat").val();
    var lon = $("#lon").val();

    lat = parseFloat(lat);
    lon = parseFloat(lon);

    if (isNaN(lat) || isNaN(lon)) {
      $("#status_div").html("Invalid coordinates!");
      return;
    }

    if (lon < -75.25 || lon > 75.03) {
      $("#status_div").html("Invalid longitude!");
      return;
    }

    if (lat > 40.03 || lat < 39.90 ) {
      $("#status_div").html("Invalid longitude!");
      return;
    }

    // Create json for post body
    var building_info = {
        'code':code,
        'name':name,
        'description':desc,
        'department': department,
        'street_address': address,
        'lat': lat,
        'lon':lon
    };

    // Local server endpoint
    var reqUrl = "http://localhost:8080/insertBuilding";

    // Make Ajax query to local server to get building info as JSON
    $.ajax({
      type : "POST",
      url : reqUrl,
      data : building_info,
      dataType : "json",
      success : function(msg) {
        if (msg.success) {
          setStatusDiv("Successfully added.");

          // Clear input boxes to make them ready for further input
          $(":text").val("");
        } else {
          // Error # 1062 signifies duplicate entry for unique field
          if (msg.error.errno == 1062) {
            setStatusDiv("That building code already exists!");
          // Error # 1406 signifies too long building code (max length 10)
          } else if (msg.error.errno == 1406) {
            setStatusDiv("Building code is too long!");
          } else {
            setStatusDiv("An error occurred:<br>" + JSON.stringify(msg['error']));
          }

        }


      },
      error : function(jqXHR, textStatus, errorThrown) {
        $("#status_div").html("Server could not be reached!");
      }
    });
}


// Function for inserting a location into the database
function insertLocation() {
    // Extract location info from HTML text input box
    var loc_name = $("#name").val();
    var desc = $("#description").val();

    var loc_type = $("#types :selected").val();

    // Make sure user has selected location type
    if (loc_type === "default") {
      setStatusDiv("Please select type!");
      return;
    }

    // TODO Change these to extract value from user placed marker
    var lat = $("#lat").val();
    var lon = $("#lon").val();

    lat = parseFloat(lat);
    lon = parseFloat(lon);

    if (isNaN(lat) || isNaN(lon)) {
      $("#status_div").html("Invalid coordinates!");
      return;
    }

    if (lon < -75.25 || lon > 75.03) {
      $("#status_div").html("Invalid longitude!");
      return;
    }

    if (lat > 40.03 || lat < 39.90 ) {
      $("#status_div").html("Invalid longitude!");
      return;
    }

    // Create json for post body
    var location_info = {
        'loc_name':loc_name,
        'description':desc,
        'loc_type': loc_type,
        'lat': lat,
        'lon':lon
    };

    // Local server endpoint
    var reqUrl = "http://localhost:8080/insertLocation";


    // Make Ajax query to local server to get building info as JSON
    $.ajax({
      type : "POST",
      url : reqUrl,
      data : location_info,
      dataType : "json",
      success : function(msg) {
        if (msg.success) {
          setStatusDiv("Successfully added.");

          // Clear input boxes to make them ready for further input
          $(":text").val("");
        } else {
            setStatusDiv("An error occurred:<br>" + JSON.stringify(msg['error']));
          }

        },
      error : function(jqXHR, textStatus, errorThrown) {
        $("#status_div").html("Server could not be reached!");
      }
    });
}

function setStatusDiv(status) {
  $("#status_div").html(status);
}

// Function for setting building info in page html
function setDiv(building_json) {
  // Set HTML in test page
  setStatusDiv("Building info:");
  $("#building_name").html(building_json[0].name);
  $("#building_code").html(building_json[0].code);
  $("#building_address").html(building_json[0].street_address);
  $("#building_desc").html(building_json[0].description);
  $("#building_loc").html(building_json[0].lat.toString() + "," + building_json[0].lon.toString());
}
