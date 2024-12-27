console.log(2 < 1); //false
console.log(2 >= 1); //true
console.log(2 > 1);  //true
console.log(2 == 1); //false
console.log(2 != 1); //true

//while comparing two things like number, variables or anything remember data type must be same otherwise result may be obligatory.

//while comparing like this
console.log("2" > 1) // here the string 2 is directly converted into number type therefore it returns "true" as answer
console.log("02" > 2) // as 2 is not greater than 2 therefore it returns answer as false

//while performing equality check and comparison operation result can be different
console.log("null >  0 : ",null > 0);
console.log("null == 0 " ,null == 0);
console.log("null >= 0 : ",null >= 0); // here the null is converted into 0 therefore it returns true as there is condition 
// greater than or equals to refer chatgpt

console.log(undefined == 0); //undefined is declared but not defined that's why it's behaviour is not known
console.log(undefined > 0);
console.log(undefined < 0);
//above all undefined operation answer is false so one need to avoid above all 8 operations.

//strict check using === triple equals to in this along with value it also check data type nor like == where automatic data is converted into 
//another data type which returns true as result.
console.log(2 == "2");
console.log(2 === "2")
console.log("2" == 2)