import FilterBar from './FilterBar';
import Task from './Task';

const Tasks = ({ tasks, onDel, taggoleCheke, numOfItems }) => {
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
					/>
				);
			})}
			<FilterBar numOfItems={numOfItems} />
		</div>
	);
};

export default Tasks;
