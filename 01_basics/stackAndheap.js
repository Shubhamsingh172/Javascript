// in this file we will get to know how memory is worked in the javascript like memory allocation or deallocation

//Memory are of two types : Stack(Primitive) and Heap(Reference)
// whenever we use primitive means static it will give the copy of variable and value
// heap type memory 
let myname = "shubham";
let anothername = myname;
console.log(anothername)
console.log(myname)

anothername = "anshu";
console.log(anothername)
console.log(myname);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne; // by using reference here the value has been changed
userTwo.email = "shubham12@gmail.com";

console.log(userOne)
console.log(userTwo)

// Key Differences in Memory Allocation and Copying:
// Feature	                        Stack(Primitives)	                    Heap(Reference Types)
// 1.Allocation	                    Directly stored in the stack	        Stored in the heap, reference in the stack
// 2.Size	                        Fixed and small	                        Dynamic and larger
// 3.Copying Behavior	            By value(creates a copy)	            By reference(shares the same object)
// 4.Modification Impact	        Changes affect only the copy	        Changes affect all references


// for stack 
let x = 5;
let y = x;   // Copy of 'x' is created
y = 10;      // Modifying 'y' doesn't affect 'x'
console.log(x); // 5


// for heap 
let arr1 = [1, 2, 3];
let arr2 = arr1; // Copy of reference, not the data
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] - both variables point to the same array
