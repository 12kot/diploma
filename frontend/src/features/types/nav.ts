import { TFunction } from 'i18next';

import { APP_ROUTES } from 'Router';

import { EUserRole } from './user';

import {
  SVGCar,
  SVGCargoOwner,
  SVGCompany,
  SVGDashboard,
  SVGInbox,
  SVGSettings,
  SVGUser,
  SVGReceipt,
  SVGInfo,
  SVGPrivacy,
  SVGCargo,
} from 'assets';

export interface INavItem {
  id: number;
  name: string;
  path: string;
  icon: () => JSX.Element;
  count?: number;
  sees?: EUserRole[];
}

export const NavItems = (t: TFunction<['menuHolder'], undefined>): INavItem[] => [
  {
    id: 1,
    name: t('menuHolder:links.dashboard'),
    path: APP_ROUTES.DASHBOARD,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
    icon: SVGDashboard,
  },
  {
    id: 8,
    name: t('menuHolder:links.cargo'),
    path: APP_ROUTES.CARGO,
    icon: SVGCargo,
    sees: [EUserRole.Owner],
  },
  {
    id: 10,
    name: t('menuHolder:links.addresses'),
    path: APP_ROUTES.ADDRESSES,
    icon: SVGReceipt,
    sees: [EUserRole.Admin, EUserRole.Forwarder],
    count: 31,
  },
  {
    id: 2,
    name: t('menuHolder:links.orders'),
    path: APP_ROUTES.ORDERS,
    icon: SVGReceipt,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
    count: 31,
  },
  {
    id: 3,
    name: t('menuHolder:links.forwarders'),
    path: APP_ROUTES.FORWARDERS,
    icon: SVGCompany,
    sees: [EUserRole.Admin],
    count: 255,
  },
  {
    id: 4,
    name: t('menuHolder:links.drivers'),
    path: APP_ROUTES.DRIVERS,
    icon: SVGCar,
    sees: [EUserRole.Admin, EUserRole.Forwarder],
    count: 8,
  },
  {
    id: 5,
    name: t('menuHolder:links.cargoOwners'),
    path: APP_ROUTES.OWNERS,
    icon: SVGCargoOwner,
    sees: [EUserRole.Admin, EUserRole.Forwarder],
    count: 31,
  },
  {
    id: 6,
    name: t('menuHolder:links.profile'),
    path: APP_ROUTES.PROFILE,
    icon: SVGUser,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
  },
  {
    id: 7,
    name: t('menuHolder:links.settings'),
    path: APP_ROUTES.SETTINGS,
    icon: SVGSettings,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
  },
  {
    id: 9,
    name: t('menuHolder:links.applications'),
    path: APP_ROUTES.APPLICATIONS,
    icon: SVGInbox,
    sees: [EUserRole.Admin],
    count: 31,
  },
];

export const GeneralNavItems = (t: TFunction<['menuHolder'], undefined>): INavItem[] => [
  {
    id: 1,
    name: t('menuHolder:links.aboutUs'),
    path: APP_ROUTES.ABOUT_US,
    icon: SVGInfo,
  },
  {
    id: 2,
    name: t('menuHolder:links.privacy'),
    path: APP_ROUTES.PRIVACY,
    icon: SVGPrivacy,
  },
];
