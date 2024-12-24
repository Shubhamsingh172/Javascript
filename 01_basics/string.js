const sentence = "India is my country and it is the best country in the world.";
console.log(sentence.charAt(6)) // expected 'i'
console.log(sentence.at(6)) // expected 'i'
console.log(`char code of ${sentence.at(6)} is ${sentence.charCodeAt(6)}`); // expected char code of i is 105
console.log(sentence.codePointAt(1)) // output 110

str1 = "Hello";
str2 = "World";
console.log(str1.concat(' ',str2));
console.log(sentence.endsWith("world.")) // true
console.log(sentence.endsWith('and',23)) // here 23 means check upto 23 characters
console.log(sentence.includes('and')) // true this will check is the given element is present in the string or not
console.log(sentence.indexOf('I')); // expected 0
console.log(sentence.length); // length is 60
const regex = /[A-Z]/g
const regexx = /[a-z]/g
console.log(sentence.match(regex)) // expected the capital letter means uppercase letter as output
console.log(sentence.match(regexx)) //expected the small letter means lowercase letter as output
console.log(sentence.matchAll)
