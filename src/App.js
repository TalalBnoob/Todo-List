import './scss/main.scss';
import Header from './components/Header';
import CreatTask from './components/CreatTask';
import Tasks from './components/Tasks';
import { useState } from 'react';

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

	return (
		<div className="App container">
			<Header />
			<CreatTask confirm={addTask} />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
