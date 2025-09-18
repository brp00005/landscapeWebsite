import React, { useState } from 'react';
import './landscaping.css';
import GridGen from './gridGen';

const localImages = [];

for (let i = 1; i <= 35; i++) {
    const imagePath = `./landImgs/${i}.jpg`;
    const image = require(imagePath);
    localImages.push(image);
}

const Landscaping = () => {

    const columns = [
        localImages.slice(0, 7),    // 7 images
        localImages.slice(7, 14),   // 7 images
        localImages.slice(14, 21),  // 7 images
        localImages.slice(21, 28),  // 7 images
        localImages.slice(28, 35),  // 7 images
    ];


    return (
        <GridGen columns={columns} />
    );
};

export default Landscaping;
