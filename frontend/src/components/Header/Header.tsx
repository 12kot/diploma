import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { Button, H1 } from 'components';
import { APP_ROUTES } from 'Router';
import { EUserRole, getNavLinksByUserRole, useAuth, useEditUserModal } from 'features';

import { HeaderLng } from './Lng';
import { AccountModal } from './Modal';
import { ProfileCard } from './ProfileCard';

import { SVGMenu } from 'assets';

import styles from './styles.module.scss';

export const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation(['menuHolder', 'common']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { openUserModal } = useEditUserModal();

  return (
    <>
      <AccountModal setIsOpen={() => setIsModalOpen((v) => !v)} isOpen={isModalOpen} />
      <header className={styles.container}>
        <section className={styles.container__logo}>
          <NavLink to={APP_ROUTES.HOME} className={styles.td_none}>
            <H1>Logo</H1>
          </NavLink>
          <HeaderLng />
        </section>
        <section className={styles.container__actions}>
          <ul>
            {user?.role &&
              getPagesByRole(t, user.role).map((page) => (
                <li key={page.id}>
                  <NavLink to={page.path} className={styles.td_none}>
                    {page.name}
                  </NavLink>
                </li>
              ))}
          </ul>
          <div className={styles.container__actions_profile}>
            {user?.role === EUserRole.Admin && (
              <Button
                buttonType="transparent"
                aria-label={t('common:buttons.createUser')}
                onClick={() => openUserModal(true)}>
                {t('common:buttons.createUser')}
              </Button>
            )}
            {user?.role === EUserRole.Owner && (
              <Button
                onClick={() => navigate(APP_ROUTES.CREATE_ORDER)}
                buttonType="transparent"
                aria-label={t('common:buttons.createOrder')}>
                {t('common:buttons.createOrder')}
              </Button>
            )}
            {user && <ProfileCard />}
            {!user && <Button onClick={() => navigate(APP_ROUTES.LOGIN)}>{t('common:buttons.signIn')}</Button>}
          </div>
          <div className={styles.container__actions_border} />
          <Button
            buttonType="default"
            className={styles.container__actions_menu}
            onClick={() => setIsModalOpen((v) => !v)}>
            <SVGMenu />
          </Button>
        </section>
      </header>
    </>
  );
};

const getPagesByRole = (t: TFunction<['menuHolder'], undefined>, role: EUserRole) => {
  return getNavLinksByUserRole(role, t).slice(0, 2);
};
