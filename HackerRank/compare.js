function compare(s, s1) {
	console.log(s.charAt(0));
	if (s.length !== s1.length) {
		return false;
	}
	for (i = 0; i < s.length; i++) {
		if (s.charAt(i) !== s1.charAt(i)) {
			return false;
		}
	}
	return true;
}
console.log(compare("sekar", "sekar"));
