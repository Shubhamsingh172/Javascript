// const score = 100
// console.log(score);

// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length); // it is firstly converted into string then its length can be calculated
// console.log(balance.toFixed(20)); // it is frequently used when we have to build e-commerce application

// //precision example
// const numberr = 23.8965423
// console.log(numberr.toPrecision(4)); // 23.90
// console.log(numberr.toPrecision(2)); // 24
// console.log(numberr.toPrecision(3)); // 23.9
// console.log(numberr.toPrecision(1)); // 2e+1

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // american standard 1,000,000
// //for indian standard
// console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 like this

//-------------------MATHS---------------------------
console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); // absolute value i.e 4
console.log(Math.abs(4)); //4
console.log(Math.round(4.2)); //4
console.log(Math.ceil(4.1)) //5
console.log(Math.floor(4.8)) //4
console.log(Math.min(8,9,4,3,1)); // 1
console.log(Math.max(8,9,4,3,1)); // 9
console.log(Math.random()); // it will generate values between 0-1
//sometimes values may be like 0.04 0.02 like this therefore to tackle this we are adding one after multiplication
console.log(Math.random()*10 + 1); // one specifies that it will always come greater than 1 
console.log(Math.random()*10 + 1); // one specifies that it will always come greater than 1 

min = 10
max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + 10);



