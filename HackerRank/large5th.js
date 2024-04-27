function five(arr) {
	let arr1 = arr.sort();
	let a = new Set(arr1);
	let aa = Array.from(a);
	console.log(aa.length);
	console.log(aa);
	if (aa.length <= 4) {
		return aa[0];
	} else {
		return aa[4];
	}
}
console.log(five([4, 2, 5, 6, 4, 7, 8, 9, 5]));
