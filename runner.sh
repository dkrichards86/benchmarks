#!/bin/bash

benchmark_js()
{
    TEST=$1
    if [ -z "$TEST" ]; then
        echo 'Missing test name' >&2
        exit 1
    fi
    cd js
    ts-node $TEST
    cd ..
}

benchmark_go()
{
    TEST=$1
    if [ -z "$TEST" ]; then
        echo 'Missing test name' >&2
        exit 1
    fi
    cd go
    go test -run=XXX -bench=^$TEST$ -benchtime=10000x
    cd ..
}

while getopts ":t:l:" opt; do
    case $opt in
        t) test="$OPTARG"
        ;;
        l) lang="$OPTARG"
        ;;
        \?) echo "Invalid option -$OPTARG" >&2
        exit 1
    ;;
    esac
done

if [ "$lang" = "js" ]
then
    case "$test" in
        "fibonacci")
        benchmark_js fibonacci.bench.ts
        ;;
        "lookups")
        benchmark_js lookups.bench.ts
        ;;
        "sorting")
        benchmark_js sorting.bench.ts
        ;;
    esac
elif [ "$lang" = "go" ]
then
    case "$test" in
        "fibonacci")
        benchmark_go Benchmark_Fibonacci
        ;;
        "lookups")
        benchmark_go Benchmark_Lookups
        ;;
        "sorting")
        benchmark_go Benchmark_Sorting
        ;;
    esac
else
    echo "Invalid language name -$lang" >&2
fi
