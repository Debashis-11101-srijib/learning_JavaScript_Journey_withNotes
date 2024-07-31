// Dates

let myDate = new Date()
// console.log(myDate.toString());  //Wed Jul 17 2024 14:49:35 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Wed Jul 17 2024
console.log(myDate.toLocaleString()); //7/17/2024, 2:49:35 PM
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 0, 23) // 23rd Jan 2024
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)  // 23rd Jan 2024 5:03am
// let myCreatedDate = new Date("2024-01-14") // 14th Jan 2024
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1626521580000
// console.log(myCreatedDate.getTime()); // 1671110400000
// console.log(Math.floor(Date.now()/1000)); // 1626521580

let newDate = new Date()
console.log(newDate); // 2024-07-17T09:19:35.125Z
console.log(newDate.getMonth() + 1); // 7
console.log(newDate.getDay()); // 3

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

