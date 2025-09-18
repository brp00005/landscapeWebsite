import React, { useState, useEffect } from 'react';
import './landscaping.css';

function GridGen({ columns }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const [caption, setCaption] = useState('');
    const [isPhoneScreen, setIsPhoneScreen] = useState(window.innerWidth < 992);

    const defaultAltText = "Landscaping in Morgantown, WV";

    useEffect(() => {
        const handleResize = () => {
            setIsPhoneScreen(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openModal = (src) => {
        setModalImg(src);
        setCaption(defaultAltText);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalImg('');
        setCaption('');
    };

    const allImagesFlattened = columns.flat();

    return (
        <div>
            {isPhoneScreen ? (
                <div className="row">
                    <div className="column">
                        {allImagesFlattened.map((src, j) => (
                            <img
                                key={j}
                                src={src}
                                alt={defaultAltText}
                                style={{ width: "100%", display: "block", cursor: "pointer" }}
                                onClick={() => openModal(src)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="row">
                    {columns.map((imgs, i) => (
                        <div
                            key={i}
                            className="column"
                        >
                            {imgs.map((src, j) => (
                                <img
                                    key={j}
                                    src={src}
                                    alt={defaultAltText}
                                    style={{ width: "100%", display: "block", cursor: "pointer" }}
                                    onClick={() => openModal(src)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={modalImg} alt={caption} onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}

export default GridGen;