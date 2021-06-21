interface Order {
	getPrice(): number
	getIndentations(): Array<string>
}

class Delivery implements Order {
	getPrice(): number {
	 return 50
	}
	getIndentations(): Array<string> {
		return ['Delivery']
	}
}

class Product1 implements Order {
	private order: Order

	constructor(past: Order) {
		this.order = past
	}

	getPrice(): number {
		return this.order.getPrice() + 10
	}

	getIndentations(): Array<string> {
		let indentations = this.order.getIndentations()
		indentations.push('first product')
		return indentations
	}
}

class Product2 implements Order {
	private order: Order

	constructor(past: Order) {
		this.order = past
	}

	getPrice(): number {
		return this.order.getPrice() + 40
	}

	getIndentations(): Array<string> {
		let indentations = this.order.getIndentations()
		indentations.push('second product')
		return indentations
	}
}

let order = new Product2(new Product1(new Delivery()))

console.log(order.getPrice())
console.log(order.getIndentations())

let order2 = new Product2(new Delivery())

console.log(order2.getPrice())
console.log(order2.getIndentations())

let order3 = new Product1(new Delivery())

console.log(order3.getPrice())
console.log(order3.getIndentations())