// FACTORY FUNCTIONS Simple way to create Object 
// VID 92
function createElf (name, weapon) {

    return {
        name: name,
        weapon: weapon,
        attack() {
            console.log(`${ name } attack with ${ weapon}`)
        }
    }
}

const elf1 = createElf('pedrew', 'stones');
elf1.attack();

const elf2 = createElf('milagres', 'stones');
elf2.attack();

//--------------------------

// Object.create  way of creating obj 
// VID 93
const elfProperties = {
    attack() {
        console.log(`${this.name} attacks using ${this.weapon}`)
    }
}

function elf (name, weapon) {
    // create a new object by inheriting the elfProperties and its function
    // now the new elf has a prototype chain to elfProperties
    const newElf = Object.create(elfProperties);
    // this will show that prototype chain links to elfProperties and attack function is visible
    console.log(newElf.__proto__);

    newElf.name = name;
    newElf.weapon = weapon;
    
    return newElf;

}

const sam = elf('sam', 'sticks');
// when we call attack function it check in sam object for attack function
// when it does not find it goes up the prototype chain to parent obj
sam.attack();

const peter = elf('peter', 'fire');
peter.attack();


// ------------------
//     Constructor way of creating class
// VId 94
// constructor Fn Start with Caps <- norm
console.log('----------- constructor fn -----------')
function ConstructorElf(name, weapon) {
    this.name = name;
    this.weapon = weapon;

    
}
// usually this keyword inside ConstructorElf would point to windows but in this case
// this points to ConstructorElf function because of new <- keyword
// because ConstructorElf is a constuctor of Function we can use prototype, and it has bind, call, apply 
// 
// Old function is dynamically scoped this is going to change based on who called it.
// more on ThisEx.js
ConstructorElf.prototype.attack = function () {
        console.log(`${this.name } attack with ${this.weapon}` );
}


// wont work because since arrow fn is lexixally scoped and since this function is written in windows scope
// this is undefined
// because arrow fn is lexically scoped and the function is written in global space
ConstructorElf.prototype.attack1 =  () =>  {
    console.log(`${this.name} attacks with ${this.weapon}`)
}

let vicky = new ConstructorElf('vicky', 'banana')
vicky.attack();

// in the above statement when we created a new obj using new keywork
// ConstructorElf got a prototype and vicky proto points to ConstructorElf's prototype which has attack function as well
console.log(vicky.__proto__) // ConstructorElf prototype

console.log(vicky.prototype) // undefined as only the base construction Function have prototype not newly created obj


const sandElf = new Function('name', 'weapon', 
    `this.name = name;
    this.weapon = weapon;
    `)

sandElf.prototype.attack = function () {
    console.log(`${this.name} attacks with ${this.weapon}`)
}

const sandy = new sandElf('sandy', 'sand');

sandy.attack();

