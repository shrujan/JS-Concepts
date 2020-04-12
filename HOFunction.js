
// HOFuncion is the one that accepts funcion as param or return funcion
// returning a funcion here
const multiplyBy = (num1) => {

    return (num2) => {
        return res = num1 * num2
    }
}

multiplyByTwo = multiplyBy(2)
console.log(multiplyByTwo(10));

multiplyByFive = multiplyBy(5)
console.log(multiplyByTwo(45));

// -------------------------
// ----------- Funcion that accepts funcion as param

const disp = (person) => {
    console.log(`Access granted to ${person.role} ${person.name}`);
}

const authenticate = (person, dispFn) => {
    let authParam;
    
    if (person.role === 'user') {
        authParam = 1000000;
    } else if (person.role === 'admin') {
        authParam = 1000000;
    }

    for (let i = 0; i < authParam; i ++) {

    }

    dispFn(person);
}

authenticate({name: 'shrujan', role: 'admin'}, disp);
authenticate({name: 'eesha', role: 'user'}, disp);

