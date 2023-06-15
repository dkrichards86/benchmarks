import { add, complete, cycle, suite } from 'benny';
import { cycler, noop, range, shuffle } from "./utils";
import { lookupArray, lookupObj } from "./lookups";

suite(
    "Lookup Suite",
    add('lookupArray', () => {
        const nElements = 1000;
        const arr = shuffle(range(nElements));
        const hit = Math.random() < .5;
        let needle = 0;
        if (hit) {
            needle = Math.floor(Math.random() * nElements);
        } else {
            needle = Math.floor(Math.random() * nElements) + nElements;
        }

        return () => lookupArray(needle, arr)
    }),
    add('lookupObj', () => {
        const nElements = 1000;
        const arr = shuffle(range(nElements));

        const hit = Math.random() < .5;
        let needle = 0;
        if (hit) {
            needle = Math.floor(Math.random() * nElements);
        } else {
            needle = Math.floor(Math.random() * nElements) + nElements;
        }
        const obj = {};
        arr.forEach((n: number) => {
            obj[n] = true;
        });

        return () => lookupObj(needle, obj);
    }),
    cycle(cycler),
    complete(noop),
);
