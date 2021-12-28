import CheckCircle from './CheckCircle';
import { useState } from 'react';

function CreatTask({ confirm, theme }) {
	const [text, setText] = useState('');
	const [done, setDone] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(1);

		if (e.key !== 'Enter') {
			return;
		}

		if (!text) {
			return;
		}

		confirm({ text, done });

		setText('');
		setDone(false);
	};
	return (
		<div className={`CreatTask ${theme ? 'dark-mode' : 'light-mode'}`}>
			<CheckCircle theme={theme} />
			<input
				type="text"
				name="Task"
				className={`TaskInput ${theme ? 'dark-mode' : 'light-mode'}`}
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
