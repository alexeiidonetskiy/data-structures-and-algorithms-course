function minSubArrayLen(arr, number) {
    let length = 0;
    
    let start = 0;
    let end = 1;
    let maxSize = 0;
    let tempSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (tempSum >= number) {
            maxSize = i
            break;
        }
        tempSum += arr[i]
    }

    return length
}


minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray