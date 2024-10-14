import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components';
import { AppHolder } from 'layouts';

export const PrivateRoutes = () => {
  return (
    <AppHolder header leftHolder>
      <Suspense fallback={<Loader center />}>
        <Outlet />
      </Suspense>
    </AppHolder>
  );
};
