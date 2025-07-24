import { cleanSuperData } from '../helpers/cleanData';
import type { SuperData } from '../types/types';
// import AbilityList from './abilitiesList/AbilitiesList';
import { useEffect, useState } from 'react';
import CardList from './cardList/CardList';
// import SkillList from './skillsList/SkillsList';
// import DrawbackList from './DrawbacksList';

const DATA_URL =
	'https://raw.githubusercontent.com/Aladaner/dnd/data/src/helpers/datasheet.json';

const Supers = () => {
	const [superList, setSuperList] = useState<SuperData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch(DATA_URL)
			.then((res) => {
				if (!res.ok) throw new Error(`Ошибка загрузки: ${res.statusText}`);
				return res.json();
			})
			.then((data: SuperData[]) => {
				const cleaned = cleanSuperData(data);
				setSuperList(cleaned);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Test</p>;
	if (error) return <p>{error}</p>;
	return (
		<div>
			{superList.map((item, index) => (
				<div key={index}>
					<h2>{item.title}</h2>
					<CardList
						title="Способности"
						data={item.supers_data.abilities}
						dataType="abilities"
					/>
					{/* <CardList
						title="Навыки"
						data={item.supers_data.skills}
						dataType="skills"
					/> */}
				</div>
			))}
		</div>
	);
};

export default Supers;
