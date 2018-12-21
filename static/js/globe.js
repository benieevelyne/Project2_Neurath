// var earth;
// function initialize() {
//   earth = new WE.map('globebox');
//   earth.setView([46.8011, 8.2266], 3);


//   WE.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY}).addTo(earth)

//   // Start a simple rotation animation
//   var before = null;
//   requestAnimationFrame(function animate(now) {
//       var c = earth.getPosition();
//       var elapsed = before? now - before: 0;
//       before = now;
//       earth.setCenter([c[0], c[1] - 0.1*(elapsed/30)]);
//       requestAnimationFrame(animate);
//   });

//     // Add a layer showing the state polygons.

//     // data = d3.json('static/globe.geo.json')
//     // .then( function(data) {
//     // console.log("GeoJson Data Below ")
//     // console.log(data); // <= object with loaded data
//     // for (var i = 0; i < data.length; i++) {

//     //     // Set the data location property to a variable
//     //     var location = data[i].location;
    
//     //     // Check for location property
//     //     if (location) {
    
//     //       // Add a new marker to the cluster group and bind a pop-up
//     //       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
//     //         .bindPopup(data[i].descriptor));
//     //     }};
//     // });

//     d3.json('static/globe.geo.json', function(data) {
//         // Creating a GeoJSON layer with the retrieved data
//         WE  .geoJson(data).addTo(map);
//       });
//     earth.setView([0,0], 3.25)

// };