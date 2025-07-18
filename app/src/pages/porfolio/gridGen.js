import React, { useState, useEffect } from 'react';
import './landscaping.css';

function GridGen({ columns, title }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const [caption, setCaption] = useState('');
    const [isPhoneScreen, setIsPhoneScreen] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsPhoneScreen(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openModal = (src, alt) => {
        setModalImg(src);
        setCaption(alt);
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
            <div className="title">
                <h1>{title}</h1>
            </div>
            {isPhoneScreen ? (
                <div className="row">
                    <div className="column">
                        {allImagesFlattened.map((src, j) => (
                            <img
                                key={j}
                                src={src}
                                style={{ width: "100%", display: "block", cursor: "pointer" }}
                                onClick={() => openModal(src, `Image ${j + 1}`)}
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
                                    style={{ width: "100%", display: "block", cursor: "pointer" }}
                                    onClick={() => openModal(src, `Image ${i + 1}-${j + 1}`)}
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