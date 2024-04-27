function timeConvertion(s) {
	let hourConver;
	let time = s.split(":");
	console.log(time);

	let [hour, minutes, secondPeriod] = time;

	let period = secondPeriod.slice(-2);
	let second = secondPeriod.slice(0, 2);
	if (period === "PM" && hour === "12") {
		return `12:${minutes}:${second}`;
	}
	if (period === "PM") {
		hourConver = Number(hour);
		hourConver += 12;
		return `${hourConver}:${minutes}:${second}`;
	} else if (period === "AM" && hour === "12") {
		return `00:${minutes}:${second}`;
	} else {
		return `${hour}:${minutes}:${second}`;
	}
}

console.log(timeConvertion("11:01:00PM"));
console.log(timeConvertion("12:45:54PM"));
