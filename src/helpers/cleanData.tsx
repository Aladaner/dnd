// src/helpers/cleanData.ts
import type { SuperData } from '../types/types';

export const cleanText = (text?: string): string =>
	(text ?? '')
		.replace(/\u00ad|\u200b|\u200c|\uFEFF/g, '') // убираем невидимые символы
		.replace(/&nbsp;/g, '\u00A0') // неразрывный пробел
		.replace(/\s{2,}/g, ' ') // двойные пробелы
		.trim();

export const cleanSuperData = (data: SuperData[]): SuperData[] => {
	return data.map((entry) => ({
		...entry,
		supers_data: {
			...entry.supers_data,
			abilities: entry.supers_data.abilities.map((ability) => ({
				...ability,
				description_narrative: cleanText(ability.description_narrative),
				description_gameplay: cleanText(ability.description_gameplay),
			})),
			skills:
				entry.supers_data.skills?.map((skill) => ({
					...skill,
					description_narrative: cleanText(skill.description_narrative),
					description_gameplay: cleanText(skill.description_gameplay),
				})) ?? [],
			drawbacks:
				entry.supers_data.drawbacks?.map((drawback) => ({
					...drawback,
					description_narrative: cleanText(drawback.description_narrative),
					description_gameplay: cleanText(drawback.description_gameplay),
				})) ?? [],
		},
	}));
};
