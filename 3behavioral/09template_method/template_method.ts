abstract class GameAI {
	turn():void {
		this.collectResources()
		this.buildStructures()
		this.buildUnits()
		this.attack()
	}

	collectResources():void {
		console.log('собираю ресурсы')
	}

	abstract buildStructures():void
	abstract buildUnits():void

	attack():void {
		this.sendScouts()
		this.sendWarriors()
	}

	abstract sendWarriors():void
	abstract sendScouts():void
}

class OrcsAI extends GameAI {
	buildStructures():void {
		console.log('строю орчьи здания')
	}

	buildUnits():void {
		console.log('создаю орчат')
	}

	sendScouts():void {
		console.log('отправляю 15 орчат на осмотр местности')
	}

	sendWarriors():void {
		console.log('отправляю 5 орков уничтожать и крушить')
	}
}


class MonstersAI extends GameAI {
	buildStructures():void {
		console.log('рою пещеры')
	}

	buildUnits():void {
		console.log('создаю монстрят')
	}

	sendScouts():void {
		console.log('отправляю 2 монстрят на осмотр местности')
	}

	sendWarriors():void {
		console.log('отправляю 1 монстра уничтожать и крушить')
	}
}

let monster = new MonstersAI()
monster.turn()

console.log('')


let orc = new OrcsAI()
orc.turn()