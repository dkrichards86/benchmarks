# Benchmarks in Go

This directory contains a small demo of benchmarking in Go. It includes benchmarks for three types
of algorithms, Fibonacci numbers, scanning a data structure for a record, and sorting slices. Each
algorithm type has a benchmark to compare approaches.

## Notes

Lookups and sorting are array based in some way. I generate test data for them by generating a random
permutation from the interval `[0, n)` ([see docs](https://pkg.go.dev/math/rand#Perm)). Because we want
to benchmark with a variety of data, I regenerate test data on every benchmark run.

By default, Go's benchmark utility will estimate time to complete the function being benchmarked,
and will run enough iterations of the test to fill 1s. I don't want my benchmarks to be skewed by data
generation, so I use `b.StopTimer()` and `b.StartTimer()` to only benchmark relevant code. Since the
code being analyzed in these examples is trivial, Go picks an obscene number of iterations
(think billions). To skirt around this, I've limited by benchmarks to 100 iterations. More tests would
be better, but this repo is accompanying a live demo and noone wants to start at a blank screen waiting
for tests to run.

Go's test CLI supports a flag for this case, `-benchtime=N`, where N is a duration for each test (default 1s)
from which the number of iterations is derived. You can also use `-benchtime=Nx` where N is the
number of iterations to run. I used `-benchtime=100x` for faster cycle times here.

For the VSCode users out there (assuming you're using the Go extenson), the setting looks like this:

```
{
  "go.testFlags": ["-benchtime=100x"]
}
```

## Usage

1. Install deps `go mod vendor`
2. Run tests `go test -bench=.`
   a. with the benchtime flag `go test -bench=. -benchtime=10000x`
