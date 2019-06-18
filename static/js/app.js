// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!

var tbody = d3.select("tbody");

function printUfos(tableData){
    tableData.forEach((Ufo) => {
        var row = tbody.append("tr");
        Object.entries(Ufo).forEach(([key, value]) => {
            row.append("td").text(value);
        });

    });
}
//////////

var submit = d3.select("#filter-btn");

submit.on("click", function() {
//   table.length = 0
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    printUfos(filteredData);
    filteredData.length = [];

});


