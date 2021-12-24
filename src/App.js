import './scss/main.scss';
import Header from './components/Header';
import CreatTask from './components/CreatTask';
import Tasks from './components/Tasks';
import { useState } from 'react';
import task from './components/Task';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Meeting in schools',
			done: false,
		},
		{
			id: 2,
			text: 'Go to gym',
			done: true,
		},
		{
			id: 3,
			text: 'Watch fate/saty night movie',
			done: false,
		},
	]);

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		setTasks([...tasks, { id, ...task }]);
	};

	const delTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const taggoleCheke = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, done: !task.done } : task
			)
		);
	};

	return (
		<div className="App container">
			<Header />
			<CreatTask confirm={addTask} />
			<Tasks tasks={tasks} onDel={delTask} taggoleCheke={taggoleCheke} />
		</div>
	);
}

export default App;
