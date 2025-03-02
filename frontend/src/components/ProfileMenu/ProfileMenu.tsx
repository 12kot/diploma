import { useTranslation } from 'react-i18next';

import { Button } from 'components';
import { useAuth, useContactUsModal } from 'features';

import { MenuHandler } from './Container';

import { SVGLogout } from 'assets';

import styles from "./styles.module.scss";

export const ProfileMenu = () => {
  const { logout } = useAuth();
  const { setContactUsModalOpen } = useContactUsModal();
  const { t } = useTranslation(['menuHolder', 'common']);

  return (
    <nav className={styles.container}>
      <MenuHandler />

      <section className={styles.end}>
        <div className={styles.support}>
          <div className={styles.item}>
            <p>
              <b>{t('common:buttons.contactUs')}</b>
            </p>
            <span>{t('menuHolder:support.customerSupport')}</span>
            <Button onClick={() => setContactUsModalOpen()}>
              {t('common:buttons.contactUs')}
            </Button>
          </div>
        </div>
        <Button buttonType={'default'} className={styles.logout} onClick={logout}>
          <SVGLogout />
          <p>{t('menuHolder:logOut')}</p>
        </Button>
      </section>
    </nav>
  );
};
