import CheckCircle from './CheckCircle';

const task = ({ text }) => {
	return (
		<div className="task">
			<CheckCircle />
			<h1 className="task--Text">{text}</h1>
		</div>
	);
};

export default task;
