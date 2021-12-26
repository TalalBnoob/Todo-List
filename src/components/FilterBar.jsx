const FilterBar = ({
	numOfItems,
	isItAll,
	isItActive,
	isItCompleted,
	onClick,
	clear,
}) => {
	return (
		<div className="filter">
			<p className="counter">{numOfItems} items left</p>

			<label htmlFor="all" className={`${isItAll && 'checked'}`}>
				All
				<input
					type="radio"
					name="filter"
					id="all"
					className={`filter btn radio all`}
					onChange={(e) => onClick(e)}
					checked={isItAll}
				/>
			</label>
			<label htmlFor="active" className={`${isItActive && 'checked'}`}>
				Active
				<input
					type="radio"
					name="filter"
					id="active"
					className={`filter btn radio active`}
					onChange={(e) => onClick(e)}
					checked={isItActive}
				/>
			</label>
			<label
				htmlFor="completed"
				className={`${isItCompleted && 'checked'}`}
			>
				Completed
				<input
					type="radio"
					name="filter"
					id="completed"
					className={`filter btn radio completed`}
					onChange={(e) => onClick(e)}
					checked={isItCompleted}
				/>
			</label>

			{/* <button className="filter btn all">All</button>
			<button className="filter btn active">Active</button>
			<button className="filter btn completed">Completed</button> */}
			<button className="btn clear" onClick={(e) => clear(e)}>
				clear Completed
			</button>
		</div>
	);
};

export default FilterBar;
