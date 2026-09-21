// Investments.tsx
import { FaCameraRetro, FaPhotoVideo, FaBookOpen } from 'react-icons/fa';
import React, { useEffect } from 'react';
import './Investments.css';

const Investments: React.FC = () => {
  useEffect(() => {
    document.title = 'Investments - Marie Anna Photography';
  }, []);

  return (
    <section className="investments-section">
      <h1 className="entry-title">Investments</h1>

      <div className="investment-content">
        <div className="investment-card">
          <a href="/investment/sessions">
            <FaCameraRetro size={64} />
          </a>
          <h3>Sessions</h3>
        </div>
        <div className="investment-card">
          <a href="/investment/selecting-photos">
            <FaPhotoVideo size={64} />
          </a>
          <h3>Selecting Photos</h3>
        </div>
        <div className="investment-card">
          <a href="/investment/a-la-carte">
            <FaBookOpen size={64} />
          </a>
          <h3>À la carte</h3>
        </div>
      </div>
    </section>
  );
};

export default Investments;
