import Masonry from 'react-masonry-css';

import type { Ability } from '../../types/types';

import pierce from '../../image/pierce.png';
import obvious from '../../image/obvious.png';
import hiiden from '../../image/hidden.png';

import '../../styles/masonry.css';
import './abilityList.css';

type Props = {
	abilities: Ability[];
};

const AbilityList = ({ abilities }: Props) => {
	if (!abilities.length) return null;
	const breakpointCOlumnsObj = {
		default: 4,
		1100: 2,
		700: 1,
	};

	return (
		<div>
			<summary
				style={{ fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}
			>
				Способности ({abilities.length})
			</summary>
			<div>
				<Masonry
					breakpointCols={breakpointCOlumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{abilities.map((ability, index) => (
						<div className="card" key={index}>
							<div className="header">
								<div className="icon-main">
									{/* Тут должно быть лого абилки */}
								</div>
								<div className="title-block">
									<div className="title-row">
										<span className="title">
											{ability.name}{' '}
											<span className="title_cost">({ability.cost})</span>
										</span>
										<div className="icon-group">
											<div className="icon">
												{ability.piercing && <img src={pierce} alt="" />}
											</div>
											<div className="icon">
												<img src={ability.piercing ? obvious : hiiden} alt="" />
											</div>
										</div>
									</div>
									<div className="sub-info">
										<div className="sub-info_left">
											<span>{ability.concentration}</span>
											<span>{ability.reliability ?? 'Уверенная'}</span>
										</div>
										<div className="sub-info_right">
											<span>{ability.priority}</span>
											<span>
												<strong>R:</strong>{' '}
												{ability.radius ? ability.radius : '—'}
											</span>
											<span>
												<strong>CD:</strong>{' '}
												{ability.cooldown ? ability.cooldown : '—'}
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="description">
								<p>{ability.description_narrative}</p>
								<p className="highlight">{ability.description_gameplay}</p>
							</div>
						</div>
					))}
				</Masonry>
			</div>
		</div>
	);
};

export default AbilityList;
