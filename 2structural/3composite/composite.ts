interface Footballer {
	position: string

	play(): void
}

class Defender implements Footballer {
	position: string = 'back'

	play(): void {
		console.log('Tackle and pass.')
	}
}

class Midfielder implements Footballer {
	position: string = 'center'

	play(): void {
		console.log('Dribble and pass')
	}
}

class Striker implements Footballer {
	position: string = 'front'

	play(): void {
		console.log('Run and shoot')
	}
}

class Goalkeeper implements Footballer {
	position: string = 'goal'

	play(): void {
		console.log('Jump and catch')
	}
}


class Team implements Footballer {
	players: Array<Footballer> = []
	position: string = 'all'

	add(player: Footballer) {
		this.players.push(player)
	}
	remove(player: Footballer) {
		this.players.filter(obj => obj !== player)
	}

	play(): void {
		for (var i = this.players.length - 1; i >= 0; i--) {
			if (this.players[i].position === 'front' ) {
				console.log('try to win')
				break
			}
		} 
	}
}

class League extends Team {
	teams: Array<Team> = []

	add(team: Team) {
		this.teams.push(team)
	}
	remove(team: Team) {
		this.teams.filter(el => el !== team)
	}

	play(): void {
		if (this.teams.length < 2) {
			console.log('You need at least 2 teams to play')
		} else {
			console.log('Very interesting match')
		}
	}
}

let maldini = new Defender()
let inzaghi = new Striker()

let milan = new Team()
milan.play()

milan.add(maldini)
milan.add(inzaghi)
milan.play()

let serieA = new League()
serieA.play()

serieA.add(milan)

let juventus = new Team()
let buffon = new Goalkeeper()
let delPiero = new Striker()
juventus.add(buffon)
juventus.add(delPiero)

serieA.add(juventus)

serieA.play()