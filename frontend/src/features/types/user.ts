import { TFunction } from 'i18next';

import { ILabel } from './label';

export interface IUser {
  id: number;
  name: string;
  role: EUserRole;
  isBanned: boolean;
  labels: ILabel[];
}

export enum EUserRole {
  Admin = "admin",
  Forwarder = "forwarder",
  Driver = "driver",
  Owner = "owner",
}

export const AllRoles = (
  t: TFunction<['dashboard', 'common'], undefined>,
): {
  name: string;
  value: EUserRole;
}[] => [
  {
    name: t('common:roles.admin'),
    value: EUserRole.Admin,
  },
  {
    name: t('common:roles.forwarder'),
    value: EUserRole.Forwarder,
  },
  {
    name: t('common:roles.driver'),
    value: EUserRole.Driver,
  },
  {
    name: t('common:roles.cargoOwner'),
    value: EUserRole.Owner,
  },
];
