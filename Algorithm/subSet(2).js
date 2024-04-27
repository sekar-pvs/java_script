/* function subset(arr) {
	//console.log(arr);

	for (let i = 0; i < arr.length; i++) {
		let sub = [];
		for (let j = i; j < arr.length; j++) {
			sub = sub.concat(arr[j]);
			console.log(sub);
		}
	}
} 

console.log(subset([1, 2, 3, 4, 5]));*/

//  question 4 - Given an interger array nums , find the subarray with the largest sum , and return its sum

// Input [-2,1,-3,4,-1,2,1,-5,4] ----->>>> output :6,[4,-1,2,1]
// Input [5,4,-1,7,-8] ----->>>> output :8,[5,4,-1,7,-8]

function maxSubArr(arr) {
	//console.log(arr);
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;

		for (let j = i; j < arr.length; j++) {
			sum = sum + arr[j]; // 5=>5+4
			if (sum > max) {
				max = sum;
			}
		}
	}
	return max;
}
console.log(maxSubArr([5, 4, -1, 7, 8]));
