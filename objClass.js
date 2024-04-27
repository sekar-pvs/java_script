// Creating Object

let obj = {
	id: "1",
	name: "sekar",
	logIn() {
		console.log(`Hello ${this.name} you are logged`); // most commonly used
		console.log(`Hello2 `, obj.name, "you are logged"); // another way invoked name
	},
	logOut() {
		console.log("Logged Out..");
	},
};

// Invoking method in object
// obj.logIn();
obj.logOut();

let obj2 = {
	id: "2",
	name: "pvs",
	logIn() {
		console.log(`Hello ${this.name} you are logged`); // most commonly used
		console.log(`Hello2 `, obj2.name, "you are logged"); // another way invoked name
	},
};

//obj2.logIn();

// CLASS is use to create the  template

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	logIn() {
		console.log(`hello ${this.name}  ${this.age} your login`);
	}
	logOut() {
		console.log(`logOut`);
	}
}

// object for class

const user1 = new User("sekar", 22);
const user2 = new User("pvs", 12);

console.log(user1);
console.log(user2.logIn());

// STATIC VARIABLE  and STATIC METHOD

class User1 {
	static counter = 0; // static variable
	constructor(name, age) {
		this.name = name;
		this.age = age;
		User1.counter++; // invoking static variable use CLASS NAME
	}
	logIn() {
		console.log(`hello ${this.name}  ${this.age} your login`);
	}
	logOut() {
		console.log(`logOut`);
	}
	static displayTotalUser() {
		console.log(User1.counter++);
	}
}

const sekar = new User1("sekar", 22);
console.log(sekar.logIn()); // Normal method invoking using object name
// invoking STATIC METHOD invoking  using Class name
console.log(User1.displayTotalUser());

// INHERITANCE

class paidUser extends User1 {
	constructor(name, age, ss) {
		super(name, age); // SUPER keyword is used to inheritate varible in parent class
		this.ss = ss;
	}
	mgs() {
		console.log(`Inhertance ${this.ss}`);
		return this; // this line return the object name . Used to chain the mathod
	}
}

const paidUser1 = new paidUser("ramesh", 34, 100);
console.log(paidUser1.logIn());
console.log(paidUser1.mgs().logIn()); // chaining . Before using this we write the code in method "return this"

// GET SET

class temp {
	constructor(temp) {
		this._temp = temp; // declare the private variable
	}
	get temp() {
		return `Temperature  ${this._temp}`;
	}
	set temp(temp) {
		this._temp = temp;
	}
}

const temm = new temp(25);
temm.temp = 300;
console.log(temm.temp);
