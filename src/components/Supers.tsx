import data from './../helpers/datasheet.json';
import { cleanSuperData } from '../helpers/cleanData';
import type { SuperData } from '../types/types';
import AbilityList from './abilityList/AbilityList';
// import SkillList from './SkillList';
// import DrawbackList from './DrawbackList';

const superList = cleanSuperData(data as SuperData[]);

const Supers = () => {
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
