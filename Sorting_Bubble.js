function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Non optimized
function bubbleSorting(arr) {
    for (let i = arr.length; i > 0; i--) {
        console.log('I >>>>> ', i)
        for (let j = 0; j < i - 1; j++) {
            console.log('J >', j)
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }

    return arr;
}


// Optimized
// function bubbleSorting(arr) {
//     let noSwaps;
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//             console.log('J >', j)
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1)
//                 noSwaps = false;
//             }
//         }

//         if (noSwaps) {
//             break
//         };
//     }

//     return arr;
// }

bubbleSorting([1,5,3,12,5,7,2,45,6,12]);
// bubbleSorting([5,2,3,1,4]);