package main

import (
	"math/rand"
	"testing"
)

var lookupResult bool

func Benchmark_Lookups(b *testing.B) {
	tests := []struct {
		name   string
		lookup string
		size   int
		hit    bool
	}{
		{name: "LookupSlice", lookup: "LookupSlice"},
		{name: "LookupMap", lookup: "LookupMap"},
	}
	for _, test := range tests {
		b.Run(test.name, func(b *testing.B) {
			for n := 0; n < b.N; n++ {
				b.StopTimer()
				baseData := generateData(1000)

				needle := 0
				if rand.Float64() < float64(0.5) {
					idx := rand.Intn(1000)
					needle = baseData[idx]
				} else {
					needle = rand.Int() + 1000
				}

				var lookupFunc func() bool
				switch test.lookup {
				case "LookupMap":
					asMap := toMap(baseData)
					lookupFunc = func() bool {
						return LookupMap(needle, asMap)
					}
					break
				case "LookupSlice":
					lookupFunc = func() bool {
						return LookupSlice(needle, baseData)
					}
				}
				b.StartTimer()

				lookupResult = lookupFunc()
			}
		})
	}
}
