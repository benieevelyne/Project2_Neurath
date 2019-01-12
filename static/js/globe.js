
var viewer = new Cesium.Viewer('cesiumContainer', {
    animation : false,
    timeline : false,
 });


d3.json("/SuperSecretKey").then(function(response) {
    apiKey = response



Cesium.Ion.defaultAccessToken = apiKey;

});




function buildMap(year) {
    console.log(year)
    viewer.dataSources.removeAll();
    viewer.entities.removeAll();

    var url = `fetch_year/${year}`;
    d3.json(url).then(function(response) {

        var promise = Cesium.GeoJsonDataSource.load(response);
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


                    

                






                    if (entity.properties.arrowPath._value.length != 0) {

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
                        
                    });
                };



viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(50.00, 46.25, 8000000.0),
    orientation : {
        right: new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339),
        roll : 0.0
    }
});

buildMap(2002);

