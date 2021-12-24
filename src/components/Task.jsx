import CheckCircle from './CheckCircle';
import xIcon from '../img/icon-cross.svg';

const task = ({ text, onDel, taggole, isItDone }) => {
	return (
		<div className="task">
			<CheckCircle taggole={taggole} isItDone={isItDone} />
			<h1 className={`task--Text ${isItDone ? 'done' : ''}`}>{text}</h1>
			<img src={xIcon} className="delIcon" onClick={onDel} />
		</div>
	);
};

export default task;
