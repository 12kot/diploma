import { TFunction } from 'i18next';

import { IUserRole, NavItems } from 'features/types';

export const getNavLinksByUserRole = (role: IUserRole, t: TFunction<['menuHolder'], undefined>) => {
  return NavItems(t).filter((item) => item.sees.includes(role));
};
