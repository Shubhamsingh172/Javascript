// in this file we will get to know how memory is worked in the javascript like memory allocation or deallocation

//Memory are of two types : Stack(Primitive) and Heap(Reference)
// whenever we use primitive means static it will give the copy of variable and value
// heap type memory 
let myname = "shubham";
let anothername = myname;
console.log(anothername)
console.log(myname)

anothername ="anshu";
console.log(anothername)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne; // by using reference here the value has been changed
userTwo.email = "shubham12@gmail.com";

console.log(userOne)
console.log(userTwo)