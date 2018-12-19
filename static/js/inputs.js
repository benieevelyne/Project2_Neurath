var slider = document.getElementById("timeSlider");
var label = d3.select("#timesliderlabel");
var goTime = d3.select('#goTime');



var isplaying = false
var IntervalId = null

slider.oninput = function() {
    label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`)
    if (isplaying == true) {stop(IntervalId)};  
};



go = function() {
    console.log(slider.value)
    slider.value ++;
    label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`);

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

       IntervalId = setInterval(go, 1000);   
         
        
        } else {
            stop(IntervalId)
        };
});

