import Masonry from 'react-masonry-css';

import pierce from '../../image/pierce.png';
import obvious from '../../image/obvious.png';
import hidden from '../../image/hidden.png';

import '../../styles/masonry.css';
import './cardList.css';

type Entry = {
	name: string;
	description_narrative: string;
	description_gameplay: string;
	cost: number;
	priority?: string;
	concentration?: string;
	cooldown?: string;
	radius?: string;
	reliability?: string;
	piercing?: boolean;
	visibility?: string;
};

type Props = {
	data: Entry[];
	dataType: 'abilities' | 'skills' | 'drawbacks';
};

const CardList = ({ data, dataType }: Props) => {
	if (!data.length) return null;

	/* Настройка сетки */
	const breakpointCOlumnsObj = {
		default: 4,
		1100: 2,
		700: 1,
	};

	return (
		<div>
			<Masonry
				breakpointCols={breakpointCOlumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{data.map((item, index) => (
					<div className="card" key={index}>
						<div className="header">
							<div className="icon-main">
								{/* Когда нибудь тут будет лого, но это уже совсем другая история которая начнется как только встанут с дивана */}
							</div>
							<div className="title-block">
								<div className="title-row">
									<span className="title">
										{item.name}{' '}
										<span className="title_cost">({item.cost})</span>
									</span>
									{item.piercing !== undefined && (
										<div className="icon-group">
											<div className="icon">
												{item.piercing && <img src={pierce} alt="" />}
											</div>
											<div className="icon">
												<img src={item.piercing ? obvious : hidden} alt="" />
											</div>
										</div>
									)}
								</div>
								<div className="sub-info">
									<div className="sub-info_left">
										{item.concentration && <span>{item.concentration}</span>}
										<span>
											{item.reliability ??
												(dataType === 'skills'
													? 'Пассивный навык'
													: dataType === 'drawbacks'
													? 'Недостаток'
													: 'Уверенная')}
										</span>
									</div>
									<div className="sub-info_right">
										{item.priority && <span>{item.priority}</span>}

										{item.radius && (
											<span>
												<strong>R:</strong> {item.radius ?? '—'}
											</span>
										)}

										{item.cooldown && (
											<span>
												<strong>CD:</strong> {item.cooldown ?? '—'}
											</span>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="description">
							<p>{item.description_narrative}</p>
							<p className="highlight">{item.description_gameplay}</p>
						</div>
					</div>
				))}
			</Masonry>
		</div>
	);
};

export default CardList;
