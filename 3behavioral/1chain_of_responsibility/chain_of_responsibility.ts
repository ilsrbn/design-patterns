abstract class Account {
	successor: Account
	balance: number
	name: string

	setNext(account: Account): void {
		this.successor = account
	}

	pay(sum: number): void {
		if (this.canPay(sum)) {
			console.log(`Оплата используя ${this.name}`)
		} else if (this.successor != undefined) {
			console.log(`Нельзя оплатить используя ${this.name}`)
			this.successor.pay(sum)
		} else {
			console.log('Не хватает денег')
		}
	}

	canPay(sum: number): boolean {
		return this.balance >= sum
	}
}

class Bank extends Account {
	name: string = 'банковский счет'
	constructor(sum: number) {
		super()
		this.balance = sum
	}
}

class Paypal extends Account {
	name: string = 'счет paypal'
	constructor(sum: number) {
		super()
		this.balance = sum
	}
}

class Bitcoin extends Account {
	name: string = 'биткоин кошелек'
	constructor(sum: number) {
		super()
		this.balance = sum
	}
}

let bank = new Bank(150)
let paypal = new Paypal(500)
let bitcoin = new Bitcoin(1500)

bank.setNext(paypal)
paypal.setNext(bitcoin)

bank.pay(1200)

