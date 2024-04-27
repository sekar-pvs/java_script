function recent(arr, k) {
	let res = [];
	const ss = new Set(arr);
	const arr1 = Array.from(ss);
	//console.log(arr1);
	const len = arr1.length;
	for (i = 0; i < len; i++) {
		let a = arr1.pop();
		//console.log("len", res.length);
		if (res.length < k) {
			res.push(a);
		}
	}
	console.log(ss);
	console.log(res);
	for (let i = k - 1; i >= 0; i--) {
		console.log(res[i]);
	}
	//return res;
}

//console.log(recent(["I1", "I2", "I3", "I5", "I5"], 2));
console.log(recent(["I1", "I2", "I3", "I1", "I3"], 3));

/* function recent1(arr, k) {
	console.log(arr);
	console.log(k);
	let res = [];
	const arr1 = arr;
	//console.log(arr1);
	const len = arr.length;
	for (let i = len - 1; i >= 0; i--) {
		let a = arr1.pop();
		console.log(len - 1);
		console.log(arr[4], arr[i - 1]);
		if (arr[i] !== arr[i - 1]) {
			res.push(a);
		}
	}
	console.log(res);
}
console.log(recent1(["I1", "I2", "I3", "I5", "I5"], 3));
 */
