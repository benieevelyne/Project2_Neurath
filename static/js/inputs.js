var slider = document.getElementById("timeSlider");
var label = d3.select("#timesliderlabel");
var goTime = d3.select('#goTime');


// SLIDER LABEL VALUE COULD BE CLEANED UP //

slider.oninput = function() {
    label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`)

    
};



goTime.on('click', function(){
    goTime.html("<i class='fas fa-pause-circle'></i><span>Pause Animation</span>")
    // label.classed("fa fa-stop-circle", true)
        var interval = setInterval(function() {
      
        slider.value ++,
        label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`),

        slider.oninput = function(){
            goTime.html("<i class='fas fa-play-circle'></i><span>Play Animation</span>")
            clearInterval(interval)
            label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`)
            return},


            // THIS JUST TRIGGERS FUNCTION AGAIN
        $('#goTime').on('click', function(){
            goTime.html("<i class='fas fa-play-circle'></i><span>Play Animation</span>")
            clearInterval(interval)
            return})},
            

            // SPEED IN MILISECONDS
            1000);
});

