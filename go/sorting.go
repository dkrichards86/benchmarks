package main

// BubbleSort sorts arr using bubblesort
func BubbleSort(arr []int) []int {
	swapped := true
	for swapped {
		swapped = false
		for i := 1; i < len(arr); i++ {
			if arr[i-1] > arr[i] {
				arr[i], arr[i-1] = arr[i-1], arr[i]
				swapped = true
			}
		}
	}
	return arr
}

func merge(a []int, b []int) []int {
	final := []int{}
	i := 0
	j := 0
	for i < len(a) && j < len(b) {
		if a[i] < b[j] {
			final = append(final, a[i])
			i++
		} else {
			final = append(final, b[j])
			j++
		}
	}
	for ; i < len(a); i++ {
		final = append(final, a[i])
	}
	for ; j < len(b); j++ {
		final = append(final, b[j])
	}
	return final
}

// MergeSort sorts arr using mergesort
func MergeSort(arr []int) []int {
	l := len(arr)
	if l < 2 {
		return arr
	}

	pivot := l / 2
	return merge(MergeSort(arr[:pivot]), MergeSort(arr[pivot:]))
}

func partition(arr []int, low, high int) ([]int, int) {
	pivot := arr[high]
	i := low
	for j := low; j < high; j++ {
		if arr[j] < pivot {
			arr[i], arr[j] = arr[j], arr[i]
			i++
		}
	}
	arr[i], arr[high] = arr[high], arr[i]
	return arr, i
}

func quickSort(arr []int, low, high int) []int {
	if low < high {
		var pivot int
		arr, pivot = partition(arr, low, high)
		arr = quickSort(arr, low, pivot-1)
		arr = quickSort(arr, pivot+1, high)
	}
	return arr
}

// QuickSort sorts arr using quicksort
func QuickSort(arr []int) []int {
	return quickSort(arr, 0, len(arr)-1)
}
