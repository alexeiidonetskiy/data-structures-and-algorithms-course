function binarySearch (arr, number) {
    let left = 0;
    let right = arr.length;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === number) {
            return mid;
        }

        if (arr[mid] > number) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

binarySearch([1,2,3,4,5,6,7,8,9], 5);