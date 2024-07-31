// const tinderUser = new Object() // this is the way to create the object and this is the singleton object
const tinderUser = {} //this is a non singleton object

tinderUser.id = "123abc" // this is the way to add the properties in the object
tinderUser.name = "dena"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'dena', isLoggedIn: false }

const regularUser ={
    email: "deba@gmail.com",
    fullname: {
        userfullname: {
            firstname: "deba",
            lastname: "paul"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // deba

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // not the way to merge the object
// const obj3 = Object.assign({}, obj1, obj2, obj4) // this is the way to merge the object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email  // h@gmail
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ] return the keys of the object
// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'dena' ], [ 'isLoggedIn', false ] ] return the key value pair of the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true, check the property is present in the object or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "deba"
}

// course.courseInstructor // "hitesh"  this is the way to change the object properties

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "deba",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

