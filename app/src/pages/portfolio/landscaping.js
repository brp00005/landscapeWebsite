import React, { useState, useEffect } from 'react';
import './landscaping.css';
import GridGen from './gridGen';



const Landscaping = () => {

    const lowRes = [];
    const highRes = [];

    for (let i = 0; i <= 34; i++) {
        lowRes.push(require(`./${i}.webp`));
        highRes.push(require(`./lowRes/${i}.webp`));
    }

    /*decision*/
    const [images, setImages] = useState([]);

    useEffect(() => {
        const isPhone = window.innerWidth < 992;
        setImages(isPhone ? lowRes : highRes);
    }, []);

    const columns = [
        [images[0], images[3], images[7], images[31], images[32], images[34], images[2]],
        [images[16], images[17], images[21], images[22], images[33], images[14]],
        [images[18], images[19], images[20], images[23], images[24], images[25]],
        [images[26], images[27], images[28], images[29], images[30]]
    ];

    const columns2 = [
        [highRes[0], highRes[3], highRes[7], highRes[31], highRes[32], highRes[34], highRes[2]],
        [highRes[16], highRes[17], highRes[21], highRes[22], highRes[33], highRes[14]],
        [highRes[18], highRes[19], highRes[20], highRes[23], highRes[24], highRes[25]],
        [highRes[26], highRes[27], highRes[28], highRes[29], highRes[30]]
    ];



    return <div className="padding"><GridGen columns={columns} columns2={columns2} />;</div>
};

export default Landscaping;
