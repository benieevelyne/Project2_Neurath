
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
//select is typically for things that you haven't created yet.
//var countrydropdown = d3.selectAll('#countrySelectStackedBar').data(countrieslist).enter().append('option').attr('value', d=> d).text(d=> d);

function buildPlot() {
    /* data route */
    var selectbar = d3.select('#countrySelectStackedBar')
    var country = selectbar.node().selectedOptions[0].value

    var url = `/api/data/${country}`; //placeholder syntax for javascript
d3.json(url).then(function(response) {
// d3.json(url).then(function(response))
console.log(response);

    var data = response;

     //set up data traces
     var youthTrace = {
        x: countriesToPlot,
        y: youthData,
        name: 'total youth',
        type: 'bar',
        marker: {
            color: 'rgb(205, 127, 50)'
        }
    };

    var adultTrace = {
        x: countriesToPlot,
        y: adultData,
        name: 'total adult',
        type: 'bar',
        marker: {
            color: 'rgb(192,192,192)'
        }
    };

    var elderTrace = {
        x: countriesToPlot,
        y: elderData,
        name: 'total elder',
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
            title: 'Country',
            tickangle: -45
        },
        yaxis: {
            title: 'migration data'
        },
        title: 'migration data per Country'
    };


    Plotly.newPlot("stackedBar", data, layout);
  });
}


var selectbar = d3.select('#countrySelectStackedBar')
selectbar.on('change',buildPlot)



//buildPlot();











       

