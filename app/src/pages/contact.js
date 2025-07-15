import React from 'react';
import './contactPieces/contact.css';

function FormPage() {
  return (
    <div className="form-container">
      <h1>Contact</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default FormPage;
