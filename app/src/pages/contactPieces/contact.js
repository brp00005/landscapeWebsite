// src/pages/contactPieces/contact.js
import React, { useRef } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions'; // <--- Import these for Cloud Functions
import './contact.css';
import DetailsBar from './detailsBar'; // Assuming DetailsBar is still needed

// IMPORTANT: Ensure your Firebase app is initialized elsewhere, e.g., in src/firebase.js
// and passed to getFunctions(). A common pattern is:
// import { getApp } from 'firebase/app';
// const app = getApp(); // Gets the default Firebase app initialized in src/firebase.js
// const functions = getFunctions(app); // Initialize functions with your app instance

function Contact() {
    const form = useRef();

    const sendEmail = async (e) => { // Made this function asynchronous
        e.preventDefault();

        // Access the Firebase Functions instance
        // Assuming default app is initialized globally. If not, pass your app instance: getFunctions(yourFirebaseAppInstance)
        const functions = getFunctions();
        const sendContactEmailFunction = httpsCallable(functions, 'sendContactEmail'); // Get a callable reference to your Cloud Function

        // Extract form data
        const formData = new FormData(form.current);
        const dataToSend = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            // Add any other fields your EmailJS template expects
        };

        try {
            // Call the Cloud Function with the extracted data
            const result = await sendContactEmailFunction(dataToSend);

            // Check the response from the Cloud Function
            if (result.data.success) {
                alert('Message sent successfully!');
                form.current.reset(); // Clear the form on success
            } else {
                // The function returned success: false or an error message
                alert('Failed to send message: ' + (result.data.message || 'Unknown error.'));
            }
        } catch (error) {
            // Handle errors that occur during the Cloud Function call (e.g., network issues, function errors)
            console.error("Error calling Cloud Function:", error);
            // The 'details' field of HttpsError contains the message from the function
            alert('Failed to send message: ' + (error.message || 'Please check your internet connection and try again.'));
        }
    };

    return (
        <div>
            <DetailsBar />
            <form className="form-container" ref={form} onSubmit={sendEmail}>
                <div className='input'>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <textarea name="message" placeholder="Message and phone number" required />
                </div>
                <input type="submit" value="Submit" id="input-submit" />
            </form>
        </div>
    );
}

export default Contact;


/* import React, { useRef } from 'react';
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
                    alert(process.env.REACT_APP_PUBLIC_KEY);
                }
            );
    };

    return (
        <div>
            <DetailsBar />
            <form className="form-container" ref={form} onSubmit={sendEmail}>
                <div className='input'>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <textarea name="message" placeholder="Message and phone number" required />
                </div>
                <input type="submit" value="Submit" id="input-submit" />
            </form>
        </div>
    );
}

export default Contact; */