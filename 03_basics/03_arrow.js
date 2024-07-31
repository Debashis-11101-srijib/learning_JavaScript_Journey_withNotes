const user = {
    username: "deba",
    price: 1099,

    welcomeMessage: function() { // function() is a method
        console.log(`${this.username} , welcome to website`); // deba, welcome to, this is a keyword which refers to the object.
        console.log(this); // this refers to the object
    }

}

// user.welcomeMessage() // deba, welcome to website
// user.username = "sam"
// user.welcomeMessage() // sam, welcome to website

// console.log(this); // output: {} // this refers to the global object

// function chai(){
//     let username = "deba"
//     console.log(this.username); // undefined because this referes to global object
// }

// chai() // undefined becasue this referes to global object

// const chai = function () {
//     let username = "deba" // this is a local variable
//     console.log(this.username); // undefined because this referes to global object
// }

const chai =  () => {
    let username = "deba" // this is a local variable
    console.log(this);
}


// chai() // undefined becasue this referes to global object

// const addTwo = (num1, num2) => { // arrow function`
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // arrow function` // if we have only one line of code then we can remove the curly braces

// const addTwo = (num1, num2) => ( num1 + num2 ) //this () is used to return an object and not a block of code

const addTwo = (num1, num2) => ({username: "hitesh"}) //this () is used to return an object also we can use return keyword


console.log(addTwo(3, 4)) // 7


// const myArray = [2, 5, 3, 7, 8] // array

// myArray.forEach() // method used to iterate over an array