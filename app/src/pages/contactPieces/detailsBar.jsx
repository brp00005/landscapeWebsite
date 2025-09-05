import React from 'react';
import * as Icon from 'react-feather';
import './detailsBar.css';

const DetailsBar = () => {
    return (
        <div className="DetailsBarWrapper">
            {<div className='TextWrapper'>
                {/* <p className='TextOne'>Contact Us</p> */}
                <p className='TextOne'>
                    Fill up the form and we'll follow up within 24 hours. 
                    Estimates are free. Feel free to directly email or call us.
                </p>
            </div>}

            <div className="ContactLinksContainer">
                
                <a href="tel:+1-304-581-3885" className="ContactsWrapper">
                    <Icon.Phone size={25} color="#088a36" />
                    <div className="ContactText"> Office: 304-581-3885</div>
                </a>

                <a href="tel:+1-856-373-3455" className="ContactsWrapper">
                    <Icon.Phone size={25} color="#088a36" />
                    <div className="ContactText"> Cell: 856-373-3455</div>
                </a>

                <a href="tel:+1-304-777-9672" className="ContactsWrapper">
                    <Icon.Phone size={25} color="#088a36" />
                    <div className="ContactText"> Luke: 304-777-9672</div>
                </a>
                <a href="mailto:allprolandscaping1@hotmail.com" className="ContactsWrapper">
                    <Icon.Mail size={25} color="#088a36" />
                    <div className="ContactText"> allprolandscaping1@hotmail.com</div>
                </a>

            </div>
        </div>
    );
};

export default DetailsBar;