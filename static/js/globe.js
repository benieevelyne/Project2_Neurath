function initialize() {
    var earth = new WE.map('globebox', zoom=25);
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

      attribution: '© OpenStreetMap contributors'
    }).addTo(earth);
  }