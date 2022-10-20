import React from 'react';
import transform from '../assets/img/images/image-transform.jpg';
import standOut from '../assets/img/images/image-stand-out.jpg';
import graphicDesign from '../assets/img/images/image-graphic-design.jpg';
import photography from '../assets/img/images/image-photography.jpg';
import { clientTestimonials } from '../constants/clientTestimonials';
import cone from '../assets/img/images/image-gallery-cone.jpg';
import milkBottles from '../assets/img/images/image-gallery-milkbottles.jpg';
import orange from '../assets/img/images/image-gallery-orange.jpg';
import sugarCubes from '../assets/img/images/image-gallery-sugarcubes.jpg';

const HomePage = () => {
	return (
		<div className="main-page-content container-fluid">
			<div className="page-section checker-box-layout row">
				<div className="checker-box-container text-container">
					<h1 className="checker-box-container-title">Transform your brand</h1>
					<p className="checker-box-container-text">
						We are a full-service creative agency specializing in helping brands
						grow fast. Engage your clients through compelling visuals that do
						most of the marketing for you.
					</p>
					<div className="checker-box-container-button">
						<button type="button" className="learn-more-button">
							Learn More
						</button>
					</div>
				</div>
				<div className="checker-box-container image-container">
					<img src={transform} alt="transform" />
				</div>
				<div className="checker-box-container image-container">
					<img src={standOut} alt="stand out" />
				</div>
				<div className="checker-box-container text-container">
					<h1 className="checker-box-container-title">
						Stand out to the right audience
					</h1>
					<p className="checker-box-container-text">
						Using a collaborative formula of designers, researchers,
						photographers, videographers, and copywriters, we’ll build and
						extend your brand in digital places.
					</p>
					<div className="checker-box-container-button">
						<button type="button" className="learn-more-button">
							Learn More
						</button>
					</div>
				</div>
				<div className="page-layout card-section row">
					<div className="card-section-container image-container">
						<div className="card-section-bg-img">
							<img src={graphicDesign} alt="transform" />
						</div>
						<h5 className="card-title">Graphic design</h5>
						<p className="card-text">
							Great design makes you memorable. We deliver artwork that
							underscores your brand message and captures potential clients’
							attention.
						</p>
					</div>
					<div className="card-section-container image-container">
						<div className="card-section-bg-img">
							<img src={photography} alt="stand out" />
						</div>
						<h5 className="card-title">Photography</h5>
						<p className="card-text">
							Increase your credibility by getting the most stunning,
							high-quality photos that improve your business image.
						</p>
					</div>
				</div>
			</div>
			<div className="page-section client-testimonials-section">
				<h1 className="client-testimonials-section-title">
					Client Testimonials
				</h1>
				<div className="client-testimonials-cards row">
					{clientTestimonials.length > 0 &&
						clientTestimonials.map((client) => {
							return (
								<div
									key={client.clientName}
									className="client-testimonials-card card"
								>
									<div className="client-testimonials-card-image card-img-top">
										<img src={client.clientPhoto} alt={client.clientName} />
									</div>
									<div className="client-testimonials-card-body card-body">
										<p className="client-testimonials-card-text">
											{client.testimonialText}
										</p>
										<h5 className="client-testimonials-card-title">
											{client.clientName}
										</h5>
										<p className="client-testimonials-card-text">
											{client.jobTitle}
										</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className="page-section gallery-section row">
				<img src={milkBottles} alt="milk bottles" className="gallery-photo" />
				<img src={orange} alt="orange" className="gallery-photo" />
				<img src={cone} alt="cone" className="gallery-photo" />
				<img src={sugarCubes} alt="sugar cubes" className="gallery-photo" />
			</div>
		</div>
	);
};

export default HomePage;
