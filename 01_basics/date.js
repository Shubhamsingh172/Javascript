let myDate = new Date()
console.log(myDate); // it gives output like this 2024-12-25T20:35:09.856Z
console.log(myDate.toString()); //Wed Dec 25 2024 20:36:33 GMT+0000 (Coordinated Universal Time)
/*
localeString typically refers to a string formatted according to the conventions of a particular locale.
In programming, a "locale" represents the set of user preferences and settings related to language, country,
and formatting conventions. */
console.log(myDate.toLocaleDateString("en-IN")); //12/25/2024
console.log(typeof(myDate)); //it is an type of object

//we can also create a date 
// let myCreateDate = new Date(2004, 2, 17) // month in javascript start from 0th index
// console.log(myCreateDate.toString()); //Wed Mar 17 2004 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(myCreateDate.toLocaleDateString()); //3/17/2004 if only date use localeDateString
// console.log(myCreateDate.toLocaleString()); //3/17/2004, 12:00:00 AM if want all things use string

// let myCreateDate = new Date(2004, 2, 17, 5, 3)
// console.log(myCreateDate.toString()); //Wed Mar 17 2004 05:03:00 GMT+0000 (Coordinated Universal Time)
// console.log(myCreateDate.toLocaleDateString()); // 3/17/2004
// console.log(myCreateDate.toLocaleString("en-IN")); //17/3/2004, 5:03:00 am

// let myCreateDate = new Date("17-03-2004");
// console.log(myCreateDate); // invalid date

// let myCreateDate = new Date("2004-03-17");
// console.log(myCreateDate); //2004-02-17T00:00:00.000Z
// console.log(myCreateDate.toLocaleString()); 
// // 3/17/2004, 12:00:00 AM if we assigning date inside string then index of month as it is.
// console.log(myCreateDate.toLocaleDateString()); // 3/17/2004

// let myCreateDate = new Date("03-17-2004");
// console.log(myCreateDate); //2004-03-17T00:00:00.000Z
// console.log(myCreateDate.toLocaleString()); //3/17/2004, 12:00:00 AM
// console.log(myCreateDate.toLocaleDateString()); //3/17/2004, 

let mytimeStamp = Date.now(); 
console.log(mytimeStamp); // in miliseconds 1735160527447
console.log(Math.floor(Date.now()/1000)); //in seconds 1735160527

let newDate = new Date();
console.log(newDate); //2024-12-25T21:07:37.924Z
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString()); //12/25/2024, 9:08:52 PM
console.log(newDate.toLocaleTimeString()); //9:08:52 PM
console.log(newDate.getMonth());
console.log(newDate.getDay());

//we can also have output like this `${newDate.getDay()} and the time `


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month:"long",
    year:"2-digit",
})) // give output like this--> December 24 Wednesday



