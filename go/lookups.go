package main

type void struct{}

// LookupSlice scans haystack for needle
func LookupSlice(needle int, haystack []int) bool {
	for _, i := range haystack {
		if i == needle {
			return true
		}
	}

	return false
}

// toMap converts a slice of ints into a map of int -> void{}
func toMap(arr []int) map[int]void {
	m := make(map[int]void)

	for _, i := range arr {
		m[i] = void{}
	}

	return m
}

// LookupMap scans haystack for needle
func LookupMap(needle int, haystack map[int]void) bool {
	_, exists := haystack[needle]
	return exists
}
