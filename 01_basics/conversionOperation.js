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