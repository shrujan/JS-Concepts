
// object spread operator
const obj = {
    name: "shr",
    age: 22,
    hobby: 'Playing games',
    bestGame: "AC Odysey"
}

const { name, ...restOfObj} = obj;

console.log(name, restOfObj);
