import React, { useState } from 'react';
import './landscaping.css';
import GridGen from './gridGen';

import img0 from './landImgs/0.jpeg';
import img1 from './landImgs/1.jpg';
import img2 from './landImgs/2.jpeg';
import img3 from './landImgs/3.jpg';
import img4 from './landImgs/4.png';
import img5 from './landImgs/5.png';
import img6 from './landImgs/6.png';
import img7 from './landImgs/7.png';
import img8 from './landImgs/8.png';
import img9 from './landImgs/9.png';
import img10 from './landImgs/10.png';
import img11 from './landImgs/11.png';
import img12 from './landImgs/12.png';
import img13 from './landImgs/13.png';
import img14 from './landImgs/14.png';
import img15 from './landImgs/15.png';
import img16 from './landImgs/16.jpeg';
import img17 from './landImgs/17.jpeg';
import img18 from './landImgs/18.jpg';
import img19 from './landImgs/19.jpeg';
import img20 from './landImgs/20.jpeg';
import img21 from './landImgs/21.jpeg';
import img22 from './landImgs/22.jpeg';
import img23 from './landImgs/23.jpeg';
import img24 from './landImgs/24.jpeg';
import img25 from './landImgs/25.jpeg';
import img26 from './landImgs/26.jpeg';
import img27 from './landImgs/27.jpeg';
import img28 from './landImgs/28.jpeg';
import img29 from './landImgs/29.jpeg';
import img30 from './landImgs/30.jpeg';
import img31 from './landImgs/31.jpeg';
import img32 from './landImgs/32.jpeg';
import img33 from './landImgs/33.jpeg';
import img34 from './landImgs/34.jpeg';



const Landscaping = () => {

    const columns = [
        [img0, img1, img2, img3, img4, img5, img6, img7, img8, img34],         // 9 images
        [img9, img10, img11, img12, img13, img14, img15, img16, img17], // 9 images
        [img18, img19, img20, img21, img22, img23, img24, img25],       // 8 images
        [img26, img27, img28, img29, img30, img31, img32, img33] // 9 images
    ];




    return (
        <GridGen columns={columns} />
    );
};

export default Landscaping;
