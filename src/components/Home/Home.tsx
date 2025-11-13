import React, { useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Home - Marie Anna Photography';
  }, []);

  const autoSize = (): number | undefined => {
    return undefined; // placeholder for future responsive logic if needed
  };

  return (
    <section className="entry-content">
      <figure className="aligncenter">
        <img
          src="img/cover.jpg"
          alt="Cover - Marie Anna Photography"
          srcSet="img/cover.jpg 800w, img/cover-300.jpg 300w"
          sizes="(max-width: 800px) 100vw, 800px"
          loading="lazy"
          width={800}
          height={autoSize()}
        />
      </figure>
    </section>
  );
};

export default Home;
