// Recursion means function call by itself

// simple code for recursion

/* function sekar(n) {
	if (n < 1) return "hi "; //n=0 +> hi
	console.log(n);

	return sekar(n - 1);
}
console.log(sekar(5)); */

//  sekar(5)->  sekar(4)
//  sekar(4)->  sekar(3)
//  sekar(3)->  sekar(2)
//  sekar(2)->  sekar(1)
//  sekar(1)->  sekar(0)
//  sekar(0)->  hi

// Questin 1 Factorial using Recursion

// brute force solution for factorial

/* function facto(n) {
	let sum = 1;
	for (let i = 1; i <= n; i++) {
		sum = sum * i;
	}
	return sum;
}
console.log(facto(6)); */

// input 3 -----> o/p 6

function fact(n) {
	if (n === 1) {
		return n;
	}
	return n * fact(n - 1);
}
console.log(fact(5));

/* fact (3)=>3*fact(2)=> 3*2= 6 = o/p
fact (2)=>2*fact(1) => 2*1=>2
fact (1)=>1*fact(0) =>1*1=> 1
fact (0)=>1 

*/

// mulitiple of array number

function mult(arr) {
	if (arr.length <= 0) {
		return 1;
	} else {
		return arr[arr.length - 1] * mult(arr.splice(0, arr.length - 1));
	}
}
console.log(mult([1, 2, 4]));
