import Task from './Task';

const Tasks = ({ tasks, onDel, taggoleCheke }) => {
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
		</div>
	);
};

export default Tasks;
