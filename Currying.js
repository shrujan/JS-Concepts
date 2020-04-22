// change the function which takes multiple parameter to single parameter 
// we do that using closures 

// normal fn
const multiply = (a,b) => a*b;
console.log(multiply(3,5))   

// curried method now acceps single params
// the inner method remembers the value of a and multiplies it with b
const multiplyNum = (a) => (b) => a * b;

//using currying we have created a new method which always multiplies by 5
const mulBy5 = multiplyNum(5);
console.log(mulBy5(30))