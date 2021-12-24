import sun from '../img/icon-sun.svg';

const Header = () => {
	return (
		<div className="header">
			<h1 className="logo">T O D O</h1>
			<img src={sun} className="themeIcon" />
		</div>
	);
};

export default Header;
