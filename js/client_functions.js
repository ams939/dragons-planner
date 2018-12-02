// Clientside javascript functions

// Function that gets user's lon and lat if they allow geolocation
function getUserLocation() {
     navigator.geolocation.getCurrentPosition(
       // If user accepts geolocation request, this function is executed
       function(position){
         // Add user location as marker on map
         plotUserLoc(position.coords.latitude,position.coords.longitude);
     },
     // If user rejects geolocation, this function is executed
     function() {
       // Default to main building
        plotUserLoc(39.954011, -75.186924);
     });
  }


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
            setStatusDiv("No buildings found for code " + building_code + "<br><br>");
          } else {
            // Extract building information
            var building_info = msg.result[0];

            // Populate div in html code with result from server
            setBuildingInfoDiv(building_info);

            // Plot marker onto map with building coords
            plotBuilding(building_info.lat, building_info.lon);
          }
        } else {
          setStatusDiv("An error occurred:<br>" + JSON.stringify(msg));
        }


      },
      error : function(jqXHR, textStatus, errorThrown) {
        setStatusDiv("Server could not be reached!");
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
    var image_url = $("#building_image").val();
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
        'image_url':image_url,
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
    var image_url = $("#location_image").val();

    var loc_type = $("#types :selected").val();

    // Make sure user has selected location type
    if (loc_type === "default") {
      setStatusDiv("Please select type!");
      return;
    }

    // Get the location of the marker user has placed
    var coords = getUserMarkerLoc();

    // Check that user has chosen location on map
    if (coords == null) {
      setStatusDiv("Please select a location on the map!");
      return;
    }

    var lat = coords.lat;
    var lon = coords.lon;


    if (isNaN(lat) || isNaN(lon)) {
      $("#status_div").html("Invalid coordinates!");
      return;
    }

    // Check that marker is in Philly area
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
        'image_url': image_url,
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

function getAllLocations() {
  var locations_json;

  // Local server endpoint
  var reqUrl = "http://localhost:8080/getAllLocations";

  // Make Ajax query to local server to get location info as JSON
  $.ajax({
    type : "GET",
    url : reqUrl,
    dataType : "json",
    success : function(msg) {
      if (msg.success) {
        locations_json = msg.result;
        createLocationMarkers(locations_json);
      } else {
        return null;
        }

      },
    error : function(jqXHR, textStatus, errorThrown) {
      return null;
    }
  });


}

function getAllBuildings() {
  var buildings_json;

  // Local server endpoint
  var reqUrl = "http://localhost:8080/getAllBuildings";


  // Make Ajax query to local server to get building info as JSON
  $.ajax({
    type : "GET",
    url : reqUrl,
    dataType : "json",
    success : function(msg) {
      if (msg.success) {
        buildings_json = msg.result;
        createBuildingMarkers(buildings_json);
      } else {
        return null;
        }

      },
    error : function(jqXHR, textStatus, errorThrown) {
      return null;
    }
  });

}


// Querying local server for location info
function getLocation () {

    // Extract building code from HTML text input box
    var location_name = $("#name_input").val();

    // Local server endpoint
    var reqUrl = "http://localhost:8080/getLocation";

    // Create query string with building code
    var queryString = {"location_name" : location_name};

    // Make Ajax query to local server to get building info as JSON
    $.ajax({
      type : "GET",
      url : reqUrl,
      data : queryString,
      dataType : "json",
      success : function(msg) {
        var location_json = msg;
        if (msg.success) {
          if (msg.result.length == 0) {
            setStatusDiv("No locations found for location '" + location_name + "'<br><br>");
          } else {
            // Extract building information
            var location_info = msg.result[0];

            // Populate div in html code with result from server
            setLocationInfoDiv(location_info);

            // Plot marker onto map with location coords
            plotLocation(location_info.lat, location_info.lon, location_info.name);
          }
        } else {
          setStatusDiv("An error occurred:<br>" + JSON.stringify(msg));
        }


      },
      error : function(jqXHR, textStatus, errorThrown) {
        setStatusDiv("Server could not be reached!");
      }
    });
}



function getAllMarkers() {
  getUserLocation();
  getAllLocations();
  getAllBuildings();
  location_markers.addTo(mymap);

}

function getTypeMarkers() {
  var loc_type = $("#types :selected").val();
  showMarkerType(loc_type);
}


//------------------------------------------------------------------------------
// Functions for populating divs on client pages
//------------------------------------------------------------------------------

//Function for populating divs on locations.html page with data in marker json
function setLocationInfoDiv(location_json) {
  setStatusDiv("");
  $("#location_name").html(location_json.name);
  $("#location_desc").html(location_json.description);
  $("#image_div").html("<img src='" + location_json.image_url + "'>");
}

function clearLocationInfoDiv() {
  setStatusDiv("Please click a marker to see additional information on location.");
  $("#location_name").html("");
  $("#location_desc").html("");
  $("#image_div").html("");
}

// Function for populating status div
function setStatusDiv(status) {
  $("#status_div").html(status);
}

// Function for populating building information divs in buildingFinder.html page
function setBuildingInfoDiv(building_json) {
  // Set HTML in test page
  setStatusDiv("Building info:");
  $("#building_name").html(building_json.name);
  $("#building_code").html(building_json.code);
  $("#building_address").html(building_json.street_address);
  $("#building_desc").html(building_json.description);
  $("#image_div").html("<img src='" + building_json.image_url + "'>");
}
