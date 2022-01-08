import checkIcon from '../img/icon-check.svg';

const Subbtn = ({ onSubmit }) => {
	return (
		<>
			<div
				className="submit-btn"
				onClick={(e) => {
					onSubmit(e);
				}}
			>
				<img src={checkIcon} />
			</div>
		</>
	);
};

export default Subbtn;
