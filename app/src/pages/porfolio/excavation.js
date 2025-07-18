import React, { useState } from 'react';
import './landscaping.css';

import GridGen from './gridGen';
import img1 from './excImgs/1.jpg';
import img2 from './excImgs/2.jpg';
import img3 from './excImgs/3.jpg';
import img4 from './excImgs/4.jpg';
import img5 from './excImgs/5.jpg';
import img6 from './excImgs/6.jpg';
import img7 from './excImgs/7.jpg';
import img8 from './excImgs/8.jpg';
import img9 from './excImgs/9.jpg';
import img10 from './excImgs/10.jpg';

const Excavation = () => {

    const columns = [
        [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
        ],
        [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNyqmPsZSWT7gSlMT2S3MAIKeIv6BNi8RVfUyJrt9Hz-j7cBA5w",
            "https://ae01.alicdn.com/kf/HTB1cZICPFXXXXcbXpXXq6xXFXXXc/Unframed-5-Pieces-The-Darkness-Sunset-Beach-Lighthouse-Lake-Michigan-HD-Top-Rated-Canvas-Print-Painting.jpg_640x640.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5DQzfrlUV4brRt5XZfLwy8AX4hVoYARbTDmYLiiZQ63gnoeHZQ",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ_I1QtL0NHp5nWVyXCnLznVFE4rGS_FOOYAAu0_Yczslp4vQ",
            "https://thumbs.dreamstime.com/b/empty-table-top-sunset-beach-blue-against-blurred-background-93335710.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86N5isuctltV2hAUAx4VL-99hz3Pg4t2DiDU7xrcCMK9lEebX",
        ],
        [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzSw40-GTIMURAAt-jQdIgun-sHRueJ8MWBg0Pp1ZZQJleTym",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5d5PoInsa_BDY2gSMJQdVQKiE8mFriyGnPKjR-AaLsIb4V9Tzw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkaw-lz56yOlK5ZDV5U3-cb-QJy4QjN6i6cJKLuMnx0CWX0xV5gg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYO44pYWILn5kRJzESsWSKsvKivTbnL5FnSXYty1u06ZTcDSRBw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHA2L2aOiMQVUJFqMHWPRlmG0taHfufaAaW7pBJI_-KY1CibaNww",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKoyjFzhIR0o4KKUZvaXOc4ucJvx3fYEBTZx1OKIuZaHDLoHV",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIOn2pL6QU4ScGaqBbw_o-_k4troQOLp2TswdZEMIXX986q1s",
        ],
        [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkphkF0LB1lCscT-W4CSWakm4oTj_LbsHax_HMNg9P9eZ6EU54yA",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrabHGjP-cuyjPRd2aWdpyJi97KnezY2SH9TThRPS3V9WMn2XOKg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3g3oNXnTLBIJ73ETsGfy9KRkJIWQGUYZBZ3TWEsMIqZm8Wsk46A",
            "http://architectureimg.com/wp-content/uploads/2016/06/bridges-ocean-bridge-sunset-beach-wallpaper-wide-1920x1080.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8e58jE2NV-S3b2a8vksszUanPGu9KVuX1vqaqa2_qn1PemplR",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUlMmE0ysfjmTndj0cFVGXO7VxzCis7V3X_Bb0kgo9-zF7f4X",
        ],
    ];
    return (
        <GridGen columns={columns} title = {"Excavation Work"}/>
    );
};

export default Excavation;
