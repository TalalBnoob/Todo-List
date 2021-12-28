import sun from '../img/icon-sun.svg';
import moon from '../img/icon-moon.svg';

const Header = ({ changeTheme, theme }) => {
	return (
		<div className="header">
			<h1 className="logo">T O D O</h1>
			<img
				src={theme ? sun : moon}
				alt=""
				className="themeIcon"
				onClick={changeTheme}
			/>
		</div>
	);
};

export default Header;
