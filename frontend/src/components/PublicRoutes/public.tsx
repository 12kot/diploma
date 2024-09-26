import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/hooks/useAuth';
import { useEffect } from 'react';
import { AppHolder } from 'components/AppHolder';

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
