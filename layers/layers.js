ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([442598.974965, 5947980.279558, 1567660.224965, 6660820.696225]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.350000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright ">OpenStreetMap-Beitragende - </a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ObermterHohenzollern19254Amtsbezirke_1 = new ol.format.GeoJSON();
var features_ObermterHohenzollern19254Amtsbezirke_1 = format_ObermterHohenzollern19254Amtsbezirke_1.readFeatures(json_ObermterHohenzollern19254Amtsbezirke_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern19254Amtsbezirke_1 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern19254Amtsbezirke_1.addFeatures(features_ObermterHohenzollern19254Amtsbezirke_1);
var lyr_ObermterHohenzollern19254Amtsbezirke_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern19254Amtsbezirke_1, 
                style: style_ObermterHohenzollern19254Amtsbezirke_1,
                popuplayertitle: 'Oberämter Hohenzollern 1925 [4 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern19254Amtsbezirke_1.png" /> Oberämter Hohenzollern 1925 [4 Amtsbezirke]'
            });
var format_ObermterHohenzollern18626Amtsbezirke_2 = new ol.format.GeoJSON();
var features_ObermterHohenzollern18626Amtsbezirke_2 = format_ObermterHohenzollern18626Amtsbezirke_2.readFeatures(json_ObermterHohenzollern18626Amtsbezirke_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern18626Amtsbezirke_2 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern18626Amtsbezirke_2.addFeatures(features_ObermterHohenzollern18626Amtsbezirke_2);
var lyr_ObermterHohenzollern18626Amtsbezirke_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern18626Amtsbezirke_2, 
                style: style_ObermterHohenzollern18626Amtsbezirke_2,
                popuplayertitle: 'Oberämter Hohenzollern 1862 [6 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern18626Amtsbezirke_2.png" /> Oberämter Hohenzollern 1862 [6 Amtsbezirke]'
            });
var format_ObermterHohenzollern18617Amtsbezirke_3 = new ol.format.GeoJSON();
var features_ObermterHohenzollern18617Amtsbezirke_3 = format_ObermterHohenzollern18617Amtsbezirke_3.readFeatures(json_ObermterHohenzollern18617Amtsbezirke_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern18617Amtsbezirke_3 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern18617Amtsbezirke_3.addFeatures(features_ObermterHohenzollern18617Amtsbezirke_3);
var lyr_ObermterHohenzollern18617Amtsbezirke_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern18617Amtsbezirke_3, 
                style: style_ObermterHohenzollern18617Amtsbezirke_3,
                popuplayertitle: 'Oberämter Hohenzollern 1861 [7 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern18617Amtsbezirke_3.png" /> Oberämter Hohenzollern 1861 [7 Amtsbezirke]'
            });
var format_ObermterHohenzollern185410Amtsbezirke_4 = new ol.format.GeoJSON();
var features_ObermterHohenzollern185410Amtsbezirke_4 = format_ObermterHohenzollern185410Amtsbezirke_4.readFeatures(json_ObermterHohenzollern185410Amtsbezirke_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern185410Amtsbezirke_4 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern185410Amtsbezirke_4.addFeatures(features_ObermterHohenzollern185410Amtsbezirke_4);
var lyr_ObermterHohenzollern185410Amtsbezirke_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern185410Amtsbezirke_4, 
                style: style_ObermterHohenzollern185410Amtsbezirke_4,
                popuplayertitle: 'Oberämter Hohenzollern 1854 [10 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern185410Amtsbezirke_4.png" /> Oberämter Hohenzollern 1854 [10 Amtsbezirke]'
            });
var format_ObermterHohenzollern184011Amtsbezirke_5 = new ol.format.GeoJSON();
var features_ObermterHohenzollern184011Amtsbezirke_5 = format_ObermterHohenzollern184011Amtsbezirke_5.readFeatures(json_ObermterHohenzollern184011Amtsbezirke_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern184011Amtsbezirke_5 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern184011Amtsbezirke_5.addFeatures(features_ObermterHohenzollern184011Amtsbezirke_5);
var lyr_ObermterHohenzollern184011Amtsbezirke_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern184011Amtsbezirke_5, 
                style: style_ObermterHohenzollern184011Amtsbezirke_5,
                popuplayertitle: 'Oberämter Hohenzollern 1840 [11 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern184011Amtsbezirke_5.png" /> Oberämter Hohenzollern 1840 [11 Amtsbezirke]'
            });
