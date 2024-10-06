import { TFunction } from 'i18next';
import { APP_ROUTES } from 'features/constants';

import { IUserRole } from './user';

import SVGCar from 'assets/svg/SVGCar';
import SVGCargoOwner from 'assets/svg/SVGCargoOwner';
import SVGCompany from 'assets/svg/SVGCompany';
import SVGDashboard from 'assets/svg/SVGDashboard';
import SVGInbox from 'assets/svg/SVGInbox';
import SVGSettings from 'assets/svg/SVGSettings';
import SVGUser from 'assets/svg/SVGUser';

export interface INavItem {
  id: number;
  name: string;
  path: string;
  icon: () => JSX.Element;
  count?: number;
  sees: IUserRole[];
}

export const NavItems = (t: TFunction<['menuHolder'], undefined>): INavItem[] => [
  {
    id: 1,
    name: t('menuHolder:links.dashboard'),
    path: APP_ROUTES.DASHBOARD.INDEX,
    sees: ['admin'],
    icon: SVGDashboard,
  },
  {
    id: 2,
    name: t('menuHolder:links.forwarders'),
    path: APP_ROUTES.DASHBOARD.FORWARDERS,
    icon: SVGCompany,
    sees: ['admin'],
    count: 255,
  },
  {
    id: 3,
    name: t('menuHolder:links.drivers'),
    path: APP_ROUTES.DASHBOARD.DRIVERS,
    icon: SVGCar,
    sees: ['admin'],
    count: 8,
  },
  {
    id: 7,
    name: t('menuHolder:links.cargoOwners'),
    path: APP_ROUTES.DASHBOARD.OWNERS,
    icon: SVGCargoOwner,
    sees: ['admin'],
    count: 31,
  },
  {
    id: 4,
    name: t('menuHolder:links.profile'),
    path: APP_ROUTES.DASHBOARD.PROFILE,
    icon: SVGUser,
    sees: ['admin'],
  },
  {
    id: 5,
    name: t('menuHolder:links.settings'),
    path: APP_ROUTES.DASHBOARD.SETTINGS,
    icon: SVGSettings,
    sees: ['admin'],
  },
  {
    id: 6,
    name: t('menuHolder:links.applications'),
    path: APP_ROUTES.DASHBOARD.APPLICATIONS,
    icon: SVGInbox,
    sees: ['admin'],
    count: 31,
  },
];
