import { useTranslation } from 'react-i18next';

import { Button, H2 } from 'components';

import styles from './styles.module.scss';

export const Settings = () => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <H2>{t('dashboard:settings.changePassword')}</H2>
        <span>{t('dashboard:settings.note')}</span>
      </div>
      <form className={styles.form}>
        <input type="password" placeholder="Current password" />
        <input type="password" placeholder="New password" />
        <Button>{t('common:buttons.updatePassword')}</Button>
      </form>
    </div>
  );
};
