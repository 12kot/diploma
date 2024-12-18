import { useTranslation } from 'react-i18next';

import { H2 } from 'components';

import { SVGStar, previewImg } from 'assets';

import styles from './styles.module.scss';

export const AuthPreview = () => {
  const { t } = useTranslation(['auth']);

  return (
    <div className={styles.container}>
      <section className={styles.review}>
        <H2 className={styles.feedback}>{t('auth:preview.feedback')}</H2>
        <div className={styles.company}>
          <div className={styles.info}>
            <p>
              <b>{t('auth:preview.username')}</b>
            </p>
            <span>{t('auth:preview.company')}</span>
          </div>
          <div className={styles.stars}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <SVGStar key={i} />
              ))}
          </div>
        </div>
      </section>
      <section className={styles.img}>
        <img src={previewImg} alt="preview" loading="lazy" />
      </section>
    </div>
  );
};
