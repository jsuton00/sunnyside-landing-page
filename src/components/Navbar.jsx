import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/about" className="navbar-nav-item-link">
				<div className="navbar-nav-item">About</div>
			</Link>
			<Link to="/services" className="navbar-nav-item-link">
				<div className="navbar-nav-item">Services</div>
			</Link>
			<Link to="/projects" className="navbar-nav-item-link">
				<div className="navbar-nav-item">Project</div>
			</Link>
			<Link to="/contact" className="navbar-nav-item-link">
				<div className="navbar-nav-item contact-button">Contact</div>
			</Link>
		</nav>
	);
};

export default Navbar;
