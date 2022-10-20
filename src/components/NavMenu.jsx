import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = (props) => {
	const { onClose } = props;
	return (
		<div className="nav-menu-container container">
			<div className="nav-menu">
				<Link to="/about" onClick={onClose} className="nav-menu-nav-item-link">
					<div className="nav-menu-nav-item">About</div>
				</Link>
				<Link
					to="/services"
					onClick={onClose}
					className="nav-menu-nav-item-link"
				>
					<div className="nav-menu-nav-item">Services</div>
				</Link>
				<Link
					to="/projects"
					onClick={onClose}
					className="nav-menu-nav-item-link"
				>
					<div className="nav-menu-nav-item">Project</div>
				</Link>
				<Link
					to="/contact"
					onClick={onClose}
					className="nav-menu-nav-item-link"
				>
					<div className="nav-menu-nav-item contact-button">Contact</div>
				</Link>
			</div>
		</div>
	);
};

export default NavMenu;
