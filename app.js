
//////////////////////////////////////////////////////////
//   https://stackoverflow.com/questions/35579630/how-to-partially-fill-an-svg-element-in-isotype-chart

d3.csv("TraffickingCountsAge-Gender.csv", function(error, traffickData) {
    if (error) throw error;
  
    // Format the data
    traffickData.forEach(function(Tdata) {
      Tdata.Count = +Tdata.Count;
      //traffickData.Count = [traffickData.Count];
      //console.log(Tdata.Count);

      //return Tdata;

    var Tdata = [Tdata];
    


    var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateElement = d3.select("#date-form-input");
  var inputElement = d3.select("#country-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var dateValue = dateElement.property("value");

  console.log(inputValue);
  //console.log(people);
  var dateData = traffickData.filter(x => x.Year === dateValue);

  var filteredData = dateData.filter(x => x.CountryOfExploitation === inputValue);

  console.log(filteredData);

  var Cdata = filteredData.map(filteredData => filteredData.Count);
  var genderData = filteredData.map(filteredData => filteredData.gender);
  console.log(genderData);
  
  //function showFemale(sumData)
//   students.forEach(function(name) {
//     console.log(name);
//   });

  var femData = filteredData.filter(filteredData => filteredData.gender === "Female");
  console.log(femData);

  var Fdata = femData.map(femData => femData.Count);
  console.log(Fdata);
  
  console.log(Cdata);
  const add = (a, b) =>
  a + b
  const sumData = Cdata.reduce(add)
  console.log(sumData);

  const femCount = Fdata.reduce(add)
  console.log(femCount);
  
  drawIsotype(sumData);
  drawIsotype2(femCount);

  //filteredData.Count = +filteredData.Count;
  //console.log(filteredData.Count);


});

});



//create svg element
var svgDoc=d3.select("body").append("svg").attr("viewBox","0 0 105 100");

 //define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc.append("defs")
    .append("g")
    .attr("id","iconCustom")
    .append("path")
            .attr("d","M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z");


//background rectangle
svgDoc.append("rect").attr("width",105).attr("height",25);

//specify the number of columns and rows for pictogram layout
var numCols = 25;
var numRows = 2;

//padding for the grid
var xPadding = 2;
var yPadding = 8;

//horizontal and vertical spacing between the icons
var hBuffer = 8;
var wBuffer = 4;

//generate a d3 range for the total number of required elements
var myIndex=d3.range(numCols*numRows);

//text element to display number of icons highlighted
svgDoc.append("text")
    .attr("id","txtValue")
    .attr("x",xPadding)
    .attr("y",yPadding)
    .attr("dy",-3)
    .text("0");


//create group element and create an svg <use> element for each icon

svgDoc.append("g")
    .attr("id","pictoLayer")
    .selectAll("use")
    .data(myIndex)
    .enter()
    .append("use")
        .attr("xlink:href","#iconCustom")
        .attr("id",function(d)    {
            return "icon"+d;
        })
        .attr("x",function(d) {
            var remainder=d % numCols;//calculates the x position (column number) using modulus
            return xPadding+(remainder*wBuffer);//apply the buffer and return value
        })
          .attr("y",function(d) {
            var whole=Math.floor(d/numCols)//calculates the y position (row number)
            return yPadding+(whole*hBuffer);//apply the buffer and return the value
        })
        .classed("iconPlain",true);
        //svgDoc.selectAll("use").classed("selected", d => d < valuePict );
        //.classed("selected", d => d < valuePict );
        


//var data = { percent: 88 };
//const data = { percent: sumData };

/////////////////////////////////////////////////////
//function drawIsotype(dataObject) {
function drawIsotype(sumData) {    
  //valueLit = dataObject.percent;
  valueLit = sumData;
  total = numCols * numRows;
  //valuePict = total * (dataObject.percent / 100);
  valuePict = total * (sumData / 1000);

  d3.select("#txtValue").text(valueLit + ' Total');
  svgDoc.selectAll("use").classed("selected", d => d < valuePict );
//   d3.selectAll("use").attr("class", function (d, i) {
//       if (d < valuePict ) {
//           return "selected";
//       } else {
//           return "iconPlain";
//       }
//   });
}
//drawIsotype(data);
//drawIsotype(sumData);

});

//////////////////////////////////////////////////////////////female gender

var svgDoc2=d3.select("body").append("svg").attr("viewBox","0 0 105 100");

//define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc2.append("defs")
   .append("g")
   .attr("id","iconCustom2")
   .append("path")
           .attr("d","M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z");

//background rectangle
svgDoc2.append("rect").attr("width",105).attr("height",25);

//specify the number of columns and rows for pictogram layout
var numCols2 = 25;
var numRows2 = 2;

//padding for the grid
var xPadding2 = 2;
var yPadding2 = 8;

//horizontal and vertical spacing between the icons
var hBuffer2 = 8;
var wBuffer2 = 4;

//generate a d3 range for the total number of required elements
var myIndex2=d3.range(numCols2*numRows2);

//text element to display number of icons highlighted
svgDoc2.append("text")
   .attr("id","txtValue2")
   .attr("x",xPadding2)
   .attr("y",yPadding2)
   .attr("dy",-3)
   .text("0");

//create group element and create an svg <use> element for each icon

svgDoc2.append("g")
   .attr("id","pictoLayer")
   .selectAll("use")
   .data(myIndex2)
   .enter()
   .append("use")
       .attr("xlink:href","#iconCustom2")
       .attr("id",function(e)    {
           return "icon"+e;
       })
       .attr("x",function(e) {
           var remainder=e % numCols2;//calculates the x position (column number) using modulus
           return xPadding2+(remainder*wBuffer2);//apply the buffer and return value
       })
         .attr("y",function(e) {
           var whole=Math.floor(e/numCols2)//calculates the y position (row number)
           return yPadding2+(whole*hBuffer2);//apply the buffer and return the value
       })
       .classed("iconPlain2",true);
       //svgDoc2.selectAll("use").classed("selected", d => d < valuePict2 );
       //.classed("selected", d => d < valuePict2 );
       
      
//var data2 = { percent2: 78 };

function drawIsotype2(femCount) {
   valueLit2 = femCount;
   total2 = numCols2 * numRows2;
   valuePict2 = total2 * (femCount / 1000);
 
   d3.select("#txtValue2").text(valueLit2 + ' Women');
   svgDoc2.selectAll("use").classed("selected", e => e < valuePict2 );
//    d3.selectAll("use").attr("class", function (e, i) {
//        if (e < valuePict2 ) {
//            return "selected";
//        } else {
//            return "iconPlain2";
//        }
//    });
 
 }
 //drawIsotype2(femCount);

 