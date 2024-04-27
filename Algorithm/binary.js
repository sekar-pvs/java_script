function binary(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	//console.log(start, end);
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		//console.log(mid);
		if (target === arr[mid]) {
			return mid;
		} else if (target > arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
}
console.log(binary([1, 2, 3, 4, 5, 6], 1));
console.log(binary([1, 2, 3, 4, 5, 6], 2));
console.log(binary([1, 2, 3, 4, 5, 6], 3));
console.log(binary([1, 2, 3, 4, 5, 6], 4));
console.log(binary([1, 2, 3, 4, 5, 6], 5));
console.log(binary([1, 2, 3, 4, 5, 6], 6));
console.log(binary([1, 2, 3, 4, 5, 6], 7));
