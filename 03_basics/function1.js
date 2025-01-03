//a function is set of collection of code which can be called as many times as we want.

function sayMyname() // function definition
{
    console.log("S"),
    console.log("H"),
    console.log("U"),
    console.log("B"),
    console.log("H"),
    console.log("A"),
    console.log("M")
}

// sayMyname // also if we only write function name without calling it then it would not give any errors 
// it does not print anything it just says it return its reference only.
// sayMyname() // function calling 

function addTwoNumbers(num1, num2)
{
    let result = num1 + num2;
    return result;
    return num1 + num2; // it can be clearly seen here after nothing all statement are considered as void means no meaning.
}

let result = addTwoNumbers(5, 6); 
console.log("Result : ",result); //Result :  11 also if we doesn't return anything from function then it return undefined only. 

// also 

function add(num1,num2)
{
    console.log(num1+num2); // answer will be : 11
}

// add(5, "6"); // here 56 will be the answer , as we know how conversion is done in javascipt automatically.
// add(5, "a"); // 5a will be the answer.
// add(5, null); // 5 will be the answer.
// add() // NaN will be the answer.
// add(5,6); here we are only calling function.

//suppose if we want to have its return value also function does not return anything then what will be the case for it.

let sum = add(5, 6);
console.log("Result : ",sum); // look here what it says, Result :  undefined(it return nothing but undefined as its argument)

//another concept

// function loginUserMessage(username)
// {
//     if(!username) // also username === undefined
//     {
//         console.log("Please enter an username...")
//         return;
//     }
//     return username; // here also we can print the value or data but returning is good practice as far so we return here.
// }

// console.log(loginUserMessage());

/* output : for above 
Please enter an username... (as we are not passing anything so it prints the message we set)
undefined // function returns nothing so it is undefined 
 */

function loginUser(username = "Shubh") // we can also set default value to the arguments, if the parameter is absent sometimes
{
    if(!username)
    {
        console.log("Please enter an username : ");
        return;
    }
    return `${username} just logged in.`;
}

loginUser(); // without passing username output : Hello Shubh good morning hope you are going well, so go with flow.
console.log(loginUser("Saurav")); // Saurav just logged in. (like this output we have)

// suppose when we are shopping at online website like amazon and flipkart there is one thing cart where we can cart multiple items
// Similarly if when the function doesn't know how many parameters have passed to it
//  then to handle this we use ...rest operator which store all the value in one array and return it
/*
also in this case suppose (val1,val2, ...num1)
and if we pass(100,200,300,400,100) 

then while printing it will only print [300, 400, 100] because there is argument present in the function definition block which
will take the value which is passed like val1 = 100 and val2 = 200 like this.*/

function calculateCartPrices(price1,price2, ...price3) // using spread of operator we can do this thing to calculate 
{
    return price3;
}

console.log(calculateCartPrices(200, 300, 400, 500));

//passing object to a function

const user =
{
    username: "Shubham",
    id : 199
}

function handleOject(anyobject)
{
    return `Username is ${anyobject.username} and id is : ${anyobject.id}`;
}
console.log(handleOject(user)) // output like this : Username is Shubham and id is : 199

// also we can pass object directly like this 
console.log(handleOject({
    username:"Saurav",
    id : 3
})) // output like this : Username is Saurav and id is : 3

//Passing array to a function
let arr = [1000,2000,3000,4000,5000];
function myfunc(arr)
{
    return arr;
}
console.log(myfunc([100,200,300,400,500])); //[ 100, 200, 300, 400, 500 ]
console.log(myfunc(arr)) //[ 1000, 2000, 3000, 4000, 5000 ]