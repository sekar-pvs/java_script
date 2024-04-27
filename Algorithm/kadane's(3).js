// kadane's algorithm is used to find the Maximum sum in array(SubSet)

// [-2,1,-3,4,-1,2,1,-5,4]

function kadanes(arr) {
	let sum = 0;
	let maxSum = arr[0];
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (sum > maxSum) {
			maxSum = sum;
		}
		if (sum < 0) {
			sum = 0;
		}
	}
	return maxSum;
}
console.log(kadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
