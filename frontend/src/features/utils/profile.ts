import { TFunction } from 'i18next';

import { IUserRole, profilePages } from 'features/types';

export const getProfilePagesByUserRole = (role: IUserRole, t: TFunction<'dashboard', undefined>) => {
  return profilePages(t).filter((item) => item.has.includes(role));
};
