//Question Sliding window input => Array and k value [1,-1,2,3,2,4,5,7] k=3
//Output =[2,3,3,4,5,7]
function slide(arr, k) {
	let l = arr.length;
	console.log(arr);
	let temp = [];
	let big = [];
	for (let i = 0; i < l - (k - 1); i++) {
		for (j = i; j <= k; j++) {
			if (temp.length < k) {
				//console.log(temp);
				temp.push(arr[j]);
				//console.log(temp);
				//break;
			} else {
				temp.shift();
				//temp.push(arr[j]);
			}
		}
		console.log(temp);
	}
}
console.log(slide([1, -1, 2, 3, 2, 4, 5, 7], 3));
