import { cleanSuperData } from '../helpers/cleanData';
import type { SuperData } from '../types/types';
import AbilityList from './abilityList/AbilityList';
import { useEffect, useState } from 'react';
// import SkillList from './SkillList';
// import DrawbackList from './DrawbackList';

const DATA_URL =
	'https://raw.githubusercontent.com/Aladaner/dnd/refs/heads/data/src/helpers/datasheet.json';

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

	if (loading) return <p>Loading</p>;
	if (error) return <p>Error: {error}</p>;
	return (
		<div>
			{superList.map((item, index) => (
				<div key={index}>
					<h2>{item.title}</h2>
					<AbilityList abilities={item.supers_data.abilities} />
					{/* <SkillList skills={item.supers_data.skills} />
					<DrawbackList drawbacks={item.supers_data.drawbacks} /> */}
				</div>
			))}
		</div>
	);
};

export default Supers;
