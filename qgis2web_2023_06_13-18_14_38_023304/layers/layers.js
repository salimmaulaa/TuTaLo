var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Union_KelLoano_1 = new ol.format.GeoJSON();
var features_Union_KelLoano_1 = format_Union_KelLoano_1.readFeatures(json_Union_KelLoano_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Union_KelLoano_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Union_KelLoano_1.addFeatures(features_Union_KelLoano_1);
var lyr_Union_KelLoano_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Union_KelLoano_1, 
                style: style_Union_KelLoano_1,
                interactive: true,
    title: 'Union_KelLoano<br />\
    <img src="styles/legend/Union_KelLoano_1_0.png" /> Bangunan Permukiman<br />\
    <img src="styles/legend/Union_KelLoano_1_1.png" /> Hutan Lainnya<br />\
    <img src="styles/legend/Union_KelLoano_1_2.png" /> Jalan<br />\
    <img src="styles/legend/Union_KelLoano_1_3.png" /> Lapangan Olahraga<br />\
    <img src="styles/legend/Union_KelLoano_1_4.png" /> Pekarangan<br />\
    <img src="styles/legend/Union_KelLoano_1_5.png" /> Peternakan<br />\
    <img src="styles/legend/Union_KelLoano_1_6.png" /> Sawah<br />\
    <img src="styles/legend/Union_KelLoano_1_7.png" /> Sungai<br />\
    <img src="styles/legend/Union_KelLoano_1_8.png" /> Tanah Kosong<br />\
    <img src="styles/legend/Union_KelLoano_1_9.png" /> Tanaman Campuran<br />\
    <img src="styles/legend/Union_KelLoano_1_10.png" /> Tegalan/Ladang<br />\
    <img src="styles/legend/Union_KelLoano_1_11.png" /> <br />'
        });
var format_Bangunan2_Kel_Loano_2 = new ol.format.GeoJSON();
var features_Bangunan2_Kel_Loano_2 = format_Bangunan2_Kel_Loano_2.readFeatures(json_Bangunan2_Kel_Loano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan2_Kel_Loano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan2_Kel_Loano_2.addFeatures(features_Bangunan2_Kel_Loano_2);
var lyr_Bangunan2_Kel_Loano_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan2_Kel_Loano_2, 
                style: style_Bangunan2_Kel_Loano_2,
                interactive: true,
    title: 'Bangunan2_Kel_Loano<br />\
    <img src="styles/legend/Bangunan2_Kel_Loano_2_0.png" /> Belum<br />\
    <img src="styles/legend/Bangunan2_Kel_Loano_2_1.png" /> Sudah<br />\
    <img src="styles/legend/Bangunan2_Kel_Loano_2_2.png" /> <br />'
        });

lyr_GoogleEarth_0.setVisible(true);lyr_Union_KelLoano_1.setVisible(true);lyr_Bangunan2_Kel_Loano_2.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_Union_KelLoano_1,lyr_Bangunan2_Kel_Loano_2];
lyr_Union_KelLoano_1.set('fieldAliases', {'FID_Clip_K': 'FID_Clip_K', 'Jenis': 'Jenis', 'Skor': 'Skor', 'FID_Bangun': 'FID_Bangun', 'OBJECTID': 'OBJECTID', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Tema': 'Tema', 'Jenis_1': 'Jenis_1', 'Jenis_Bang': 'Jenis_Bang', 'Luas_m2': 'Luas_m2', 'Stat_Pajak': 'Stat_Pajak', 'Stat_Hak': 'Stat_Hak', });
lyr_Bangunan2_Kel_Loano_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'Tema': 'Tema', 'Jenis': 'Jenis', 'Jenis_Bang': 'Jenis_Bang', 'Luas_m2': 'Luas_m2', 'Stat_Pajak': 'Stat_Pajak', 'Stat_Hak': 'Stat_Hak', });
lyr_Union_KelLoano_1.set('fieldImages', {'FID_Clip_K': 'TextEdit', 'Jenis': 'TextEdit', 'Skor': 'TextEdit', 'FID_Bangun': 'TextEdit', 'OBJECTID': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Tema': 'TextEdit', 'Jenis_1': 'TextEdit', 'Jenis_Bang': 'TextEdit', 'Luas_m2': 'TextEdit', 'Stat_Pajak': 'TextEdit', 'Stat_Hak': 'TextEdit', });
lyr_Bangunan2_Kel_Loano_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'Tema': 'TextEdit', 'Jenis': 'TextEdit', 'Jenis_Bang': 'TextEdit', 'Luas_m2': 'TextEdit', 'Stat_Pajak': 'TextEdit', 'Stat_Hak': 'TextEdit', });
lyr_Union_KelLoano_1.set('fieldLabels', {'FID_Clip_K': 'no label', 'Jenis': 'no label', 'Skor': 'no label', 'FID_Bangun': 'no label', 'OBJECTID': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Tema': 'no label', 'Jenis_1': 'no label', 'Jenis_Bang': 'header label', 'Luas_m2': 'no label', 'Stat_Pajak': 'no label', 'Stat_Hak': 'no label', });
lyr_Bangunan2_Kel_Loano_2.set('fieldLabels', {'OBJECTID': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'Tema': 'no label', 'Jenis': 'no label', 'Jenis_Bang': 'no label', 'Luas_m2': 'no label', 'Stat_Pajak': 'header label', 'Stat_Hak': 'header label', });
lyr_Bangunan2_Kel_Loano_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});