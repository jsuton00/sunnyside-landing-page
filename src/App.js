import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useViewportContext } from './hooks/useViewport';

const App = () => {
	const [width] = useViewportContext();
	const [isOpen, setIsOpen] = useState(false);

	const onToggle = () => setIsOpen(!isOpen);

	const onClose = () => setIsOpen(false);

	console.log(width);
	return (
		<>
			<Header
				width={width}
				isOpen={isOpen}
				onToggle={onToggle}
				onClose={onClose}
			/>
			<main className="main">
				<div className="main-page-content container">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default App;
