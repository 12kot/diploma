import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { APP_ROUTES } from 'routes';
import { EUserRole, useAuth } from 'features';

interface RequireRoleProps {
  allowedRoles: EUserRole[];
  children: ReactNode;
}

export const RequireRole = ({ allowedRoles, children }: RequireRoleProps) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={APP_ROUTES.AUTH.LOGIN.path} state={{ from: location }} replace />;
  }

  const hasRole = allowedRoles.find((role) => user.role === role);

  if (!hasRole) {
    return <Navigate to="/404" replace />;
  }

  return children;
};
