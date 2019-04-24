// Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// each value is the sum of the 2 previous values

//For example: fib(6) should return 8



//Iterative Solution

function fibIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

//Recursive Solution

function fibRecursive(n) {
    return n < 2 ? n : fibRecursive(n - 2) + fibRecursive(n - 1);
}

// or

function fibRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibRecursive(n - 2) + fibRecursive(n - 1);
}
