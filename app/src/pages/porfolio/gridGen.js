//for all 3 (mow,land,excavation), passed in: columsn

import React, { useState } from 'react';
import './landscaping.css';

function GridGen({columns}) {

    const [isOpen, setIsOpen] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const [caption, setCaption] = useState('');

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

    /* title, then a nested for each loop */
    return (
        <div>
            <div className="title">
                <h1>Excavation Work</h1>
            </div>
            <div className="row" style={{ display: "flex", gap: "10px" }}>
                {columns.map((imgs, i) => (
                    <div
                        key={i}
                        className="column"
                        style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}
                    >
                        {imgs.map((src, j) => (
                            <img
                                key={j}
                                src={src}
                                style={{ width: "100%", display: "block", cursor: "pointer" }}
                                onClick={() => openModal(src, `Image ${i}-${j}`)}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* modal behavior */}
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={modalImg} alt={caption} onClick={(e) => e.stopPropagation()} />
                </div>
            )}

        </div>
    )

}

export default GridGen