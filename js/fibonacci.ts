export function fibonacci(n: number): number {
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function memoizedFibonacci(n: number, cache: { [key: number]: number } = {}): number {
    if (n < 2) {
        return n;
    }
  
    if (!(n in cache)) {
      cache[n] = memoizedFibonacci(n - 1, cache) + memoizedFibonacci(n - 2, cache);
    }

    return cache[n];
}
