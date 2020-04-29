// imports in modules
// import module from 'module1'; 
// import module2 from 'module2';


const name = 'shrjan';

export const age = 34;

const fnPrivate = () => {
    console.log('private method not exported')
}


export const publicMethod = () => {
    console.log('public method accessing private var' , name);
}

const  defaultMethod = () => {
    console.log('default method');
    fnPrivate()
}

export default defaultMethod;