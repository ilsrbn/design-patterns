class Idiot {
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
	speaker = new HomoSapiens()
	speak(emotion: string) {
		if (emotion === 'счастье') {
			this.speaker.happySpeech()
		} else if (emotion === 'грусть') {
			this.speaker.sadSpeech()
		}
	}
}


let adapter = new evolutionAdapter()

adapter.speak('счастье')