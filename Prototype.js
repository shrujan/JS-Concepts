
// RUN ON BROWSER
// create an empty array
var arr = [];

// since custom array is inherits the properties of array constructor
// has all properties of array and can access array functions 
console.log(arr.__proto__);

// this will show that the array constructor is inherited from base object constructor
console.log(arr.__proto__.__proto__);

// because of this you can access object function like 
arr.toString()

function a () {

}

// similarly for function, the custom function is inhereited from function constructor
console.log(a.__proto__);

// this will show that the function constructor is inherited from base object constructor
console.log(a.__proto__.__proto__);

// ------------------- 
// OBJ

var obj = {}

// this will show the base object and its methods
console.log(obj.__proto__);

// object proto is base object .. nothing above object
console.log(obj.__proto__.__proto__) // null

// ----------------------------------

// -------- EX 2
console.log('ex2')
const dragon = {
    name: 'shrujan',
    fire: true,

    fight() {
        if  (this.fire === true) {
            console.log('Attack mode: damage is 100');
        }
    },
    intro(){
        console.log(`Hi I am ${this.name} and I can brethe fire.`)
    }

}

const queen = {
    name: 'Eesha',
    intro() {
        console.log(`My name is ${this.name} and i am a queen's cat.`)
    }
}

// function borrowing
console.log(dragon.fight.call(queen));
console.log(dragon.intro());

// inherit dragon prototype by queem
// create a prototype chaing from queen to dragon
// now queen has access to fight and fire
queen.__proto__ = dragon;

// console.log is printed as queen not has fire property and 
// can use it using this
queen.fight()
queen.intro();

dragon.__proto__ ;// this is base obj obj and can use obj funcion

// parent -> child chain check
console.log(dragon.isPrototypeOf(queen)); // true
console.log( ' >>>>>>>>>>>')

for ( let prop in queen) {
    console.log(prop); // all the properties including inherited ones
    if (queen.hasOwnProperty(prop)) {
        // only prints properties inside original obj
        console.log('Own proprty == ', prop)
    }
}

/// --------------------------- 


