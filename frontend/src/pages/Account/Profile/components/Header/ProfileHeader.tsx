import { useTranslation } from 'react-i18next';

import { Button, H1, Indicator } from 'components';

import styles from "./styles.module.scss";

export const ProfileHeader = () => {
  const { t } = useTranslation(['common']);

  return (
    <header className={styles.container}>
      <div className={styles.user}>
        <img src="https://cdn.openart.ai/published/8EVNpLAOnr5fVQgKrqWw/Tnz4qXWD_lV1v_1024.webp" />
        <section className={styles.data}>
          <div className={styles.name}>
            <H1>Hanna Kisel</H1>
            <Indicator className={styles.indicator}>Logistator</Indicator>
          </div>
          <span>yakol.nikita@gmail.com</span>
        </section>
      </div>
      <Button className={styles.save}>{t('common:buttons.saveChanges')}</Button>
    </header>
  );
};
