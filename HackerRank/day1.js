/* function greet(str) {
	console.log("hello");
	console.log(str);
}
greet("sekar");
 */

/* function check(str) {
	return function add(x) {
		return str + x;
	};
}

const cc = check("hi");
console.log(cc(5)); */

const tryCheck = (x = 6) => {
	try {
		throw new Error("no found");
	} catch (err) {
		console.error(err.strack);
	} finally {
		console.log("finally");
	}
};
tryCheck(5);
