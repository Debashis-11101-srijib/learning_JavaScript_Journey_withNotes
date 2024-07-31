let score = "srijib"

//console.log(typeof score); // string
//console.log(typeof(score)); // string

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); // NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // "33"
// console.log(typeof stringNumber); // string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // hello hitesh

// console.log("1" + 2); // 12 as string
// console.log(1 + "2"); // 12 as string
// console.log("1" + 2 + 2); // 122 as string
// console.log(1 + 2 + "2"); // 32 as string

// console.log( (3 + 4) * 5 % 3); // 5 as number
 
// console.log(+true); // 1
// console.log(+""); // 0 
 
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // this is pre-increment, so first increment and then assign. So, 101 will be assigned to gameCounter.
console.log(gameCounter); // 101
