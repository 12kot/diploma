import { useLocation } from 'react-router-dom';

import { INavItem, useHandleNavigation } from 'features';

import { NavButton } from '../NavButton';

interface Props {
  navItems: INavItem[];
  setIsOpen: () => void;
}

export const MenuListContainer = ({ navItems, setIsOpen }: Props) => {
  const location = useLocation();
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  return navItems.map((item) => (
    <NavButton
      onClick={() => handleNavigate(item.path)}
      icon={item.icon()}
      text={item.name}
      count={item.count}
      isActive={location.pathname === item.path}
      key={item.id}
    />
  ));
};
