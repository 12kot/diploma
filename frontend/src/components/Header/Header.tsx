import { NavLink } from 'react-router-dom';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { H1 } from 'components/Font';
import { APP_ROUTES, getNavLinksByUserRole, IUserRole, useAuth, useEditUserModal } from 'features';

import SVGMenu from 'assets/svg/SVGMenu';


export const Header = () => {
  const { user } = useAuth();
  const { openUserModal } = useEditUserModal();
  const { t } = useTranslation(['menuHolder', 'common']);

  if (!user?.role) return <></>;

  return (
      <header className="app-header">
        <section className="app-header__logo">
          <H1>
            <NavLink to="" className="decoration-none">
              Logo
            </NavLink>
          </H1>
          <button className="--transparent" aria-label="Switch to Russian">
            <img src="https://flagsapi.com/US/flat/64.png" alt="en" loading="lazy" />
            <p>EN</p>
          </button>
        </section>
        <section className="app-header__actions">
          <ul>
            {getPagesByRole(t, user.role).map((page) => (
              <li key={page.id}>
                <NavLink to={page.path} className="decoration-none">
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="app-header__actions--profile">
            {user.role === 'admin' && (
              <button className="--transparent" aria-label={t('common:buttons.createUser')} onClick={() => openUserModal(true)}>
                <p>{t('common:buttons.createUser')}</p>
              </button>
            )}
            {user.role === 'owner' && (
              <button className="--transparent" aria-label={t('common:buttons.createOrder')}>
                <p>{t('common:buttons.createOrder')}</p>
              </button>
            )}
            <NavLink to={APP_ROUTES.DASHBOARD.PROFILE} className="app-header__actions--user decoration-none">
              <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" alt="profile" loading="lazy" />
              <div className="app-header__actions--user--info">
                <p className="text-main">
                  <b>Hanna Kisel</b>
                </p>

                <div className="flex items-center gap-mini">
                  <div className="main-color-bg rounded w-4" />
                  <p className="app-header__actions--user--info --status">Logistator</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="app-header__actions--border" />
          <button className="app-header__actions--menu --default">
            <SVGMenu />
          </button>
        </section>
      </header>
  );
};

const getPagesByRole = (t: TFunction<['menuHolder'], undefined>, role: IUserRole) => {
  return getNavLinksByUserRole(role, t).slice(0, 2);
};
