var slider = document.getElementById("timeSlider");
var label = d3.select("#timesliderlabel");
var stopTime = d3.select('#stopTime');
var goTime = d3.select('#goTime');


// SLIDER LABEL VALUE COULD BE CLEANED UP //

slider.oninput = function() {
    label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`)

};



goTime.on('click', function(){
    this.style.display = "none"
    stopTime.style.display = 'block';
    // label.classed("fa fa-stop-circle", true)
        var interval = setInterval(function() {
      
        slider.value ++,
        label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`),

        slider.oninput = function(){
            goTime.attr('display', 'block')
            d3.select('#stopTime').attr('display', 'none')
            clearInterval(interval)
            label.html(`<h3>Year:<h3><h1><b>${slider.value}</b></h1>`)
            return},

        $('#stopTime').on('click', function(){
            this.style.display = "none"
            goTime.style.display = 'block'
            clearInterval(interval)
            return})},
            

            // SPEED IN MILISECONDS
            1000);
});

