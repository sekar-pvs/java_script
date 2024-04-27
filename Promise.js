//  PROMISE USING VARIABLE
const weather = new Promise((resolve, reject) => {
	let weatherCondition = true;
	if (weatherCondition) {
		resolve();
	} else reject();
});

weather
	.then(() => console.log("You can play cricket"))
	.catch(() => console.log("you cant play"));

// PROMISE USING FUNCTION

function weather1() {
	return new Promise((resolve, reject) => {
		let Condition = false;
		if (Condition) resolve();
		else reject();
	});
}
weather1()
	.then(() => console.log("You can play cricket"))
	.catch(() => console.log("you cant play"));
