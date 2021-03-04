// .map()

// Capitalize
let words = ['these','words','need','capitalized']

let caps = words.map(word => word.toUpperCase())

console.log(caps)

// Square
let numbers = [1,2,3,4,5]
let squared = numbers.map(number => number*number)
console.log(squared)

// Double 
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);


// Return the city names 
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(city => city.City);
console.log(cityNames);

// .filter()

// Filter for even numbers 
var numbers = [12,22,14,13,46,68,46,37,47]
var evenNumbers = numbers.filter(number => number % 2 == 0)
console.log(evenNumbers)

// Larger
var numbers = [1,2,3,4,5,6]
var larger = numbers.filter(number => number > 1)
console.log(larger)

// First letter 's'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var firstS = words.filter(word => word.substring(0,1) == 's');
console.log(firstS)

// sort() 

// Ascending order 
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge)

// Decending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge)


// reverse
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.reverse((a,b) => b - a);
console.log(sortedAge)

// slice()

// first 3
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slicedWords = words.slice(0,3);
console.log(slicedWords);

// to the end 
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );