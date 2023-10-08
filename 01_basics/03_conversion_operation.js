let score = 33

console.log(typeof score);

// "33" => 33 using Number
//"33abc"=> Nan 
// true => 1 ; false => 0

let isLoggedIn = "hello"

let booleanIsLoggdIn = Boolean(isLoggedIn)
console.log(booleanIsLoggdIn);

// 1 => true ; 0 => false 
// " "=> false
// " hello "=> true (non empty string)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);;

// operations 

let value = 3
let negValue = -value
//console.log(negValue);

let str1 = "shramadeep"
let str2 = " hello"

let str3 = str1 + str2 // adding str
//console.log(str3);

console.log(typeof("1" + 2 )); // watch too primitive ecma 
console.log(typeof(1 + "2")); //use paranthesis

console.log(+true); // watch prefix and postfix increment operator on mdn read it 
