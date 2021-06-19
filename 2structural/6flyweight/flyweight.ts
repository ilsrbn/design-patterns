class Car {
	private color: string

	constructor(color: string) {
		this.color = color
	}


	getInfo(number: string): Object {
		return {
			color: this.color,
			number: number
		}
	}
}

class CarFactory {
	private cars: {[key: string]: Car}

	addCar(color: string) {
		if (!this.cars[color]) {
			this.cars[color] = new Car(color)
		}

		return this.cars[color]
	}
}