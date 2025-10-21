import React, { useState, useEffect } from 'react';
import './landscaping.css';

/**
 * GridGen Component
 * -----------------
 * This component renders a responsive image grid for a landscaping gallery.
 * It supports both high-resolution and low-resolution image sets and adapts
 * based on the user's device type (phone vs. tablet/desktop).
 *
 * Props:
 * - columns: Array of arrays containing high-resolution image sources.
 * - columns2: Array of arrays containing low-resolution image sources.
 *
 * Behavior:
 * - On phones (screen width < 992px):
 *    - Uses `columns` (high-res) for both the grid and the popup modal.
 * - On tablets and desktops:
 *    - Uses `columns2` (low-res) for the grid.
 *    - Uses `columns` (high-res) for the popup modal.
 *
 * Features:
 * - Modal popup with escape key support.
 * - Responsive layout with dynamic resizing.
 * - Alt text descriptions for accessibility.
 * - Native lazy loading for images.
 *
 * Usage:
 * <GridGen columns={highResColumns} columns2={lowResColumns} />
 */

const altTexts = [
    "Fresh sod installation. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Stone walkway design. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Mulched garden bed. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Trimmed hedges. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Flower bed layout. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Backyard patio. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Decorative pavers. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Raised garden. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Outdoor fire pit. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Retaining wall. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Curb appeal upgrade. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Rock garden. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Water feature. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Pergola setup. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Landscape lighting. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Gravel driveway. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Garden hammock. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Trellis with vines. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Outdoor kitchen. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Flagstone path. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Privacy hedges. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Fence border. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Decorative boulders. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Stone benches. Professional landscaping project in the Morgantown WV/Preston County area.",
    "New turf install. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Solar-lit path. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Deck with plants. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Brick edging. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Tree planting. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Butterfly garden. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Stone steps. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Landscape cleanup. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Play area turf. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Crushed stone path. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Ornamental grasses. Professional landscaping project in the Morgantown WV/Preston County area.",
    "Privacy fencing. Professional landscaping project in the Morgantown WV/Preston County area.",
];

function GridGen({ columns, columns2 }) {
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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const openModal = (index) => {
        const highResFlat = columns.flat();
        setModalImg(highResFlat[index]);
        setCaption(altTexts[index] || "Landscaping project");
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalImg('');
        setCaption('');
    };

    const gridColumns = isPhoneScreen ? columns : columns2;

    let imageCounter = 0;

    return (
        <div>
            <div className="row">
                {gridColumns.map((imgs, i) => (
                    <div key={i} className="column">
                        {imgs.map((src, j) => {
                            const index = imageCounter++;
                            return (
                                <img
                                    key={index}
                                    src={src}
                                    alt={altTexts[index]}
                                    loading="lazy"
                                    style={{ width: "100%", display: "block", cursor: "pointer" }}
                                    onClick={() => openModal(index)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img
                        className="modal-content"
                        src={modalImg}
                        alt={caption}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

export default GridGen;
