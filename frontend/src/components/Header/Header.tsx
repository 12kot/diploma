import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { H1 } from 'components';
import { APP_ROUTES, getNavLinksByUserRole, IUserRole, useAuth, useEditUserModal } from 'features';

import HeaderLng from './Lng';
import AccountModal from './Modal';
import ProfileCard from './ProfileCard';

import SVGMenu from 'assets/svg/SVGMenu';

export const Header = () => {
  const { user } = useAuth();
  const { t } = useTranslation(['menuHolder', 'common']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { openUserModal } = useEditUserModal();

  return (
    <>
      <AccountModal setIsOpen={() => setIsModalOpen((v) => !v)} isOpen={isModalOpen} />
      <header className="app-header">
        <section className="app-header__logo">
          <NavLink to="" className="decoration-none">
            <H1>Logo</H1>
          </NavLink>
          <HeaderLng />
        </section>
        <section className="app-header__actions">
          <ul>
            {user?.role && getPagesByRole(t, user.role).map((page) => (
              <li key={page.id}>
                <NavLink to={page.path} className="decoration-none">
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="app-header__actions--profile">
            {user?.role === 'admin' && (
              <button
                className="--transparent"
                aria-label={t('common:buttons.createUser')}
                onClick={() => openUserModal(true)}>
                <p>{t('common:buttons.createUser')}</p>
              </button>
            )}
            {user?.role === 'owner' && (
              <NavLink
                to={APP_ROUTES.DASHBOARD.CREATE_ORDER}
                className="btn --transparent decoration-none"
                aria-label={t('common:buttons.createOrder')}>
                <p>{t('common:buttons.createOrder')}</p>
              </NavLink>
            )}
            <ProfileCard />
          </div>
          <div className="app-header__actions--border" />
          <button className="app-header__actions--menu --default" onClick={() => setIsModalOpen((v) => !v)}>
            <SVGMenu />
          </button>
        </section>
      </header>
    </>
  );
};

const getPagesByRole = (t: TFunction<['menuHolder'], undefined>, role: IUserRole) => {
  return getNavLinksByUserRole(role, t).slice(0, 2);
};
