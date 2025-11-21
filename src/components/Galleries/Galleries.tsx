// Galleries.tsx
import React, { useEffect } from 'react';
import './Galleries.css';

const Galleries: React.FC = () => {
  useEffect(() => {
    document.title = 'Galleries - Marie Anna Photography';
  }, []);

  return (
    <section className="gallery-section">
      <h1 className="entry-title">Galleries</h1>

      <div className="gallery-content">
        <div className="gallery-card">
          <a href="/gallery/children">
            <img src="/img/children.jpg" alt="Children" />
          </a>
          <h3>Children</h3>
        </div>
        <div className="gallery-card">
          <a href="/gallery/family">
            <img src="/img/family.jpg" alt="Family" />
          </a>
          <h3>Family</h3>
        </div>
        <div className="gallery-card">
          <a href="/gallery/maternity">
            <img src="/img/maternity.jpg" alt="Maternity" />
          </a>
          <h3>Maternity</h3>
        </div>
        <div className="gallery-card">
          <a href="/gallery/special">
            <img src="/img/special.jpg" alt="Special Occasions" />
          </a>
          <h3>Special Occasions</h3>
        </div>
      </div>
    </section>
  );
};

export default Galleries;
