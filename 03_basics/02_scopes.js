//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20 // block scope
    // console.log("INNER: ", a); // 10 because of block scope of let
    
}



// console.log(a); // 300 because of global scope of let
// console.log(b); // ReferenceError: b is not defined` because of block scope of const
// console.log(c); 


function one(){
    const username = "deba"

    function two(){
        const website = "youtube"
        console.log(username); // deba
    }
    // console.log(website); // ReferenceError: website is not defined

     two() // deba

}

// one() // deba

if (true) {
    const username = "Deba"
    if (username === "Deba") {
        const website = " youtube"
        // console.log(username + website); // Deba youtube
    }
    // console.log(website); // ReferenceError: website is not defined
}

// console.log(username); `ReferenceError: username is not defined` because of block scope of const


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6 use hoisting , before defining the function it will be called

function addone(num){
    return num + 1
}



addTwo(5) // `TypeError: addTwo is not a function` because of block scope of const, it is not hoisted. It will be called after defining the function
const addTwo = function(num){
    return num + 2
}
