export function range(n: number): number[] {
    return [...Array(n).keys()];
}

export function shuffle(baseArr: any[], seed?: any): any[] {
    const localArr = [...baseArr];
    let currentIndex = localArr.length;
    let randomIndex = 0;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [localArr[currentIndex], localArr[randomIndex]] = [localArr[randomIndex], localArr[currentIndex]];
    }

    return localArr;
}

const opsToNsop = (ops: number): number => {
    return 1 / ops * Math.pow(10, 9);
} 

export const cycler = (_, summary) => {
    return summary.results
        .map((item, _) => {
            return item.samples ? `${item.name}\t\t ${item.samples}\t\t ${opsToNsop(item.ops).toFixed(0)} ns/op` : null;
        })
        .filter((item) => item !== null)
        .join('\n')
};

export const noop = () => { };
