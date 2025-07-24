import CardList from '../components/cardList/CardList';
import Navigation from '../components/navigation/Navigation';
import { cleanSuperData } from '../helpers/cleanData';
import type { SuperData } from '../types/types';
import { useEffect, useState } from 'react';

const DATA_URL =
	'https://raw.githubusercontent.com/Aladaner/dnd/data/src/helpers/datasheet.json';

const Supers = () => {
	const [superList, setSuperList] = useState<SuperData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Хранит тип отображаемых данных: "abilities", "skills", "drawbacks" или null (ничего не показывать)
	const [selectedType, setSelectedType] = useState<
		'abilities' | 'skills' | 'drawbacks' | null
	>(null);

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

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>{error}</p>;
	if (superList.length === 0) return <p>Данные не найдены</p>;

	// Используем первый элемент для отображения данных
	const item = superList[0];

	// Конфиг для кнопок и передачи в CardList
	const config = {
		abilities: {
			title: 'Способности',
			data: item.supers_data.abilities,
			dataType: 'abilities',
		},
		skills: {
			title: 'Навыки',
			data: item.supers_data.skills,
			dataType: 'skills',
		},
		drawbacks: {
			title: 'Недостатки',
			data: item.supers_data.drawbacks,
			dataType: 'drawbacks',
		},
	};

	return (
		<div className="container">
			<Navigation
				selectedType={selectedType}
				setSelectedType={setSelectedType}
				superData={item.supers_data}
			/>

			<div className="content">
				{selectedType && (
					<CardList data={config[selectedType].data} dataType={selectedType} />
				)}
			</div>
		</div>
	);
};

export default Supers;
