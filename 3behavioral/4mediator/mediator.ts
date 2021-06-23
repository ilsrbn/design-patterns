interface Mediator {
	notify(sender: object, event: string): void
}

class ConcreteMediator implements Mediator {
	private component1: Component1
	private component2: Component2

	constructor(c1: Component1, c2: Component2) {
		this.component1 = c1
		this.component1.setMediator(this)
		this.component2 = c2
		this.component2.setMediator(this)
	}

	notify(sender: object, event: string): void {
		if (event === 'A') {
			console.log('Посредник среагировал на действие "А" и вызвал операции:')
			this.component2.doC()
		}

		if (event === 'D') {
			console.log('Посредник среагировал на действие "D" и вызвал операции:')
			this.component1.doB()
			this.component2.doC()
		}
	}
}

class BaseComponent {
	protected mediator: Mediator

	constructor(mediator: Mediator = null) {
		this.mediator = mediator
	}

	setMediator(mediator: Mediator): void {
		this.mediator = mediator
	}
}

class Component1 extends BaseComponent {
	doA(): void {
		console.log('Компонент "1" делает действие "А"')
		this.mediator.notify(this, 'A')
	}

	doB(): void {
		console.log('Компонент "1" делает действие "B"')
		this.mediator.notify(this, 'B')
	}

}

class Component2 extends BaseComponent {
	doC(): void {
		console.log('Компонент "2" делает действие "C"')
		this.mediator.notify(this, 'C')
	}

	doD(): void {
		console.log('Компонент "2" делает действие "D"')
		this.mediator.notify(this, 'D')
	}

}

let c1 = new Component1()
let c2 = new Component2()

let mediator = new ConcreteMediator(c1, c2)

console.log('Я сделал действие "А"')
c1.doA()

console.log('');
console.log('Я сделал действие "D".')
c2.doD()