// GalleryRouter.tsx
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import PhotoGallery from '@/components/PhotoGallery/PhotoGallery';
import childrenPhotos from '@/data/children';
import familyPhotos from '@/data/family';
import justForFunPhotos from '@/data/justforfun';
import maternityPhotos from '@/data/maternity';
import specialPhotos from '@/data/special';
import vintageFlairPhotos from '@/data/vintageFlair';
import weddingPhotos from '@/data/weddings';

const GalleryRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="children"
        element={
          <PhotoGallery
            title="Children"
            name="children"
            photos={childrenPhotos}
          />
        }
      />
      <Route
        path="family"
        element={
          <PhotoGallery title="Family" name="family" photos={familyPhotos} />
        }
      />
      <Route
        path="just-for-fun"
        element={
          <PhotoGallery
            title="Just For Fun"
            name="justforfun"
            photos={justForFunPhotos}
          />
        }
      />
      <Route
        path="vintage-flair"
        element={
          <PhotoGallery
            title="Vintage Flair"
            name="vintage-flair"
            photos={vintageFlairPhotos}
          />
        }
      />
      <Route
        path="weddings"
        element={
          <PhotoGallery
            title="Weddings"
            name="weddings"
            photos={weddingPhotos}
          />
        }
      />
      <Route
        path="maternity"
        element={
          <PhotoGallery
            title="Maternity"
            name="maternity"
            photos={maternityPhotos}
          />
        }
      />
      <Route
        path="special"
        element={
          <PhotoGallery
            title="Special Occasions"
            name="special"
            photos={specialPhotos}
          />
        }
      />
    </Routes>
  );
};

export default GalleryRouter;
