// function geoArray (GeometryArray) {
//     pointList = []
//     for (var l = 0; l < GeometryArray[0][0].length; l++){
//         // console.log(GeometryArray)
//         var pointA = Cesium.Cartographic.fromRadians(GeometryArray[0][0][l][0], GeometryArray[0][0][l][1], 0);
//         pointList.push(pointA);
//     }

    
//     console.log(pointList)
//     return pointList

// };




// var TraffickingCZML = [{
//     "id" : "document",
//     "name" : "CZML Geometries: Country by Trafficking Cases",
//     "version" : "1.0",
//     clock: {
//         interval: '1990-01-01T00:00:00.000Z/2018-12-13T23:59:59.000Z',   
//         currentTime: '1990-01-01T00:00:00.000Z',    

//        }
// }];


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



// //LOAD THE GEOJSON
// var promise = Cesium.GeoJsonDataSource.load('/static/data/globe.geo.json');
// promise.then(function(dataSource) {
//     viewer.dataSources.add(dataSource);
//     // THEN THE JSON
//     if (dataSource) {
//         d3.json('/static/data/TraffickingGDPCounts.json').then(function (trafficking) {


//             entitiesWithcoding = {}



//             var entities = dataSource.entities.values;
//             for (var i = 0; i < entities.length; i++) {
//                 var entity = entities[i];

//                 //storing a dict of ID > CODE for use later
//                 entitiesWithcoding[entity.id] = entity['properties']['iso_a2']
//                 // SINCE EXTRUDED HEIGHT IS STATIC, NEED TO CLONE OBJECT FOR EACH YEAR
//                 entityYears = [];
//                 for (var l = 0; l < trafficking.length; l++) {
//                     traffickObj = trafficking[l];
//                     if (traffickObj['properties.code'] == entity['properties']['iso_a2'] &&
//                     traffickObj['TraffickDict']['Total']) {
//                         entityYears.push(traffickObj['properties.code'] + traffickObj['Year'])
//                         // var interval = traffickObj['Year'] + '-01-01T00:00:00.000Z' + '/' /
//                         //     + traffickObj['Year'] + '-12-31T23:59:59.999Z';
                            
                        
//                         // entity.polygon.extrudedHeight =  100000 * traffickObj['TraffickDict']['Total'];
//                         // entity.availabilty = interval;
//                         // entity.polygon.material =  {"solidColor" : {
//                         //                             "color" : traffickObj['properties.color']}};
                        
//                     };
//                 };
//                 console.log(entityYears)
//             }
//             console.log(entitiesWithcoding)
//         });
        
//     };
// });

// viewer.zoomTo(promise);


// d3.json('static/data/globe.geo.json').then(function (globe) {
// if( globe ) {
//     d3.json('/static/data/TraffickingGDPCounts.json').then(function (trafficking) {


//     var TrafficArray = trafficking;
//     var arr = globe.features;   

//     for (var i = 0; i < arr.length; i++){

//         var obj = arr[i];
//         for (var n = 0; n < TrafficArray.length; n++){

//             var traffickObj = TrafficArray[n];
//             if (traffickObj['properties.code'] == obj['properties']['iso_a2']) {
//                 if (traffickObj['TraffickDict']['Total']) {
//                     // console.log(obj['properties']['postal'] + traffickObj['Year']);
//                     var geometryPacket = viewer.entities.add({
    

//                         "id" : obj['properties']['postal'] + traffickObj['Year'],
          
//                         "name" : obj['properties']['geounit'],
//                         "availability" : traffickObj['Year'] + '-01-01T00:00:00.000Z' + '/' + traffickObj['Year'] + '-12-31T23:59:59.999Z',
                        

//                         "polygon" : {
//                             "positions" : {"cartographicDegrees" : geoArray(obj['geometry']['coordinates'])},
//                             "show": true,
//                             "material" : {
//                                 "solidColor" : {
//                                     "color" : traffickObj['properties.color']
//                                 }
//                             },


//                             "extrudedHeight" : 100000 * traffickObj['TraffickDict']['Total'],
//                             "perPositionHeight" : true,
//                             "outline" : true,
//                             "outlineColor" : {
//                                 "rgba" : [0, 0, 0, 255]
//                             },
//                         }   
//                         });
//                 console.log(geometryPacket)
//                 TraffickingCZML.push(geometryPacket);
//                 };
//             }
//         }};     
//         // var entity = viewer.entities.getById('CO2002');
//         // console.log(entity)  //RETURNS UNDEFINED
//         // for (entity in TraffickingCZML) {
//         //     console.log("entity =" +entity)
//         //     for (code in entity['TraffickDict']) {
//         //         console.log(code)   }};   
//     })}
// });


    //     if (code != "Total") {
    //         var linePacket = {
    //             "id" : country.name + "to" +  destination.name,
    //             "name" : destination.count + " to "  + destination.name,
    //             "polyline" : {
    //                 "show" : false,
    //                 "positions" : {
    //                     "cartographicDegrees" : [

    //                         // MATH TO FIND CLOSEST POINTS OF POLYGONS

    //                     ]
    //                 },
    //                 "material" : {
    //                     "polylineArrow" : {
    //                         "color" : {
    //                             "rgba" : [255, 0, 0, 255]
    //                         },
    //                     }
    //                 },
    //                 // "width" : MATHTODECIDEWIDTH MAX=40,
                  
    //                 }
    //             };
    //         };
    //     };
    //     czml.push(linePacket)
    //     ;
    // };








// var tileset = viewer.scene.primitives.add(
//     new Cesium.Cesium3DTileset({
//         url: Cesium.IonResource.fromAssetId(3)
//     })
// );


var promise = Cesium.GeoJsonDataSource.load('/static/data/globe2.geo.json');
promise.then(function(dataSource) {
    viewer.dataSources.add(dataSource);


        //Get the array of entities
        var entities = dataSource.entities.values;
        console.log(entities.length)
        for (var i = 0; i < entities.length; i++) {

            var entity = entities[i];

            var name = entity.name;
            // console.log(entity['TraffickDict']['Total'])

            console.log(entity, name)

            UnitColor = entity['properties']['properties.color']['Value']
            console.log(UnitColor)
            entity.polygon.material = Cesium.Color.UnitColor;
            //Remove the outlines.
            entity.polygon.outline = false;
            // console.log()
            entity.polygon.extrudedHeight = entity['properties']['TrafficingStats']['Total'] * 10000;
            entity.availability = Cesium.TimeInterval.fromIso8601(entity['properties']['Interval']);


        }
    });



// }).otherwise(function(error){
//     //Display any errrors encountered while loading.
//     window.alert(error)
// });




// var promise = Cesium.CzmlDataSource.load(TraffickingCZML)
// promise.then(function(dataSource) {
//         viewer.dataSources.add(dataSource);
// });

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

 

