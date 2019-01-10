
Cesium.Ion.defaultAccessToken = API_TOKEN

// var viewer = new Cesium.Viewer('cesiumContainer', { infoBox : false });
var clock = new Cesium.Clock({
    startTime : Cesium.JulianDate.fromIso8601('1990-01-01'),
    currentTime : Cesium.JulianDate.fromIso8601('1990-01-01'),
    stopTime : Cesium.JulianDate.fromIso8601('2018-12-31'),
    clockRange : Cesium.ClockRange.LOOP_STOP, // loop when we hit the end time
    clockStep : Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,
    multiplier : 4000, // how much time to advance each tick
    shouldAnimate : true // Animation on by default
 });
 
 var viewer = new Cesium.Viewer('cesiumContainer', {
    animation : false,
    timeline : false,
 });




function buildMap(year) {
    viewer.dataSources.removeAll();
    viewer.entities.removeAll();
    var promise = Cesium.GeoJsonDataSource.load('/static/data/globe' + year + '.geo.json');


    promise.then(function(dataSource) {

        viewer.dataSources.add(dataSource);




            //Get the array of entities
            var entities = dataSource.entities.values;


            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];            
                if ( entity.properties.TraffickingStats._value == "None") {
                    destroy(entity);
                } else {
                    entity.polygon.extrudedHeight = entity.properties.TraffickingStats._value.Total * 10000;
                    objColor = entity.properties.color._value;

                    entity.polygon.material = Cesium.Color.fromCssColorString(objColor).withAlpha(0.5);
                    entity.polygon.outline = false;
                    // entity.availability = Cesium.TimeInterval.fromIso8601(entity.properties.Interval._value);
                if (entity.properties.arrowPath._value.length != 0) {
                    console.log(entity.properties.arrowPath._value.length);

                    for (var n = 0; n < (entity.properties.arrowPath._value.length / 4); n++) {

                        if (entity.properties.arrowPath._value.length > 4)
                        {arrow = entity.properties.arrowPath._value[n]} 
                        else {arrow = entity.properties.arrowPath._value};

                        if (arrow[3] > 100) {
                            weight = 100}
                        else {weight = arrow[3]};
                                        }
                        viewer.entities.add({
                                name :  String(arrow[3]) + "Trafficked to" + String(arrow[0]) ,
                                polyline : {
                                    clampToGround : false,
                                    positions : Cesium.Cartesian3.fromDegreesArray([arrow[1][0], arrow[1][1],arrow[2][0],arrow[2][1]]),
                                    width : weight,
                                    material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.WHITE)
                                }
                        });
                    }
                    }}      
                });
                    
                };
     

buildMap(2002);






viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(50.00, 46.25, 8000000.0),
    orientation : {
        right: new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339),
        roll : 0.0
    }
});

