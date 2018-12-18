function initialize() {
    var earth = new WE.map('globebox', zoom=25);
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

      attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

    var GeoJSONPath ="{{ url_for('static', filename='globe.geo.json') }}"
    var Style = {
        stroke: false,
        fill: true,
        fillColor: '#fff',
        fillOpacity: 1
    }
    d3.json(GeoJSONPath)
    .then(function(data){
        console.log("json?")
        console.log(data)
        WE.tileLayerJSON(data, {
            clickable: false,
            style: Style
        }).addTo(earth);})




  };