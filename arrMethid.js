const arr = [3, 1, 4, 5, 7, 2, 6, 1, 5, 8, 4, 4];
//console.log(arr);

//const sort = arr.sort((a, b) => {
//	return a - b;
//});
//console.log(sort);
/* const arrSplice = arr.splice(3, 2);
console.log(arrSplice);
 */

// REMOVE DUPLICATE NUMBER

const removeDuplicate = (arr) => {
	const dup = Array.from(new Set(arr));

	return dup;
};

console.log(removeDuplicate([3, 1, 4, 5, 7, 2, 6, 1, 5, 8, 4, 4]));
