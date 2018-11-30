

var blueMarkerGroup = [];
var greenMarkerGroup = [];
var redMarkerGroup = [];

var yellowMarkerGroup = [];
var turqoiseMarkerGroup = [];
var purpleMarkerGroup = [];
var orangeMarkerGroup = [];



// Script for initializing various different colored markers
var blueMarker = L.icon({
    iconUrl: '../img/bluemarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});


var redMarker = L.icon({
    iconUrl: '../img/redmarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});


var greenMarker = L.icon({
    iconUrl: '../img/greenmarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});

var orangeMarker = L.icon({
    iconUrl: '../img/orangemarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});

var purpleMarker = L.icon({
    iconUrl: '../img/purplemarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});

var turqoiseMarker = L.icon({
    iconUrl: '../img/turqoisemarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});

var yellowMarker = L.icon({
    iconUrl: '../img/yellowmarker.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});

var hereMarker = L.icon({
    iconUrl: '../img/here.png',
    iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
    shadowUrl: '../img/markershadow.png',
    shadowSize:  [41, 41],
    shadowAnchor: [12, 41]
});

// Marker color coding for each location type
var types = {
  'Attraction':[greenMarker, greenMarkerGroup],
  'Drexel service':[yellowMarker, yellowMarkerGroup],
  'Student organization': [turqoiseMarker, turqoiseMarkerGroup],
  'Store' : [redMarker, redMarkerGroup],
  'Restaurant' : [purpleMarker, purpleMarkerGroup],
  'Other': [orangeMarker, orangeMarkerGroup]
};
