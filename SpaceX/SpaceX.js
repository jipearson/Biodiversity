const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults =>  console.log(spaceXResults[0]));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));




//var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
//console.log(topFiveCityGrowths);

