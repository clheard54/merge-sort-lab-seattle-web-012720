function findMinAndRemoveSorted(arr){
    let min = arr.shift();
    return min
}


function merge(arr1, arr2){
    let min;
    let sorted =[]
    while (arr1.length>0 && arr2.length>0){
        if (arr1[0]<=arr2[0]){
            min=arr1.shift()
        } else {
            min=arr2.shift()
        }
        sorted.push(min)
    }
    return sorted.concat(arr1).concat(arr2)
}


function mergeSort(myArray){
    let midpoint = Math.floor(myArray.length/2);
    let first = myArray.slice(0, midpoint)
    let second = myArray.slice(midpoint, myArray.length)
    if (myArray.length>1){
        return merge(mergeSort(first), mergeSort(second))
    } else {
        return myArray
    }
}

