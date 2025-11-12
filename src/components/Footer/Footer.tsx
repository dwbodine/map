// Footer.tsx
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div id="footer">
          <p>
            &copy; 2007–{currentYear} Marie Anna Photography
            <br />
            <Link to="/contact" aria-label="Contact Marie Anna Photography">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
