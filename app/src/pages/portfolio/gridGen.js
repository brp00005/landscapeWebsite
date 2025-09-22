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
 *
 * Usage:
 * <GridGen columns={highResColumns} columns2={lowResColumns} />
 */

const altTexts = [/* your alt text array as before */];

function GridGen({ columns, columns2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [caption, setCaption] = useState('');
  const [isPhoneScreen, setIsPhoneScreen] = useState(window.innerWidth < 992);

  const defaultAltText = "All pro landscaping project in WV";

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
    setCaption(altTexts[index] || defaultAltText);
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
