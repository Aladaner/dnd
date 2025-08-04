import React from 'react';
import './navigation.css';

type NavigationProps = {
	selectedType: 'abilities' | 'skills' | 'drawbacks' | null;
	setSelectedType: React.Dispatch<
		React.SetStateAction<'abilities' | 'skills' | 'drawbacks' | null>
	>;
	superData: {
		abilities: unknown[];
		skills: unknown[];
		drawbacks: unknown[];
	};
};

const Navigation: React.FC<NavigationProps> = ({
	selectedType,
	setSelectedType,
	superData,
}) => {
	// Общая функция для клика по кнопке
	const onClickHandler = (
		type: 'abilities' | 'skills' | 'drawbacks' | null
	) => {
		setSelectedType(type);
		window.scrollTo({ top: 0, behavior: 'smooth' }); // плавный скролл вверх
	};
	return (
		<div className="buttons">
			<button
				className="button"
				onClick={() => onClickHandler('abilities')}
				aria-pressed={selectedType === 'abilities'}
			>
				Способности <span>({superData.abilities.length})</span>
			</button>
			<button
				className="button"
				onClick={() => onClickHandler('skills')}
				aria-pressed={selectedType === 'skills'}
			>
				Навыки<span>({superData.skills.length})</span>
			</button>
			<button
				className="button"
				onClick={() => onClickHandler('drawbacks')}
				aria-pressed={selectedType === 'drawbacks'}
			>
				Недостатки<span>({superData.drawbacks.length})</span>
			</button>
			<button
				className="button"
				onClick={() => onClickHandler(null)}
				aria-pressed={selectedType === null}
			>
				Скрыть
			</button>
		</div>
	);
};

export default Navigation;
