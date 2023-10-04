const accountId = 144553
let accountEmail = "hhhghg@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur" //possible but not recommended

let accountState

// accountId= 2 // not allowed 
accountEmail = "hd@gmail.com"
accountPassword = "12121"
accountCity = "blr"

/*

prefer not to use var becoz of issue in block scope and functional scope 

*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])