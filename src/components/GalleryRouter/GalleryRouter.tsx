// GalleryRouter.tsx
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Gallery from '@/components/Gallery/Gallery';
import NewGallery from '@/components/NewGallery/NewGallery';
import childrenPhotos from '@/data/children';

const GalleryRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="children"
        element={<NewGallery title="Children" name="children" photos={childrenPhotos} />}
      />
      <Route path="family" element={<Gallery title="Family" name="family" />} />
      <Route
        path="just-for-fun"
        element={<Gallery title="Just For Fun" name="justforfun" />}
      />
      <Route
        path="vintage_flair"
        element={<Gallery title="Vintage Flair" name="vintage_flair" />}
      />
      <Route
        path="weddings"
        element={<Gallery title="Weddings" name="weddings" />}
      />
      <Route
        path="graduates"
        element={<Gallery title="Graduate Portraits" name="graduates" />}
      />
      <Route
        path="maternity"
        element={<Gallery title="Maternity" name="maternity" />}
      />
      <Route
        path="special"
        element={<Gallery title="Special Occasions" name="special" />}
      />
    </Routes>
  );
};

export default GalleryRouter;
