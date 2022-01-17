import React from 'react';

const Nothing = ({ theme }) => {
	return (
		<div
			className={`task completed nothing ${
				theme ? 'dark-mode' : 'light-mode'
			}`}
		>
			Nothing to show
		</div>
	);
};

export default Nothing;
