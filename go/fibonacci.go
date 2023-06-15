package main

func Fibonacci(n int) int {
	if n < 2 {
		return n
	}
	return Fibonacci(n-1) + Fibonacci(n-2)
}

type Memo map[int]int

func MemoizedFibonacci(n int, cache Memo) int {
	if n < 2 {
		return n
	}
	if _, ok := cache[n]; !ok {
		cache[n] = MemoizedFibonacci(n-1, cache) + MemoizedFibonacci(n-2, cache)
	}
	return cache[n]
}
