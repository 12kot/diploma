import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from 'features/hooks/useAuth';
import { AppHolder } from 'components/AppHolder';

export const PrivateRoutes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, [user, navigate]);

  return (
    <AppHolder header>
      <Outlet />
    </AppHolder>
  );
};
