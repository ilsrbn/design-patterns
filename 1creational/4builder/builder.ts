class Coffee {
	size: number = 0;
	sugar: boolean = false;
	milk: boolean = false;
	sirup: boolean = false;

}

class CoffeeBuilder {
	private coffee: Coffee

	constructor() {
		this.coffee = new Coffee()
	}

	setSize(size: number): CoffeeBuilder {
		this.coffee.size = size
		return this
	}

	addSugar(): CoffeeBuilder {
		this.coffee.sugar = true
		return this
	}

	addMilk(): CoffeeBuilder {
		this.coffee.milk = true
		return this
	}

	addSirup(): CoffeeBuilder {
		this.coffee.sirup = true
		return this
	}

	build(): Coffee {
		return this.coffee
	}
}


let sweetLatte = new CoffeeBuilder().setSize(50).addSugar().addMilk().addSirup().build();
console.log(sweetLatte);

let doubleEspresso = new CoffeeBuilder().setSize(100).build();
console.log(doubleEspresso);