import { TFunction } from 'i18next';

import { APP_ROUTES } from 'routes';
import { EUserRole } from './user';

import SVGCar from 'assets/svg/SVGCar';
import SVGCargoOwner from 'assets/svg/SVGCargoOwner';
import SVGCompany from 'assets/svg/SVGCompany';
import SVGDashboard from 'assets/svg/SVGDashboard';
import SVGInbox from 'assets/svg/SVGInbox';
import SVGSettings from 'assets/svg/SVGSettings';
import SVGUser from 'assets/svg/SVGUser';
import SVGReceipt from 'assets/svg/SVGReceipt';
import SVGInfo from 'assets/svg/SVGInfo';
import SVGPrivacy from 'assets/svg/SVGPrivacy';
import SVGCreate from 'assets/svg/SVGCreate';

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
    path: APP_ROUTES.DASHBOARD.INDEX.path,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
    icon: SVGDashboard,
  },
  {
    id: 2,
    name: t('menuHolder:links.orders'),
    path: APP_ROUTES.DASHBOARD.ORDERS.path,
    icon: SVGReceipt,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
    count: 31,
  },
  {
    id: 3,
    name: t('menuHolder:links.forwarders'),
    path: APP_ROUTES.DASHBOARD.FORWARDERS.path,
    icon: SVGCompany,
    sees: [EUserRole.Admin],
    count: 255,
  },
  {
    id: 4,
    name: t('menuHolder:links.drivers'),
    path: APP_ROUTES.DASHBOARD.DRIVERS.path,
    icon: SVGCar,
    sees: [EUserRole.Admin, EUserRole.Forwarder],
    count: 8,
  },
  {
    id: 5,
    name: t('menuHolder:links.cargoOwners'),
    path: APP_ROUTES.DASHBOARD.OWNERS.path,
    icon: SVGCargoOwner,
    sees: [EUserRole.Admin, EUserRole.Forwarder],
    count: 31,
  },
  {
    id: 6,
    name: t('menuHolder:links.profile'),
    path: APP_ROUTES.DASHBOARD.PROFILE.path,
    icon: SVGUser,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
  },
  {
    id: 7,
    name: t('menuHolder:links.settings'),
    path: APP_ROUTES.DASHBOARD.SETTINGS.path,
    icon: SVGSettings,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
  },
  {
    id: 8,
    name: t('menuHolder:links.createOrder'),
    path: APP_ROUTES.DASHBOARD.CREATE_ORDER.path,
    icon: SVGCreate,
    sees: [EUserRole.Owner],
  },
  {
    id: 9,
    name: t('menuHolder:links.applications'),
    path: APP_ROUTES.DASHBOARD.APPLICATIONS.path,
    icon: SVGInbox,
    sees: [EUserRole.Admin],
    count: 31,
  },
];

export const GeneralNavItems = (t: TFunction<['menuHolder'], undefined>): INavItem[] => [
  {
    id: 1,
    name: t('menuHolder:links.aboutUs'),
    path: APP_ROUTES.HOME.ABOUT_US.path,
    icon: SVGInfo,
  },
  {
    id: 2,
    name: t('menuHolder:links.privacy'),
    path: APP_ROUTES.HOME.PRIVACY.path,
    icon: SVGPrivacy,
  },
];
