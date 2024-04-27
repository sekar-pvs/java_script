function sum(num, target) {
	//console.log(num);
	//console.log(target);
	for (let i = 0; i < num.length; i++) {
		for (let j = i + 1; j < num.length; j++) {
			if (num[i] + num[j] === target) {
				return console.log([i, j]);
			}
		}
	}
}

sum([1, 2, 3, 4, 5], 9);
