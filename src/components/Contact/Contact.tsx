// Contact.tsx
import React, { useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  // Set page title safely inside a side effect
  useEffect(() => {
    document.title = 'Contact - Marie Anna Photography';
  }, []);

  return (
    <section className="contact-page">
      <h1 className="entry-title contact-title">Contact</h1>

      <div className="entry-content">
        <article className="contact-card">
          <h2>Marie Anna Bosker</h2>
          <p>
            <span className="role">Owner / Operator</span>
            <br />
            <strong>Marie Anna Photography</strong>
            <br />
            <a href="tel:+18035044253" aria-label="Call Marie Anna Photography">
              803-504-4253
            </a>
            <br />
            <a
              href="mailto:marie@marieannaphotography.com"
              aria-label="Email Marie Anna Photography"
            >
              marie@marieannaphotography.com
            </a>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Contact;
