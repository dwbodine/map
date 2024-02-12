import React from 'react';
import './Footer.css';

export default function Footer () {
    const year = new Date().getFullYear();
    return (
        <div className="footer_container">
            <div className="footer_wrapper">
                <div id="footer">
          Copyright &copy; {year} Marie Anna Photography
                    <br />
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </div>
    );
}
