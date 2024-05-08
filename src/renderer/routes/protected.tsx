import { Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/utils';

const { PartsRoutes } = lazyImport(() => import('@/features/parts'), 'PartsRoutes');
const { ProductsRoutes } = lazyImport(() => import('@/features/products'), 'ProductsRoutes');

const App = () => {
  return (
    <MainLayout>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/test',
        element: <div>test</div>,
      },
      {
        path: '/parts',
        element: <PartsRoutes />,
      },
      {
        path: '/products',
        element: <ProductsRoutes />,
      },
    ],
  },
];
