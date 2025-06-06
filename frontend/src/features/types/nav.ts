import { TFunction } from 'i18next';

import { APP_ROUTES } from 'Router';

import { EUserRole } from './user';

import { SVGUser, SVGReceipt, SVGCargo, SVGDelivery } from 'assets';

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
    id: 8,
    name: t('menuHolder:links.cargo'),
    path: APP_ROUTES.CARGO,
    icon: SVGCargo,
    sees: [EUserRole.Admin, EUserRole.Owner],
  },
  {
    id: 10,
    name: t('menuHolder:links.addresses'),
    path: APP_ROUTES.ADDRESSES,
    icon: SVGReceipt,
    sees: [EUserRole.Admin, EUserRole.Forwarder],
  },
  {
    id: 10,
    name: t('menuHolder:links.delivery'),
    path: APP_ROUTES.DELIVERY,
    icon: SVGDelivery,
    sees: [EUserRole.Admin, EUserRole.Forwarder],
  },
  {
    id: 2,
    name: t('menuHolder:links.orders'),
    path: APP_ROUTES.ORDERS,
    icon: SVGReceipt,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver],
  },
  {
    id: 6,
    name: t('menuHolder:links.profile'),
    path: APP_ROUTES.PROFILE,
    icon: SVGUser,
    sees: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
  },
];

export const GeneralNavItems = (): INavItem[] => [];
