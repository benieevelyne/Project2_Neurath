// API key
var API_KEY = "pk.eyJ1Ijoic2lieWxzZXJ2YW50IiwiYSI6ImNqcGZuZHU1ejBjM3Mza3BkNnRqeGNzYmkifQ.ZJXqvdQrHTWyrFb4za-JPw";
var API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MDFhN2E5Yi04YjJmLTRjOGMtODE0OS1jNDk5ZGIyZTFjYzIiLCJpZCI6NjE2OCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NTQ3NzgyMX0.fqMeEYq30unB5K9bxo23bJQWkPasmrSIJES0go3Yv5g"


// function colorPick(gdp_md_est) {

//     //  divided countries into 7 equal categories
//     //    (190.0, 166.375, 142.75, 119.125, 95.5, 71.875, 48.25, 24.625, 1.0)
//     // This is total gdp, in millijons
 
//     if (gdp_md_est > 500000) {
//         color = "CHARTREUSE";
//     }   else if(gdp_md_est > 200000) {
//         color = "PALEGREEN";
//     }   else if(gdp_md_est > 70000) {
//         color = "SKYBLUE";
//     }   else if(gdp_md_est > 35000) {
//         color = "PALEVIOLETRED";
//     }   else if(gdp_md_est > 15000) {
//         color = "SANDYBROWN";
//     }   else if(gdp_md_est > 7000) {
//         color = "ORANGERED";
//     }   else if(gdp_md_est > 2000) {
//         color = "RED";
//     }   else {
//         color = 'slategrey'
//     }
//     console.log(color)
//     return color
// };


// https://gist.github.com/iwek/7154578
function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
    
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }


