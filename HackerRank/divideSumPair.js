function divisiblesSumPairs(n, k, ar) {
	let count = 0;
	let sum;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			sum = ar[i] + ar[j];
			//console.log(ar[i], ar[j]);
			//console.log(sum);
			if (sum % k === 0) {
				count += 1;
			}
		}
	}
	return count;
}
console.log(divisiblesSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
console.log(divisiblesSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
