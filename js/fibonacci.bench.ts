import { add, complete, cycle, suite } from 'benny';
import { fibonacci, memoizedFibonacci } from "./fibonacci";
import { cycler, noop } from "./utils";

suite(
    "Fibonacci Suite",
    add('Fibonacci 5', () => {
        return () => fibonacci(5)
    }),
    add('Fibonacci 10', () => {
        return () => fibonacci(10)
    }),
    add('Fibonacci 20', () => {
        return () => fibonacci(20)
    }),
    add('Memoized Fibonacci 5', () => {
        return () => memoizedFibonacci(5, {})
    }),
    add('Memoized Fibonacci 10', () => {
        return () => memoizedFibonacci(10, {});
    }),
    add('Memoized Fibonacci 20', () => {
        return () => memoizedFibonacci(20, {});
    }),
    cycle(cycler),
    complete(noop),
);
