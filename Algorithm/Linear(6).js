// Question Given Array find the target index
function linear(num, target) {
	for (let i = 0; i < num.length; i++) {
		if (target === num[i]) {
			return `${i}=>${num[i]}`;
		}
	}
	return -1;
}
//console.log(linear([4, 5, 6, 7, 0, 1, 2], 0));
//console.log(linear([4, 5, 6, 7, 0, 1, 2], 10));

// Question 1 if target value is more than one times eg [4, 5, 6,0, 7, 0, 1, 2] target =0 in this Example we have to two zero

function moreLinear(arr, t) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (t === arr[i]) {
			res.push(i);
		}
	}
	if (res.length === 0) return -1;
	return res;
}
console.log(moreLinear([4, 5, 6, 0, 7, 0, 1, 2], 0));
