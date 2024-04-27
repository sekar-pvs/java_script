function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// Write your code here
	/* 	console.log(apples);
	console.log(oranges); */
	let orangeCount = 0;
	let appleCount = 0;

	for (let i = 0; i < apples.length; i++) {
		apples[i] += a;
		if (apples[i] >= s && apples[i] <= t) {
			appleCount += 1;
		}
	}
	for (let j = 0; j < oranges.length; j++) {
		oranges[j] += b;
		if (oranges[j] >= s && oranges[j] <= t) {
			orangeCount += 1;
		}
	}
	console.log(appleCount);
	console.log(orangeCount);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
