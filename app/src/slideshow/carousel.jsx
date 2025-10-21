import React, { useEffect, useState } from 'react';
import './carousel.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

import img1 from './22.jpeg';
import img2 from './20.jpeg';
import img3 from './23.jpeg';
import img4 from './24.jpeg';
import img5 from './25.jpeg';
// FIX #2: Make sure all images you use are imported. I've removed img6 below.

const images = [
    { id: 1, src: img1, alt: "Lush green lawn. Professional landscaping project in the Morgantown WV/Preston County area" },
    { id: 2, src: img2, alt: "Stone pathway and trimmed hedges. Professional landscaping project in the Morgantown WV/Preston County area" },
    { id: 3, src: img3, alt: "Colorful backyard garden with vibrant flowers and mulch. Professional landscaping project in the Morgantown WV/Preston County area" },
    { id: 4, src: img4, alt: "Outdoor patio with decorative landscaping features. Professional landscaping project in the Morgantown WV/Preston County area" },
    { id: 5, src: img5, alt: "Front yard curb appeal with manicured shrubs. Professional landscaping project in the Morgantown WV/Preston County area" },
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
                        alt={image.alt}
                        className={currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id}
                    />
                ))}

                <Link to="/contact">
                    <Button type="primary" className="contactButton">
                        <div className="contactContainer">
                            <div>Contact Us!</div>
                            <div className="buttonNumber">
                                <Icon.Phone size={20} color="#088a36" style={{ marginRight: '0.5rem' }} />
                                <a href="tel:+1-856-373-3455" className="buttonWrapper" style={{ textDecoration: 'none' }}>
                                    <div style={{ fontSize: '1.5rem', color: '#fff' }}>856-373-3455</div>
                                </a>
                            </div>
                        </div>
                    </Button>
                </Link>


                <button className="nav-button right" onClick={handleNextClick}>&gt;</button>
            </div>
        </section>
    );
};

export default ImageCarousel;