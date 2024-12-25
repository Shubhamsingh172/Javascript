let arr1 = [1,2,3,4,5,6,7,8]; 
/*
[ output like this in javascript
    1, 2, 3, 4,
    5, 6, 7, 8
]
*/
console.log(arr1);

// in javascript array is same as python list when it comes to storing elements 
let arr2 = [1,2,3,true,false,"shubham",96.96];
console.log(arr2); // for this output like this [ 1, 2, 3, true, false, 'shubham', 96.96 ]

//array can also declare like this :
const arr3 = new Array(1,2,3,"shubham");
console.log(arr3); // output : [ 1, 2, 3, 'shubham' ]

//Array methods 
 arr4 = [10,20,30,40,50];

arr4.push(60) // adding element from last 
arr4.push(70) // same as above
console.log(arr4);

arr4.pop();
console.log(arr4); // deleting element from the last

arr4.unshift(9); //it add element at the front 
arr4.unshift(10); // same as above
console.log(arr4);  // output : [10,  9, 10, 20, 30, 40, 50, 60] in js format

arr4.shift(); // removes the first element of an array and returns it.
console.log(arr4); // output :[ 9, 10, 20,30, 40, 50, 60]

console.log(arr4.includes(4)); // false
console.log(arr4.includes(40)); // true

console.log(arr4.indexOf(40)); // 4
 
const newArr = arr4.join(); // this array into another array and convert it into string that's why the given output is in string
console.log(arr4);
console.log(newArr); //9,10,20,30,40,50,60
console.log(typeof newArr); //String

// slice and splice 

const arr5 = [5,10,15,20,25,30];
console.log(arr5.slice(0,3)); //[ 5, 10, 15 ] slicing same as python but method diffrent with commas 
console.log(arr5.splice(1,3)); // [ 5, 10, 15 ]
// after using splice the actual arr5 is manipulated so that's the difference between slice and splice 
console.log(arr5); // [ 20, 25, 30 ] actual array after splice

//Adding elements
let arr = [1, 4, 5];
arr.splice(1, 0, 2, 3); // Adds 2 and 3 starting at index 1
console.log(arr); // Output: [1, 2, 3, 4, 5]

//Replacing elements
arr.splice(1, 2, 8, 9); // Replaces 2 elements starting at index 1 with 8 and 9
console.log(arr); // Output: [1, 8, 9, 4, 5]
