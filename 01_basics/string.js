const sentence = "India is my country and it is the best country in the world.";
console.log(sentence.charAt(6)) // expected 'i'
console.log(sentence.at(6)) // expected 'i'
console.log(`char code of ${sentence.at(6)} is ${sentence.charCodeAt(6)}`); // expected char code(ASCII code) of i is 105 
console.log(sentence.codePointAt(1)) // output 110

str1 = "Hello";
str2 = "World";
console.log(str1.concat(' ',str2));
//endswith
console.log(sentence.endsWith("world.")) // true
console.log(sentence.endsWith('and',23)) // here 23 means check upto 23 characters

//includes
console.log(sentence.includes('and')) // true this will check is the given element is present in the string or not

//indexOf
console.log(sentence.indexOf('I')); // expected 0

//length
console.log(sentence.length); // length is 60

//regex and match
const regex = /[A-Z]/g
const regexx = /[a-z]/g
console.log(sentence.match(regex)) // expected the all capital letter present in the string means uppercase letter as output
console.log(sentence.match(regexx)) //expected the small letter means lowercase letter as output
console.log(sentence.matchAll)

// lastindexOf 
console.log(`index of last "is" is : `,sentence.lastIndexOf("is")); // it will return the last index of "is" 27 as its answer

//padEnd
console.log(str1.padEnd(25,'.')); // output like this Hello....................

//padStart and slice and all
const fullNumber = '7020366092';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: ******6092"

// repeat
const mood = " Happy!!"
console.log(`Wish you ${mood.repeat(3)} birthday to you`); // it will repeat str1 value for 3 times
// like this Wish you  Happy!! Happy!! Happy!! birthday to you

//replace
console.log(mood.replace("Happy",'Delightful')); // it will replace existing character with desired one

