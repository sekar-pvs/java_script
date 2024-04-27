function factorial(n) {
	let fact = 1;
	for (i = n; i >= 1; i--) {
		//console.log(i);
		fact = fact * i;
	}
	return fact;
}
console.log(factorial(5));
