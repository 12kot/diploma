import { useTranslation } from 'react-i18next';

import { Button } from 'components';
import { useAuth } from 'features';

import { MenuHandler } from './Container';

import { SVGLogout } from 'assets';

import styles from "./styles.module.scss";

export const ProfileMenu = () => {
  const { logout } = useAuth();
  const { t } = useTranslation(['menuHolder', 'common']);

  return (
    <nav className={styles.container}>
      <MenuHandler />

      <section className={styles.end}>
        <Button buttonType={'default'} className={styles.logout} onClick={logout}>
          <SVGLogout />
          <p>{t('menuHolder:logOut')}</p>
        </Button>
      </section>
    </nav>
  );
};
