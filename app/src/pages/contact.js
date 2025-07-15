/* // pages/contact.js
//formspree apparently can work without backend
//https://dev.to/allenarduino/creating-a-fully-functional-contact-form-with-react-and-formspree-api-2ecp



import React from 'react';
import styled from 'styled-components';
import DetailsBar from './contactPieces/detailsBar';

import './contactPieces/contact.css';



const FormPage = () => {
  return (
    <div className='PageWrapper'>
      
      <div className='FormContainer'>
        <div className='DetailsBar'>
            <DetailsBar/>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

 */

import React, { useState } from "react";

const FormPage = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="Service/Category">Service/Category:</label>
        <input type="text" id="cat" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default FormPage;