import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from 'features';
import { AppHolder } from 'components/AppHolder';
import { Loader } from 'components/Loader';

export const PrivateRoutes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, [user, navigate]);

  return (
    <AppHolder header leftHolder>
      <Suspense fallback={<Loader center />}>
        <Outlet />
      </Suspense>
    </AppHolder>
  );
};
