import './scss/main.scss';
import defaultTasks from './defaultTasks.json';
import Header from './components/Header';
import CreatTask from './components/CreatTask';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
	const [darkTheme, setTheme] = useState(true);
	const [tasks, setTasks] = useState(defaultTasks);

	const changeTheme = () => {
		setTheme(!darkTheme);
		const body = document.querySelector('body');
		if (darkTheme === true) {
			body.classList.remove('dark-mode');
			body.classList.add('light-mode');
		} else {
			body.classList.remove('light-mode');
			body.classList.add('dark-mode');
		}
	};

	const addTask = (task) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		setTasks([...tasks, { id, ...task }]);
	};

	const delTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const clearTasks = (id) => {
		setTasks(tasks.filter((task) => task.done === false));
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
			<Header changeTheme={changeTheme} theme={darkTheme} />
			<CreatTask confirm={addTask} theme={darkTheme} />
			<Tasks
				tasks={tasks}
				onDel={delTask}
				taggoleCheke={taggoleCheke}
				numOfItems={tasks.length}
				clear={clearTasks}
				theme={darkTheme}
			/>
		</div>
	);
}

export default App;
