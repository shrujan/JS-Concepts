// Fn Expressions

let Canada = () => {
    console.log('Canada') ;
}

// function declaratoion
function India () {
    console.log(arguments); // empty obj
    console.log('India');
}


Canada() // defined run time till the code is run the var Canada is undefined
India() // definded at parse time so hoiseted and can be called before defination


// ---------------

function meetup (person1, person2) {
    console.log('arguments == ',arguments); // try not to use this
    console.log(Array.from(arguments))
    console.log(`${person1} married ${person2}`); 
}

meetup('shrujan', 'eesha');

// --------------------

function meetup2 (...args) {
    console.log(args);
    console.log(`${args[0]} married ${args[1]}`)
}

meetup2('shrujan', 'eesha')

// --------------

var heyhey = function doodle () {
    console.log('heyeh');

    // doodle() // works because doodle has its own scope and its scope is here explanation in vid 38 last bookmark
}

heyhey();

// doodle();// // Error! because it is enclosed in its own scope.
//-------------------

//Function Scope
function loop() {
    for( var i = 0; i < 5; i++) {
    //   console.log(i);
    }
    console.log(i)
  }
  
  //Block Scope
  function loop2() {
    for( let i = 0; i < 5; i++) {
    //   console.log(i);
    }
    // console.log(i) // error because we are trying to print let i outside the block of loop
  }

  loop();
  loop2();

  // -----------------------
// IFFE
  (function () {
    console.log('hello');
  })(); //<- semicolon important

  (function () {
    console.log('hello11');
  }()); // <- same as IFFE

  // ----------------
// simple example to protect values and variables - create a class like structure with functons
  let script1 = (() => {

    let innerFn = () => {
      return 5;
    }

    return {
        a: innerFn
    }
  })()

  console.log('class like structure', script1.a()) ; //returns 5

  // ------------------
// things you can do with a function

// store it in variable
const fn = () => {
  console.log('fn stored as var')
}

fn();

// pass it as params
function a (fn) {
  fn()
}

a( () => {
  console.log('function passed as param')
});

// return funcion as output from another function
function process() {
  return () => {
    console.log('funcion is returned');
  }
}

let ret = process();
ret()