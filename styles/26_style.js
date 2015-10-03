var categories_26 = {"A1": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(55,55,200,1.0)"})
                        })
                        ],
"A2": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(204,0,255,1.0)"})
                        })
                        ],
"B1": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(95,95,211,1.0)"})
                        })
                        ],
"B2": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(220,85,254,1.0)"})
                        })
                        ],
"C1": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(175,175,233,1.0)"})
                        })
                        ],
"C2": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(238,169,255,1.0)"})
                        })
                        ]};
                    var styleCache_26={}
                    var style_26 = function(feature, resolution){
                        var value = feature.get("CODIGO");
                        var style = categories_26[value];
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_26[key]){
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
                            styleCache_26[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_26[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };