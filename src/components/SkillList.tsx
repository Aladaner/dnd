import type { Skill } from '../types/types';

type Props = {
	skills: Skill[];
};

const SkillList = ({ skills }: Props) => {
	if (!SkillList.length) return null;
	return (
		<div>
			<details>
				<summary>Навыки ({skills.length})</summary>
				<div>
					{skills.map((skill, index) => (
						<div key={index}>
							<h2>{skill.name}</h2>
						</div>
					))}
				</div>
			</details>
		</div>
	);
};

export default SkillList;
