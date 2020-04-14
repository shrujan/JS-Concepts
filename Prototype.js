
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
    name: 'shr',
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
    name: 'eee',
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

// Functional prototype - Default Prototype Chain
// inheritance prototype vid 4 ** IMP

function mulBy5 (num) {
    return num*5;
}

// just like Base Function Constructor has prototype Obj every function you create also hase 
// protoype Obj
// ONLY CUSTOM FUNCTIONS(mulBy5()) HAVE PROTOTYPE PROPERTY NOT CUSTOM ARRAY or CUSTOM OBJECT

console.log(mulBy5.prototype)

// going up the prototype chain leads to Base Function's prototype Obj {}
// IMP: __proto__ lives inside prototype Obj
// this Prototype method has call, apply, bind. in this case tem1.
let funBaseProto = mulBy5.__proto__ ;

// so funBaseProto is same as Function.prototype
console.log(Function.prototype, funBaseProto,funBaseProto === Function.prototype );
// funBaseProto === Function.prototype // true

// we go up the prototype chain to Object's prototype Object.
// Base Object has hasOwnProperty(), toString()
let BaseObjProto = funBaseProto.__proto__; // this points to Object's prototype Object {};
// BaseObjProto === Object.prototype // ->true

BaseObjProto.__proto__ // null . Nothing above Object Prototype
// Similarly
Object.prototype.__proto__ // null

typeof Object // function because of prototype property

// ----------------------------------
// ----- ARRAY Prototype Chain

let array = [];

// array.prototype; //NOT AVAILABLE only newly created function has prototype 


// array we create does not have property map
// array.__proto__ points to base Array's prototype obj
// Base Array has map in its prototype 
array.__proto__.hasOwnProperty('map'); // true

// so basically 
Array.prototype === array.__proto__// true
Array.prototype.__proto__ === Object.prototype // Base Object's prototype

// -------------------------

// Object inheritance

let obj1 = {};

// obj1 does not have prototype of its own
// obj1.prototype // <- no prototype

// obj1.__proto__ === Object.prototype;
// obj1.__proto__ points to base Object Constructor's prototype obj(property)

typeof Object // function

// -----------------
//  ------ String

String.prototype // works
'string'.prototype // not there