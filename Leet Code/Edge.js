// UNDEFINED DATA TYPE USED IN CONDITIOM=N STATEMENT
if (1 < undefined) {
	console.log("sekar");
} else if (1 > undefined) {
	console.log("pvs");
} else {
	console.log("babu");
}

function romanCalculate(s) {
	if (s === "I") return 1;
	if (s === "V") return 5;
	if (s === "X") return 10;
	if (s === "L") return 50;
	if (s === "C") return 100;
	if (s === "D") return 500;
	if (s === "M") return 1000;
}
function romanInt(s) {
	let sum = 0;
	for (i = 0; i < s.length; i++) {
		let l = romanCalculate(s[i]);
		let r = romanCalculate(s[i + 1]);
		//console.log(l);
		//console.log(r);
		if (l < r) {
			sum = sum - l;
		} else {
			sum = sum + l;
		}
	}
	return sum;
}
console.log(romanInt("IIV"));
console.log(romanInt("VII"));