var format_ObermterHohenzollern183811Amtsbezirke_6 = new ol.format.GeoJSON();
var features_ObermterHohenzollern183811Amtsbezirke_6 = format_ObermterHohenzollern183811Amtsbezirke_6.readFeatures(json_ObermterHohenzollern183811Amtsbezirke_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern183811Amtsbezirke_6 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern183811Amtsbezirke_6.addFeatures(features_ObermterHohenzollern183811Amtsbezirke_6);
var lyr_ObermterHohenzollern183811Amtsbezirke_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern183811Amtsbezirke_6, 
                style: style_ObermterHohenzollern183811Amtsbezirke_6,
                popuplayertitle: 'Oberämter Hohenzollern 1838 [11 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern183811Amtsbezirke_6.png" /> Oberämter Hohenzollern 1838 [11 Amtsbezirke]'
            });
var format_ObermterHohenzollern183012Amtsbezirke_7 = new ol.format.GeoJSON();
var features_ObermterHohenzollern183012Amtsbezirke_7 = format_ObermterHohenzollern183012Amtsbezirke_7.readFeatures(json_ObermterHohenzollern183012Amtsbezirke_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern183012Amtsbezirke_7 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern183012Amtsbezirke_7.addFeatures(features_ObermterHohenzollern183012Amtsbezirke_7);
var lyr_ObermterHohenzollern183012Amtsbezirke_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern183012Amtsbezirke_7, 
                style: style_ObermterHohenzollern183012Amtsbezirke_7,
                popuplayertitle: 'Oberämter Hohenzollern 1830 [12 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern183012Amtsbezirke_7.png" /> Oberämter Hohenzollern 1830 [12 Amtsbezirke]'
            });
var format_ObermterHohenzollern182813Amtsbezirke_8 = new ol.format.GeoJSON();
var features_ObermterHohenzollern182813Amtsbezirke_8 = format_ObermterHohenzollern182813Amtsbezirke_8.readFeatures(json_ObermterHohenzollern182813Amtsbezirke_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern182813Amtsbezirke_8 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern182813Amtsbezirke_8.addFeatures(features_ObermterHohenzollern182813Amtsbezirke_8);
var lyr_ObermterHohenzollern182813Amtsbezirke_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern182813Amtsbezirke_8, 
                style: style_ObermterHohenzollern182813Amtsbezirke_8,
                popuplayertitle: 'Oberämter Hohenzollern 1828 [13 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern182813Amtsbezirke_8.png" /> Oberämter Hohenzollern 1828 [13 Amtsbezirke]'
            });
var format_ObermterHohenzollern182713Amtsbezirke_9 = new ol.format.GeoJSON();
var features_ObermterHohenzollern182713Amtsbezirke_9 = format_ObermterHohenzollern182713Amtsbezirke_9.readFeatures(json_ObermterHohenzollern182713Amtsbezirke_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern182713Amtsbezirke_9 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern182713Amtsbezirke_9.addFeatures(features_ObermterHohenzollern182713Amtsbezirke_9);
var lyr_ObermterHohenzollern182713Amtsbezirke_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern182713Amtsbezirke_9, 
                style: style_ObermterHohenzollern182713Amtsbezirke_9,
                popuplayertitle: 'Oberämter Hohenzollern 1827 [13 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern182713Amtsbezirke_9.png" /> Oberämter Hohenzollern 1827 [13 Amtsbezirke]'
            });
var format_ObermterHohenzollern182313Amtsbezirke_10 = new ol.format.GeoJSON();
var features_ObermterHohenzollern182313Amtsbezirke_10 = format_ObermterHohenzollern182313Amtsbezirke_10.readFeatures(json_ObermterHohenzollern182313Amtsbezirke_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern182313Amtsbezirke_10 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern182313Amtsbezirke_10.addFeatures(features_ObermterHohenzollern182313Amtsbezirke_10);
var lyr_ObermterHohenzollern182313Amtsbezirke_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern182313Amtsbezirke_10, 
                style: style_ObermterHohenzollern182313Amtsbezirke_10,
                popuplayertitle: 'Oberämter Hohenzollern 1823 [13 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern182313Amtsbezirke_10.png" /> Oberämter Hohenzollern 1823 [13 Amtsbezirke]'
            });
