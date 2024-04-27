const add = (a) => {
	return (b) => {
		console.log(a + b);
	};
};
add(5)(5); // function currying
const add5 = add(5); // closure
add5(10);

const a = 10;

const addfun = (a) => {
	return (b) => {
		return (c) => {
			return (d) => {
				console.log(a + b + c + d);
			};
		};
	};
};
addfun(5)(5)(5)(5); // function currying

const str =
	"Hi hello sekar. This is javascript  we learn new things in thid tutorial";
const splitStr = str.split();
console.log(splitStr);
const joinStr = splitStr.join();
console.log(typeof joinStr);

// String Palindrome

const stringPalindrome = (st) => {
	const rev = st.split("").reverse().join("");
	if (st === rev) {
		console.log("same");
	} else {
		console.log("not same");
	}
};
stringPalindrome("sas");
