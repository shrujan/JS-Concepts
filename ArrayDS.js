let arr = ['a', 'b', 'c'];
// 4*3 = 12 bytes of storage needed

// pushes element to end of arr
arr.push('d'); //O(1)<- static arr,  
//in dynamic array it is O(n) as when ever new element are added new memory location is alloted and entire array is stored there

// remove the last item in arr
arr.pop(); //O(1)

// add item in beginning of arr unshift
arr.unshift('x'); // O(n)

// add item in between of array
arr.splice(2,0, 'alien'); // O(n/2) -> O(n)<- worst case
// arr.splice(index, how many item to delete, [optional: what item to insert])


console.log(arr);