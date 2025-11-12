// FineArt.tsx
import React, { useEffect } from 'react';

const FineArt: React.FC = () => {
  // Set page title using a side effect (React 18+/19 best practice)
  useEffect(() => {
    document.title = 'Fine Art Prints - Marie Anna Photography';
  }, []);

  return (
    <section className="fineart-page">
      <h1 className="entry-title">A-la-carte Menu</h1>

      <div className="entry-content">
        <p>Current product options:</p>
        <ul>
          <li>Reproduction rights (most popular item!)</li>
          <li>Mounting available for most prints</li>
          <li>Canvas prints</li>
          <li>Gallery wraps (stretched over a wooden frame)</li>
          <li>Metal prints</li>
          <li>Boutique cards</li>
          <li>High-quality photo albums</li>
          <li>Image cubes</li>
          <li>Personalized USB thumb drives</li>
          <li>Image folios</li>
          <li>Ornaments</li>
        </ul>
        <p>
          For more information, please contact Marie at{' '}
          <a
            href="mailto:marie@marieannaphotography.com"
            aria-label="Email Marie Anna Photography"
          >
            marie@marieannaphotography.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FineArt;
