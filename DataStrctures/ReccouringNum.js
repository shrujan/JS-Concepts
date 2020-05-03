let arr = [2,3,4,5];

function findFirst(arr) {
    let obj = {};

    for (let i = 0; i < arr.length - 1; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = arr[i];
        } else {
            return arr[i]
        }
    } 
    return undefined;
}

console.log(findFirst(arr));
