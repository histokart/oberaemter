ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([538623.555815, 5922477.728379, 1562137.722482, 6701675.645046]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.350000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap-Beitragende</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ObermterHohenzollern1925_1 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1925_1 = format_ObermterHohenzollern1925_1.readFeatures(json_ObermterHohenzollern1925_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1925_1 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de">Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1925_1.addFeatures(features_ObermterHohenzollern1925_1);
var lyr_ObermterHohenzollern1925_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1925_1, 
                style: style_ObermterHohenzollern1925_1,
                popuplayertitle: 'Oberämter Hohenzollern 1925',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1925_1.png" /> Oberämter Hohenzollern 1925'
            });
var format_ObermterHohenzollern1862_2 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1862_2 = format_ObermterHohenzollern1862_2.readFeatures(json_ObermterHohenzollern1862_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1862_2 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1862_2.addFeatures(features_ObermterHohenzollern1862_2);
var lyr_ObermterHohenzollern1862_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1862_2, 
                style: style_ObermterHohenzollern1862_2,
                popuplayertitle: 'Oberämter Hohenzollern 1862',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1862_2.png" /> Oberämter Hohenzollern 1862'
            });
var format_ObermterHohenzollern1861_3 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1861_3 = format_ObermterHohenzollern1861_3.readFeatures(json_ObermterHohenzollern1861_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1861_3 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1861_3.addFeatures(features_ObermterHohenzollern1861_3);
var lyr_ObermterHohenzollern1861_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1861_3, 
                style: style_ObermterHohenzollern1861_3,
                popuplayertitle: 'Oberämter Hohenzollern 1861',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1861_3.png" /> Oberämter Hohenzollern 1861'
            });
var format_ObermterHohenzollern1854_4 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1854_4 = format_ObermterHohenzollern1854_4.readFeatures(json_ObermterHohenzollern1854_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1854_4 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1854_4.addFeatures(features_ObermterHohenzollern1854_4);
var lyr_ObermterHohenzollern1854_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1854_4, 
                style: style_ObermterHohenzollern1854_4,
                popuplayertitle: 'Oberämter Hohenzollern 1854',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1854_4.png" /> Oberämter Hohenzollern 1854'
            });
var format_ObermterHohenzollern1840_5 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1840_5 = format_ObermterHohenzollern1840_5.readFeatures(json_ObermterHohenzollern1840_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1840_5 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1840_5.addFeatures(features_ObermterHohenzollern1840_5);
var lyr_ObermterHohenzollern1840_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1840_5, 
                style: style_ObermterHohenzollern1840_5,
                popuplayertitle: 'Oberämter Hohenzollern 1840',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1840_5.png" /> Oberämter Hohenzollern 1840'
            });
var format_ObermterHohenzollern1838_6 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1838_6 = format_ObermterHohenzollern1838_6.readFeatures(json_ObermterHohenzollern1838_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1838_6 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1838_6.addFeatures(features_ObermterHohenzollern1838_6);
var lyr_ObermterHohenzollern1838_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1838_6, 
                style: style_ObermterHohenzollern1838_6,
                popuplayertitle: 'Oberämter Hohenzollern 1838',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1838_6.png" /> Oberämter Hohenzollern 1838'
            });
var format_ObermterHohenzollern1830_7 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1830_7 = format_ObermterHohenzollern1830_7.readFeatures(json_ObermterHohenzollern1830_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1830_7 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1830_7.addFeatures(features_ObermterHohenzollern1830_7);
var lyr_ObermterHohenzollern1830_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1830_7, 
                style: style_ObermterHohenzollern1830_7,
                popuplayertitle: 'Oberämter Hohenzollern 1830',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1830_7.png" /> Oberämter Hohenzollern 1830'
            });
var format_ObermterHohenzollern1828_8 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1828_8 = format_ObermterHohenzollern1828_8.readFeatures(json_ObermterHohenzollern1828_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1828_8 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1828_8.addFeatures(features_ObermterHohenzollern1828_8);
var lyr_ObermterHohenzollern1828_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1828_8, 
                style: style_ObermterHohenzollern1828_8,
                popuplayertitle: 'Oberämter Hohenzollern 1828',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1828_8.png" /> Oberämter Hohenzollern 1828'
            });
