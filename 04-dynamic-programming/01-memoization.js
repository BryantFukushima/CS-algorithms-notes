function memoAdd80() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = n + 80;
            return cache[n];
        }
    }
}