const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
// After adding this keyword the values changed
function change(number, string, obj1, obj2) {
    // these will not change the global variable because locally a new context is created
    // so function has local variable number,string,obj1,obj2
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
}
 
change(number, string, obj1, obj2);
 
console.log(number); 
console.log(string);
console.log(obj1.value);