var format_ObermterHohenzollern1827_9 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1827_9 = format_ObermterHohenzollern1827_9.readFeatures(json_ObermterHohenzollern1827_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1827_9 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1827_9.addFeatures(features_ObermterHohenzollern1827_9);
var lyr_ObermterHohenzollern1827_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1827_9, 
                style: style_ObermterHohenzollern1827_9,
                popuplayertitle: 'Oberämter Hohenzollern 1827',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1827_9.png" /> Oberämter Hohenzollern 1827'
            });
var format_ObermterHohenzollern1823_10 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1823_10 = format_ObermterHohenzollern1823_10.readFeatures(json_ObermterHohenzollern1823_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1823_10 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1823_10.addFeatures(features_ObermterHohenzollern1823_10);
var lyr_ObermterHohenzollern1823_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1823_10, 
                style: style_ObermterHohenzollern1823_10,
                popuplayertitle: 'Oberämter Hohenzollern 1823',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1823_10.png" /> Oberämter Hohenzollern 1823'
            });
var format_ObermterHohenzollern1822_11 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1822_11 = format_ObermterHohenzollern1822_11.readFeatures(json_ObermterHohenzollern1822_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1822_11 = new ol.source.Vector({
    attributions: '<a href="">Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1822_11.addFeatures(features_ObermterHohenzollern1822_11);
var lyr_ObermterHohenzollern1822_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1822_11, 
                style: style_ObermterHohenzollern1822_11,
                popuplayertitle: 'Oberämter Hohenzollern 1822',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1822_11.png" /> Oberämter Hohenzollern 1822'
            });
var format_ObermterHohenzollern1814_12 = new ol.format.GeoJSON();
var features_ObermterHohenzollern1814_12 = format_ObermterHohenzollern1814_12.readFeatures(json_ObermterHohenzollern1814_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterHohenzollern1814_12 = new ol.source.Vector({
    attributions: '<a href="https://www.lgl-bw.de">Datenquelle: LGL, www.lgl-bw.de, dl-de/by-2-0; Franz-Josef Ziwes</a>',
});
jsonSource_ObermterHohenzollern1814_12.addFeatures(features_ObermterHohenzollern1814_12);
var lyr_ObermterHohenzollern1814_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterHohenzollern1814_12, 
                style: style_ObermterHohenzollern1814_12,
                popuplayertitle: 'Oberämter Hohenzollern 1814',
                interactive: true,
                title: '<img src="styles/legend/ObermterHohenzollern1814_12.png" /> Oberämter Hohenzollern 1814'
            });
var format_BezirksmterBaden_13 = new ol.format.GeoJSON();
var features_BezirksmterBaden_13 = format_BezirksmterBaden_13.readFeatures(json_BezirksmterBaden_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BezirksmterBaden_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BezirksmterBaden_13.addFeatures(features_BezirksmterBaden_13);
var lyr_BezirksmterBaden_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BezirksmterBaden_13, 
                style: style_BezirksmterBaden_13,
                popuplayertitle: 'Bezirksämter Baden',
                interactive: true,
                title: '<img src="styles/legend/BezirksmterBaden_13.png" /> Bezirksämter Baden'
            });
var format_ObermterWrttemberg_14 = new ol.format.GeoJSON();
var features_ObermterWrttemberg_14 = format_ObermterWrttemberg_14.readFeatures(json_ObermterWrttemberg_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObermterWrttemberg_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObermterWrttemberg_14.addFeatures(features_ObermterWrttemberg_14);
var lyr_ObermterWrttemberg_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObermterWrttemberg_14, 
                style: style_ObermterWrttemberg_14,
                popuplayertitle: 'Oberämter Württemberg',
                interactive: true,
                title: '<img src="styles/legend/ObermterWrttemberg_14.png" /> Oberämter Württemberg'
            });
var group_ObermterHohenzollern = new ol.layer.Group({
                                layers: [lyr_ObermterHohenzollern1925_1,lyr_ObermterHohenzollern1862_2,lyr_ObermterHohenzollern1861_3,lyr_ObermterHohenzollern1854_4,lyr_ObermterHohenzollern1840_5,lyr_ObermterHohenzollern1838_6,lyr_ObermterHohenzollern1830_7,lyr_ObermterHohenzollern1828_8,lyr_ObermterHohenzollern1827_9,lyr_ObermterHohenzollern1823_10,lyr_ObermterHohenzollern1822_11,lyr_ObermterHohenzollern1814_12,],
                                fold: 'close',
                                title: 'Oberämter Hohenzollern'});

