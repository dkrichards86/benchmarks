package main

import (
	"math/rand"
	"testing"
	"time"
)

func generateData(len int) []int {
	rand.Seed(time.Now().Unix())
	return rand.Perm(len)
}

type sortFunc func([]int) []int

var sortResult []int

func Benchmark_Sorting(b *testing.B) {
	tests := []struct {
		name   string
		sorter sortFunc
		size   int
	}{
		{name: "BubbleSort", sorter: BubbleSort},
		{name: "MergeSort", sorter: MergeSort},
		{name: "QuickSort", sorter: QuickSort},
	}
	for _, test := range tests {
		b.Run(test.name, func(b *testing.B) {
			for n := 0; n < b.N; n++ {
				b.StopTimer()
				input := generateData(1000)
				b.StartTimer()
				sortResult = test.sorter(input)
			}
		})
	}
}
