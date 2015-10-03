var categories_212 = {"A3": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255,0,0,1.0)"})
                        })
                        ],
"B3": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(254,85,85,1.0)"})
                        })
                        ],
"C3": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255,169,169,1.0)"})
                        })
                        ]};
                    var styleCache_212={}
                    var style_212 = function(feature, resolution){
                        var value = feature.get("CODIGO");
                        var style = categories_212[value];
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_212[key]){
                            var text = new ol.style.Text({
                                  font: '11.7px Calibri,sans-serif',
                                  text: labelText,
                                  textBaseline: "center",
                                  textAlign: "left",
                                  offsetX: 5,
                                  offsetY: 3,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_212[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_212[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };