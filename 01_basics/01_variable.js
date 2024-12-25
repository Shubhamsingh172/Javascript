const accountID = 12345
let accountEmail = "shubham17@gmail.com"; 
var accountPassword = "123456"; 
accountCity = "Nashik"


//accountID = 224466 // it is invalid because a constant variable cannot be change it is only for read purpose after declaration

console.log(accountID)
//let : - it is mainly used for local scope and can be re-assigned a value but can't be declared again.
//var : - global scope variable, it can be re-assigned a value and declared again
//Note : - never use var instead of let because of block and functional scope issues.
//console.table([]) by using this we can print the data in tabular format by writing specific variable name in square brackets.
console.table([accountID,accountEmail,accountPassword,accountCity]); 

/*
above output like this : 
   (index)│       Values          │
├─────────┼───────────────────────┤
│ 0       │ 12345                 │
│ 1       │ 'shubham17@gmail.com' │
│ 2       │ '123456'              │
│ 3       │ 'Nashik'              |

*/