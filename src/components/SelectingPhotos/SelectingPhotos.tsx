// SelectingPhotos.tsx
import React, { useEffect } from 'react';
import './SelectingPhotos.css';

const SelectingPhotos: React.FC = () => {
  // Set the document title safely in an effect
  useEffect(() => {
    document.title = 'Selecting Photos - Marie Anna Photography';
  }, []);

  return (
    <section className="selecting-photos">
      <h1 className="entry-title">Selecting Your Photos</h1>

      <div className="entry-content">
        <p>
          Roughly a week after your session, I will send you a secure link from my favorite
          online proofing website{' '}
          <a
            href="https://pixieset.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Pixieset proofing website"
          >
            pixieset.com
          </a>
          , which is both mobile-friendly and supports social sharing. When viewing on Pixieset,
          please keep in mind:
        </p>

        <ul>
          <li>
            For your security and copyright protection, each session requires a password, and
            all images are watermarked with “Marie Anna Photography”.
          </li>
          <li>These are just proofs, not fully retouched images.</li>
          <li>
            To select your photos, click “favorite” on your chosen images and Pixieset will
            automatically create a favorites folder.
          </li>
          <li>
            Please notify me once your folder is complete, as I do not receive automatic
            notifications from Pixieset.
          </li>
          <li>
            After your final selection and order, your proof album on Pixieset
            <strong>
              <span className="boldhighlight"> will be deleted.</span>
            </strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SelectingPhotos;
