import { TFunction } from 'i18next';

import { IUserRole } from 'features/types';
import { NavItems } from 'features/types/nav';

export const getNavLinksByUserRole = (role: IUserRole, t: TFunction<['menuHolder'], undefined>) => {
  return NavItems(t).filter((item) => item.sees.includes(role));
};
