import type { Drawback } from '../types/types';

type Props = {
	drawbacks: Drawback[];
};

const DrawbackList = ({ drawbacks }: Props) => {
	if (!drawbacks.length) return null;
	return (
		<div>
			<details>
				<summary>Недостатки ({drawbacks.length})</summary>
				<div>
					{drawbacks.map((drawback, index) => (
						<div key={index}>
							<h2>{drawback.name}</h2>
						</div>
					))}
				</div>
			</details>
		</div>
	);
};

export default DrawbackList;
