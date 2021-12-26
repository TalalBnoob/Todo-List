import { useState } from 'react';
import FilterBar from './FilterBar';
import Task from './Task';

const Tasks = ({ tasks, onDel, taggoleCheke, numOfItems }) => {
	const [all, setAll] = useState(true);
	const [active, setActive] = useState(false);
	const [completed, setCompleted] = useState(false);

	const changeState = (e) => {
		if (e.target.id === 'all') {
			setAll(true);
			setCompleted(false);
			setActive(false);
		} else if (e.target.id === 'active') {
			setActive(true);
			setAll(false);
			setCompleted(false);
		} else if (e.target.id === 'completed') {
			setCompleted(true);
			setActive(false);
			setAll(false);
		}
	};
	return (
		<div className="tasks">
			{tasks.map((task) => {
				return (
					<Task
						key={task.id}
						text={task.text}
						isItDone={task.done}
						onDel={() => onDel(task.id)}
						taggole={() => taggoleCheke(task.id)}
						isItShow={
							active ? 'active' : completed ? 'completed' : 'all'
						}
					/>
				);
			})}
			<FilterBar
				numOfItems={numOfItems}
				isItAll={all}
				isItActive={active}
				isItCompleted={completed}
				onClick={changeState}
			/>
		</div>
	);
};

export default Tasks;
