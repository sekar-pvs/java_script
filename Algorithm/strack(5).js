//Strack meas first in last out
// strack operation push ,pop ,peek , isEmpty, size
// 1.Push() is used to insert the element into strack
// 2. POP() is used to delete the top element in the strack
// 3.PEEK() is used to get the top element in the strack
// 4.isEmpty() is check whether the strack is empty or not
// 5.size gives the size of the strack

/* class Strack {
	constructor(x) {
		this.strack = [];
	}
	push(x) {
		this.strack.push(x);
		console.log("Push the element  " + x);
		return this.strack;
	}
	pop() {
		if (!this.size()) {
			return "Stack is empty bro";
		} else {
			console.log(" pop the last element " + this.strack[this.size() - 1]);
			this.strack.pop();
			return this.strack;
		}
	}
	peek() {
		return this.strack[this.size() - 1];
	}
	size() {
		//console.log(" Size of the array ");
		return this.strack.length;
	}
	isEmpty() {
		if (!this.size()) {
			return "empty bro:)";
		} else {
			return this.strack;
		}
	}
}

const strackObj = new Strack();
console.log(`isEmpty ${strackObj.isEmpty()}`);
console.log(strackObj.push(3));
console.log(strackObj.push(4));
console.log(strackObj.push(6));
console.log(strackObj.push(7));
console.log(strackObj.peek());
//console.log(strackObj.pop());

console.log(`isEmpty ${strackObj.isEmpty()}`);
console.log(strackObj.size()); */

// question 1 Given an input string s , reverse the order of the word
// Input " the sky is blue" ---->> O/P = "blue is sky the"

/* function reverseString(s) {
	console.log(s);
	let splitS = s.split("").reverse().join("");
	console.log(splitS.length);
	return splitS;
}
console.log(reverseString("the sky is blue")); */

// Quseti  a string contain jud=st the character '(',')','{','}','[',']';
//I/P=> "()"--->O/P TRUE
//I/P=> "()[]{}"--->O/P TRUE
//I/P=> "([]{})"--->O/P TRUE
//I/P=> "(]"--->O/P FALSE

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
console.log(validation("([{}])"));
console.log(validation("()[]{}"));
console.log(validation("()"));
