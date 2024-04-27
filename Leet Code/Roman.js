// Brute force solution
function romanCalculate(s) {
	if (s === "I") return 1;
	//else if (s === "IV") return 4;
	//else if (s === "IX") return 9;
	if (s === "V") return 5;
	if (s === "X") return 10;
	// if (s === "XL") return 40;
	//else if (s === "XC") return 90;
	if (s === "L") return 50;
	if (s === "C") return 100;
	//else if (s === "CD") return 400;
	//else if (s === "CM") return 900;
	if (s === "D") return 500;
	if (s === "M") return 1000;
	//if (undefined) return 0;
}

console.log(rr("III"));
console.log(rr("LVIII"));
console.log(rr("MCMXCIV")); //1000+900+1000+90+
console.log(rr("IV"));
console.log(rr("VI"));
function rr(str) {
	// IV  VI
	//console.log(str.length);
	let total = 0;
	for (let i = 0; i < str.length; i++) {
		//console.log(str.charAt(i));
		let left = romanCalculate(str.charAt(i));
		//console.log(l);
		let right = romanCalculate(str.charAt(i + 1));
		//console.log(r);
		if (left < right) {
			// 1000<10001
			total = total - left;
		} else {
			total = total + left;
		}
	}
	return total;
}

//OPTIMAL SOLUTION

function romanToInt(s) {
	//MCMXCIV M=> 1000
	let romanNum = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let total = 0;

	for (let i = 0; i < s.length; i++) {
		//console.log(romanNum[s[0]], s[0]);
		//console.log(romanNum[s[0 + 1]], s[0 + 1]);
		if (romanNum[s[i]] < romanNum[s[i + 1]]) {
			//console.log(s[i], romanNum[s[i]]);
			//console.log(s[i + 1], romanNum[s[i + 1]]);
			total = total - romanNum[s[i]];
			//console.log(total);
		} else {
			//console.log(s[i], romanNum[s[i]]);
			//console.log(s[i + 1], romanNum[s[i + 1]]);
			total = total + romanNum[s[i]];
		}
	}
	return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV")); //1000+900+1000+90+
console.log(romanToInt("IV"));
console.log(romanToInt("VI"));
