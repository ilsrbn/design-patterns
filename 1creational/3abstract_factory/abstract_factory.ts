interface AbstractFactory {
	createPhone(model: string): Phone
	createCharger(): Charger
}

class AppleFactory implements AbstractFactory {
	createPhone(model: string): Phone {
		return new IPhone(model)
	}
	createCharger(): Charger {
		return new Lightning()
	}
}

class HuaweiFactory implements AbstractFactory {
	createPhone(model: string): Phone {
		return new HuaweiPhone(model)
	}
	createCharger(): Charger {
		return new TypeC()
	}
}

interface Phone {
	model: string
	makeCall(number: number | string): void
}

interface Charger {
	charge(phone: Phone): void
}

class IPhone implements Phone {
	model: string = 'IPhone '
	makeCall(number: number | string): void {
		console.log(`Calling ${number}. Please Wait...`)
	}

	constructor(model: string) {
		this.model = this.model + model
	}
}

class Lightning implements Charger {
	charge(phone: Phone): void {
		console.log(`${phone.model} is charging...`)
	}
}


class HuaweiPhone implements Phone {
	model: string = 'Huawei '
	makeCall(number: number | string): void {
		console.log(`You are calling abonent with number ${number}. Wait for a moment...`)
	}

	constructor(model: string) {
		this.model = this.model + model
	}
}

class TypeC implements Charger {
	charge(phone: Phone): void {
		console.log(`Your beautiful ${phone.model} is charging now...`)
	}
}


let apple = new AppleFactory()

let iphone = apple.createPhone('X')
let iphonecharger = apple.createCharger()

iphone.makeCall(34532667)
iphonecharger.charge(iphone)


let huawei = new HuaweiFactory()

let android = huawei.createPhone('P40')
let typec = huawei.createCharger()

android.makeCall('+4123578')
typec.charge(android)