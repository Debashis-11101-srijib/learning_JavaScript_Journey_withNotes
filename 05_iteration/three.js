// Filter map and reduce methods 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.filter((num) => {
    return num > 5;
}
); // filter method will return an array of elements that satisfy the condition
console.log(newNum); // output: [ 6, 7, 8, 9, 10 ]

// another way to write the same code but not return keyword
const newNum1 = myNum.filter((num) => num > 5);
console.log(newNum1); // output: [ 6, 7, 8, 9, 10 ]

// this same codition allow to forEach method
const myValue = []; // empty array
const newNum2 = myNum.forEach((num) => {
    if (num > 5) {
        myValue.push(num); // push method will add the element to the array
    }
});
console.log(myValue); // output: [ 6, 7, 8, 9, 10 ], but forEach method will not return an array

const books = [
    { tittle: 'The Alchemist', author: 'Paulo Coelho', price: 499 },
    { tittle: 'The Power of Positive Thinking', author: 'Norman Vincent Peale', price: 299 },
    { tittle: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', price: 399 },
    { tittle: 'Think and Grow Rich', author: 'Napoleon Hill', price: 199 },
    { tittle: 'The Secret', author: 'Rhonda Byrne', price: 599 }
];

let userBooks = books.filter((bk) => bk.author === 'Paulo Coelho');
console.log(userBooks); // output: [ { tittle: 'The Alchemist', author: 'Paulo Coelho', price: 499 } ]

userBooks = books.filter((bk) => {
    return bk.price < 400 && bk.price > 200
});
console.log(userBooks); // output: [ { tittle: 'The Power of Positive Thinking', author: 'Norman Vincent Peale', price: 299 }, { tittle: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', price: 399 } ]

// map method
const newVal = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const square = newVal.map((num) => num * 10);
console.log(square); // output: [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

const newVal2 = myNVal1
        .map((num) => num * 10)
        .map((num) => num + 5)
        .filter((num) => num > 50);
console.log(newVal2); // output: [ 55, 65, 75, 85, 95, 105 ]


// reduce method

const myVal = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const sum = myVal.reduce((acc, num) => {
    console.log(`Accumulator is: ${acc} and Number is: ${num}`);
    return acc + num;
}, 0);
console.log(sum); // output: 55

const myVauleTotal =myVal.reduce((acc, num) => acc + num, 0);
console.log(myVauleTotal); // output: 55

const shoppingCart = [
    { tittle: 'Laptop', price: 50000 },
    { tittle: 'Mobile', price: 20000 },
    { tittle: 'Earphone', price: 1000 },
    { tittle: 'Smart Watch', price: 5000 }
];
const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(price); // output: 76000