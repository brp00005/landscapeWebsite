//SlideShow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import Contact from '../pages/contact';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";


//todo: make a little bar at the bottom of the slideshow or dots to change slides  


const Slideshow = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToPreviousSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		const intervalId = setInterval(goToNextSlide, 5000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<div className="slideshow-container">
			<br />
			<img
				src={images[currentIndex]}
				alt={`Slide ${currentIndex}`}
				className="slideshow-image"
			/>

			<Link to="/contact">
				<button className="contact-button">Contact Us!</button>
			</Link>

			
			{/* <div className="slideshow-buttons">
				<button onClick={goToPreviousSlide}>Previous</button>
				<button onClick={goToNextSlide}>Next</button>
			</div> */}
		</div>
	);
};

export default Slideshow;