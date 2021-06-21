interface Food {
	eat(): void
}

class FoodContainer implements Food {
	private children: Array<Food> = []
	add(food: Food): void {
		this.children.push(food)
	}
	remove(food: Food): void {
		this.children.splice(this.children.indexOf(food), 1)
	}

	eat(): void {

		for (var i = this.children.length - 1; i >= 0; i--) {
			this.children[i].eat()
		}
	}
}

class Meal implements Food {
	name: string

	constructor(name: string) {
		this.name = name
	}

	eat(): void {
		console.log(this.name)
	}
}

let meal1 = new Meal("рис")
let meal2 = new Meal("курага")
let meal3 = new Meal("бургер")
let meal4 = new Meal("кола")
let meal5 = new Meal("мясо")
let meal6 = new Meal("творог")

let foodContainer2 = new FoodContainer()

foodContainer2.add(meal1)
foodContainer2.add(meal2)
foodContainer2.add(meal3)

let foodContainer3 = new FoodContainer()

foodContainer3.add(meal4)
foodContainer3.add(meal5)
foodContainer3.add(meal6)

foodContainer2.remove(meal3)
foodContainer3.remove(meal4)

let foodContainer1 = new FoodContainer()

foodContainer1.add(foodContainer2)
foodContainer1.add(foodContainer3)

foodContainer1.eat()
