export function bubbleSort(baseArr: number[]): number[] {
    let localArr = [...baseArr];
    let swapped = true;
    while (swapped) {
        swapped = false
        for (let i = 1; i < localArr.length; i++) {
            if (localArr[i - 1] > localArr[i]) {
                [localArr[i], localArr[i - 1]] = [localArr[i - 1], localArr[i]];
                swapped = true
            }
        }
    }
    return localArr;
}

function merge(a: number[], b: number[]): number[] {
    let final: number[] = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            final.push(a[i]);
            i++;
        } else {
            final.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        final.push(a[i]);
        i++;
    }
    while (j < b.length) {
        final.push(b[j]);
        j++;
    }
    return final
}

export function mergeSort(baseArr: number[]): number[] {
    let localArr = [...baseArr];
    let l = localArr.length;
	if (l < 2) {
        return localArr;
	}

    let pivot = Math.floor(l / 2);
    return merge(mergeSort(localArr.slice(0, pivot)), mergeSort(localArr.slice(pivot)));
}

function partition(arr: number[], low: number, high: number): [number[], number] {
    let pivot = arr[high];
    let i = low;
	for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
	return [arr, i]
}

function _qs(arr: number[], low: number, high: number): number[] {
    let pivot: number;
	if (low < high) {
		[arr, pivot] = partition(arr, low, high)
		arr = _qs(arr, low, pivot-1)
		arr = _qs(arr, pivot+1, high)
	}
	return arr
}

export function quickSort(baseArr: number[]): number[] {
    let localArr = [...baseArr];
	return _qs(localArr, 0, localArr.length-1)
}
