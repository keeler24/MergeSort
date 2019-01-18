function split(wholeArray) {
    let middle = Math.floor(wholeArray.length/2);
    firstHalf = wholeArray.slice(0,middle);
    secondHalf = wholeArray.slice(middle);
    return [firstHalf, secondHalf];
}

function merge (arr1, arr2){
    let finalArray = [];
    while (arr1[0] && arr2[0]){
        if (arr1[0] > arr2[0]) {
            finalArray.push(arr2[0]);
            arr2.shift()
        } else {
            finalArray.push(arr1[0]);
            arr1.shift();
        }
    } 
    while (arr1[0]){
        finalArray.push(arr1[0]);
        arr1.shift();
    } 
    while (arr2[0]) {
        finalArray.push(arr2[0]);
        arr2.shift();
    }
    return finalArray;
}

function mergeSort (array){
    let left = split(array)[0];
    let right = split(array)[1];
    if (array.length <= 1) {
        return array;
    } else {
        return merge(mergeSort(left), mergeSort(right));
    }
}