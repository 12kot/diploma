import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppHolder } from 'layouts';
import { useAuth } from 'features';
import { Loader } from 'components';
import { APP_ROUTES } from 'routes';

export const PublicRoutes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(APP_ROUTES.DASHBOARD.INDEX.path);
  }, [user, navigate]);

  return (
    <AppHolder header>
      <Suspense fallback={<Loader center />}>
        <Outlet />
      </Suspense>
    </AppHolder>
  );
};
