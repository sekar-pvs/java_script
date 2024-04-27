function count(str) {
	let a = str.split(" ");
	//console.log(a);
	let last = a[a.length - 1].split("").length;
	return last;
}

console.log(count("hi hello"));
