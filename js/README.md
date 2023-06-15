# Benchmarks in TypeScript

This directory contains a small demo of benchmarking in JavaScript/TypeScript. It includes benchmarks
for three types of algorithms, Fibonacci numbers, scanning a data structure for a record, and sorting
arrays. Each algorithm type has a benchmark to compare approaches.

## Notes

Lookups and sorting are array based in some way. I generate test data for them by generating a random
permutation from the interval `[0, n)`. The benchmarks framework used here ([benny](https://github.com/caderek/benny),
as well as its underlying [benchmark.js](https://github.com/bestiejs/benchmark.js)) batch tests. Fresh
data is generated for each batch of tests.

## Usage

1. Install deps `npm ci`
2. Run tests `ts-node <test>`
