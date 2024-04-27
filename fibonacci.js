/* fibonacci [0,1,1,2,3,5,...]
input-3 output=[0,1,1]
 */

const fibo = (x) => {
	const arr = [0, 1];
	for (i = 2; i <= x; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr;
};
const res = fibo(13);
console.log(res);

const fibonacci = (x) => {
	const arr = [0, 1];
	for (i = 2; i <= x; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr;
};

const res1 = fibonacci(10);
console.log(res1);
// USING RECURSION IN COMPLETE
function fibo(x) {
	let arr = [];
	let sum = 0;
	if (x === 0 || x === 1) {
		arr.push(x);
		console.log(arr);
		return x;
	} else {
		arr.push(x);
		console.log(arr);
		return fibo(x - 1);
	}
}
console.log(fibo(3));
// fib(3)=> 3+fib(2)
// fib(2)=> fib(0)+fib(1)=> 2+1=3
// fib(1)=> fib()+fib(0) => 1+0=1
// fib(0)=> 0

// [0,1,1]
