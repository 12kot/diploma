import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import {
  AddressLazy,
  ApplicationsLazy,
  CargoLazy,
  CreateOrderLazy,
  DashboardLazy,
  HomeLazy,
  Login,
  NotFoundLazy,
  OrdersLazy,
  ProfileLazy,
  Recovery,
  Registration,
  SettingsLazy,
  UsersLazy,
} from 'pages';

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
  REGISTRATION = '/registration',
  RECOVERY = '/recovery',
  NOT_FOUND = '/404',

  DASHBOARD = '/dashboard',
  ADDRESSES = '/dashboard/addresses',
  CARGO = '/dashboard/cargo',
  FORWARDERS = '/dashboard/users/forwarder',
  DRIVERS = '/dashboard/users/driver',
  OWNERS = '/dashboard/users/owner',
  PROFILE = '/dashboard/profile',
  SETTINGS = '/dashboard/settings',
  APPLICATIONS = '/dashboard/applications',
  ORDERS = '/dashboard/orders',
  CREATE_ORDER = '/dashboard/order/create',
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
  [APP_ROUTES.ABOUT_US]: {
    element: <>About</>,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
  [APP_ROUTES.PRIVACY]: {
    element: <>Privacy</>,
    permissions: [EPermissions.AUTH_NOT_REQUIRED],
  },
  [APP_ROUTES.LOGIN]: {
    element: <Login />,
    permissions: [EPermissions.AUTH_LOGIN],
  },
  [APP_ROUTES.REGISTRATION]: {
    element: <Registration />,
    permissions: [EPermissions.AUTH_LOGIN],
  },
  [APP_ROUTES.RECOVERY]: {
    element: <Recovery />,
    permissions: [EPermissions.AUTH_LOGIN],
  },
  [APP_ROUTES.DASHBOARD]: {
    element: <DashboardLazy />,
    permissions: [
      EPermissions.AUTH_REQUIRED,
      EPermissions.AUTH_ADMIN,
      EPermissions.AUTH_FORWARDER,
      EPermissions.AUTH_DRIVER,
      EPermissions.AUTH_OWNER,
    ],
  },
  [APP_ROUTES.FORWARDERS]: {
    element: <UsersLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN],
  },
  [APP_ROUTES.DRIVERS]: {
    element: <UsersLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER],
  },
  [APP_ROUTES.OWNERS]: {
    element: <UsersLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER],
  },
  [APP_ROUTES.ADDRESSES]: {
    element: <AddressLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_FORWARDER],
  },
  [APP_ROUTES.CARGO]: {
    element: <CargoLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN, EPermissions.AUTH_OWNER],
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
  [APP_ROUTES.SETTINGS]: {
    element: <SettingsLazy />,
    permissions: [
      EPermissions.AUTH_REQUIRED,
      EPermissions.AUTH_ADMIN,
      EPermissions.AUTH_FORWARDER,
      EPermissions.AUTH_DRIVER,
      EPermissions.AUTH_OWNER,
    ],
  },
  [APP_ROUTES.APPLICATIONS]: {
    element: <ApplicationsLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_ADMIN],
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
  [APP_ROUTES.CREATE_ORDER]: {
    element: <CreateOrderLazy />,
    permissions: [EPermissions.AUTH_REQUIRED, EPermissions.AUTH_OWNER],
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
