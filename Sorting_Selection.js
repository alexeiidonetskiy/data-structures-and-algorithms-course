function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minValIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minValIdx]) {
                minValIdx = j;
            }
        }

        swap(arr, i ,minValIdx);
        
    }

    return arr;
}

selectionSort([1,5,3,12,5,7,2,45,6,12]);
// selectionSort([5,2,3,1,4]);