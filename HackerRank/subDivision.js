// add = date square = month s is array
function birthday(s, d, m) {
	//console.log(s);
	//console.log(Math.round(Math.sqrt(3)));
	let count = 0;
	let length = s.length - 1;
	let square;
	console.log("length", length);
	/* for (let i = 0; i < s.length; i++) {
		//count = 0;
		for (let j = i + 1; j < s.length; j++) {
			sum = s[i] + s[j];
			//console.log(s[i], s[j]);
			//console.log("sum", sum);
			square = Math.ceil(Math.sqrt(sum));
			//console.log("square", square);

			if (length === m && square === d) {
				//console.log("i,j", s[i], s[j]);
				count += 1;
				//console.log(count);
			}
			break;
		} 
	}*/
	for (let i = 0; i < s.length; i++) {
		sum = s[i] + s[i + 1];
		square = Math.ceil(Math.sqrt(sum));
		console.log("square", square);
		console.log("len", length);
		console.log("m", m);

		if (length === m && square === d) {
			//console.log("i,j", s[i], s[j]);
			count += 1;
			//console.log(count);
		}
	}
	return count;
}
//console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // 2
//console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)); // 0
console.log(birthday([2, 2, 1, 3, 2], 4, 2)); // 2
//console.log(birthday([4, 1], 1, 4)); // 2
//console.log(birthday([4, 1], 1, 4)); // 2
/* console.log(
	birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
); //3 */
