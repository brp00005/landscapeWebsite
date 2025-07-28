import React from 'react';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bar">
      <p>&copy; {currentYear} All Pro Landscaping, WV. All rights reserved.</p>
    </footer>
  );
}

export default Footer;