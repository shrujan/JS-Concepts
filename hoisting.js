// var or function get hoisted
// const or let does not get hoised

console.log (teddy);

var teddy = 'bear';
// const teddy = 'bear'; // will throw a error


function ballet() {
    console.log('This is a ballet')
}

// this will throw an error as first char is not var or function
// console.log(yellow());

(
    function yellow() {
        console.log('yellos');
    }
)()

// if a function and var have same name then function is hoiseted higher unless variable is initialized
console.log("typeof fruit ==",typeof fruit)
var fruit;
//function declaration
function fruit () {
    console.log('apple')
}

// console.log('fruit2', fruit2()) // will throw an error as we tried to run undefined as a function
// function expression until execution phase is done and function is run only then the variable is defined

var fruit2 = function () {
    console.log('i love mango')
}

console.log('fruit2', fruit2()) // works and will call the funciton

// --------------------------- 
var favouriteFood = "grapes";

// the execution context(world) is different  new functional world 
var foodThoughts = function () {
     console.log("Original favourite food: " + favouriteFood); // the var inside the functon scope is initially undefined

     var favouriteFood = "sushi";

     console.log("New favourite food: " + favouriteFood);
};

foodThoughts();

// ------------------------------------

// 0-------------------
function bigBrother(){
    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
  }
  

  // Before running this code, what do you think the output is?
  console.log(bigBrother());// no me!


//   -Initially the creation phase takes place.

// -The interpreter sees line one, and finds out its a function declaration and stashes that into memory along with whatever is inside the function.

// -Then it checks till the end and there are no more declarations so it calls the bigBrother function in the execution phase.

// -Now, each time a function is called it has its own execution context. So, the same thing happens within the function.

// -littleBrother() is stashed into memory but since it is hoisted therefore the last declaration overwrites the initial declaration.

// -Finally when littleBrother() is invoked it returns 'no me!'
//   -------------------

// -------------------------------
function bigBrother1(){
     var littleBrother = function () {
      return 'it is me!!!!';
    }
    return littleBrother(); // because of this return code below is not read. otherwise littlebrother is no me!
    var littleBrother = function() {
      return 'no me!';
    }
  }
  

  // Before running this code, what do you think the output is?
  console.log(bigBrother1());// its mee!!!

//   In this case, hoisting of the function littleBrother which is defined after the return statement doesn't happen at all.

// Because you already have a variable which is called littleBrother, the js engine will simply drop the function after the return keyword.
  // ------------------