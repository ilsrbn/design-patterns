interface Publisher {
	sportsMan: string;
	sport: string;
	publish(): string;
}

class FootballPublisher implements Publisher {
	sportsMan:string;
	sport:string = 'футбол';

	constructor(sportsman:string) {
		this.sportsMan = sportsman;
	}

	publish():string {
		return `Скандал! Вы не поверите! Он больше не сможет играть в ${this.sport}. ${this.sportsMan} сделал такое...`;
	}
}

class TennisPublisher implements Publisher {
	sportsMan:string;
	sport:string = 'теннис';

	constructor(sportsman:string) {
		this.sportsMan = sportsman;
	}

	publish():string {
		return `Шокирующая правда про ${this.sport}!!! ${this.sportsMan} рассказал все...`;
	}
}

class Factory {
	static sports: {} = {
		football: FootballPublisher,
		tennis: TennisPublisher
	}
	createArticle(name: string, sport: string = 'football') {
		const sportClass = Factory.sports[sport] || Factory.sports['football'];
		let article = new sportClass(name);
		return article
	}
}

let factory = new Factory()

let article1 = factory.createArticle('Роналдо', 'football');
console.log(article1.publish());

let article2 = factory.createArticle('Федерер', 'tennis');
console.log(article2.publish());

let article3 = factory.createArticle('Месси', 'asdg');
console.log(article3.publish());

let article4 = factory.createArticle('Пуйоль');
console.log(article4.publish());