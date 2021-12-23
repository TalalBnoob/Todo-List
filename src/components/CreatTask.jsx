import CheckCircle from './CheckCircle';
import { useState } from 'react';

function CreatTask({ confirm }) {
	const [text, setText] = useState('');
	const [done, setDone] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(1);

		if (e.key !== 'Enter') {
			return;
		}

		if (!text) {
			alert('Noting to add');
			return;
		}

		confirm({ text, done });

		setText('');
		setDone(false);
	};
	return (
		<div className="CreatTask">
			<CheckCircle />
			<input
				type="text"
				name="Task"
				className="TaskInput"
				placeholder="Craet a new todo..."
				onChange={(e) => {
					setText(e.target.value);
				}}
				onKeyUp={(e) => {
					onSubmit(e);
				}}
				value={text}
			/>
		</div>
	);
}

export default CreatTask;
