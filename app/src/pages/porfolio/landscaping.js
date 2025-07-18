import React, { useState } from 'react';
import './landscaping.css';

import img1 from './landImgs/1.jpg';
import img2 from './landImgs/2.jpg';
import img3 from './landImgs/3.jpg';
import img4 from './landImgs/4.jpg';
import img5 from './landImgs/5.jpg';
import img6 from './landImgs/6.jpg';
import img7 from './landImgs/7.jpg';
import img8 from './landImgs/8.jpg';
import img9 from './landImgs/9.jpg';
import img10 from './landImgs/10.jpg';
import img11 from './landImgs/11.jpg';

const Landscaping = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const [caption, setCaption] = useState('');

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
            img11,
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

    return (
        <div>
            <div className="header">
                <h1>Landscaping Gallery</h1>
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

            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={modalImg} alt={caption} onClick={(e) => e.stopPropagation()} />
                </div>
            )}

        </div>
    );
};

export default Landscaping;
