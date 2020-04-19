function Charecter (name, weapon) {
    this.name = name;
    this.weapon = weapon
}

Charecter.prototype.attack = function () {
    console.log(`${this.name} attacks with ${this.weapon}`)
}

const C1 = new Charecter('shrujan', 'Trident')
C1.attack();


function Elf () {
    
}

// inherit Charecter class by ELF
Elf.prototype = new Charecter('Katara', 'water bending');

//add new method
Elf.prototype.heal = function () {
    console.log(`${this.name} can heal ...`);
}

const elf1 = new Elf();
elf1.attack()
elf1.heal()