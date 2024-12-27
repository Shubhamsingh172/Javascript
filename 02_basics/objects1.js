// singleton using constructor

// Object.create like this 

// using literals

const mySym = Symbol("key1");

const jsUser = { // by this we can declare and define object in js
    name : "Shubham Singh",
    age : 21,
    [mySym] : "mykey1",
    // here we declaring symbol inside square bracket then only it will work as symbol otherwise it will worksas string
    location : "Nashik",
    email : "shubham12@gmail.com",
    isloggedIn : false,
    LoggedDays : ["Monday", "Wednesday", "Friday"]
}

// console.log(jsUser);

//if we want to access object particular property then there are two ways of accessment by using dot. and square bracket 
console.log(jsUser.email);
console.log(jsUser["name"]) // here square bracket and inside the variable name in the form of string state that type of variable
console.log(jsUser["location"]);

//also while using symbol there is only way to access element of symbol by using square bracket by dot operator we cannot access
console.log(jsUser[mySym]) // here no string because it is of symbol type that's the reason

// changing object values
jsUser.email = "shubham172004@gmail.com";
jsUser.LoggedDays = ["Monday","Saturday"];
// console.log(jsUser);

//for prohibiting the change of properties of objects or to stop from change we can use freeze 

//Object.freeze(jsUser); // now even after changing the value , actual value will never change coz it is freezed now
jsUser.email = "shubham17032004@gmail.com";
// console.log(jsUser);

//adding function in object
jsUser.greeting = function()
{
    console.log("Hello js User it is my world of coding.");
}
console.log(jsUser.greeting()); 

/*
above output like this 

shubham12@gmail.com
Shubham Singh
Nashik
mykey1
Hello js User it is my world of coding.
undefined

*/

//concept of this pointer in js
jsUser.greetings = function()
{
    console.log(`Hello JS user, ${this.name}`); // this pointer carry the address of current caller object that's it.   
}
console.log(jsUser.greetings());
