// GalleryRouter.tsx
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Gallery from '@/components/Gallery/Gallery';

const GalleryRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="children"
        element={<Gallery title="Children" name="children" />}
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
    </Routes>
  );
};

export default GalleryRouter;
