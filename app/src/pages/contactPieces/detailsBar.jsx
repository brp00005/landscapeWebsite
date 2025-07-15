//https://github.com/allenarduino/react-contact-form/blob/master/src/components/DetailsBar.js
//https://w3collective.com/react-contact-form/


import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import './detailsBar.css'

const DetailsBar = () => {
    return (
        <div className="DetailsBarWrapper">
            <div className="TextWrapper">
                <p className="TextOne">Contact Us</p>
                <p className="TextTwo">
                    Fill up the form and we'll follow up within ____ hours
                </p>
                <p className="TextTwo">
                    Do you have any questions or comments? Just write us a message. Estimates are free.
                </p>

            </div>

            <div>
                {/* TODO: rip and move all to bottom bar */}
                {/* Office */}
                <a href="Office: 304-581-3885" className="ContactsWrapper">
                    <Icon.Phone size={30} color="rgb(252, 113, 137)" />
                    <div className="ContactText">304-581-3885</div>
                </a>

                {/* Cell */}
                <a href="Cell: 856-373-3455" className="ContactsWrapper">
                    <Icon.Phone size={30} color="rgb(252, 113, 137)" />
                    <div className="ContactText">856-373-3455</div>
                </a>

                <a href="mailto:allprolandscaping1@hotmail.com" className="ContactsWrapper">
                    <Icon.Mail size={30} color="rgb(252, 113, 137)" />
                    <div className="ContactText">allprolandscaping1@hotmail.com</div>
                </a>
            </div>

            <div>
                logo here
            </div>
        </div>
    );
};


export default DetailsBar;