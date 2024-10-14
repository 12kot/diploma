import { TFunction } from 'i18next';

import { EUserRole, profilePages } from 'features/types';

export const getProfilePagesByUserRole = (role: EUserRole, t: TFunction<'dashboard', undefined>) => {
  return profilePages(t).filter((item) => item.has.includes(role));
};
