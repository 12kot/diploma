import { TFunction } from "i18next";

import { EUserRole } from "./user";

export interface IProfilePage {
  id: number;
  type: IProfilePageType;
  name: string;
  has: EUserRole[]
}

export type IProfilePageType = 'general' | 'orders';

export const profilePages = (t: TFunction<'dashboard', undefined>): IProfilePage[] => [
  {
    id: 1,
    name: t('profile.pages.general'),
    type: 'general',
    has: [EUserRole.Admin, EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner]
  },
  {
    id: 3,
    name: t('profile.pages.orders'),
    type: 'orders',
    has: [EUserRole.Driver, EUserRole.Owner]
  },
];

