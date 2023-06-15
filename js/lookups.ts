export function lookupArray(needle: number, haystack: number[]): boolean {
    for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle) {
			return true
		}
	}

    return false;
}

export function lookupObj(needle: number, haystack: { [key: number]: boolean }): boolean {
    return needle in haystack;
}
