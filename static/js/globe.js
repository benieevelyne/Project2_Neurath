

var viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate : true,
    terrainProvider: Cesium.createWorldTerrain(),
});


var clock = new Cesium.Clock({
    startTime : Cesium.JulianDate.fromIso8601("1990-01-01"),
    currentTime : Cesium.JulianDate.fromIso8601("1990-01-01"),
    stopTime : Cesium.JulianDate.fromIso8601("2018-12-31"),
    clockRange : Cesium.ClockRange.LOOP_STOP,
    clockStep : Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,
    shouldAnimate: true
 });









var promise = Cesium.GeoJsonDataSource.load('/static/data/globe2.geo.json');

setTimeout(function(){
console.log("timeout over")
console.log( viewer.dataSources)
}, 5000);

promise.then(function(dataSource) {
    viewer.dataSources.add(dataSource);




        //Get the array of entities
        var entities = dataSource.entities.values;

        console.log("Total Entities: " + entities.length);
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];            
            entity.polygon.extrudedHeight = entity.properties.TraffickingStats._value.Total * 1000;
            objColor = entity.properties.color._value;
            console.log(objColor)
            
            entity.polygon.material = Cesium.Color.objColor
            entity.polygon.outline = true;
            
            // //  entity.properties.TrafficingStats.Total * 10000;
            // entity.availability = Cesium.TimeInterval.fromIso8601(entity.properties.Interval._value);    


        };
  
    });



viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-122.19, 46.25, 8000000.0),
    orientation : {
        right: new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339),
        roll : 0.0
    }
});




// console.log(viewer.entities._entities);  //SHOWS ALL THE ENTITIES I WOULD EXPECT

// var orangeOutlined = viewer.entities.add({
//     name : 'Orange line with black outline at height and following the surface',
//     polyline : {
//         clampToGround : true,
//         positions : Cesium.Cartesian3.fromDegreesArrayHeights([-100, 39, 2500000,
//                                                                -125, -39, 2500000]),
//         width : 25,
//         material : new Cesium.PolylineOutlineMaterialProperty({
//             color : Cesium.Color.ORANGE,
//             outlineWidth : 2,
//             outlineColor : Cesium.Color.BLACK
//         })
//     }
// });

 

