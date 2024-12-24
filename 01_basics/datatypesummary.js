//javascript is a dynamic typed language

//primitive data type
// 7 types(Call by value) = String, Number, Boolean, null(empty), undefined(not known), Symbol(used to make the value as unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true;
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123') //Returns a new unique Symbol value.
const anotherId = Symbol('123')
console.log(id === anotherId)

const num = 123456789654788999; // big int;
console.log(num)


//Reference type : non primitive type
//Array, Objects, Functions

//array 
const heroes = ["shaktiman",3, "nagaraj", "krish"]; // it is same like python list
console.log(heroes)

//object is same like python dictionary
const mydata = {
    name : "shubham singh",
    age : 21,
    weight : 68
}
console.log(mydata)

const myfunction = function() {
    console.log("Function aa gya bhai use karna javascript me.");
}
myfunction() // now i know how to use function in javascript it same like python return type of function is undefined