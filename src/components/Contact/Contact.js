import React from 'react';
import './Contact.css';

export default function Contact () {
    document.title = 'Contact - Marie Anna Photography';
    return (
        <div>
            <h1 className="entry-title contact-title">Contact</h1>

            <div className="entry-content">
                <div className="contact-card">
                    <h2>Marie Anna Bosker</h2>
                    <p>
            owner/operator
                        <br /> Marie Anna Photography
                        <br /> 803-504-4253
                        <br />
                        <a href="mailto:marie@marieannaphotography.com">
              marie@marieannaphotography.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
