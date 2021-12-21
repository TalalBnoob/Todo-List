import CheckCircle from './CheckCircle';

function CreatTask() {
	return (
		<div className="CreatTask">
			<CheckCircle />
			<input
				type="text"
				name="Task"
				className="TaskInput"
				placeholder="Craet a new todo..."
			/>
		</div>
	);
}

export default CreatTask;
