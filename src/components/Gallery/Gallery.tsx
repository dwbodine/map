// Gallery.tsx
import { Fade, SlideshowRef } from 'react-slideshow-image';
import React, { useEffect, useRef } from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Gallery.css';

// Strong typing for gallery image objects
interface GalleryImage {
  imageName: string;
  [key: string]: unknown;
}

interface GalleryProps {
  title: string;
  name:
    | 'children'
    | 'family'
    | 'justforfun'
    | 'vintage_flair'
    | 'weddings'
    | 'birthdays'
    | 'graduates';
}

const jsonData: Record<GalleryProps['name'], GalleryImage[]> = {
  children: require('../../data/children.json'),
  family: require('../../data/family.json'),
  justforfun: require('../../data/justforfun.json'),
  vintage_flair: require('../../data/vintage_flair.json'),
  weddings: require('../../data/weddings.json'),
  birthdays: require('../../data/birthdays.json'),
  graduates: require('../../data/seniors.json'),
};

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
