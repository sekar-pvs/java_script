function validation(s) {
	let strack = []; // [()]
	for (let i = 0; i < s.length; i++) {
		//console.log(s[i]);
		let char = s[i];
		if (char === "[" || char === "{" || char === "(") {
			strack.push(char);
		} else if (char === "]" || char === "}" || char === ")") {
			let top = strack.pop();
			//console.log(top);
			//console.log(s[i]);
			//console.log(char);
			if (
				(char === "]" && top !== "[") ||
				(char === "}" && top !== "{") ||
				(char === ")" && top !== "(")
			) {
				return false;
			}
		}
	}
	if (strack.length === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(validation("([])"));
//console.log(validation("()[]{}"));
//console.log(validation("()"));
