var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: []});
var format_23 = new ol.format.GeoJSON();
var features_23 = format_23.readFeatures(geojson_23);
var jsonSource_23 = new ol.source.Vector();
jsonSource_23.addFeatures(features_23);
var lyr_23 = new ol.layer.Vector({
                source: jsonSource_23, 
                style: style_23,
                title: "2003"
            });
var format_26 = new ol.format.GeoJSON();
var features_26 = format_26.readFeatures(geojson_26);
var jsonSource_26 = new ol.source.Vector();
jsonSource_26.addFeatures(features_26);
var lyr_26 = new ol.layer.Vector({
                source: jsonSource_26, 
                style: style_26,
                title: "2006"
            });
var format_1999 = new ol.format.GeoJSON();
var features_1999 = format_1999.readFeatures(geojson_1999);
var jsonSource_1999 = new ol.source.Vector();
jsonSource_1999.addFeatures(features_1999);
var lyr_1999 = new ol.layer.Vector({
                source: jsonSource_1999, 
                style: style_1999,
                title: "1999"
            });
var format_21 = new ol.format.GeoJSON();
var features_21 = format_21.readFeatures(geojson_21);
var jsonSource_21 = new ol.source.Vector();
jsonSource_21.addFeatures(features_21);
var lyr_21 = new ol.layer.Vector({
                source: jsonSource_21, 
                style: style_21,
                title: "2010"
            });
var format_212 = new ol.format.GeoJSON();
var features_212 = format_212.readFeatures(geojson_212);
var jsonSource_212 = new ol.source.Vector();
jsonSource_212.addFeatures(features_212);
var lyr_212 = new ol.layer.Vector({
                source: jsonSource_212, 
                style: style_212,
                title: "2012"
            });

lyr_26.setVisible(true);
lyr_1999.setVisible(true);
lyr_21.setVisible(true);
lyr_212.setVisible(true);
var layersList = [baseLayer,lyr_23,lyr_26,lyr_1999,lyr_21,lyr_212];
