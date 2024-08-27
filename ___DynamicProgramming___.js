const cache = {};
let calls = 0;

function fib (n) {
    if (cache[n]) {
        return cache[n];
    }
    
    if (n <= 2) {
        return 1;
    }

    const result = fib(n-1) + fib(n-2);
    cache[n] = result;
    calls++;
    return result;
}

let res = fib(40);

console.log({ res, calls });

// w/o caching
// { "res": 102334155, "calls": 102334154 }


// w caching
// { "res": 102334155, "calls": 38 }