import checkIcon from '../img/icon-check.svg';

function CheckCircle({ taggole, isItDone, theme }) {
	return (
		<div
			className={`circle ${isItDone ? 'done' : ''} ${
				theme ? 'dark-mode' : 'light-mode'
			}`}
			onClick={taggole}
		>
			<img
				src={checkIcon}
				alt=""
				className={`checkIcon ${isItDone ? 'show' : ''}`}
			/>
		</div>
	);
}

export default CheckCircle;
