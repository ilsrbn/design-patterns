class Attack {
	sendJournalists(): void {
		console.log("Журналисты говорят: 'У вас такая грязная вода, улицы в мусоре, полиция бездействует, пенсионеры голодуют- ужас просто!'")
	}
	stopHelp(): void {
		console.log('Вы больше не получите нашей помощи!')
	}
}

class Defend {
	buyMedia(): void {
		console.log("По телевиозору говорят: 'Наш президент не виноват, он очень хороший!'")
	}
}

class PoliticsFacade {
	joinAlliance(): void {
		new Defend().buyMedia()
	}

	leftAlliance(): void {
		new Attack().stopHelp()
		new Attack().sendJournalists()
		new Defend().buyMedia()
	}
}

let putin = new PoliticsFacade()

putin.joinAlliance()
putin.leftAlliance()