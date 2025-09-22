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
        [images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7], images[8], images[34]],
        [images[9], images[10], images[11], images[12], images[13], images[14], images[15], images[16], images[17]],
        [images[18], images[19], images[20], images[21], images[22], images[23], images[24], images[25]],
        [images[26], images[27], images[28], images[29], images[30], images[31], images[32], images[33]]
    ];

    const columns2 = [
        [highRes[0], highRes[1], highRes[2], highRes[3], highRes[4], highRes[5], highRes[6], highRes[7], highRes[8], highRes[34]],
        [highRes[9], highRes[10], highRes[11], highRes[12], highRes[13], highRes[14], highRes[15], highRes[16], highRes[17]],
        [highRes[18], highRes[19], highRes[20], highRes[21], highRes[22], highRes[23], highRes[24], highRes[25]],
        [highRes[26], highRes[27], highRes[28], highRes[29], highRes[30], highRes[31], highRes[32], highRes[33]]
    ];



    return <div className="padding"><GridGen columns={columns} columns2 = {columns2}/>;</div>
};

export default Landscaping;
