import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getNavLinksByUserRole, INavItem, useAuth } from 'features';
import { EditUserModal } from 'components/DashboardUsers';

import SVGCreate from 'assets/svg/SVGCreate';

export const MenuHandler = () => {
  const { user } = useAuth();
  const { t } = useTranslation(['menuHolder', 'common']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (!user?.role) return <></>;

  return (
    <>
      {user.role === 'admin' && (
        <EditUserModal isOpen={isModalOpen} setIsOpen={() => setIsModalOpen((v) => !v)} isCreate />
      )}
      <ul>
        <MenuListContainer navItems={getNavLinksByUserRole(user.role, t)} />
        {user.role === 'admin' && (
          <li>
            <button className="--default w-full" onClick={() => setIsModalOpen((v) => !v)}>
              <div className="active-indicator" />
              <div className="flex gap-8 align-center">
                <SVGCreate />
                <p className="clamp">{t('common:buttons.createUser')}</p>
              </div>
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

interface Props {
  navItems: INavItem[];
}

const MenuListContainer = ({ navItems }: Props) => {
  return navItems.map((item) => (
    <li key={item.id}>
      <NavLink to={item.path}>
        <div className="active-indicator" />
        <div className="flex gap-8 align-center">
          {item.icon()}
          <p className="clamp">{item.name}</p>
        </div>
        {item.count && <p className="indicator text-12 flex-center">{item.count}</p>}
      </NavLink>
    </li>
  ));
};
