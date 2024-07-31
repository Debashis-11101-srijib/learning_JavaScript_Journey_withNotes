// array

const myArr = [0, 1, 2, 3, 4, 5]
const myLoves = ["radha", "krishna"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // 1

// Array methods

// myArr.push(6) // add at the end of the array like: [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7) // add at the end of the array like: [0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop() // remove the last element from the array like: [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9) // add at the start of the array like: [9, 0, 1, 2, 3, 4, 5]
// myArr.shift() // remove the first element from the array like: [1, 2, 3, 4, 5]

// console.log(myArr.includes(9)); // false, becasuse 9 is not in the array
// console.log(myArr.indexOf(3)); // 3, becasuse 3 is in the array

// const newArr = myArr.join() 

// console.log(myArr); // [0, 1, 2, 3, 4, 5]
// console.log( newArr); // "0,1,2,3,4,5" convert array to string


// slice, splice

console.log("A ", myArr); // [0, 1, 2, 3, 4, 5] 

const myn1 = myArr.slice(1, 3) //slice use to copy the array from the given range and return the new array like: [1, 2]

console.log(myn1); // [1, 2] 1,3 is the range but 3 is not included 

console.log("B ", myArr); // [0, 1, 2, 3, 4, 5] becasuse slice does not change the original array


const myn2 = myArr.splice(1, 3) //splice use to remove the array from the given range and return the removed array like: [1, 2, 3]
console.log("C ", myArr); // [0, 4, 5] 1,3 is the range 
console.log(myn2); // [1, 2, 3] 1,3 is the range becasuse splice remove the array from the given range
