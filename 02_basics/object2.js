// const tinderUser = new Object(); // singleton object declaration when using constructor 

//using literals
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.userName = "Shubham";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', userName: 'Shubham', isLoggedIn: false } 

//we can also have object inside object(object nesting) like below example
const regularUser = 
{
    email : "shubham172@gmail.com",
    fullName:{
        userfullName:{
            firstName: "shubham",
            lastname: "singh"
        }
    }
}


//by calling object with different style to get more confined result.
// console.log(regularUser); 
/*
{
  email: 'shubham172@gmail.com',
  fullName: { userfullName: { firstName: 'shubham', lastname: 'singh' } }
}
*/
console.log(regularUser.fullName); //{ userfullName: { firstName: 'shubham', lastname: 'singh' } }
console.log(regularUser.fullName.userfullName); //{ firstName: 'shubham', lastname: 'singh' }
console.log(regularUser.fullName.userfullName.firstName); // shubham 

//like above we can call our desired thing with nested calling of object

//concatenation of two object means combining to object in single object;

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'a', 4 : 'b'}
const obj3 = {5 : 'a', 6 : 'b'}

// console.log(obj1 + obj2); // this is not a right way to concatenate two object; 
// const obj4 = {obj1,obj2,obj3};
// console.log(obj4); // this is also will not provide the combined concatenated array
/*
{
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '3': 'a', '4': 'b' },
    obj3: { '5': 'a', '6': 'b' }
}
*/

//right way is to assign the all object into different object

// const obj4 = Object.assign(obj1,obj2,obj3);
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } like this 

//also using spread operator we can combine the objects

const obj4 = {...obj1,...obj2,...obj3};
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//we get numbers of the data from the browser so to tackle with that data we can call those data specifically by their name

const data = [
    {
        id : 1,
        email: 'abc@gmail.com'
    },
    {
        id : 2,
        email: 'def@gmail.com'
    },
    {
        id : 3,
        email: 'ghi@gmail.com'
    }
]

console.log(data[0].email); // like this

//moving to next part 

console.log(tinderUser); //{ id: '123abc', userName: 'Shubham', isLoggedIn: false }
console.log(Object.keys(tinderUser)) // by using this we can get the keys which are defined in the tinderUser Object stored in arr
console.log(Object.values(tinderUser)); // by using this we can get the values which are defined in the tinderUser Object same as
console.log(Object.entries(tinderUser));
/*
[by using entries we get the output like this

  [ 'id', '123abc' ],
  [ 'userName', 'Shubham' ],
  [ 'isLoggedIn', false ]
]
*/

//also we can check the property validation of object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true





