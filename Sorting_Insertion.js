function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


function insertionSort(arr) {
    let currentValue;
    // Start iterating from second item to END
    for (let i = 1; i < arr.length; i++) {
        
        // Save every value from iteration
        currentValue = arr[i];
        
        let j;
        
        // Start iterating from second item to START 
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    
    return arr
}

// insertionSort([1,5,3,12,5,7,2,45,6,12]);
insertionSort([5,2,3,1,4]);