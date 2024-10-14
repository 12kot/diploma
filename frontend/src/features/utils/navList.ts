import { TFunction } from 'i18next';

import { EUserRole, NavItems } from 'features/types';

export const getNavLinksByUserRole = (role: EUserRole, t: TFunction<['menuHolder'], undefined>) => {
  return NavItems(t).filter((item) => item?.sees?.includes(role));
};