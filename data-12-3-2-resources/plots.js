// In order to run external JSON file we navigate to the directory where index.html is located
// and ran " python -m http.server " in the CLI. Else we will get a CORS error - Cross-Origin Resource Sharing


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
// syntax to retrieve the data from an external file and print the entire dataset to the console
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Extract only the wfreq (the weekly belly button washing freq) of each person
// How do we know the variable is person in the array?
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});


// Sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});


// filter out null values 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// OTU Stands for Operational Taxonomic Unit


// The Object.entries() method allows access to both an object's 
// keys and values. It returns each key-value pair as an array.

// Use Object.entries() to print each key-value pair inside an array.
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

console.log(Object.entries(researcher1));


// The forEach()method allows access to each element of an array.

// To print each trait and corrresponding property to the console use the forEach() method. 
// This method itereates through each element in an array. In this case there are smaller arrays, 
// each including 2 elements, inside an outer array.  

//To access these elements, the argument ([first, second]) is used, where first and second are 
// arbitrarily chosen for convenience. They could have been named ([x, y]) or ([key, value]).
researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];

researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));

// display the metadata of any individual from the dataset (the first record in this case)    
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': ' + value);});
});


// display the metadata of any individual from the dataset (the first record in this case)    
d3.json("samples.json").then(function(data){
    firstPerson = console.log(data.metadata[0]);
});
