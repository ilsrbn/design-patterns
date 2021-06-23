class CoffeeBrand {
	private brand: string
	private price: number

	constructor(brand: string, cost: number) {
		this.brand = brand
		this.cost = cost
	}

	getCost(weight: number): number {
		return weight * this.price
	}
}

class CoffeeShop {
	private coffeeBrands: {[key: string]: CoffeeBrand} = <any>{}

	constructor()
}