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
			id: 1,
			text: 'Watch fate/saty night movie',
			done: false,
		},
	]);

	return (
		<div className="App container">
			<Header />
			<CreatTask />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
