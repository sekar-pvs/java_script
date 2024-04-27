// Brute force method
/* function secondLargest(arr) {
	const arrDup = Array.from(new Set(arr));
	console.log("Before Sort", arrDup);
	const arrSort = arrDup.sort((a, b) => {
		return b - a;
	});
	console.log("After Sort", arrSort);
	console.log("Second Largest Number :", arrSort[1]);
}
secondLargest([12, 35, 1, 10, 34, 1]);
secondLargest([10, 5, 10]); */

// optimize Solution

/* function optimizeSecondlarge(arr) {
	large = Number.NEGATIVE_INFINITY;
	// console.log(large);
	secondLargest = Number.NEGATIVE_INFINITY;
	for (i = 0; i < arr.length - 1; i++) {
		if (arr[i] > large) {
			secondLargest = large;
			large = arr[i];
		} else if (arr[i] != large && arr[i] > secondLargest);
		{
			secondLargest = arr[i];
		}
	}
	return secondLargest;
}

console.log(optimizeSecondlarge([12, 35, 1, 10, 34, 1])); */

// Sorting Alogorithm Brute force method

/* function sort(arr) {
	temp = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
console.log("Array Sorting:", sort([15, 3, 20, 5]));
console.log("Array Sorting:", sort([12, 35, 1, 10, 34, 1])); */

// Question no 2 ROTATING ARRAY
// input [1,2,3,4,5] k = 2  output=[5,4,1,2,3]

function Rotation(arr, k) {
	const size = arr.length;
	if (k <= size) {
		const removeK = arr.splice(size - k, size);
		console.log(removeK);
		return [...removeK, ...arr];
	} else {
		return -1;
	}
}
console.log(Rotation([1, 2, 3, 4, 5], 2));

// CONTINUES IN SUBSET .JS
