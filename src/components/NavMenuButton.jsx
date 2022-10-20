import React from 'react';
import menuIcon from '../assets/img/icons/icon-hamburger.svg';

const NavMenuButton = (props) => {
	const { isOpen, onToggle } = props;
	return (
		<button type="button" className="nav-menu-button" onClick={onToggle}>
			{isOpen ? (
				'X'
			) : (
				<img src={menuIcon} alt="nav menu icon" className="nav-menu-icon" />
			)}
		</button>
	);
};

export default NavMenuButton;
