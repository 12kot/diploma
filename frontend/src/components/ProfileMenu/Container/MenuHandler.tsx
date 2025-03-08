import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { cx, EUserRole, getNavLinksByUserRole, INavItem, useEditUserModal } from 'features';

import { SVGCreate } from 'assets';

import styles from "./styles.module.scss";
import { Button, Indicator } from 'components/UI';
import { useAppSelector } from 'store';

export const MenuHandler = () => {
  const user = useAppSelector(state => state.user);
  const { openUserModal } = useEditUserModal();
  const { t } = useTranslation(['menuHolder', 'common']);

  if (!user?.role) return <></>;

  return (
    <ul className={styles.container}>
      <MenuListContainer navItems={getNavLinksByUserRole(user.role, t)} />
      {user.role === EUserRole.Admin && (
        <li>
          <Button buttonType={'default'} onClick={() => openUserModal(true)}>
            <div className={styles.active_indicator} />
            <div className={styles.create}>
              <SVGCreate />
              <p className={styles.clamp}>{t('common:buttons.createUser')}</p>
            </div>
          </Button>
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

  return navItems.map((item) => (
    <li key={item.id}>
      <NavLink to={item.path} className={cx(location.pathname === item.path && styles.active)}>
        <div className={styles.active_indicator} />
        <div className={styles.create}>
          {item.icon()}
          <p className={styles.clamp}>{item.name}</p>
        </div>
        {item.count && <Indicator>{item.count}</Indicator>}
      </NavLink>
    </li>
  ));
};
