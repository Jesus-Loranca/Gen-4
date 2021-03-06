export interface Mon {
	id: number;
	new_id: number;
	name: string;
	types: Array<string>;
	ancestors: Array<string>;
	stats: {
		hp: Array<number>;
		pa: Array<number>;
		pd: Array<number>;
		sa: Array<number>;
		sd: Array<number>;
		sp: Array<number>;
	};
	bp: number;
	form: number;
	isLastForm: boolean;
	rarity: string;
	image: string;
}
