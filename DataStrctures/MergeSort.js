
const mergeSortArrays = (array1, array2) => {
    console.log(array1, array2)
    let mergedArray = [];
    let i = 1;
    let j = 1;

    if (array1.length === 0 ) {
        return array2;
    } 

    if (array2.length  === 0) {
        return array1
    }

    let array1Ele = array1[0];
    let array2Ele = array2[0];

    while (array1Ele !== undefined || array2Ele !== undefined) {
        // loop will stop when both array1Ele && array2Ele are undefinded
        // but we need to handle a case when only one var is undefinded
        // so if second element is undefinded || if it larger that first element push data to array
        if (array2Ele === undefined || array1Ele < array2Ele) {
            mergedArray.push(array1Ele);
            array1Ele = array1[i]
            i++;
        } else {
            mergedArray.push(array2Ele);
            array2Ele = array2[j];
            j++;
        }
        console.log(array1Ele , array2Ele)

    }

    return mergedArray;
}

console.log(mergeSortArrays([2,4,70, 76, 80], [4,5,60,77,78,90,99]))