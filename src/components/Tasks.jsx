import Task from './Task';

const Tasks = ({ tasks }) => {
	return (
		<div className="tasks">
			{tasks.map((task) => {
				return <Task text={task.text} />;
			})}
		</div>
	);
};

export default Tasks;
