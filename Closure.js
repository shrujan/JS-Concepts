function grandparent () {
    let grandpa = 'dadaji';

    return function parent () {
        let parent = 'papa';

        return function nxtGen () {
            let name= 'stunner'
            console.log(`${grandpa} > ${parent} > ${name}` )
        }
    }
}

grandparent()()();
// OR

let parentFn = grandparent();
let nxtGenFn = parentFn();
nxtGenFn()

// ------ EXAMPLE 2 in ES6 --------

 const friend1  = (name) => {
    let friend1 = name;

    return  (name) =>  {
        let friend2 = name;

        return (name) => {
            let friend3 = name
            console.log(`${friend1} > ${friend2} > ${friend3}` )
        }
    }
}

friend1('shrujan')('chetan')('siddesh');

// OR

const friendGroup  = (friend1) => (friend2) => (friend3) => 
            console.log(`${friend1} > ${friend2} > ${friend3}`)

friendGroup('shrujan')('pravin')('ATM');

// ----------------

const largeArr = () => {
    let largeArray = new Array(7000).fill('hi')
    return (index) => {
        return largeArray[index];
    }
}

const accessArr = largeArr()
console.log(accessArr(400));

//-----------------------

const func = () => {
    let initCont = 0;
    const initalize = () => {
        console.log('init');
        initCont ++
    }

    return () => {
        if (initCont === 0) {
            initalize();
        }
    }
}

let trigger = func();
trigger();
trigger();