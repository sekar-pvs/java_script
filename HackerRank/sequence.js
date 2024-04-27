function sequence(arr) {
	console.log(arr);
	if (arr[arr.length - 1] < 0) {
		return false;
	}
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			arr[i] = arr[i + 1] - 1;
			count += 1;
		}
	}
	if (count > 1) {
		return false;
	}
	if (count <= 1) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				return false;
			}
		}
		return true;
	}
}
console.log(sequence([1, 2, 3, 4, 5]));
console.log(sequence([4, 2, 3]));
console.log(sequence([3, 4, 2, 3]));
console.log(sequence([2, 3, 3, 2, 4]));
console.log(sequence([5, 4, 3, 2, 1]));
console.log(sequence([10, 5, 7]));
