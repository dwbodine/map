import { ClickHandlerProps, Photo, RowsPhotoAlbum } from 'react-photo-album';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Lightbox from 'yet-another-react-lightbox';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { useState } from 'react';

import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface GalleryProps {
  title: string;
  name: string;
  photos: Photo[];
}

export default function PhotoGallery(props: GalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery-section">
      <a className="gallery-back" href="/galleries">
        &lt; Back
      </a>

      <h1 className="entry-title">{props.title}</h1>

      <RowsPhotoAlbum
        photos={props.photos}
        targetRowHeight={150}
        onClick={(e: ClickHandlerProps<Photo>) => setIndex(e.index)}
      />

      <Lightbox
        slides={props.photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </section>
  );
}
