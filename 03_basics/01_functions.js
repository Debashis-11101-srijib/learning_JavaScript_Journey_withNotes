
function sayMyName(){
   //Debashis
    console.log("D")
    console.log("e")
    console.log("b")
    console.log("a")
    console.log("s")
    console.log("h")
    console.log("i")
    console.log("s")
}
// sayMyName() //Debashis, call the function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2); // 8
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result //this is the way to return the value
    return number1 + number2 
}

const result = addTwoNumbers(3, 5) // 8. call the function and store the value in the result variable

// console.log("Result: ", result); // this will print the result


function loginUserMessage(username = "sam"){ //default value is sam if no value is passed
    if(!username){ //username === undefined or username === null, 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` //sam just logged in
}

// console.log(loginUserMessage("hitesh")) //hitesh just logged in
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ //...num1 is the rest operator means it will take all the values in the array
    return num1 // [500, 2000] beacuse 200, 400 are val1 and val2 and rest are in num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = { 
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));