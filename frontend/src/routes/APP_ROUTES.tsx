import { lazy } from 'react';

enum EUserRole {
  Admin = 'admin',
  Forwarder = 'forwarder',
  Driver = 'driver',
  Owner = 'owner',
}

export const APP_ROUTES = {
  HOME: {
    INDEX: {
      path: '/',
      roles: [],
    },
    ABOUT_US: {
      path: '/about',
      roles: [],
    },
    PRIVACY: {
      path: '/privacy',
      roles: [],
    },
  },
  AUTH: {
    LOGIN: {
      path: '/login',
      roles: [],
      element: lazy(() => import('pages/Auth/Login')),
    },
    REGISTRATION: {
      path: '/registration',
      roles: [],
      element: lazy(() => import('pages/Auth/Registration')),
    },
    RECOVERY: {
      path: '/recovery',
      roles: [],
      element: lazy(() => import('pages/Auth/Recovery')),
    },
  },
  DASHBOARD: {
    INDEX: {
      path: '/dashboard',
      roles: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
      element: lazy(() => import('pages/Account/Dashboard')),
    },
    USER_TYPE: {
      path: '/dashboard/users/:userType',
      roles: [EUserRole.Admin, EUserRole.Forwarder],
      element: lazy(() => import('pages/Account/Users')),
    },
    FORWARDERS: {
      path: '/dashboard/users/forwarder',
      roles: [EUserRole.Admin],
      element: lazy(() => import('pages/Account/Users')),
    },
    DRIVERS: {
      path: '/dashboard/users/driver',
      roles: [EUserRole.Admin, EUserRole.Forwarder],
      element: lazy(() => import('pages/Account/Users')),
    },
    OWNERS: {
      path: '/dashboard/users/owner',
      roles: [EUserRole.Admin, EUserRole.Forwarder],
      element: lazy(() => import('pages/Account/Users')),
    },
    PROFILE: {
      path: '/dashboard/profile',
      roles: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
      element: lazy(() => import('pages/Account/Profile')),
    },
    SETTINGS: {
      path: '/dashboard/settings',
      roles: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
      element: lazy(() => import('pages/Account/Settings')),
    },
    APPLICATIONS: {
      path: '/dashboard/applications',
      roles: [EUserRole.Admin],
      element: lazy(() => import('pages/Account/Applications')),
    },
    ORDERS: {
      path: '/dashboard/orders',
      roles: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
      element: lazy(() => import('pages/Account/Orders')),
    },
    CREATE_ORDER: {
      path: '/dashboard/order/create',
      roles: [EUserRole.Owner],
      element: lazy(() => import('pages/Account/CreateOrder')),
    },
  },
};
