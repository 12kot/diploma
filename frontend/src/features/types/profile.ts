import { TFunction } from "i18next";

import { IUserRole } from "./user";

export interface IProfilePage {
  id: number;
  type: IProfilePageType;
  name: string;
  has: IUserRole[]
}

export type IProfilePageType = 'general' | 'orders';

export const profilePages = (t: TFunction<'dashboard', undefined>): IProfilePage[] => [
  {
    id: 1,
    name: t('profile.pages.general'),
    type: 'general',
    has: ['admin', 'forwarder', 'driver', 'owner']
  },
  {
    id: 3,
    name: t('profile.pages.orders'),
    type: 'orders',
    has: ['driver', 'owner']
  },
];

