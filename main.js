var osmMap = L.tileLayer.provider("OpenStreetMap.Mapnik");
var topoMap = L.tileLayer.provider("OpenTopoMap");
var worldImagery = L.tileLayer.provider("Esri.WorldImagery");
var waterMap = L.tileLayer.provider("Stamen.Watercolor");

var baseMap = {
  osm: osmMap,
  "stamen watercolor": waterMap,
  "topography Map": topoMap,
  "world Image": worldImagery,
};

var map = L.map("map", {
  center: [23.777176, 90.399452],
  zoom: 7,
  layers: [osmMap],
});
var mapLayer = L.control.layers(baseMap).addTo(map);
