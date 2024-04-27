//Input : "hello" o/p l
/* function repeatWord(str) {
	let max = 0;
	let maxVar = "";
	let map = new Map();
	for (let i = 0; i < str.length; i++) {
		if (map[str[i]]) {
			map[str[i]]++;
		} else {
			map[str[i]] = 1;
		}
		//max = map[str[i]];
		if (max < map[str[i]]) {
			max = map[str[i]];
			maxVar = str[i];
		}

		//return max;
	}
	return `${maxVar} => ${max}`;
}
console.log(repeatWord("hello")); 

function temp(s) {
	const map1 = new Map();
	for (i = 0; i < s.length; i++) {
		if (map1[s[i]]) {
			map1[s[i]]++;
		} else {
			map1[s[i]] = 1;
		}
	}
	return map1;
}

console.log(temp("hello", "ollhe"));
*/

const a = new Map([
	[1, "sekar"],
	[2, "pvs"],
]);

console.log(a);
let num = 3;
const name = "babu";
const aa = new Map();
aa.set(1, "sekar");
aa.set(2, "pvs");
aa.set(num++, name);
aa.set(num++, name);
console.log(aa);

function rr(s) {
	const map = new Map();
	for (i = 0; i < s.length; i++) {
		let num = 1;
		char = s[i];
		//console.log(char);
		if (map[char]) {
			//console.log("hi");
			map[char]++;
		} else {
			//console.log(map[s[i]]);
			map[char] = num;
		}
		/* if (map[s[i]]){
			map[s[i]]++
		}
		else{
			map[s[i]]=1
		} */
	}
	return map;
}
console.log(rr("hello"));

const tempMap = new Map();
tempMap["sekar"] = 1;
console.log(tempMap);
console.log(tempMap.size);
