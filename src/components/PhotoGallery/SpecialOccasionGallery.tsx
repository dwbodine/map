import { ClickHandlerProps, Photo, RowsPhotoAlbum } from 'react-photo-album';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Lightbox from 'yet-another-react-lightbox';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { useState } from 'react';

import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface SpecialOccasionGalleryProps {
  graduatePhotos?: Photo[];
  graduateDescription?: string;
  vintagePhotos?: Photo[];
  vintageDescription?: string;
  engagementPhotos?: Photo[];
  engagementDescription?: string;
}

export default function SpecialOccasionGallery(
  props: SpecialOccasionGalleryProps
) {
  const [graduateIndex, setGraduateIndex] = useState(-1);
  const [vintageIndex, setVintageIndex] = useState(-1);
  const [engagementIndex, setEngagementIndex] = useState(-1);

  return (
    <section className="gallery-section">
      <a className="gallery-back" href="/galleries">
        &lt; Back
      </a>

      <h1 className="entry-title">Special Occasions</h1>

      {(props.graduatePhotos?.length ?? 0) > 0 && (
        <section className="gallery-subsection">
          <h3>Graduates</h3>

          {props.graduateDescription && (
            <div className="gallery-description">
              {props.graduateDescription}
            </div>
          )}

          <RowsPhotoAlbum
            photos={props.graduatePhotos ?? []}
            targetRowHeight={150}
            onClick={(e: ClickHandlerProps<Photo>) => setGraduateIndex(e.index)}
          />

          <Lightbox
            slides={props.graduatePhotos ?? []}
            open={graduateIndex >= 0}
            index={graduateIndex}
            close={() => setGraduateIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails]}
          />
        </section>
      )}

      {(props.vintagePhotos?.length ?? 0) > 0 && (
        <section className="gallery-subsection">
          <h3>Vintage Flair</h3>
          {props.vintageDescription && (
            <div className="gallery-description">
              {props.vintageDescription}
            </div>
          )}

          <RowsPhotoAlbum
            photos={props.vintagePhotos ?? []}
            targetRowHeight={150}
            onClick={(e: ClickHandlerProps<Photo>) => setVintageIndex(e.index)}
          />

          <Lightbox
            slides={props.vintagePhotos ?? []}
            open={vintageIndex >= 0}
            index={vintageIndex}
            close={() => setVintageIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails]}
          />
        </section>
      )}

      {(props.vintagePhotos?.length ?? 0) > 0 && (
        <section className="gallery-subsection">
          <h3>Engagements</h3>
          {props.engagementDescription && (
            <div className="gallery-description">
              {props.engagementDescription}
            </div>
          )}

          <RowsPhotoAlbum
            photos={props.engagementPhotos ?? []}
            targetRowHeight={150}
            onClick={(e: ClickHandlerProps<Photo>) => setEngagementIndex(e.index)}
          />

          <Lightbox
            slides={props.engagementPhotos ?? []}
            open={engagementIndex >= 0}
            index={engagementIndex}
            close={() => setEngagementIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails]}
          />
        </section>
      )}
    </section>
  );
}
