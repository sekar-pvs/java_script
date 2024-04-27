function MinMax(arr) {
	console.log(arr);
	let sum;
	let max = 0;
	let min;
	for (i = 0; i < arr.length; i++) {
		sum = 0;
		for (j = 0; j < arr.length; j++) {
			if (i === j) {
				continue;
			} else {
				sum += arr[j];
			}
		}
		console.log(sum);

		if (max < sum) {
			max = sum;
		}
		if (sum <= max && !(sum > min)) {
			min = sum;
		}
	}
	/* 	console.log(min);*/
	//console.log(max);
	//console.log(ar.sort());
	return min + " " + max;
}
console.log(MinMax([1, 2, 3, 4, 5]));
console.log(MinMax([396285104, 573261094, 759641832, 819230764, 364801279]));
console.log(MinMax([140638725, 436257910, 953274816, 734065819, 362748590]));
console.log(MinMax([769082435, 210437958, 673982045, 375809214, 380564127]));
//2093989309 2548418794
