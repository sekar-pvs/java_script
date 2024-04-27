/* function candleCount(arr) {
	console.log(arr);
	let count;
	let maxCount = 0;
	for (let i = 0; i < arr.length; i++) {
		count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count += 1;
			}
		}

		if (maxCount < count) {
			maxCount = count;
		}
	}
	return maxCount;
} 
console.log(candleCount([4, 4, 1, 3]));
console.log(candleCount([3, 2, 1, 3]));*/

// max value

function maxValue(arr) {
	//console.log(arr);
	let maxValue = arr[0];
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxValue) {
			maxValue = arr[i];
		}
	}
	for (let j = 0; j < arr.length; j++) {
		if (maxValue === arr[j]) {
			count += 1;
		}
	}
	return maxValue + " <=value ,count=>" + count;
}
console.log(maxValue([3, 2, 1, 3]));
console.log(maxValue([4, 4, 1, 3]));
console.log(maxValue([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
