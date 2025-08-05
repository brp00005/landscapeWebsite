import React from 'react';
import './footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const location = useLocation();
  const slideshowPath = '/slideshow';

  //equality check
  const isSlideshowPage = location.pathname === slideshowPath;
  //tern statement, based on is if slideshow
  const footerClassName = `footer-bar ${isSlideshowPage ? '' : 'non-floating-mobile'}`;

  return (
    <div className={footerClassName}>
      <p>&copy; {currentYear} All Pro Landscaping, WV. All rights reserved.</p>
    </div>
  );
}

export default Footer;