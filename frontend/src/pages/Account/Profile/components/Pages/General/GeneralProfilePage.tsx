import { useTranslation } from 'react-i18next';

import { BgImage, H2 } from 'components';

import { SVGProfileInfo, SVGImportant, tilesImg } from 'assets';

import styles from './styles.module.scss';

export const GeneralProfilePage = () => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <div className={styles.container}>
      <section className={styles.first}>
        <div className={styles.profile}>
          <SVGProfileInfo />
          <p>
            <b>{t('dashboard:profile.personalInfo')}</b>
          </p>
        </div>

        <form className={styles.form}>
          <section className={styles.section}>
            <input type="text" placeholder={t('common:placeholders.name')} />
            <input type="text" placeholder={t('common:placeholders.surname')} />
          </section>
          <input type="email" placeholder={t('common:placeholders.email')} />
          <input type="phone" placeholder={t('common:placeholders.phoneNumber')} />
          <section className={styles.section}>
            <input type="text" placeholder={t('common:placeholders.country')} />
            <input type="text" placeholder={t('common:placeholders.city')} />
          </section>
          <textarea rows={10} placeholder={t('common:placeholders.selfDescription')} />
        </form>
      </section>
      <section className={styles.second}>
        <SVGImportant />
        <H2>{t('dashboard:profile.whyIsImportant')}</H2>
        <p>{t('dashboard:profile.whyIsImportantText')}</p>
        <BgImage image={tilesImg} isTop />
      </section>
    </div>
  );
};
