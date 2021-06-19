class Smith {
	name: string;
	private age: number = 5000;

	constructor(name: string) {
		this.name = name;
	}

	info(): void {
		console.log(`Agent "${this.name}" is ${this.age} years old.`);
	}

	clone(): this {
		return Object.create(this);
	}
}

const smith1 = new Smith('Real Smith');
const smith1Clone = smith1.clone();

smith1.info();
smith1Clone.info();