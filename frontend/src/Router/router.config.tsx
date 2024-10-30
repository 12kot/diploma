import { ReactElement } from 'react';

import { LoginLazy, NotFoundLazy, RecoveryLazy, RegistrationLazy } from 'pages';

export enum EPermissions {
  AUTH_NOT_REQUIRED = "no_auth",

  AUTH_LOGIN = "auth_login",
  AUTH_REQUIRED = "auth",

  AUTH_ADMIN = "auth_admin",
  AUTH_OWNER = "auth_owner",
  AUTH_DRIVER = "auth_driver",
  AUTH_FORWARDER = "auth_forwarder",
}

export enum APP_ROUTES {
  HOME = '/',
  ABOUT_US = '/about',
  PRIVACY = '/privacy',

  LOGIN = '/login',
  REGISTRATION = '/registration',
  RECOVERY = '/recovery',
  NOT_FOUND = '/404',

  DASHBOARD = '/dashboard',
  FORWARDERS = '/dashboard/users/forwarder',
  DRIVERS = '/dashboard/users/driver',
  OWNERS = '/dashboard/users/owner',
  PROFILE = '/dashboard/profile',
  SETTINGS = '/dashboard/settings',
  APPLICATIONS = '/dashboard/applications',
  ORDERS = '/dashboard/orders',
  CREATE_ORDER = '/dashboard/order/create',
}

export interface IRoute {
  element: ReactElement;
  permissions: EPermissions[];
}

export interface INestedRoute {
  element: ReactElement;
}

export type TRoutes = Record<string, IRoute>;

export const routes: TRoutes = {
  [APP_ROUTES.HOME]: {
    element: <></>,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
  [APP_ROUTES.ABOUT_US]: {
    element: <></>,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
  [APP_ROUTES.PRIVACY]: {
    element: <></>,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
  [APP_ROUTES.LOGIN]: {
    element: <LoginLazy />,
    permissions: [EPermissions.AUTH_LOGIN],
  },
  [APP_ROUTES.REGISTRATION]: {
    element: <RegistrationLazy />,
    permissions: [EPermissions.AUTH_LOGIN],
  },
  [APP_ROUTES.RECOVERY]: {
    element: <RecoveryLazy />,
    permissions: [EPermissions.AUTH_LOGIN],
  },
  [APP_ROUTES.DASHBOARD]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER, EPermissions.AUTH_DRIVER, EPermissions.AUTH_OWNER],
  },
  [APP_ROUTES.FORWARDERS]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED],
  },
  [APP_ROUTES.DRIVERS]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER],
  },
  [APP_ROUTES.OWNERS]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER],
  },
  [APP_ROUTES.PROFILE]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER, EPermissions.AUTH_DRIVER, EPermissions.AUTH_OWNER],
  },
  [APP_ROUTES.SETTINGS]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER, EPermissions.AUTH_DRIVER, EPermissions.AUTH_OWNER],
  },
  [APP_ROUTES.APPLICATIONS]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED],
  },
  [APP_ROUTES.ORDERS]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER, EPermissions.AUTH_DRIVER, EPermissions.AUTH_OWNER],
  },
  [APP_ROUTES.CREATE_ORDER]: {
    element: <></>,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_OWNER],
  },
 
  [APP_ROUTES.NOT_FOUND]: {
    element: <NotFoundLazy />,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
};
