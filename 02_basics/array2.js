const marvel_heros = ["thor", "ironman", "batman"];
const dc_heros = ["superman", "flash", "spiderman"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros); //[ 'thor', 'ironman', 'batman', [ 'superman', 'flash', 'spiderman' ] ] output like this
// console.log(marvel_heros[3][1]) // to obtain the value 'flash' by using indexing

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros); // [ 'thor', 'ironman', 'batman', 'superman', 'flash', 'spiderman' ] output like this

//using spread operator ... it having same working as concat but in this we can add multiples array to merge together
const allnewheros = [dc_heros,...marvel_heros];
console.log(allnewheros); //[ 'thor', 'ironman', 'batman', 'superman', 'flash', 'spiderman' ] output like this or we can add
// multiple array to this using ... operator

//if we having a list of an array like generalized linked list type example that array inside array 
const another_Array = [1, 2, 3, [4, 5], 6, [7, 8], 9, [10, 11]];

// to arrange or we can say merge them in a straight line we can use a flat 
const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]

//for checking and validation of an array 

console.log(Array.isArray("Shubham")); // false 
console.log(Array.isArray(real_another_array)); true

// for creating string into array or any thing into array we will discuss more about this in detail
console.log(Array.from("Shubham")); // it means that array from shubham can be ['s','h','u','b','h','a','m']

console.log(Array.from({name : "shubham singh"})); 
// it will give just an empty [] array as it does not create key value type of an array

//we can also made array using of keyword

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); [100, 200, 300]







