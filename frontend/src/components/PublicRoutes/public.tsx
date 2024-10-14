import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppHolder } from 'layouts';
import { useAuth } from 'features';

export const PublicRoutes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    //какая-то логика
  }, [user, navigate]);

  return (
    <AppHolder header>
      <Outlet />
    </AppHolder>
  );
};
