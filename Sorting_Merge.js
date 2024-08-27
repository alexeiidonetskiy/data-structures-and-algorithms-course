function merge(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i])
            i++;
        } else {
            arr.push(arr2[j])
            j++;
        }
    }

    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }
    
    return arr;
}

// merge([1,10,50], [2,14,99, 100]);

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }  

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}


mergeSort([4,2,1,3,5]);