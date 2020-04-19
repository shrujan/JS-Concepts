class Charecter {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon
    }

    attack() {
        console.log(`${this.name} attack using ${this.weapon}`)
    }
}

class Elf extends Charecter {
    constructor(name, weapon, specialAbility){
        super(name,weapon)
        this.specialAbility = specialAbility
    }

    heal() {
        console.log(this.name + ' can heal using ' + this.specialAbility)
    }
}

class Ogre extends Charecter {
    constructor(name, weapon, buildType){
        super(name,weapon)
        this.buildType = buildType
    }

    build() {
        console.log(this.name + ' can build ' + this.buildType)
    }
}

const elfPeter = new Elf('Peter', 'Bow', 'water');
elfPeter.attack()
elfPeter.heal();

const Shrek = new Ogre('Shrek', 'Club', 'Fortress');
Shrek.build();