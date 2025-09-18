import React, { useEffect, useState } from 'react';
import './carousel.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import img1 from './22.jpeg';
import img2 from './20.jpeg';
import img3 from './23.jpeg';
import img4 from './24.jpeg';
import img5 from './25.jpeg';
// FIX #2: Make sure all images you use are imported. I've removed img6 below.

const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <section>
            <div className="image-container">
                <button className="nav-button left" onClick={handlePreviousClick}>&lt;</button>

                {images.map((image, index) => (
                    <img
                        // FIX #1: Access the 'src' property, not 'url'
                        src={image.src}
                        alt="Morgantown WV Landscaping Image"
                        className={currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id}
                    />
                ))}

                <Link to="/contact">
                    <Button type="primary" className="contactButton">
                        Contact Us!
                    </Button>
                </Link>

                <button className="nav-button right" onClick={handleNextClick}>&gt;</button>
            </div>
        </section>
    );
};

export default ImageCarousel;