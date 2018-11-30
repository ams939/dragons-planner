// Import marker style variables
$.getScript("../js/markers.js");

// Initializing Leaflet map, centered on University Crossings building with zoom 15
var mymap = L.map('mapid').setView([39.9539588, -75.1946844], 15);

// Marker clusters for storing map markers
var building_markers = L.markerClusterGroup({disableClusteringAtZoom:1});
var location_markers = L.markerClusterGroup({disableClusteringAtZoom:1});
var user_markers = L.markerClusterGroup({disableClusteringAtZoom:1});
var suggested_markers = L.markerClusterGroup({disableClusteringAtZoom:1});
var route = null;

// Initializing map tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYW1zOTM5IiwiYSI6ImNqb3htemV0dDB3ZTIza28zenpqZmdkc2IifQ.NZ4eslQUqJyWCVnmxcEnkA'
}).addTo(mymap);

//------------------------------------------------------------------------------------
// Map functions

// Create marker where user clicks
function onMapClick(e) {
    // Remove previous marker
    suggested_markers.clearLayers();

    // Create marker at click location
    marker = L.marker(e.latlng);

    // Add marker to marker list
    suggested_markers.addLayer(marker);

    // Add marker to map
    suggested_markers.addTo(mymap);
}

// Get location of marker user has placed on map
function getUserMarkerLoc() {
  var coords = [];

  suggested_markers.eachLayer(function (marker) {
    coords.push(marker.getLatLng());
  });

  if (coords.length == 0) {
    return null;
  }

  var marker_loc = {
    'lat':coords[0].lat,
    'lon':coords[0].lng
  };

  return marker_loc;
}

// Plot user location
function plotUserLoc(lat, lon) {
  // Remove previous markers
  user_markers.clearLayers();

  // Create marker at user location
  marker = L.marker([lat, lon], {icon: hereMarker});
  marker.bindPopup("<b>You are here.</b>").openPopup();

  // Add marker to marker list
  user_markers.addLayer(marker);

  // Add marker to map
  user_markers.addTo(mymap);
}

// Plots building marker
function plotBuilding(lat, lon) {
    // Remove previous markers
    building_markers.clearLayers();

    //Remove any routes
    removeRoute();

    // Create marker at building location
    marker = L.marker([lat, lon]);

    // Add marker to marker list
    building_markers.addLayer(marker);

    // Add marker to map
    building_markers.addTo(mymap);

    // Pan map to building location
    mymap.setView(marker.getLatLng(),15);
}

// Function for adding a pedestrian route between two points
function addRoute() {
  var coords = [];
  building_markers.eachLayer(function (marker) {
    coords.push(marker.getLatLng());

  });

  user_markers.eachLayer(function (marker) {
    coords.push(marker.getLatLng());
  });

  // Check that there are at least 2 points
  if (coords.length < 2) {
    return;
  }

  // Create routing
  route = L.Routing.control({
    waypoints: coords,
    router: L.Routing.graphHopper( '19392239-126a-4aad-a90d-0c2dd45820e7' , {
        urlParameters: {
          vehicle: 'foot'
        }
    }),
    routeWhileDragging: true,
    createMarker: function() { return null; }
})
route.addTo(mymap);
}

// Function for removing route on map
function removeRoute() {
  if (route != null) {
    mymap.removeControl(route);
    route = null;
  }
}

function createBuildingMarkers(buildings_json) {

  for (var i = 0; i < buildings_json.length; i++) {
    var latLon = [buildings_json[i].lat, buildings_json[i].lon];
    var marker = L.marker(latLon, {icon: blueMarker});

    // Store rest of building data within marker
    marker.location_data = buildings_json[i];
    marker.on('click', onMarkerClick);

    // Display name of building in popup when marker clicked
    marker.bindPopup(buildings_json[i].name).openPopup();

    blueMarkerGroup.push(marker);
  }

  location_markers.addLayers(blueMarkerGroup);

}


// Create location markers from data queried from database
//NOTE: "types" is defined in "markers.js" and relates marker color to each type
function createLocationMarkers(locations_json) {

  for (var i = 0; i < locations_json.length; i++) {
    var latLon = [locations_json[i].lat, locations_json[i].lon];
    var type = locations_json[i].type;
    var marker = L.marker(latLon, {icon: types[type][0]});

    // Store rest of building data within marker
    marker.location_data = locations_json[i];
    marker.on('click', onMarkerClick);

    // Display name of building in popup when marker clicked
    marker.bindPopup(locations_json[i].name).openPopup();

    types[type][1].push(marker);
    location_markers.addLayer(marker);
  }

}

// Display a given marker type on the map
function showMarkerType(type) {
  // Clear previous markers from map
  location_markers.clearLayers();

  if (type === "All") {
    for (var key in types) {
      location_markers.addLayers(types[key][1]);
      location_markers.addLayers(blueMarkerGroup);
    }
  } else if (type === "Buildings"){
    location_markers.addLayers(blueMarkerGroup);
  } else {
    location_markers.addLayers(types[type][1]);
  }


}

function onMarkerClick(e) {
  alert(JSON.stringify(e.target.location_data));
}

// Click event handler
mymap.on('click', onMapClick);