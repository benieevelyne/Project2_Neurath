




var viewer = new Cesium.Viewer('cesiumContainer', {
    // timeline: false,
    // animation: false,
    terrainProvider: Cesium.createWorldTerrain(),
  
});

var tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(3)
    })
);


var promise = Cesium.GeoJsonDataSource.load('/static/data/globe2.geo.json');
promise.then(function(dataSource) {
    viewer.dataSources.add(dataSource);

    //Get the array of entities
    var entities = dataSource.entities.values;
  
    for (var i = 0; i < entities.length; i++) {

        var entity = entities[i];
        var entityColor = entity.color
        var color = Cesium.Color.fromAlpha(Cesium.Color.entityColor, 0.2);

        entity.polygon.material = color
        //Remove the outlines.
        entity.polygon.outline = false;

        entity.polygon.extrudedHeight = entitiy.TotalTrafficked * 10000;



    }



}).otherwise(function(error){
    //Display any errrors encountered while loading.
    window.alert(error);
});
var camera = viewer.camera;

viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-122.19, 46.25, 8000000.0),
    orientation : {
        right: new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339),
        // heading : Cesium.Math.toRadians(0.0),
        // pitch : Cesium.Math.toRadians(-35.0),
        roll : 0.0
    }
});



var orangeOutlined = viewer.entities.add({
    name : 'Orange line with black outline at height and following the surface',
    polyline : {
        clampToGround : true,
        positions : Cesium.Cartesian3.fromDegreesArrayHeights([-100, 39, 2500000,
                                                               -125, -39, 2500000]),
        width : 25,
        material : new Cesium.PolylineOutlineMaterialProperty({
            color : Cesium.Color.ORANGE,
            outlineWidth : 2,
            outlineColor : Cesium.Color.BLACK
        })
    }
});


