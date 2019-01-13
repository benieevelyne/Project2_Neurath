var slider = document.getElementById("timeSlider");
var label = d3.select("#timesliderlabel");
var goTime = d3.select('#goTime');

var isplaying = false
var IntervalId = null

slider.oninput = function() {
    label.html(`<h1><b>${slider.value}</b></h1>`)
    if (isplaying == true) {stop(IntervalId)};
    buildMap(slider.value);
};


go = function() {
    console.log(slider.value)
    slider.value ++;
    label.html(`<h1><b>${slider.value}</b></h1>`);
    buildMap(slider.value)
};

stop = function(IntervalId) {
    isplaying = false
    clearInterval(IntervalId);
    console.log('paused')
    goTime.html("<i class='fas fa-play-circle'></i><span>Play Animation</span>");
}

goTime.on('click', function(){

    if (isplaying == false){
        isplaying = true
        console.log('playing')
        goTime.html("<i class='fas fa-pause-circle'></i><span>Pause Animation</span>");

       IntervalId = setInterval(go, 5000);   
         
        } else {
            stop(IntervalId)
        };
});

noshare = d3.select("#noShare")

noshare.on('click', function(){
    console.log(viewer.dataSources.length);
    if (viewer.dataSources.length == 2) {
        viewer.dataSources.removeAll();
        buildMap(slider.value)
    } else {
    
    var url = `nodata`;
    d3.json(url).then(function(response) {
        var promise2 = Cesium.GeoJsonDataSource.load(response);
        promise2.then(function(noshares) {
            viewer.dataSources.add(noshares);
            var entities = noshares.entities.values;


            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];      
                entity.polygon.material = Cesium.Color.black
                entity.polygon.extrudedHeight == 100;
                entity.polygon.outline = false;
            }
        });
    });
    };
});