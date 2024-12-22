"use strict"; //treat all JS code in newer version rather than using old version code

// alert(3+3) // we are using node js, not browser so avoid this 

console.log(3
    +
    3
) // do not write code like this as it is not a good practice for writing code and kind of bad readability.

//prefer to write like this below written code
console.log(3+2)
console.log("Shubham Singh")

/*
Data Type	Description	Example
String =>	Represents textual data like "Hello", 'World'
Number =>	Represents numbers, including integers and floating-point numbers. like 	42, 3.14
BigInt =>	Represents integers larger than Number.MAX_SAFE_INTEGER. like 	1234567890123456789n
Boolean =>	Represents logical values: true or false, like -> true, false
Undefined =>	A variable that has been declared but not initialized.	let x; // undefined
Null =>	Represents the intentional absence of any object value.	let x = null;
Symbol =>	Represents a unique and immutable value, often used as object keys.	Symbol('id') */

let name = "shubham singh"; // string is nothing but the collection of characters which represents textual data 
let age = 21; // represnts numeric data including numbers and floating point 
let pi = 3.142; // numeric data i.e floating point
let isLoggedIn = false; // represents logical values like true or false
let state; // undefined as it is declared but not inititalized
let x = null; // represents the empty thing like someone need temperature value so instead of giving 0 we can say it is null 

console.table([name,age,pi,isLoggedIn,state,x]);

//Non Primitive data type
/*
Non-Primitive (Reference) Data Types

Non-primitive types are mutable and stored in the heap.
Data Type	              Description	Example
Object	  ->    Represents a collection of key-value pairs. Includes arrays and functions.	{ name: "John" }
Array	  ->    A special type of object for storing ordered collections.	[1, 2, 3]
Function  ->	A callable object that contains executable code.	function greet() {}
Date	  ->    An object for handling dates and times.	new Date()
RegExp	  ->    An object for matching text using patterns.	/abc/ 
*/

/*
3. Special Cases
Data Type	        Description	                                                Example
NaN	            A special Number type value representing "Not-a-Number".    Number("abc") // NaN
Infinity	    A special Number type value representing infinity.	        1 / 0 // Infinity
*/

console.log(typeof 42);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof null);       // "object" (historical bug in JS)
console.log(typeof undefined);  // "undefined"
console.log(typeof 3.14);       // "number"
