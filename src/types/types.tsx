export type Ability = {
	name: string;
	priority: string;
	concentration: string;
	radius: string;
	reliability: string;
	cooldown: string;
	visibility: string;
	piercing: boolean;
	description_narrative: string;
	description_gameplay: string;
	cost: number;
};

export type Skill = {
	name: string;
	description_narrative: string;
	description_gameplay: string;
	cost: number;
};

export type Drawback = {
	name: string;
	description_narrative: string;
	description_gameplay: string;
	cost: number;
};

export type SuperData = {
	title: string;
	supers_data: {
		abilities: Ability[];
		skills: Skill[];
		drawbacks: Drawback[];
	};
};
