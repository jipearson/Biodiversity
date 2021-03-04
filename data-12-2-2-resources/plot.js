// Filter 
let numbers = [13, 35, 56, 24, 36, 45, 37];
let evenNumbers = numbers.filter(number => number %2 == 0);
console.log(evenNumbers);

// Create bar chart of the top 5 cities by population growth 

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

console.log(sortedCities);

var topFiveCities = sortedCities.slice(0,5);

console.log(topFiveCities);

//create two arrays: an array of city names, and an array of corresponding population growths. 
// We'll use the map() method to extract these properties. These arrays will be the x and y axis data of the Plotly chart.
// xaxis = City
var topFiveCityNames = topFiveCities.map(city => city.City);
// yaxis = increase 
// the parseInt() method converts the strings into numbers
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths, 
    type: "bar"
};
var data = [trace]
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);



  // Create a bar chart of the seven largest cities by population 
// sort by population decending 
var popSortedCities = cityGrowths.sort((a,b) => b.population - a.population); 
console.log(popSortedCities);

// Take the first 7
var topSevenPopCities = popSortedCities.slice(0,7);
console.log(topSevenPopCities);

// set the x axis = the names of the seven largest cities 
var topSevenPopNames = topSevenPopCities.map(city => city.City);

// set the y axis = the total populations of the seven largest cities
var topSevenPopulations = topSevenPopCities.map(city => parseInt(city.population));
console.log(topSevenPopulations)

var trace = {
    x: topSevenPopNames,
    y: topSevenPopulations, 
    type: "bar"
};
var data = [trace]
var layout = {
    title: "Seven Largest High Growth Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
  Plotly.newPlot("topSevenPopBar", data, layout);


