const my_heros = ["ram", "arjun"]
const reel_heros = [" amitabh", "rajnikant"]

// my_heros.push(reel_heros) // this will add the reel_heros as a single element in the my_heros array

// console.log(my_heros); // ["ram", "arjun", [" amitabh", "rajnikant"]]
// console.log(my_heros[3][1]); // rajnikant

// const allHeros = my_heros.concat(reel_heros) // this will add the reel_heros as a single element in the my_heros array
// console.log(allHeros); // ["ram", "arjun", " amitabh", "rajnikant"]

const all_new_heros = [...my_heros, ...reel_heros] // this will add the reel_heros as a single element in the my_heros array
console.log(all_new_heros); // ["ram", "arjun", " amitabh", "rajnikant"]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // nested array

const real_another_array = another_array.flat(Infinity) // this will remove the nested array and return the single array
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Srijib")) // false becasue string is not an array
console.log(Array.from("Srijib")) // ["S", "r", "i", "j", "i", "b"] convert string to array
console.log(Array.from({name: "Srijib"})) // [] becasue object does not have the length property

let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] convert the given values to array 