//https://hackernoon.com/integrating-a-contact-form-with-emailjs-in-react

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import DetailsBar from './detailsBar';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                () => alert('Message sent!'),
                (error) => {
                    alert('Failed to send message');
                }
            );
    };

    return (

        <div>
            <DetailsBar />
            <form className="form-container" ref={form} onSubmit={sendEmail}>
                <div className='input'>
                    <input type="text" name="user_name" placeholder="Name" required />
                    <input type="email" name="user_email" placeholder="Email & phone number" required />
                </div>
                <div>
                    <textarea name="message" placeholder="Message" required />
                </div>
                <input type="submit" value="Submit" id="input-submit" />
            </form>
        </div>
    );
}

export default Contact;
