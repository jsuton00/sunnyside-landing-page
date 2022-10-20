import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img/images/image-header.jpg';
import Logo from './Logo';
import Navbar from './Navbar';
import arrowDown from '../assets/img/icons/icon-arrow-down.svg';
import NavMenuButton from './NavMenuButton';
import NavMenu from './NavMenu';

const Header = (props) => {
	const { width, isOpen, onToggle, onClose } = props;
	return (
		<header className="header">
			<div className="header-hero-image-container">
				<img
					src={heroImage}
					alt="a slice of orange"
					className="header-hero-image"
				/>
			</div>
			<div className="header-row-section header-navbar-section container row">
				<div className="header-navbar-brand-section">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				{width < 770 ? (
					<NavMenuButton isOpen={isOpen} onToggle={onToggle} />
				) : (
					<Navbar />
				)}
			</div>
			<div className="header-row-section header-hero-section container">
				<h1 className="header-hero-heading">We are the creatives</h1>
				<div className="header-hero-downward-arrow">
					<img src={arrowDown} alt="Downward arrow icon" />
				</div>
			</div>
			{isOpen ? <NavMenu onClose={onClose} /> : <></>}
		</header>
	);
};

export default Header;
