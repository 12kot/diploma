import { TFunction } from 'i18next';

import { ILabel } from './label';

export interface IUser {
  id: number;
  name: string;
  role: IUserRole;
  isBanned: boolean;
  labels: ILabel[];
}

export type IUserRole = 'admin' | 'forwarder' | 'driver' | 'owner';

export const AllRoles = (
  t: TFunction<['dashboard', 'common'], undefined>,
): {
  name: string;
  value: IUserRole;
}[] => [
  {
    name: t('common:roles.admin'),
    value: 'admin',
  },
  {
    name: t('common:roles.forwarder'),
    value: 'forwarder',
  },
  {
    name: t('common:roles.driver'),
    value: 'driver',
  },
  {
    name: t('common:roles.cargoOwner'),
    value: 'owner',
  },
];
