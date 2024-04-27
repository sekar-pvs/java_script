/* function str(s) {
	//console.log(s);
	//let a = s.charAt(1);
	//console.log(a);
	//console.log(s.indexOf(a));

	let res = "";
	for (let i = 0; i < s.length - 1; i++) {
		const check = res.indexOf(s.charAt(i));
		//console.log(s.charAt(i));
		if (check == -1) {
			res = res + s.charAt(i);
		} else {
			res = s.charAt(i);
		}
	}
	return res + res.length;
}
console.log(str("pwwkew"));
console.log(str("pqppqrmr")); */

function str(s) {
	let max = 0;
	let sum = 0;
	let res = "";
	for (let i = 0; i < s.length - 1; i++) {
		const check = res.indexOf(s.charAt(i));
		//console.log(s.charAt(i));
		if (check == -1) {
			res = res + s.charAt(i);
		} else {
			res = s.charAt(i);
		}
	}
	return res;
}
console.log(str("pwwkew"));
console.log(str("pqppqrmr"));
