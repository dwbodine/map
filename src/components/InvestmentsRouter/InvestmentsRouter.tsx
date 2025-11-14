// InvestmentsRouter.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sessions from '@/components/Sessions/Sessions';
import FineArt from '@/components/FineArt/FineArt';
import SelectingPhotos from '@/components/SelectingPhotos/SelectingPhotos';

const InvestmentsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="sessions" element={<Sessions />} />
      <Route path="selecting-photos" element={<SelectingPhotos />} />
      <Route path="a-la-carte" element={<FineArt />} />
    </Routes>
  );
};

export default InvestmentsRouter;
