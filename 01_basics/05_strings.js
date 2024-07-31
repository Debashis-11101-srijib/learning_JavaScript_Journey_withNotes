const name = "srijib"
const repoCount = 34

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //Hello my name is srijib and my repo count is 34

const gameName = new String('srijib-man-com')

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // String


// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase()); // srijib
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4)
console.log(newString); // srij

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);     // ij

const newStringOne = "   deba    "
console.log(newStringOne);      //    deba
console.log(newStringOne.trim());  // deba

const url = "https://deba.com/deba%20paul"

console.log(url.replace('%20', '-'))  // https://deba.com/deba-paul

console.log(url.includes('sundar')) // false

console.log(gameName.split('-'));  // [ 'srij