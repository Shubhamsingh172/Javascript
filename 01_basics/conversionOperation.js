"use strict";
let score = "33abc";
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); 
// while conversion from mixing of number and string value it gives the conversion as NaN- not a number.

/*
Note : while conversion keep this in mind because most of the times browser sends string data which needs to be converted in 
numeric value

"33"     => 33
"33abc"  => NaN
true     => 1
false    => 0 
*/

let isLoggedIn = "shubham"; //filled string returns true while convert to boolean type
let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsloggedIn));
console.log(booleanIsloggedIn);

let isLoggedIn1 = "" // whereas empty string false while converting empty string into boolean type
let booleanIsloggedIn1 = Boolean(isLoggedIn1);
console.log(typeof(booleanIsloggedIn1));
console.log(booleanIsloggedIn1);

/*
1 or any non zero value => true
0 = false
"" = false (empty string)
"shubham" = true
 */
let value = -1;
let valueBool = Boolean(value);
console.log(typeof(valueBool));
console.log(valueBool);

// while converting number to string 
let anyNum = 33;
let Numstring = String(anyNum);
console.log(Numstring);
console.log(typeof(Numstring));

//--OPERATION--
let valuee = 3
let negvalue = -valuee;
console.log(negvalue)

// basic arithmetic operation
// console.log(2 + 5)
// console.log(2 - 5)
// console.log(2 * 5)
// console.log(2 / 5)
// console.log(2 ** 5)
// console.log(2 % 5)
// console.log(5 & 6)

//concatenation of two string in js
// let str1 = "hello"
// let str2 = "shubham singh"
// let str3 = str1 + str2
// console.log(str3)

//string conversion confusion operation.
// console.log("1" + 2);
// console.log(5 + "2"); // if the starting is number type then whole is numbered type with string attached
// console.log(1 + 2 + "2"); //if the starting is number type then whole is numbered type with string attached
// console.log("1" + 2 + 2); //if the starting is string type then whole is converted into string type type with number type attached

// console.log(3 + 4 * 5 % 3);
// console.log(3<<2)

console.log(+true) // it will give value 1
// console.log(true+) it is invalid as it will give an error
console.log(15 +"") // it will give same as the number which is to be added like 15 is answer here similarly if 14 provided then it is 14

let counter = 100
counter++
console.log(counter++) // it will give 101 and convert 101 to 102 as it is a post increment
console.log(++counter) // similarly it will give 103 as it convert 102 into 103