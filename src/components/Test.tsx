import { useEffect, useState } from 'react';

const Supers = () => {
	type AbilityData = {
		title: string;
		supers_data: {
			abilities: {
				name: string;
				// Добавь нужные поля по аналогии
			}[];
		};
	};

	const [data, setData] = useState<AbilityData[] | null>(null);

	useEffect(() => {
		fetch(
			'https://gist.githubusercontent.com/Aladaner/6e04fdc3628a71171b7e2f98301b7b2c/raw//DNDDatasheet'
		)
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch(console.error);
	}, []);

	if (!data) return <div>Загрузка...</div>;

	return (
		<div>
			{data.map((item, index) => (
				<div key={index}>
					<h2>{item.title}</h2>
					{item.supers_data.abilities.map((ability, index) => (
						<h2 key={index}>{ability.name}</h2>
					))}
				</div>
			))}
		</div>
	);
};

export default Supers;
