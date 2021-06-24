interface Animal {
	accept(operation:AnimalOperation)
}

class Monkey implements Animal {
	speak():void {
		console.log('ya-a-a')
	}

	accept(operation:AnimalOperation):void {
		operation.visitMonkey(this)
	}
}

class Lion implements Animal {
	speak():void {
		console.log('argh')
	}

	accept(operation:AnimalOperation):void {
		operation.visitLion(this)
	}
}

class Dolphin implements Animal {
	speak():void {
		console.log('chick-chirick')
	}

	accept(operation:AnimalOperation):void {
		operation.visitDolphin(this)
	}
}

interface AnimalOperation {
	visitMonkey(monkey:Monkey)
	visitLion(lion:Lion)
	visitDolphin(dolphin:Dolphin)
}

class Speak implements AnimalOperation {
	visitMonkey(monkey:Monkey) {
		monkey.speak()
	}

	visitLion(lion:Lion) {
		lion.speak()
	}

	visitDolphin(dolphin:Dolphin) {
		dolphin.speak()
	}
}

let monkey = new Monkey()
let lion = new Lion()
let dolphin = new Dolphin()

let speak = new Speak()

monkey.accept(speak)
lion.accept(speak)
dolphin.accept(speak)
