/* function rest(a, ...num) {
	console.log(a);
	console.log(num);
	//console.log(c);
}
console.log(rest([1, 2, 3, 3, 4, 5])); */

/* [-1,2,3,-2]
-1 =-1
-1,2 => 1
-1,2,3 = 4
-1,2,3,-2 =2
2 =2
2,3 = 5
2,3-2 =3
3=3
3-2=1
2=2
 */
function subArrHigest(arr) {
	l = Number.NEGATIVE_INFINITY;
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
		console.log("s", sum);
		if (sum > l) {
			l = sum;
		}
		if (sum <= 0) {
			sum = 0;
			console.log(sum);
		}
	}
	return l;
}

console.log(subArrHigest([1, 2, -3, 4]));
