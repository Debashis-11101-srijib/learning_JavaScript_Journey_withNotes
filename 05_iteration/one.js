
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("Element is 5"); // this will execute when element is 5
    }
    console.log(element); 
}
// output: 0 , 1, 2, 3, 4, Element is 5, 5, 6, 7, 8, 9

let myArray = [Debashis, srijib, rik]
console.log(myArray); // output: [Debashis, srijib, rik] // array
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]); // output: Debashis, srijib, rik
}

//break statement
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("Element is 5"); // this will execute when element is 5
        break;
    }
    console.log(element); 
}
// output: 0 , 1, 2, 3, 4, Element is 5

//continue statement
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("Element is 5"); // this will execute when element is 5
        continue;
    }
    console.log(element); 
}
// output: 0 , 1, 2, 3, 4, Element is 5, 6, 7, 8, 9
