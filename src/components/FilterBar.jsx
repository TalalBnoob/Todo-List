import { useState } from 'react';

const FilterBar = ({ numOfItems }) => {
	const [all, setAll] = useState(true);
	const [active, setActive] = useState(false);
	const [completed, setCompleted] = useState(false);

	const changeState = (e) => {
		if (e.target.id === 'all') {
			setAll(true);
			setCompleted(false);
			setActive(false);
		} else if (e.target.id === 'active') {
			setActive(true);
			setAll(false);
			setCompleted(false);
		} else if (e.target.id === 'completed') {
			setCompleted(true);
			setActive(false);
			setAll(false);
		}
	};

	return (
		<div className="filter">
			<p className="counter">{numOfItems} items left</p>

			<label htmlFor="all" className={`${all && 'checked'}`}>
				All
				<input
					type="radio"
					name="filter"
					id="all"
					className={`filter btn radio all`}
					onChange={(e) => changeState(e)}
					checked={all}
				/>
			</label>
			<label htmlFor="active" className={`${active && 'checked'}`}>
				Active
				<input
					type="radio"
					name="filter"
					id="active"
					className={`filter btn radio active`}
					onChange={(e) => changeState(e)}
					checked={active}
				/>
			</label>
			<label htmlFor="completed" className={`${completed && 'checked'}`}>
				Completed
				<input
					type="radio"
					name="filter"
					id="completed"
					className={`filter btn radio completed`}
					onChange={(e) => changeState(e)}
					checked={completed}
				/>
			</label>

			{/* <button className="filter btn all">All</button>
			<button className="filter btn active">Active</button>
			<button className="filter btn completed">Completed</button> */}
			<button className="btn clear">clear Completed</button>
		</div>
	);
};

export default FilterBar;
