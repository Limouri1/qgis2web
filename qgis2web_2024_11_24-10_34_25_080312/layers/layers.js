var wms_layers = [];


        var lyr_EsriShadedRelief_0 = new ol.layer.Tile({
            'title': 'Esri Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Province_Marrakech_Safi_modifiee_1 = new ol.format.GeoJSON();
var features_Province_Marrakech_Safi_modifiee_1 = format_Province_Marrakech_Safi_modifiee_1.readFeatures(json_Province_Marrakech_Safi_modifiee_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_Marrakech_Safi_modifiee_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_Marrakech_Safi_modifiee_1.addFeatures(features_Province_Marrakech_Safi_modifiee_1);
var lyr_Province_Marrakech_Safi_modifiee_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_Marrakech_Safi_modifiee_1, 
                style: style_Province_Marrakech_Safi_modifiee_1,
                popuplayertitle: "Province_Marrakech_Safi_modifiee",
                interactive: true,
    title: 'Province_Marrakech_Safi_modifiee<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_0.png" /> Province de Youssoufia : 246 098<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_1.png" /> Province de Rehamna : 345 772<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_2.png" /> Province de Chichaoua : 378 932<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_3.png" /> Province d\'Essaouira : 425 449<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_4.png" /> Province d\'El Kelaa Des Sraghna : 560 075<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_5.png" /> Province d\'Al Haouz : 642 171<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_6.png" /> Province de Safi : 719 299<br />\
    <img src="styles/legend/Province_Marrakech_Safi_modifiee_1_7.png" /> Province de Marrakech : 1 560 704<br />'
        });
var format_Cheflieu_2 = new ol.format.GeoJSON();
var features_Cheflieu_2 = format_Cheflieu_2.readFeatures(json_Cheflieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cheflieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cheflieu_2.addFeatures(features_Cheflieu_2);
var lyr_Cheflieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cheflieu_2, 
                style: style_Cheflieu_2,
                popuplayertitle: "Chef lieu",
                interactive: true,
                title: 'Chef lieu'
            });
var format_Limitemaroclines_3 = new ol.format.GeoJSON();
var features_Limitemaroclines_3 = format_Limitemaroclines_3.readFeatures(json_Limitemaroclines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitemaroclines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitemaroclines_3.addFeatures(features_Limitemaroclines_3);
var lyr_Limitemaroclines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitemaroclines_3, 
                style: style_Limitemaroclines_3,
                popuplayertitle: "Limite maroc - lines",
                interactive: true,
                title: '<img src="styles/legend/Limitemaroclines_3.png" /> Limite maroc - lines'
            });

lyr_EsriShadedRelief_0.setVisible(true);lyr_Province_Marrakech_Safi_modifiee_1.setVisible(true);lyr_Cheflieu_2.setVisible(true);lyr_Limitemaroclines_3.setVisible(true);
var layersList = [lyr_EsriShadedRelief_0,lyr_Province_Marrakech_Safi_modifiee_1,lyr_Cheflieu_2,lyr_Limitemaroclines_3];
lyr_Province_Marrakech_Safi_modifiee_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_Cheflieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_Limitemaroclines_3.set('fieldAliases', {'fid': 'fid', });
lyr_Province_Marrakech_Safi_modifiee_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'Hidden', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_Cheflieu_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'Hidden', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_Limitemaroclines_3.set('fieldImages', {'fid': '', });
lyr_Province_Marrakech_Safi_modifiee_1.set('fieldLabels', {'Nom_Provin': 'no label', 'Population_2024': 'no label', 'Chef lieu': 'no label', });
lyr_Cheflieu_2.set('fieldLabels', {'Nom_Provin': 'inline label - visible with data', 'Population_2024': 'inline label - visible with data', 'Chef lieu': 'inline label - visible with data', });
lyr_Limitemaroclines_3.set('fieldLabels', {'fid': 'no label', });
lyr_Limitemaroclines_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});