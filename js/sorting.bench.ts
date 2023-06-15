import { add, complete, cycle, suite } from 'benny';

import { cycler, noop, range, shuffle } from "./utils";
import { bubbleSort, mergeSort, quickSort } from "./sorting";

suite(
    "Sorting Suite",
    add('bubbleSort', () => {
        const arr = shuffle(range(1000));
        return () => bubbleSort(arr)
    }),
    add('mergeSort', () => {
        const arr = shuffle(range(1000));
        return () => mergeSort(arr)
    }),
    add('quickSort', () => {
        const arr = shuffle(range(1000));
        return () => quickSort(arr)
    }),
    cycle(cycler),
    complete(noop),
);
