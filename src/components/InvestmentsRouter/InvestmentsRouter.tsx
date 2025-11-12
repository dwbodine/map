// InvestmentsRouter.tsx
import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

import Sessions from '../Sessions/Sessions';
import FineArt from '../FineArt/FineArt';
import SelectingPhotos from '../SelectingPhotos/SelectingPhotos';

const InvestmentsRouter: React.FC = () => {
  // useMatch provides a cleaner base for nested routes in v7
  const match = useMatch('/investments/*');
  const basePath = match?.pathnameBase || '/investments';

  return (
    <Routes>
      <Route path={`${basePath}/selecting-photos`} element={<SelectingPhotos />} />
      <Route path={`${basePath}/a-la-carte`} element={<FineArt />} />
      <Route path={`${basePath}/`} element={<Sessions />} />
    </Routes>
  );
};

export default InvestmentsRouter;
