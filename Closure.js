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

// --------------------------
// ----------- Experiment ----------

const arrNum = [1, 3, 5];

// this does not print all the values in array inside a setTimeout 
// because, by the time 3 sec passed loop completes execution and is 3
for (var i = 0; i < arrNum.length; i ++) {
    setTimeout(() => {
        console.log('i == ', i)
    }, 3000)
}
console.log('>>>>>>>>>>>>>>>>>>>>>');
// to print all the values in array
// 1: Easy way
// the scope is block level scope and it gets a new binding for
// each iteration of the loop
//This means that every closure captures a different i instance

for (let i = 0; i < arrNum.length; i ++) {
    setTimeout(() => {
        console.log('iii == ', arrNum[i])
    }, 3000)
}


// ------- Second way ------

// we passed I tothe closure function as a param which remembered it
// even after the loop executed
for (var i = 0; i < arrNum.length; i ++) {
    (function(closureI) {
        setTimeout(() => {
            console.log('iiiii == ', arrNum[closureI])
        }, 3000)
    })(i)
       
}
