// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

/////////////////////

// function getUFOdata(tableData) {
//     tableData.forEach(UFO) {
//     var row = tbody.append("tr");
//     Object.entries(UFO).forEach(([key, value]) => {
//         row.append("td").text(value);
//         });
//     });
// }




var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  tableData.filter(x => x.datetime == inputValue).forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
    row.append("td").text(value);
    });
});
console.log(tableData.filter(x => x.datetime == inputValue));

  
//   var filteredData = tableData.filter(spotting => spotting.datetime === inputValue);
//   getUFOdata(filteredData);
//   filteredData.length = [];

  // clear the input value
 // d3.select("#datetime").node().value = "";
});