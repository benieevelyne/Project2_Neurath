
//////////////////////////////////////////////////////////
//   https://stackoverflow.com/questions/35579630/how-to-partially-fill-an-svg-element-in-isotype-chart

// d3.csv("TraffickingCountsAge-Gender.csv", function(error, traffickData) {
//     if (error) throw error;


// function buildCharts(country) {
    var url = "/countries";
    // d3.json(`/countries`).then((traffickData) => {
    d3.json(url).then((traffickData) => {
        const Year = traffickData.Year;
        const CountryOfExploitation = traffickData.CountryOfExploitation;
        const gender = traffickData.gender;
        const ageBroad = traffickData.ageBroad;
        const Count = traffickData.Count;
        console.log(Year, CountryOfExploitation, gender, ageBroad, Count);

// function buildPlot() {
//   d3.json(url).then(function(traffickData) {
//     console.log(traffickData);

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

  //output.html("");

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
  console.log(Cdata);

  var genderData = filteredData.map(filteredData => filteredData.gender);
  console.log(genderData);
  
  //function showFemale(sumData)
//   students.forEach(function(name) {
//     console.log(name);
//   });

  var femData = filteredData.filter(filteredData => filteredData.gender === "Female");
  console.log(femData);

  var maleData = filteredData.filter(filteredData => filteredData.gender === "Male");
  console.log(maleData);

  /////////////////////////////////
  var femYouthData = femData.filter(femData => femData.ageBroad === "Youth");
  console.log(femYouthData);

  var maleYouthData = maleData.filter(maleData => maleData.ageBroad === "Youth");
  console.log(maleYouthData);

  var femAdultData = femData.filter(femData => femData.ageBroad === "Adult" || "Adult-" || "Adult+" || "Unknown");
  console.log(femAdultData);

  var maleAdultData = maleData.filter(maleData => maleData.ageBroad === "Adult" || "Adult-" || "Adult+" || "Unknown");
  console.log(maleAdultData);

  //////////////////////////////////////
  var femYouthCount = femYouthData.map(femYouthData => femYouthData.Count);
  console.log(femYouthCount);

  var maleYouthCount = maleYouthData.map(maleYouthData => maleYouthData.Count);
  console.log(maleYouthCount);

  var femAdultCount = femAdultData.map(femAdultData => femAdultData.Count);
  console.log(femAdultCount);

  var maleAdultCount = maleAdultData.map(maleAdultData => maleAdultData.Count);
  console.log(maleAdultCount);

  //////////////////////////////////////////
  var add = (a, b) =>
  a + b

//   const sumData = Cdata.reduce(add)
//   console.log(sumData);

  //////////////////////////////
  try {
  var femYouthSum = femYouthCount.reduce(add)
  console.log(femYouthSum);
    }
  catch(err) { err;}

  try {
  var maleYouthSum = maleYouthCount.reduce(add)
  console.log(maleYouthSum);
    }
  catch(err) { err;}

  try {
  var femAdultSum = femAdultCount.reduce(add)
  console.log(femAdultSum);
    }
  catch(err) { err;}

  try {
  var maleAdultSum = maleAdultCount.reduce(add)
  console.log(maleAdultSum); 
  }
  catch(err) { err;}

  /////////////////////////////////////
  
  drawIsotype(femAdultSum);
  drawIsotype2(maleAdultSum);
  drawIsotype3(femYouthSum);
  drawIsotype4(maleYouthSum);

  //filteredData.Count = +filteredData.Count;
  //console.log(filteredData.Count);
});

});
//////////////////////////////////////female adult
//create svg element
var svgDoc=d3.select("body").append("svg").attr("viewBox","0 0 105 100");

 //define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc.append("defs")
    .append("g")
    .attr("id","iconCustom")
    .append("path")
            .attr("d","M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z");

//background rectangle
//svgDoc.append("rect").attr("width",105).attr("height",25);
svgDoc.append("rect").attr("width",105).attr("height",8);

//specify the number of columns and rows for pictogram layout
var numCols = 25;
var numRows = 12;

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

/////////////////////////////////////////////////////
//function drawIsotype(dataObject) {
function drawIsotype(femAdultSum) {
    if (femAdultSum === undefined) {
        femAdultSum = "No Data For ";
    }
        else {
            (femAdultSum === femAdultSum);
        }
        
  //valueLit = dataObject.percent;
  valueLit = femAdultSum;
  total = numCols * numRows;
  //valuePict = total * (dataObject.percent / 100);
  valuePict = total * (femAdultSum / 7500);

  d3.select("#txtValue").text(valueLit + ' Adult Female Victims');
  svgDoc.selectAll("use").classed("selected", d => d < valuePict );
//   d3.selectAll("use").attr("class", function (d, i) {
//       if (d < valuePict ) {
//           return "selected";
//       } else {
//           return "iconPlain";
//       }
//   });
    
}

//////////////////////////////////////////////////////////////male adult
var svgDoc2=d3.select("body").append("svg").attr("viewBox","0 0 105 100");
// var svgDoc2=d3.select("#isotype-box").append("svg").attr("viewBox","0 0 105 100");

//define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc2.append("defs")
   .append("g")
   .attr("id","iconCustom2")
   .append("path")
           .attr("d","M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z");

//background rectangle
svgDoc2.append("rect").attr("width",105).attr("height",8);

//specify the number of columns and rows for pictogram layout
var numCols2 = 25;
var numRows2 = 12;

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

