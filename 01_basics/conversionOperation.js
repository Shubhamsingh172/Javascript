"use strict"; // it is used because it gives the instrucions that please strictly use update version of javascript
let score = "33abc";
console.log(typeof score); // type string
console.log(typeof (score)); // type string

let valueInNumber = Number(score); // here we typecast the string value into number data type in js
console.log(typeof valueInNumber); // as the type is converted into number that's why it returns its type as number
console.log(valueInNumber); 
//here as the string consist of alphanumeric value and after converted into number it is difficult to understand whether the value
//is string or numeric to display output that's why it returns NaN as it's answer

// while conversion from mixing of number and string value it gives the conversion as NaN :-not a number.

/*
Note : while conversion of string value into numeric value 
keep this in mind because most of the times browser sends string data which needs to be converted in 
numeric value

"33"     => 33
"33abc"  => NaN
true     => 1
false    => 0 
*/

let isLoggedIn = "shubham"; //filled string returns true while convert to boolean type
let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);
console.log(typeof(booleanIsloggedIn));
console.log(booleanIsloggedIn);

let isLoggedIn1 = "" // whereas empty string false while converting empty string into boolean type
let booleanIsloggedIn1 = Boolean(isLoggedIn1);
console.log(isLoggedIn1);
console.log(typeof(booleanIsloggedIn1));
console.log(booleanIsloggedIn1);

/*
1 or any non zero value => true
0 = false
"" = false (empty string)
"shubham" = true (filled string)

 */

let value = -1;
let valueBool = Boolean(value);
console.log(value);
console.log(typeof(valueBool));
console.log(valueBool);

// while converting number to string they will look same as it is but they can be differentiate based on their type
let anyNum = 33;
let Numstring = String(anyNum);
console.log(`value is ${anyNum} and the type is ${typeof(anyNum)}`);
console.log(`value is ${Numstring} and the type is ${typeof(Numstring)}`);
console.log(typeof(Numstring));

//--OPERATION--
let valuee = 3
let negvalue = -valuee;
console.log(negvalue) // here -3 is our answer

// basic arithmetic operation in javascript
// console.log(2 + 5)
// console.log(2 - 5)
// console.log(2 * 5)
// console.log(2 / 5) //there is no concept of int/int here like c
// console.log(2 ** 5)
// console.log(2 % 5)
// console.log(5 & 6)

//concatenation of two string in js (it is same like python concatenation operation)
// let str1 = "hello"
// let str2 = "shubham singh"
// let str3 = str1 + str2
// console.log(str3)

//string conversion confusion operation.
console.log("1" + 2); // ans 12
console.log(5 + "2"); // ans 52 
// if the starting is of 'number' type then whole value is converted into numbered type with string attached
console.log(1 + 2 + "2"); // ans 32
//if the starting is 'number' type then whole is value converted into numbered type with string attached
console.log("1" + 2 + 2);  // ans 122
//if the starting is 'string' type then whole is converted into string type with number type attached

// console.log(3 + 4 * 5 % 3);
// console.log(3<<2)

console.log(+true) // it will give value 1 as answer
// console.log(true+) it is invalid as it will give an error
console.log(15 +"") // empty string that's why when adding it will return 15 only its answer
// it will give same as the number which is to be added like 15 is answer here similarly if 14 provided then it is 14

let counter = 100
counter++
console.log(counter++) // it will give 101 and convert 101 to 102 as it is a post increment
console.log(++counter) // similarly it will give 103 as it convert 102 into 103