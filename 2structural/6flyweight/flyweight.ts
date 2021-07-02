class ChairType {
	material: string
	constructor(material: string = 'wood') {
		this.material = material
	}
	setWeight(weight: number) {
		console.log(`\nСоздан стул.\nМатериал: ${this.material}.\nВес: ${weight}.\n`)
	}
}

class ChairFactory {
	chairTypes: Array<ChairType> = []
	getChairType(material: string = 'wood') {
		for (var i = this.chairTypes.length - 1; i >= 0; i--) {
			if (this.chairTypes[i].material == material) {
				console.log('\nВозврат закешиорованного объекта.')
				console.log(this.chairTypes[i])
				return this.chairTypes[i]
			}
		}
		console.log('\nСоздание нового и добавление в кеш объекта.\n')
		this.chairTypes.push(new ChairType(material))
	}
}

let factory = new ChairFactory

factory.getChairType()
factory.getChairType('plastic')
factory.getChairType('wood')
factory.getChairType('plastic')

