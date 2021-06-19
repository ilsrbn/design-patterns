class Wife {
	private static wife: Wife;

	private constructor() {}

	static getWife(): Wife {
		if (!Wife.wife) {
			Wife.wife = new Wife();
		}

		return Wife.wife;
	}

}

let wife1 = Wife.getWife();
let wife2 = Wife.getWife();

console.log(wife1 == wife2);