lyr_OpenStreetMap_0.setVisible(true);lyr_ObermterHohenzollern1925_1.setVisible(true);lyr_ObermterHohenzollern1862_2.setVisible(false);lyr_ObermterHohenzollern1861_3.setVisible(false);lyr_ObermterHohenzollern1854_4.setVisible(false);lyr_ObermterHohenzollern1840_5.setVisible(false);lyr_ObermterHohenzollern1838_6.setVisible(false);lyr_ObermterHohenzollern1830_7.setVisible(false);lyr_ObermterHohenzollern1828_8.setVisible(false);lyr_ObermterHohenzollern1827_9.setVisible(false);lyr_ObermterHohenzollern1823_10.setVisible(false);lyr_ObermterHohenzollern1822_11.setVisible(false);lyr_ObermterHohenzollern1814_12.setVisible(true);lyr_BezirksmterBaden_13.setVisible(true);lyr_ObermterWrttemberg_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_ObermterHohenzollern,lyr_BezirksmterBaden_13,lyr_ObermterWrttemberg_14];
lyr_ObermterHohenzollern1925_1.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1862_2.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1861_3.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1854_4.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1840_5.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1838_6.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1830_7.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1828_8.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1827_9.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1823_10.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1822_11.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1814_12.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum von', 'Zeitraum_bis': 'Zeitraum bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_BezirksmterBaden_13.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum_von', 'Zeitraum_bis': 'Zeitraum_bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterWrttemberg_14.set('fieldAliases', {'fid': 'fid', 'Territor_1': 'Land', 'Oberamt': 'Amtsbezirk', 'Zeitraum_von': 'Zeitraum_von', 'Zeitraum_bis': 'Zeitraum_bis', 'Stichjahr': 'Stichjahr', 'Archivlink': 'Archivalien im Landesarchiv BW', 'Archivlink1': '-', 'Archivlink2': '-', 'Archivlink3': '-', 'Archivlink4': '-', 'Archivlink5': '-', });
lyr_ObermterHohenzollern1925_1.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1862_2.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1861_3.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1854_4.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1840_5.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1838_6.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1830_7.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1828_8.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1827_9.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1823_10.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1822_11.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1814_12.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'TextEdit', 'Zeitraum_bis': 'TextEdit', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_BezirksmterBaden_13.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'Hidden', 'Zeitraum_bis': 'Hidden', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterWrttemberg_14.set('fieldImages', {'fid': 'Hidden', 'Territor_1': 'TextEdit', 'Oberamt': 'TextEdit', 'Zeitraum_von': 'Hidden', 'Zeitraum_bis': 'Hidden', 'Stichjahr': 'TextEdit', 'Archivlink': 'TextEdit', 'Archivlink1': 'TextEdit', 'Archivlink2': 'TextEdit', 'Archivlink3': 'TextEdit', 'Archivlink4': 'TextEdit', 'Archivlink5': 'TextEdit', });
lyr_ObermterHohenzollern1925_1.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1862_2.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1861_3.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1854_4.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1840_5.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1838_6.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1830_7.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1828_8.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - always visible', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1827_9.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - always visible', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1823_10.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1822_11.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterHohenzollern1814_12.set('fieldLabels', {'Territor_1': 'inline label - always visible', 'Oberamt': 'inline label - visible with data', 'Zeitraum_von': 'inline label - visible with data', 'Zeitraum_bis': 'inline label - visible with data', 'Stichjahr': 'no label', 'Archivlink': 'header label - always visible', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_BezirksmterBaden_13.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Stichjahr': 'inline label - visible with data', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterWrttemberg_14.set('fieldLabels', {'Territor_1': 'inline label - visible with data', 'Oberamt': 'inline label - visible with data', 'Stichjahr': 'inline label - visible with data', 'Archivlink': 'header label - visible with data', 'Archivlink1': 'header label - visible with data', 'Archivlink2': 'header label - visible with data', 'Archivlink3': 'header label - visible with data', 'Archivlink4': 'header label - visible with data', 'Archivlink5': 'header label - visible with data', });
lyr_ObermterWrttemberg_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});