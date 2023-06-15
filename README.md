# Benchmarks

## What is Benchmarking

Benchmarking is a way to measure your code's performance. It runs a function several times and takes
an average of the function's duration. This can be used to pinpoint slow code or compare new
implementations.

Common use cases for benchmarking include comparing two analogous algorithms for runtime performance,
and checking an algorithm to see if its performance scales with inputs. This repo contains examples
of both (lookups and sorting for comparisons, Fibonacci numbers for scaling).

It's worth noting here that benchmarks are **heavily** influenced by the state of the machine they're
being run on. The utility is timing a process, but that process is subject to the same kernel
scheduling as all other processes. For this reason benchmark results are a very relative figure and
should only really be compared to other benchmarks from the same session. even then, you may face some
weird scheduler preemption that skews results. Benchmarks are even better when they're run multiple times
and outliers discarded.

## Note

This repo contains benchmarks in both JavaScript and Go. Due to fundamental differences in the way the
respective benchmark frameworks batch their data, we cannot reliably compare performance of the two
languages. **Please do not use this to compare Go and TypeScript.**

## Usage

I've included a simple shel script to run these tests. `./runner.sh -t [fibonacci|lookups|sorting] -l [go|javascript]`
