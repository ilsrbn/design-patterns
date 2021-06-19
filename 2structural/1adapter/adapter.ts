class Sapiens {
	speak(emotion: string) {
		console.log(`Я испытываю ${emotion}.`)
	}
}

class HomoSapiens {
	happySpeech() {
		console.log('Я испытываю счастье.')
	}
	sadSpeech() {
		console.log('Я испытываю грусть.')
	}
}


class evolutionAdapter {
	speak(emotion: string) {
		if (emotion === 'счастье') {
			new HomoSapiens().happySpeech()
		} else if (emotion === 'грусть') {
			new HomoSapiens().sadSpeech()
		}
	}
}


let adapter = new evolutionAdapter()

adapter.speak('счастье')