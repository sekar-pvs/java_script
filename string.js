//  s = 'anagram' t='nagaram'

function isTrue(s, n) {
	/* console.log(s.length);
	console.log(n); */

	che1 = s.split("").sort().join("");
	che2 = n.split("").sort().join("");
	if (s.length !== n.length) {
		return console.log(false);
	}
	return console.log(che1 === che2 ? true : false);
}
isTrue("anagram", "anagram");
