//https://github.com/allenarduino/react-contact-form/blob/master/src/components/DetailsBar.js
//https://w3collective.com/react-contact-form/


import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import './detailsBar.css'

const DetailsBar = () => {
    return (
        <div className="DetailsBarWrapper">

            <p className='TextOne'>Contact Us</p>
            <h4 className='TextOne'>
                Fill up the form and we'll follow up within 24 hours. Estimates are free. Feel free to directly email or call us.
            </h4>

            <div>
                {/* TODO: rip and move all to bottom bar */}
                {/* Office */}
                <a href="Office: 304-581-3885" className="ContactsWrapper">
                    <Icon.Phone size={30} color="#088a36ff" />
                    <div className="ContactText"> 304-581-3885</div>
                </a>

                {/* Cell */}
                <a href="Cell: 856-373-3455" className="ContactsWrapper">
                    <Icon.Phone size={30} color="rgba(8, 138, 54)" />
                    <div className="ContactText"> 856-373-3455</div>
                </a>

                <a href="mailto:allprolandscaping1@hotmail.com" className="ContactsWrapper">
                    <Icon.Mail size={31} color="rgb(8, 138, 54)" />
                    <div className="ContactText"> allprolandscaping1@hotmail.com</div>
                </a>

                <div className="ContactsWrapper">
                    <Icon.MapPin size={31} color="rgb(8, 138, 54)" />
                    <span className="ContactText">Fill in address</span>
                </div>
            </div>

        </div>
    );
};


export default DetailsBar;