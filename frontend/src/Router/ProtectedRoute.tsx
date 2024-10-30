import { ReactElement, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'features';
import { AppHolder } from 'layouts';
import { Loader } from 'components';

import { APP_ROUTES, EPermissions } from './router.config';

interface IProtectedRoutesProps {
  children: ReactElement;
  permissions: Array<EPermissions>;
}

export const ProtectedRoute = ({ children, permissions }: IProtectedRoutesProps): ReactElement | null => {
  const { user, isLoading } = useAuth();
  const isAuthorized = !!user?.token;

  if (isLoading) {
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
      (!permissions.includes(EPermissions.AUTH_ADMIN) && user?.role !== 'admin') ||
      (!permissions.includes(EPermissions.AUTH_FORWARDER) && user?.role !== 'forwarder') ||
      (!permissions.includes(EPermissions.AUTH_DRIVER) && user?.role !== 'driver') ||
      (!permissions.includes(EPermissions.AUTH_OWNER) && user?.role !== 'owner')
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