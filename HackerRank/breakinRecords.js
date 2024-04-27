let max = [];
let min = [];
let maxCount = 0;
let minCount = 0;
function breakingRecord(scores) {
	console.log(scores);
	for (let i = 0; i < scores.length; i++) {
		if (min.length === 0 && max.length === 0) {
			min.push(scores[i]);
			max.push(scores[i]);
		} else {
			//console.log(scores[i], max[i - 1]);
			if (scores[i] > max[i - 1]) {
				max.push(scores[i]);
			} else {
				// console.log();
				max.push(max[i - 1]);
			}
			if (scores[i] < min[i - 1]) {
				min.push(scores[i]);
			} else {
				min.push(min[i - 1]);
			}
		}
	}
	for (let j = 0; j < min.length; j++) {
		if (max[j] < max[j + 1]) {
			maxCount += 1;
		}
		if (min[j] > min[j + 1]) {
			minCount += 1;
		}
	}
	//console.log("high", max);
	//console.log("low", min);
	console.log(maxCount);
	console.log(minCount);
}
//console.log(breakingRecord([12, 24, 10, 24]));
//console.log(breakingRecord([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecord([10, 5, 20, 20, 4, 5, 2, 25, 1]));
