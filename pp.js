function fact(num) {
	if (num <= 0) {
		return 1;
	} else {
		return num * fact(num - 1);
	}
}
console.log(fact(5));
console.log(fact(3));

function oddEven(n) {
	if (n % 2 == 0) {
		return "even";
	} else {
		return "odd";
	}
}

console.log(oddEven(2));

class Hello {
	name = "sekar";
	age = 22;
	Hello(name = "sekar", age = 22) {
		this.name = name;
		this.age = age;
		console.log("constructor ", this.name, this.age);
	}
	print = (name, age) => {
		console.log(" from class ", name, age);
	};
}

const obj = new Hello();
//obj.print("Nizar", 25);
obj.Hello();

//console.log();
// INHERITANCE
class HelloChild extends Hello {}

const childObj = new HelloChild();

//childObj.print();
