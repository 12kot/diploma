import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { EUserRole, getNavLinksByUserRole, INavItem, useAuth, useEditUserModal } from 'features';

import SVGCreate from 'assets/svg/SVGCreate';

export const MenuHandler = () => {
  const { user } = useAuth();
  const { openUserModal } = useEditUserModal();
  const { t } = useTranslation(['menuHolder', 'common']);

  if (!user?.role) return <></>;

  return (
    <ul>
      <MenuListContainer navItems={getNavLinksByUserRole(user.role, t)} />
      {user.role === EUserRole.Admin && (
        <li>
          <button className="--default w-full" onClick={() => openUserModal(true)}>
            <div className="active-indicator" />
            <div className="flex gap-8 align-center">
              <SVGCreate />
              <p className="clamp">{t('common:buttons.createUser')}</p>
            </div>
          </button>
        </li>
      )}
    </ul>
  );
};

interface Props {
  navItems: INavItem[];
}

const MenuListContainer = ({ navItems }: Props) => {
  const location = useLocation();
  console.log(location.pathname);

  return navItems.map((item) => (
    <li key={item.id}>
      <NavLink to={item.path} className={`${location.pathname === item.path && '-active'}`}>
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
