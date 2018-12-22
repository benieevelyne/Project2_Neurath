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


var promise = Cesium.GeoJsonDataSource.load('/static/globe.geo.json');
promise.then(function(dataSource) {
    viewer.dataSources.add(dataSource);

    //Get the array of entities
    var entities = dataSource.entities.values;

    var colorHash = {};
    for (var i = 0; i < entities.length; i++) {
        //For each entity, create a random color based on the state name.
        //Some states have multiple entities, so we store the color in a
        //hash so that we use the same color for the entire state.
        var entity = entities[i];
        var name = entity.name;
        var color = colorHash[name];
        if (!color) {
            color = Cesium.Color.fromRandom({
                alpha : .25
            });
            colorHash[name] = color;
        }

        //Set the polygon material to our random color.
        entity.polygon.material = color;
        //Remove the outlines.
        entity.polygon.outline = false;

        entity.polygon.extrudedHeight = 500000;
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
