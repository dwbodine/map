// GalleryRouter.tsx
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import PhotoGallery from '@/components/PhotoGallery/PhotoGallery';
import childrenPhotos from '@/data/children';
import familyPhotos from '@/data/family';
import graduatePhotos from '@/data/graduates';
import justForFunPhotos from '@/data/justforfun';
import maternityPhotos from '@/data/maternity';
import vintageFlairPhotos from '@/data/vintageFlair';
import SpecialOccasionGallery from '../PhotoGallery/SpecialOccasionGallery';
import engagementPhotos from '@/data/engagements';

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
          <SpecialOccasionGallery
            graduatePhotos={graduatePhotos}
            graduateDescription="Whether you are graduating from nursing school or high school, your graduating portraits should reflect your personality, style, and individuality! We'll customize your session to bring vision to your life."
            vintagePhotos={vintageFlairPhotos}
            vintageDescription="From a glamorous pinup experience to the dramatic, moody feel of film noir, I love creating portraits that are unique, expressive and truly you."
            engagementPhotos={engagementPhotos}
            engagementDescription="Celebrate your love with timeless engagement photos filled with personality, connection, and vintage charm. Every package is different, so we can create an experience tailored to your vision, style, and story."
          />
        }
      />
    </Routes>
  );
};

export default GalleryRouter;
