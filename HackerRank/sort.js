const sort = (arr) => {
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		for (j = 0; j < n; j++) {
			var temp;
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
			/* if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}*/
		}
	}
	return arr;
};

console.log(sort([2, 3, 4, 1, 0.5]));
