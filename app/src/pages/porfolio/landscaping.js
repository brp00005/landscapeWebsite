import React, { useState } from 'react';
import './landscaping.css';

const Landscaping = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const [caption, setCaption] = useState('');

    const columns = [
        [
            "https://www.rxwallpaper.site/wp-content/uploads/free-beach-sunset-wallpapers-desktop-long-wallpapers-4-800x800.jpg",
            "https://i.pinimg.com/originals/00/0f/85/000f8537c14a1d9e350ebdd30951fc27.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaBCwXKGCW9Ub7Lr-RmAoF2wJpr5NBk5Wb2npRiFaz4wIEQMsUA",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9NQ1BncFIDNjxnTFOWdaPyLdGG5-a77zKUEGzhvO0m327KB3Fhg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58-24YV35w71NtvCRg1IVJobasdldAPhkhcgHxgTjq50F9goprw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJ1UiOaq_MNStMdHpBEaHTs2YAKxTbQ0CIdDMj9Hsuegus6_p",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IUI0AsuowTP08NlMxbGkvPtQnjP81G9JIBxK2pvI0Eq5oMGC",
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
                <div>
                    <span className="close" onClick={closeModal}></span>
                    <img className="modal-content" src={modalImg}/>
                </div>

            )}
        </div>
    );
};

export default Landscaping;
