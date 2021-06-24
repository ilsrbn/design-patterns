class TV {
	turnOn(): void {
		console.log('Включен телевизор')
	}
	turnOff(): void {
		console.log('Выключен телевизор')	
	}
}


interface Command {
	execute(): void
	undo(): void
	redo(): void
}

class TurnOn implements Command {
	private tv: TV

	constructor(tv: TV) {
		this.tv = tv
	}

	execute(): void {
		this.tv.turnOn()
	}

	undo(): void {
		this.tv.turnOff()
	}

	redo(): void {
		this.execute()
	}
}

class TurnOff implements Command {
	private tv: TV

	constructor(tv: TV) {
		this.tv = tv
	}

	execute(): void {
		this.tv.turnOff()
	}

	undo(): void {
		this.tv.turnOn()
	}

	redo(): void {
		this.execute()
	}
}

class Remote {
	submit(command: Command): void {
		command.execute()
	}
}

let tv = new TV()

let turnon = new TurnOn(tv)
let turnoff = new TurnOff(tv)

let remote = new Remote()

remote.submit(turnon)
remote.submit(turnoff)
