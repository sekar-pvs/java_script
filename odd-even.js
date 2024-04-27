//[1,2,3,4] => (1+3=4)-(2+4=6) =-2
//[80,30,30]=> 80
function final(arr) {
	//console.log(arr);
	let even = 0;
	let odd = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			//console.log(i);
			even = even + arr[i];
		} else {
			odd = odd + arr[i];
		}
	}
	return even - odd;
}
console.log(final([1, 2, 3, 4]));
console.log(final([80, 30, 30]));
