import { ReactElement, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { EUserRole, useAuth } from 'features';
import { AppHolder } from 'layouts';
import { Loader } from 'components';

import { APP_ROUTES, EPermissions } from './router.config';

interface IProtectedRoutesProps {
  children: ReactElement;
  permissions: Array<EPermissions>;
}

export const ProtectedRoute = ({ children, permissions }: IProtectedRoutesProps): ReactElement | null => {
  const { user, miniUser, isLoading } = useAuth();
  const isAuthorized = !!miniUser?.token;

  if (isLoading || (miniUser?.token && !user?.role)) {
    return <Loader center />;
  }

  if (!isAuthorized && permissions.includes(EPermissions.AUTH_REQUIRED)) {
    return <Navigate to={APP_ROUTES.LOGIN} />;
  }

  if (isAuthorized && !permissions.includes(EPermissions.AUTH_NOT_REQUIRED)) {
    if (permissions.includes(EPermissions.AUTH_LOGIN)) {
      return <Navigate to={APP_ROUTES.DASHBOARD} />;
    }

    if (
      !(permissions.includes(EPermissions.AUTH_ADMIN) && user?.role === EUserRole.Admin) &&
      !(permissions.includes(EPermissions.AUTH_FORWARDER) && user?.role === EUserRole.Forwarder) &&
      !(permissions.includes(EPermissions.AUTH_DRIVER) && user?.role === EUserRole.Driver) &&
      !(permissions.includes(EPermissions.AUTH_OWNER) && user?.role === EUserRole.Owner)
    ) {
      return <Navigate to={APP_ROUTES.NOT_FOUND} />;
    }
  }

  return (
    <AppHolder header leftHolder={isAuthorized && permissions.includes(EPermissions.AUTH_REQUIRED)}>
      <Suspense fallback={<Loader center />}>{children}</Suspense>
    </AppHolder>
  );
};
