import React from 'react';
import './navigation.css';

type NavigationProps = {
	selectedType: 'abilities' | 'skills' | 'drawbacks' | null;
	setSelectedType: React.Dispatch<
		React.SetStateAction<'abilities' | 'skills' | 'drawbacks' | null>
	>;
};

const Navigation: React.FC<NavigationProps> = ({
	selectedType,
	setSelectedType,
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
				Способности
			</button>
			<button
				className="button"
				onClick={() => onClickHandler('skills')}
				aria-pressed={selectedType === 'skills'}
			>
				Навыки
			</button>
			<button
				className="button"
				onClick={() => onClickHandler('drawbacks')}
				aria-pressed={selectedType === 'drawbacks'}
			>
				Недостатки
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
