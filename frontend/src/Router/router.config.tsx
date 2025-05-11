import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AddressLazy, CargoLazy, DeliveryLazy, HomeLazy, Login, NotFoundLazy, OrdersLazy, ProfileLazy } from 'pages';

export enum EPermissions {
  AUTH_NOT_REQUIRED = 'no_auth',

  AUTH_LOGIN = 'auth_login',
  AUTH_REQUIRED = 'auth',

  AUTH_ADMIN = 'auth_admin',
  AUTH_OWNER = 'auth_owner',
  AUTH_DRIVER = 'auth_driver',
  AUTH_FORWARDER = 'auth_forwarder',
}

export enum APP_ROUTES {
  HOME = '/',
  ABOUT_US = '/about',
  PRIVACY = '/privacy',

  LOGIN = '/login',
  NOT_FOUND = '/404',

  DASHBOARD = '/dashboard',
  ADDRESSES = '/dashboard/addresses',
  CARGO = '/dashboard/cargo',
  PROFILE = '/dashboard/profile',
  ORDERS = '/dashboard/orders',
  DELIVERY = '/dashboard/delivery',
  ALL = '*',
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
    element: <HomeLazy />,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
  [APP_ROUTES.LOGIN]: {
    element: <Login />,
    permissions: [EPermissions.AUTH_LOGIN],
  },
  [APP_ROUTES.DASHBOARD]: {
    element: <ProfileLazy />,
    permissions: [
      EPermissions.AUTH_REQUIRED,
      EPermissions.AUTH_ADMIN,
      EPermissions.AUTH_FORWARDER,
      EPermissions.AUTH_DRIVER,
      EPermissions.AUTH_OWNER,
    ],
  },
  [APP_ROUTES.ADDRESSES]: {
    element: <AddressLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER],
  },
  [APP_ROUTES.CARGO]: {
    element: <CargoLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_OWNER],
  },
  [APP_ROUTES.DELIVERY]: {
    element: <DeliveryLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER],
  },
  [APP_ROUTES.PROFILE]: {
    element: <ProfileLazy />,
    permissions: [
      EPermissions.AUTH_REQUIRED,
      EPermissions.AUTH_ADMIN,
      EPermissions.AUTH_FORWARDER,
      EPermissions.AUTH_DRIVER,
      EPermissions.AUTH_OWNER,
    ],
  },
  [APP_ROUTES.ORDERS]: {
    element: <OrdersLazy />,
    permissions: [
      EPermissions.AUTH_REQUIRED,
      EPermissions.AUTH_ADMIN,
      EPermissions.AUTH_FORWARDER,
      EPermissions.AUTH_DRIVER,
      EPermissions.AUTH_OWNER,
    ],
  },

  [APP_ROUTES.NOT_FOUND]: {
    element: <NotFoundLazy />,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
  [APP_ROUTES.ALL]: {
    element: <Navigate to={APP_ROUTES.NOT_FOUND} />,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
};
