const accountId = 144553
let accountEmail = "Debu@google.com"
var accountPassword = "12345"
accountCity = "Malda"
let accountState;

// accountId = 2 // not allowed


accountEmail = "srijib.com"
accountPassword = "732121"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])