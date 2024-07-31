//High Order Array Methods

const greetings = ['hi', 'hello', 'hey', 'yo', 'hola'];
for (const greet of greetings) {
  console.log(`Each greeting is: ${greet}`); // output: hi, hello, hey, yo, hola
}

//Map Method - returns a new array with the results of calling a provided function on every element in the calling array

const map = new Map();
map.set('name', 'Debashis');
map.set('age', 21);
map.set('profession', 'Software Developer');
console.log(map); // output: Map(3) { 'name' => 'Debashis', 'age' => 21, 'profession' => 'Software Developer' }

// map use only unique keys, so if we try to set the same key again, it will overwrite the previous value. just like object
map.set('name', 'Srijib');
console.log(map); // output: Map(3) { 'name' => 'Srijib', 'age' => 21, 'profession' => 'Software Developer' }

// we can also set multiple key-value pairs at once using an array of arrays 
map.set('city', 'Kolkata');
console.log(map); // output: Map(4) { 'name' => 'Srijib', 'age' => 21, 'profession' => 'Software Developer', 'city' => 'Kolkata' }

//map only unique keys are allowed, so we passed the same kye and value , it will not add the same key again
map.set('city', 'Kolkata');
console.log(map); // output: Map(4) { 'name' => 'Srijib', 'age' => 21, 'profession' => 'Software Developer', 'city' => 'Kolkata' }

//map use  for of loop to iterate over the map, it will return an array of arrays
for (const [key, value] of map) {
  console.log(`Key is: ${key} and Value is: ${value}`); // output: Key is: name and Value is: Srijib, Key is: age and Value is: 21, Key is: profession and Value is: Software Developer, Key is: city and Value is: Kolkata
}

// for of loop can also be used to iterate over the keys or values of the map
for (const key of map.keys()) {
  console.log(`Key is: ${key}`); // output: Key is: name, Key is: age, Key is: profession, Key is: city
}

for (const value of map.values()) {
  console.log(`Value is: ${value}`); // output: Value is: Srijib, Value is: 21, Value is: Software Developer, Value is: Kolkata
}

//for of loop not work with object, so we can use Object.entries() method to convert object to array of arrays
const obj = {
  name: 'Debashis',
  age: 21,
  profession: 'Software Developer',
  city: 'Kolkata'
};
console.log(Object.entries(obj)); // output: [ [ 'name', 'Debashis' ], [ 'age', 21 ], [ 'profession', 'Software Developer' ], [ 'city', 'Kolkata' ] ]

for (const [key, value] of obj) {
  console.log(`Key is: ${key} and Value is: ${value}`); // output: TypeError: obj is not iterable
}

//for in loop can be used to iterate over the keys of the object
for (const key in obj) {
  console.log(`Key is: ${key}`); // output: Key is: name, Key is: age, Key is: profession, Key is: city
}

const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'C#'];
for(const key in programmingLanguages){
    console.log(`Key is: ${key}`); // output: Key is: 0, Key is: 1, Key is: 2, Key is: 3, Key is: 4
    console.log(`Value is: ${programmingLanguages[key]}`); // output: Value is: JavaScript, Value is: Python, Value is: Java, Value is: C++, Value is: C#
}

//forEach method - executes a provided function once for each array element
const coding = [ 'JS', 'C++', 'Python', 'Java' ];
coding.forEach(function(element){
    console.log(element); // output: JS, C++, Python, Java
});

coding.forEach((items) =>{
    console.log(items); // output: JS, C++, Python, Java
})

// we can also pass the function as a reference
function printMe (items){
    console.log(items); 
}
coding.forEach(printMe); // output: JS, C++, Python, Java

//forEach method can also take the second argument as the index of the element
coding.forEach(function(element, index){
    console.log(`Element is: ${element} and Index is: ${index}`); // output: Element is: JS and Index is: 0, Element is: C++ and Index is: 1, Element is: Python and Index is: 2, Element is: Java and Index is: 3
});
coding.forEach((element, index, arr) => {
    console.log(`Element is: ${element} and Index is: ${index} and Array is: ${arr}`); // output: Element is: JS and Index is: 0 and Array is: JS,C++,Python,Java, Element is: C++ and Index is: 1 and Array is: JS,C++,Python,Java, Element is: Python and Index is: 2 and Array is: JS,C++,Python,Java, Element is: Java and Index is: 3 and Array is: JS,C++,Python,Java
});

//array inside the object - we can use forEach method to iterate over the array inside the object
const myBio =[
    {
        name: 'Debashis',
        age: 21,
        profession: 'Software Developer',
        languages: ['JavaScript', 'Python', 'Java', 'C++', 'C#']
    },
    {
        name: 'Srijib',
        age: 20,
        profession: 'Student',
        languages: ['JavaScript', 'Python', 'Java', 'C++', 'C#']
    },
    {
        name: 'Rik',
        age: 22,
        profession: 'Coder',
        languages: ['JavaScript', 'Python', 'Java', 'C++', 'C#']
    }
];
myBio.forEach( (items) => {
    console.log(items); // output: { name: 'Debashis', age: 21, profession: 'Software Developer', languages: [ 'JavaScript', 'Python', 'Java', 'C++', 'C#' ] }, { name: 'Srijib', age: 20, profession: 'Student', languages: [ 'JavaScript', 'Python', 'Java', 'C++', 'C#' ] }, { name: 'Rik', age: 22, profession: 'Coder', languages: [ 'JavaScript', 'Python', 'Java', 'C++', 'C#' ] }
    console.log(items.name); // output: Debashis, Srijib, Rik. - access the name property of each object easily accessing the object
});