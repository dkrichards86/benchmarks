package main

import (
	"testing"
)

var fibResult int

func Benchmark_Fibonacci(b *testing.B) {
	tests := []struct {
		name string
		fn   string
		size int
	}{
		{name: "Fibonacci 5", fn: "Fibonacci", size: 5},
		{name: "Fibonacci 10", fn: "Fibonacci", size: 10},
		{name: "Fibonacci 20", fn: "Fibonacci", size: 20},
		{name: "Memoized Fibonacci 5", fn: "MemoizedFibonacci", size: 5},
		{name: "Memoized Fibonacci 10", fn: "MemoizedFibonacci", size: 10},
		{name: "Memoized Fibonacci 20", fn: "MemoizedFibonacci", size: 20},
	}
	for _, test := range tests {
		b.Run(test.name, func(b *testing.B) {
			b.StopTimer()
			var doer func() int
			switch test.fn {
			case "Fibonacci":
				doer = func() int {
					return Fibonacci(test.size)
				}
				break
			case "MemoizedFibonacci":
				cache := make(Memo)
				doer = func() int {
					return MemoizedFibonacci(test.size, cache)
				}
			}
			b.StartTimer()

			for n := 0; n < b.N; n++ {
				fibResult = doer()
			}
		})
	}
}
