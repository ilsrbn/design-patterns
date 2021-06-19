interface Factory {
	makeProduct(): void
	hireChinese(): void
	fireChinese(): void
}

class ChinaFactory implements Factory {
	makeProduct(): void {
		console.log('Моя китайца сделать айфона.')
	}
	hireChinese(): void {
		console.log('Моя нанять китайца для лабота.')
	}
	fireChinese(): void {
		console.log('Моя уволить китайца с моя фаблика.')
	}
}

class AmericanFactory implements Factory {
	makeProduct(): void {
		console.log('We produce 23478658923 tonns of laptops.')
	}
	hireChinese(): void {
		console.log('Those chinese work for me untill now.')
	}
	fireChinese(): void {
		console.log('Those chinese wont work for me anymore.')
	}
}

interface Customer {
	factoryToReview: Factory
	buyPhone(): void
	makeGoodReview(): void
	makeBadReview(): void
}

class RussianCustomer implements Customer {
	factoryToReview: Factory
	constructor(factory: Factory) {
		this.factoryToReview = factory
	}
	buyPhone(): void {
		new this.factoryToReview.makeProduct()
	}
	makeGoodReview(): void {
		new this.factoryToReview.hireChinese()
	}
	makeBadReview(): void {
		new this.factoryToReview.fireChinese()
	}
}

let russian = new RussianCustomer(new ChinaFactory)
russian.buyPhone()
russian.makeGoodReview()
russian.makeBadReview()