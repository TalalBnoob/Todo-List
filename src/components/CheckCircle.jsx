import checkIcon from '../img/icon-check.svg';

function CheckCircle({ taggole, isItDone }) {
	return (
		<div className={`circle ${isItDone ? 'done' : ''}`} onClick={taggole}>
			<img
				src={checkIcon}
				alt=""
				className={`checkIcon ${isItDone ? 'show' : ''}`}
			/>
		</div>
	);
}

export default CheckCircle;
