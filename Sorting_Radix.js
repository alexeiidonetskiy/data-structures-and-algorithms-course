function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) { return 1;}
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        let len = digitCount(arr[i]);
        max = Math.max(max, len);
    }

    return max;
}

function radixSort(arr) {
    let amountOfIterations = mostDigits(arr);
    
    for (let i = 0; i < amountOfIterations; i++) {
        let bucket = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            const k = getDigit(arr[j], i);
            bucket[k].push(arr[j]);
        }

        arr = bucket.flat();
        // arr = [].concat(...bucket);
    }

    return arr;
}

radixSort([21,213,32,4123,335,6,71123,8,9])
