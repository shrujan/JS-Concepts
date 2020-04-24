// VID 122
const makeAbs = (num) => Math.abs(num);
const mulBy2 = (num) => num * 2;

// COMPOSE
// make one HOFuntion which accepts 2 functions and uses them
// function are executed from right to left
// first g is executed and then f

const compose = (f, g) => (num) => f(g(num)) ;
// pipe reads the function from left to right
// mulBy2 gets run first
const pipe = (f, g) => (num) => g(f(num))
const absMultiplyByTwo = compose(makeAbs, mulBy2)
const absMultiplyByTwoPipe = pipe(makeAbs, mulBy2)
console.log(absMultiplyByTwoPipe(-50))