//////////////////////////////////////
function drawIsotype2(maleAdultSum) {
    if (maleAdultSum === undefined) {
        maleAdultSum = "No Data For ";
    }
        else {
            (maleAdultSum === maleAdultSum);
        }
   valueLit2 = maleAdultSum;
   total2 = numCols2 * numRows2;
   valuePict2 = total2 * (maleAdultSum / 7500);
 
   d3.select("#txtValue2").text(valueLit2 + ' Adult Male Victims');
   svgDoc2.selectAll("use").classed("selected2", e => e < valuePict2 );
//    d3.selectAll("use").attr("class", function (e, i) {
//        if (e < valuePict2 ) {
//            return "selected";
//        } else {
//            return "iconPlain2";
//        }
//    });
    
 }
 //drawIsotype2(femCount);

 /////////////////////////////////////////////////////female minor
var svgDoc3=d3.select("body").append("svg").attr("viewBox","0 0 105 100");

//define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc3.append("defs")
   .append("g")
   .attr("id","iconCustom3")
   .append("path")
           .attr("d","M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z");

//background rectangle
svgDoc3.append("rect").attr("width",105).attr("height",8);

//specify the number of columns and rows for pictogram layout
var numCols3 = 25;
var numRows3 = 12;

//padding for the grid
var xPadding3 = 2;
var yPadding3 = 8;

//horizontal and vertical spacing between the icons
var hBuffer3 = 8;
var wBuffer3 = 4;

//generate a d3 range for the total number of required elements
var myIndex3=d3.range(numCols3*numRows3);

//text element to display number of icons highlighted
svgDoc3.append("text")
   .attr("id","txtValue3")
   .attr("x",xPadding3)
   .attr("y",yPadding3)
   .attr("dy",-3)
   .text("0");

//create group element and create an svg <use> element for each icon
svgDoc3.append("g")
   .attr("id","pictoLayer")
   .selectAll("use")
   .data(myIndex3)
   .enter()
   .append("use")
       .attr("xlink:href","#iconCustom3")
       .attr("id",function(f)    {
           return "icon"+f;
       })
       .attr("x",function(f) {
           var remainder=f % numCols3;//calculates the x position (column number) using modulus
           return xPadding3+(remainder*wBuffer3);//apply the buffer and return value
       })
         .attr("y",function(f) {
           var whole=Math.floor(f/numCols3)//calculates the y position (row number)
           return yPadding3+(whole*hBuffer3);//apply the buffer and return the value
       })
       .classed("iconPlain2",true);

function drawIsotype3(femYouthSum) {
    if (femYouthSum === undefined) {
        femYouthSum = "No Data For ";
    }
        else {
            (femYouthSum === femYouthSum);
        }
   valueLit3 = femYouthSum;
   total3 = numCols3 * numRows3;
   valuePict3 = total3 * (femYouthSum / 7500);
 
   d3.select("#txtValue3").text(valueLit3 + ' Female Youth Victims');
   svgDoc3.selectAll("use").classed("selected3", f => f < valuePict3 );
 
 //////////////}
}
 
  /////////////////////////////////////////////////////male minor
var svgDoc4=d3.select("body").append("svg").attr("viewBox","0 0 105 100");

//define an icon store it in svg <defs> elements as a reusable component - this geometry can be generated from Inkscape, Illustrator or similar
svgDoc4.append("defs")
   .append("g")
   .attr("id","iconCustom4")
   .append("path")
           .attr("d","M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z");

//background rectangle
svgDoc4.append("rect").attr("width",105).attr("height",8);

//specify the number of columns and rows for pictogram layout
var numCols4 = 25;
var numRows4 = 12;

//padding for the grid
var xPadding4 = 2;
var yPadding4 = 8;

//horizontal and vertical spacing between the icons
var hBuffer4 = 8;
var wBuffer4 = 4;

//generate a d3 range for the total number of required elements
var myIndex4=d3.range(numCols4*numRows4);

//text element to display number of icons highlighted
svgDoc4.append("text")
   .attr("id","txtValue4")
   .attr("x",xPadding4)
   .attr("y",yPadding4)
   .attr("dy",-3)
   .text("0");

//create group element and create an svg <use> element for each icon
svgDoc4.append("g")
   .attr("id","pictoLayer")
   .selectAll("use")
   .data(myIndex4)
   .enter()
   .append("use")
       .attr("xlink:href","#iconCustom4")
       .attr("id",function(h)    {
           return "icon"+h;
       })
       .attr("x",function(h) {
           var remainder=h % numCols4;//calculates the x position (column number) using modulus
           return xPadding4+(remainder*wBuffer4);//apply the buffer and return value
       })
         .attr("y",function(h) {
           var whole=Math.floor(h/numCols4)//calculates the y position (row number)
           return yPadding4+(whole*hBuffer4);//apply the buffer and return the value
       })
       .classed("iconPlain2",true);

function drawIsotype4(maleYouthSum) {
    if (maleYouthSum === undefined) {
        maleYouthSum = "No Data For ";
    }
        else {
            (maleYouthSum === maleYouthSum);
        }
        
   valueLit4 = maleYouthSum;
   total4 = numCols4 * numRows4;
   valuePict4 = total4 * (maleYouthSum / 7500);
 
   d3.select("#txtValue4").text(valueLit4 + ' Male Youth Victims');
   svgDoc4.selectAll("use").classed("selected4", h => h < valuePict4 );
 
//////////////////////////}
}

});