let wizzard = {
    health: 50,
    heal(h1, h2) {
        this.health += h1 + h2;
        console.log(' Health Healed, Health is  ', this.health)
    }
}

let archer = {
    health: 10,
    showHealth() {
        console.log('Archer health is ' + this.health);
    }
}

archer.showHealth();

wizzard.heal.call(archer, 10,10);
wizzard.heal.apply(archer, [50,506]);

archer.showHealth();

// bind returns another function to execute later on
let thisFn = wizzard.heal.bind(archer, 40, 50);
thisFn()



// .... Excercise
const array = [1,2,3];
 
function getMaxNumber(arr){
  //code here  
//   here this does not matter
  return Math.max.apply(null, arr)
}
 
console.log(getMaxNumber(array)) // should return 3


// --------- FUNCTION CURRYING -----------
// here we pass 2 as first param a and set and return the new method
// this method starts multiplying when we trigger the mulBy2 method and pass second param 
function multiply (a,b) {
    console.log(a , b)
    return a*b;
}

let mulBy2 = multiply.bind(this);

// ------ ex 
const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter;
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't

//   fix
const giveMeTheCharacterNOW1 = character.getCharacter.bind(character);
   
//How Would you fix this?
console.log('?', giveMeTheCharacterNOW1()); // this returns simon
  