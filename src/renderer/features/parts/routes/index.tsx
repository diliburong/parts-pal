import { Route, Routes } from 'react-router-dom';

import { PartsList } from './PartsList';

export const PartsRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<PartsList />} />
    </Routes>
  );
};
