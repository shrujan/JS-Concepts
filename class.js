class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon
    }

    attack() {
        console.log(`${this.name } attacks with ${this.weapon}`);
    }
}
// create a instance
const arjun = new Elf('arjun', 'Bow');
arjun.attack();

console.log(arjun instanceof Elf)
console.log(typeof Elf) // function as internally classes are really just syntactic sugarcoating for function
