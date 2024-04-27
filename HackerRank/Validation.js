function Validation(s) {
	let stract = [];
	for (i = 0; i < s.length; i++) {
		let char = s[i];
		if (char === "[" || char === "(" || char === "{") {
			stract.push(s[i]);
		} else if (char === "]" || char === ")" || char === "}") {
			let top = stract.pop();
			//console.log(top);

			if (
				(char === "]" && top !== "[") ||
				(char === "}" && top !== "{") ||
				(char === ")" && top !== "(")
			) {
				return false;
			}
		}
	}
	//console.log(stract);
	if (stract.length === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(Validation("()"));
console.log(Validation("[()]"));
console.log(Validation("[(]"));
