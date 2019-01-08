
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
                        "cartographicDegrees" :  Cesium.Cartesian3(obj['geometry']['coordinates'])
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
            TraffickingCZML.push(geometryPacket);
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
        

}};     
            
})}
}
);
