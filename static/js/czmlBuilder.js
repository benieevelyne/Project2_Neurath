
// COUNSTRUCT THE ITEM
//READ IN Various Tables


var TraffickingCZML = [{
    "id" : "document",
    "name" : "CZML Geometries: Country by Trafficking Cases",
    "version" : "1.0",
    clock: {
        interval: '',         // This is the time range of our simulation
        currentTime: '',    // This is the time associated with the start view
        multiplier: 10518975,
        range: 'LOOP_STOP',
        step: 'SYSTEM_CLOCK_MULTIPLIER'}
}];



// var trafficking =  d3.json();
// var globe =  jQuery.getJSON()
// var features = [];
// var Trafficking = null
// d3.json().then(function(data) {
//     d3.json().then(function(data2 {
//         console.log(data)
//         console.log(data2)

//     });
// });


d3.json('static/data/globe.geo.json').then(function (globe) {
if( globe ) {
    d3.json('/static/data/TraffickingGDPCounts.json').then(function (trafficking) {
    // console.log(globe.features)
    // console.log(trafficking)


    var TrafficArray = trafficking;
    var arr = globe.features;   

    for (var i = 0; i < arr.length; i++){
        var obj = arr[i];
        // console.log(obj['geometry']['coordinates'])


        for (var n = 0; n < TrafficArray.length; n++){
            var traffickObj = TrafficArray[n];
            // console.log(traffickObj['properties.code'], obj['properties']['iso_a2'])
            if (traffickObj['properties.code'] == obj['properties']['iso_a2']) {
                console.log(obj['properties']['iso_a2']) 
        
    
    
    
                var geometryPacket ={ 
    

                "id" : obj['properties']['postal'],
                "name" : obj['properties']['geounit'],
               // availability: year + '-01-01T00:00:00.000Z' + '/' + year + '-12-31T23:59:59.999Z',
                "polygon" : {
                    "positions" : {

                    },
                    // TODO MAKE TIME INTERACTIVE

                    "material" : {
                        "solidColor" : {
                            "color" : traffickObj['properties.color']
                        }
                    },
                    // TODO MAKE TIME INTERACTIVE
                    "extrudedHeight" : 1000 * traffickObj['Total'],
                    "perPositionHeight" : true,
                    "outline" : true,
                    "outlineColor" : {
                        "rgba" : [0, 0, 0, 255]
                    }
                }
                };
            console.log(geometryPacket);
            czml.push(geometryPacket);
        };


// for (country in item.countries) {
//     for (destination in country.trafficking) {
//         if (destination[0] != "Unknown" && 
//             destination[3] != "Unknown", destination[0]) {
//             var linePacket = {
//                 "id" : country.name + "to" +  destination.name,
//                 "name" : destination.count + " to "  + destination.name,
//                 "polyline" : {
//                     "show" : false,
//                     "positions" : {
//                         "cartographicDegrees" : [

//                             // MATH TO FIND CLOSEST POINTS OF POLYGONS

//                         ]
//                     },
//                     "material" : {
//                         "polylineArrow" : {
//                             "color" : {
//                                 "rgba" : [255, 0, 0, 255]
//                             },
//                         }
//                     },
//                     // "width" : MATHTODECIDEWIDTH MAX=40,
                  
//                     }
//                 };
//             };
//         };
//         czml.push(linePacket)
        // ;
//     };

// TraffickingCZML[0].clock.interval = '1995' + '-01-01T00:00:00.000Z/'+ "2017" + '-12-31T23:59:59.999Z';
// // Here we set the starting current time view of the scene, i.e., the last wildfire year reported
// TraffickingCZML[0].clock.currentTime = "2017" + '-12-31T23:59:59.999Z';

//     // # FOR COUNTRY IN ITEM.TRAFFICKING.ORIGIN_CASE.COUNTRIES
//     //     # math to determine closest points between two polygons
//     //     # origin = 
//     //     # destination = 
        

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
