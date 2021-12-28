import CheckCircle from './CheckCircle';
import xIcon from '../img/icon-cross.svg';
import { useState } from 'react';

const task = ({ text, onDel, taggole, isItDone, isItShow, theme }) => {
	return (
		<div
			className={`task ${
				isItShow === 'active' && isItDone === true ? 'hide' : ''
			}
			${isItShow === 'completed' && isItDone === false ? 'hide' : ''}
			${theme ? 'dark-mode' : 'light-mode'}`}
		>
			<CheckCircle taggole={taggole} isItDone={isItDone} theme={theme} />
			<h1 className={`task--Text ${isItDone ? 'done' : ''}`}>{text}</h1>
			<img src={xIcon} className="delIcon" onClick={onDel} />
		</div>
	);
};

export default task;
