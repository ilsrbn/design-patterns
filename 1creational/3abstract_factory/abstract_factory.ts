interface CarsFactory {
	createSedan(): Sedan;
	createCoupe(): Coupe;
}

class ToyotaFactory implements CarsFactory {
	createSedan(): Sedan {
		return new ToyotaSedan()
	}

	createCoupe(): Coupe {
		return new ToyotaCoupe()
	}
}

class FordFactory implements CarsFactory {
	createSedan(): Sedan {
		return new FordSedan()
	}

	createCoupe(): Coupe {
		return new FordCoupe()
	}
}

abstract class Sedan {
	type: string = 'sedan'

	wheelPos: string

}

abstract class Coupe {
	type: string = 'coupe'

	wheelPos: string

}

class ToyotaSedan extends Sedan {

	wheelPos: string = 'right'
}

class ToyotaCoupe extends Coupe {

	wheelPos: string = 'right'
}

class FordSedan extends Sedan {

	wheelPos: string = 'left'
}

class FordCoupe extends Coupe {

	wheelPos: string = 'left'
}

let factory = new ToyotaFactory()

let vehicle1 = factory.createSedan()

let vehicle2 = factory.createCoupe()

console.log(vehicle1)
console.log(vehicle2)

let factory2 = new FordFactory()

let vehicle3 = factory2.createSedan()

let vehicle4 = factory2.createCoupe()

console.log(vehicle3)
console.log(vehicle4)