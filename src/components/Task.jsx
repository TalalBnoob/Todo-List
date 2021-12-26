import CheckCircle from './CheckCircle';
import xIcon from '../img/icon-cross.svg';
import { useState } from 'react';

const task = ({ text, onDel, taggole, isItDone, isItShow }) => {
	return (
		<div
			className={`task ${
				isItShow === 'active' && isItDone === true ? 'hide' : ''
			}
			${isItShow === 'completed' && isItDone === false ? 'hide' : ''}`}
		>
			<CheckCircle taggole={taggole} isItDone={isItDone} />
			<h1 className={`task--Text ${isItDone ? 'done' : ''}`}>{text}</h1>
			<img src={xIcon} className="delIcon" onClick={onDel} />
		</div>
	);
};

export default task;
