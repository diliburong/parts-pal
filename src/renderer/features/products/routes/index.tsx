import { Route, Routes } from 'react-router-dom';

import { ProductsList } from './ProductsList';

export const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<ProductsList />} />
    </Routes>
  );
};