var format_ObermterHohenzollern182213Amtsbezirke_11 = new ol.format.GeoJSON();
var features_ObermterHohenzollern182213Amtsbezirke_11 = format_ObermterHohenzollern182213Amtsbezirke_11.readFeatures(json_ObermterHohenzollern182213Amtsbezirke_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern182213Amtsbezirke_11 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern182213Amtsbezirke_11.addFeatures(features_ObermterHohenzollern182213Amtsbezirke_11);
var lyr_ObermterHohenzollern182213Amtsbezirke_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern182213Amtsbezirke_11, 
                style: style_ObermterHohenzollern182213Amtsbezirke_11,
                popuplayertitle: 'Oberämter Hohenzollern 1822 [13 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern182213Amtsbezirke_11.png" /> Oberämter Hohenzollern 1822 [13 Amtsbezirke]'
            });
var format_ObermterHohenzollern181414Amtsbezirke_12 = new ol.format.GeoJSON();
var features_ObermterHohenzollern181414Amtsbezirke_12 = format_ObermterHohenzollern181414Amtsbezirke_12.readFeatures(json_ObermterHohenzollern181414Amtsbezirke_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern181414Amtsbezirke_12 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern181414Amtsbezirke_12.addFeatures(features_ObermterHohenzollern181414Amtsbezirke_12);
var lyr_ObermterHohenzollern181414Amtsbezirke_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern181414Amtsbezirke_12, 
                style: style_ObermterHohenzollern181414Amtsbezirke_12,
                popuplayertitle: 'Oberämter Hohenzollern 1814 [14 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern181414Amtsbezirke_12.png" /> Oberämter Hohenzollern 1814 [14 Amtsbezirke]'
            });
var format_BezirksmterBaden53Amtsbezirke_13 = new ol.format.GeoJSON();
var features_BezirksmterBaden53Amtsbezirke_13 = format_BezirksmterBaden53Amtsbezirke_13.readFeatures(json_BezirksmterBaden53Amtsbezirke_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BezirksmterBaden53Amtsbezirke_13 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_BezirksmterBaden53Amtsbezirke_13.addFeatures(features_BezirksmterBaden53Amtsbezirke_13);
var lyr_BezirksmterBaden53Amtsbezirke_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BezirksmterBaden53Amtsbezirke_13, 
                style: style_BezirksmterBaden53Amtsbezirke_13,
                popuplayertitle: 'Bezirksämter Baden [53 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/BezirksmterBaden53Amtsbezirke_13.png" /> Bezirksämter Baden [53 Amtsbezirke]'
            });
var format_ObermterWrttemberg62Amtsbezirke_14 = new ol.format.GeoJSON();
var features_ObermterWrttemberg62Amtsbezirke_14 = format_ObermterWrttemberg62Amtsbezirke_14.readFeatures(json_ObermterWrttemberg62Amtsbezirke_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterWrttemberg62Amtsbezirke_14 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de"> Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterWrttemberg62Amtsbezirke_14.addFeatures(features_ObermterWrttemberg62Amtsbezirke_14);
var lyr_ObermterWrttemberg62Amtsbezirke_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterWrttemberg62Amtsbezirke_14, 
                style: style_ObermterWrttemberg62Amtsbezirke_14,
                popuplayertitle: 'Oberämter Württemberg [62 Amtsbezirke]',
                interactive: true,
                title: '<img src="styles/legend/ObermterWrttemberg62Amtsbezirke_14.png" /> Oberämter Württemberg [62 Amtsbezirke]'
            });
var group_ObermterHohenzollern = new ol.layer.Group({
                                layers: [lyr_ObermterHohenzollern19254Amtsbezirke_1,lyr_ObermterHohenzollern18626Amtsbezirke_2,lyr_ObermterHohenzollern18617Amtsbezirke_3,lyr_ObermterHohenzollern185410Amtsbezirke_4,lyr_ObermterHohenzollern184011Amtsbezirke_5,lyr_ObermterHohenzollern183811Amtsbezirke_6,lyr_ObermterHohenzollern183012Amtsbezirke_7,lyr_ObermterHohenzollern182813Amtsbezirke_8,lyr_ObermterHohenzollern182713Amtsbezirke_9,lyr_ObermterHohenzollern182313Amtsbezirke_10,lyr_ObermterHohenzollern182213Amtsbezirke_11,lyr_ObermterHohenzollern181414Amtsbezirke_12,],
                                fold: 'open',
                                title: 'Oberämter Hohenzollern'});

