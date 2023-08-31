// Tile Servers.  See https://gist.github.com/mourner/1804938

// URLS AND ATTRIBUTIONS
// Open Street Map
var osmAttrib = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

// MapBox
var mbURL = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';
var mbAttrib = 'Imagery © <a href="http://mapbox.com">Mapbox</a>';

// MapQuest
var mqURL = 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png';
var mqAttrib = 'Tiles &copy; <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" />';

// LEAFLET LAYER OBJECTS
var osmBasemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{attribution: osmAttrib});
var openCycleMapBasemap = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',{attribution: '&copy; OpenCycleMap, Map Data ' + osmAttrib});

var mapboxStreetsBasemap = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',{id: 'examples.map-9ijuk24y',attribution: mbAttrib + ', Map Data ' + osmAttrib});
var mapboxGrayscaleBasemap = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',{id: 'examples.map-20v6611k',attribution: mbAttrib + ', Map Data ' + osmAttrib});

/*
var mapQuestOpenOsmBasemap = L.tileLayer(mqURL,{subdomains:'1234',type: 'osm',attribution:mqAttrib + ', Map Data ' + osmAttrib});
var mapQuestOpenAerialBasemap = L.tileLayer(mqURL,{subdomains:'1234',type:'sat',attribution: 'Imagery &copy; NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency, ' + mqAttrib + ', Map Data ' + osmAttrib});
*/

// More!  From: https://leaflet-extras.github.io/leaflet-providers/preview/
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});
var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var Esri_WorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});
var Esri_WorldTerrain = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
	maxZoom: 13
});
var Esri_WorldShadedRelief = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri',
	maxZoom: 13
});
var Esri_WorldPhysical = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
	maxZoom: 8
});
var Esri_OceanBasemap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
	maxZoom: 13
});
var Esri_NatGeoWorldMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
});

var NASAGIBS_ModisTerraTrueColorCR = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 9,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});


var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});


// Controls which layers (in which order) appear on the Leaflet Layer Control
var baseLayers = {
	"ESRI World Imagery": Esri_WorldImagery,
	"ESRI World Topo": Esri_WorldTopoMap,
	"ESRI World Streetmap": Esri_WorldStreetMap,
	"ESRI World Terrain": Esri_WorldTerrain,
	"ESRI World Shaded Relief": Esri_WorldShadedRelief,
	"ESRI World Physical": Esri_WorldPhysical,
	"ESRI Ocean Basemap": Esri_OceanBasemap,
	"ESRI National Geographic": Esri_NatGeoWorldMap,
	"NASA MODIS Terra True Color": NASAGIBS_ModisTerraTrueColorCR,
	"NASA Night Lights": NASAGIBS_ViirsEarthAtNight2012,
	"OSM Black and White": OpenStreetMap_BlackAndWhite,
	"OSM": osmBasemap,
	"OpenCycleMap": openCycleMapBasemap,
};