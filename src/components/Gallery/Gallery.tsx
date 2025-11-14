// Gallery.tsx
import { Fade, SlideshowRef } from 'react-slideshow-image';
import React, { useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Gallery.css';

import children from '../../data/children.json' with { type: 'json' };
import family from '../../data/family.json' with { type: 'json' };
import justforfun from '../../data/justforfun.json' with { type: 'json' };
import vintage_flair from '../../data/vintage_flair.json' with { type: 'json' };
import weddings from '../../data/weddings.json' with { type: 'json' };
import birthdays from '../../data/birthdays.json' with { type: 'json' };
import graduates from '../../data/seniors.json' with { type: 'json' };
import special from '../../data/special.json' with { type: 'json' };
import maternity from '../../data/maternity.json' with { type: 'json' };

interface GalleryProps {
  title: string;
  name:
    | 'children'
    | 'family'
    | 'justforfun'
    | 'vintage_flair'
    | 'weddings'
    | 'birthdays'
    | 'graduates'
    | 'special'
    | 'maternity';
}

const jsonData = {
  children,
  family,
  justforfun,
  vintage_flair,
  weddings,
  birthdays,
  graduates,
  special,
  maternity,
} as const;

const Gallery: React.FC<GalleryProps> = ({ title, name }) => {
  const slideRef = React.useRef<SlideshowRef | null>(null);
  const imageData = jsonData[name];

  // React-safe side effect for title
  useEffect(() => {
    document.title = `${title} - Marie Anna Photography`;
  }, [title]);

  // Slideshow config (react-slideshow-image)
  const properties = {
    duration: 4000,
    infinite: true,
    defaultIndex: 0,
    autoplay: true,
    pauseOnHover: false,
  };

  // Restart the slideshow when `name` changes
  useEffect(() => {
    if (slideRef.current && typeof slideRef.current.goTo === 'function') {
      slideRef.current.goTo(0);
    }
  }, [name]);

  return (
    <section className="gallery-page">
      <h1 className="entry-title">{title}</h1>
      <div className="slide-container">
        <Fade ref={slideRef} {...properties}>
          {imageData.map((image, index) => (
            <div className="each-fade" key={image.imageName}>
              <div
                className="slide-image"
                style={{ backgroundImage: `url(${image.imageName})` }}
              >
                <span className="slide-counter">
                  {index + 1} of {imageData.length}
                </span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default Gallery;
