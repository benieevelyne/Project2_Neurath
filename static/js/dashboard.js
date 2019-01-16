//As soon as the html is render, it fires anything in document ready. It grabs whatever has id of countryselector (which happens to be a dropdown for the country). Then it sets the value to USA
$(document).ready(function(){
    $('#countrySelectStackedBar').val('United States of America');
    $('#countrySelectStackedBar').trigger('change'); //This fires the change event - Changing the value in the dropdown list.
});

//create select dropdown lists
var $countrySelectListStackedBar = document.getElementById("countrySelectStackedBar");
function countries (){
    d3.json('/fetch_country').then(function(response) {

        var selectbar = d3.select('#countrySelectStackedBar')
        response.forEach(element => { //element points at the e
            selectbar.append('option').attr('value', element).text(element)
        })



  return response; 
    })
    
}



countrieslist = countries();
console.log(countrieslist)
//select is typically for things that you haven't created yet.
// var countrydropdown = d3.selectAll('#countryS    electStackedBar').data(countrieslist).enter().append('option').attr('value', d=> d).text(d=> d);
function optionChangedStackedBar(country) {
    
    //set url for flask route using select objects
    var url = `/api/data/${country}`; //placeholder syntax for javascript
d3.json(url).then(function(response) {
// d3.json(url).then(function(response))
    console.log(response);

    //get data from response object
    // countriesToPlot = response.countries;
    // youthData = response.youth_data;
    // adultData = response.adult_data;
    // elderData = response.elder_data;
    var data = response;

    yearData = response.map( d => d.years)
    youthData = response.map( d => d.TotalYouth)
    adultData = response.map( d => d.TotalAdult)
    elderData = response.map( d => d.TotalElder)
    console.log(yearData)

    
    console.log(youthData)
    console.log(adultData)
    console.log(elderData)
     //set up data traces
     var youthTrace = {
        x: yearData,
        y: youthData,
        name: 'Youth age: 0-19',
        type: 'bar',
        marker: {
            color: 'rgb(205, 127, 50)'
        }
    };

    var adultTrace = {
        x: yearData,
        y: adultData,
        name: 'Adult age: 20-48',
        type: 'bar',
        marker: {
            color: 'rgb(192,192,192)'
        }
    };

    var elderTrace = {
        x: yearData,
        y: elderData,
        name: 'Elder: 48+',
        type: 'bar',
        marker: {
            color: 'rgb(255,215,0)'
        }
    };

    //put traces into data array
    var data = [youthTrace, adultTrace, elderTrace];

    //set layout for chart
    var layout = {
        barmode: 'stack',
        xaxis: {
            title: 'Year',
            tickangle: -45
        },
        yaxis: {
            title: 'Migration Population'
        },
        title: 'Migration Population over period of 1990 - 2017 by Age Group'
    };

//Create plot
    Plotly.newPlot("stackedBar", data, layout);
  });
}
// function buildPlot() {


// /* data route */
//     var selectbar = d3.select('#countrySelectStackedBar')
//     console.log(selectbar.node().selectedOptions)
//     var country = selectbar.node().selectedOptions[0].value
//     country.value = `United States of America`
//     console.log(country)


// optionChangedStackedBar(country);

// }

// var selectbar = d3.select('#countrySelectStackedBar')
// selectbar.on('change',buildPlot) WHEN A CHANGE EVENT IS FIRED , DO THE PROPERTY....
//          .property("selected", d=>{d == "United States of America"})


// buildPlot("United States of America");








