const FilterBar = ({ numOfItems }) => {
	return (
		<div className="filter">
			<p className="counter">{numOfItems} items left</p>
			<button className="filter btn all">All</button>
			<button className="filter btn active">Active</button>
			<button className="filter btn completed">Completed</button>
			<button className="btn clear">clear Completed</button>
		</div>
	);
};

export default FilterBar;