lyr_OpenStreetMap_0.setVisible(true);lyr_ObermterHohenzollern19254Amtsbezirke_1.setVisible(true);lyr_ObermterHohenzollern18626Amtsbezirke_2.setVisible(false);lyr_ObermterHohenzollern18617Amtsbezirke_3.setVisible(false);lyr_ObermterHohenzollern185410Amtsbezirke_4.setVisible(false);lyr_ObermterHohenzollern184011Amtsbezirke_5.setVisible(false);lyr_ObermterHohenzollern183811Amtsbezirke_6.setVisible(false);lyr_ObermterHohenzollern183012Amtsbezirke_7.setVisible(false);lyr_ObermterHohenzollern182813Amtsbezirke_8.setVisible(false);lyr_ObermterHohenzollern182713Amtsbezirke_9.setVisible(false);lyr_ObermterHohenzollern182313Amtsbezirke_10.setVisible(false);lyr_ObermterHohenzollern182213Amtsbezirke_11.setVisible(false);lyr_ObermterHohenzollern181414Amtsbezirke_12.setVisible(false);lyr_BezirksmterBaden53Amtsbezirke_13.setVisible(true);lyr_ObermterWrttemberg62Amtsbezirke_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_ObermterHohenzollern,lyr_BezirksmterBaden53Amtsbezirke_13,lyr_ObermterWrttemberg62Amtsbezirke_14];
lyr_ObermterHohenzollern19254Amtsbezirke_1.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern18626Amtsbezirke_2.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern18617Amtsbezirke_3.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern185410Amtsbezirke_4.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern184011Amtsbezirke_5.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern183811Amtsbezirke_6.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern183012Amtsbezirke_7.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern182813Amtsbezirke_8.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern182713Amtsbezirke_9.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern182313Amtsbezirke_10.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern182213Amtsbezirke_11.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern181414Amtsbezirke_12.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_BezirksmterBaden53Amtsbezirke_13.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum_von', 'Zeitraum_bis': 'Zeitraum_bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterWrttemberg62Amtsbezirke_14.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum_von', 'Zeitraum_bis': 'Zeitraum_bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern19254Amtsbezirke_1.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern18626Amtsbezirke_2.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern18617Amtsbezirke_3.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern185410Amtsbezirke_4.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern184011Amtsbezirke_5.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern183811Amtsbezirke_6.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern183012Amtsbezirke_7.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern182813Amtsbezirke_8.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern182713Amtsbezirke_9.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern182313Amtsbezirke_10.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern182213Amtsbezirke_11.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern181414Amtsbezirke_12.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_BezirksmterBaden53Amtsbezirke_13.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'Hidden', 'Zeitraum_bis': 'Hidden', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterWrttemberg62Amtsbezirke_14.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'Hidden', 'Zeitraum_bis': 'Hidden', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern19254Amtsbezirke_1.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'inline label - visible with data', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern18626Amtsbezirke_2.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern18617Amtsbezirke_3.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern185410Amtsbezirke_4.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern184011Amtsbezirke_5.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern183811Amtsbezirke_6.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern183012Amtsbezirke_7.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern182813Amtsbezirke_8.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - always visible', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern182713Amtsbezirke_9.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - always visible', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern182313Amtsbezirke_10.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern182213Amtsbezirke_11.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern181414Amtsbezirke_12.set('fieldLabels', {'Territor_1': 'inline label - always visible', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'hidden field', 'Archivlink': 'header label - always visible', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_BezirksmterBaden53Amtsbezirke_13.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Stichjahr': 'inline label - visible with data', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterWrttemberg62Amtsbezirke_14.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Stichjahr': 'inline label - visible with data', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterWrttemberg62Amtsbezirke_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});