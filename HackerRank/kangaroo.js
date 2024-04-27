function kangaroo(x1, v1, x2, v2) {
	// Write your code here
	let n = 0;
	let mult = x2 * v2;

	if (v2 < v1) {
		while (n <= mult) {
			x1 = x1 + v1;
			x2 = x2 + v2;
			//	console.log(x1, x2);

			if (x1 === x2) {
				return "YES";
			}
			n++;
		}
		if (x1 !== x2) {
			return "NO";
		}
	} else {
		return "NO";
	}
}
console.log(kangaroo(1113, 612, 1331, 610));
console.log(kangaroo(0, 3, 4, 2)); // y
console.log(kangaroo(0, 2, 5, 3)); // n
console.log(kangaroo(28, 8, 96, 2)); // 192
console.log(kangaroo(21, 6, 47, 3));
console.log(kangaroo(2081, 8403, 9107, 8400));
console.log(kangaroo(42, 3, 94, 2));
console.log(kangaroo(14, 4, 98, 2));
