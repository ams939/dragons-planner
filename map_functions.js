
// Initializing Leaflet map, centered on University Crossings building with zoom 15
var mymap = L.map('mapid').setView([39.9539588, -75.1946844], 15);

// Marker clusters for storing map markers
var building_markers = L.markerClusterGroup();
var location_markers = L.markerClusterGroup();
var user_markers = L.markerClusterGroup();
var route = null;

// Make red marker
var redMarker = L.icon({
    iconUrl: './img/redmarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: './img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});

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
    location_markers.clearLayers();

    // Create marker at click location
    marker = L.marker(e.latlng);

    // Add marker to marker list
    location_markers.addLayer(marker);

    // Add marker to map
    location_markers.addTo(mymap);
}

// Plot user location
function plotUserLoc(lat, lon) {
  // Remove previous markers
  user_markers.clearLayers();

  // Create marker at user location
  marker = L.marker([lat, lon], {icon: redMarker});
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

// Click event handler
mymap.on('click', onMapClick);
