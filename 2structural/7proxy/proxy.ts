class President {
	debate(): void {
		console.log('I will make my country great again')
	}
}

class PresidentProxy {
	debate(): void {
		console.log('Hello and welcome to our debates!')
		new President().debate()
		console.log('Goodbye my friends!')
	}
}


let debates = new PresidentProxy()

debates.debate()