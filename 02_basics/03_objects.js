// singleton 
// Object.create

// object literals 

const mySym = Symbol("key1") // symbol is used to create the private properties in the object


const JsUser = { // literal used to create the object
    name: "Srijib", // key value pair
    "full name": "Srijib Paul", //this doble quotes are used to create the key with space ///but this is not used in the dot notation
    [mySym]: "mykey1", // this is the way to create the private properties in the object
    age: 21,
    location: "Malda",
    email: "srijibIde.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] // array in the object
}

// console.log(JsUser.email) // srijibIde.com, dot notation
// console.log(JsUser["email"])  // srijibIde.com, bracket notation
// console.log(JsUser["full name"])  // Srijib Paul, bracket notation
// console.log(JsUser[mySym])  // mykey1, symbol used to create the private properties in the object

JsUser.email = "srijib@mysql.com"
// Object.freeze(JsUser) // freeze the object, we can not change the object
JsUser.email = "srijib@dbms.com"
// console.log(JsUser); // email is not changed becasue we freeze the object

JsUser.greeting = function(){ // function in the object
    console.log("Hello JS user");  //Hello JS user, this is function in the object
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //Hello JS user, Srijib, this is function in the object use to access the object properties
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 