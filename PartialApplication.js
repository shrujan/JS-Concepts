
const multiply = (a, b, c) => a * b * c;

// here we bind multiply method with the first param a with 5 and return a new function
// this new method is called with all the remainnig params
const partiallyMul5 = multiply.bind(null, 5)

console.log(partiallyMul5(10, 20))