// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // DB CONNECTED this is a named IIFE function used to avoid global scope

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('deba') // DB CONNECTED TWO deba this is also use another way to avoid global scope

