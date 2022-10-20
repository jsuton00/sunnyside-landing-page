import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Navbar from './Navbar';
import facebook from '../assets/img/icons/icon-facebook.svg';
import twitter from '../assets/img/icons/icon-twitter.svg';
import instagram from '../assets/img/icons/icon-instagram.svg';
import pinterest from '../assets/img/icons/icon-pinterest.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content container">
				<div className="footer-logo-row row">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="footer-navbar-row row">
					<Navbar />
				</div>
				<div className="footer-social-links row">
					<div className="social-links-button">
						<img src={facebook} alt="social-links-icon" />
					</div>
					<div className="social-links-button">
						<img src={twitter} alt="social-links-icon" />
					</div>
					<div className="social-links-button">
						<img src={instagram} alt="social-links-icon" />
					</div>
					<div className="social-links-button">
						<img src={pinterest} alt="social-links-icon" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
