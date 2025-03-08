import { useTranslation } from 'react-i18next';

import { BgImage, H2 } from 'components';

import { SVGProfileInfo, SVGImportant, tilesImg } from 'assets';

import styles from './styles.module.scss';

interface Props {
  formData: { firstName: string; lastName: string; email: string; phoneNumber: string; about: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const GeneralProfilePage: React.FC<Props> = ({ formData, onChange }) => {
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
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={onChange}
              placeholder={t('common:placeholders.name')}
            />
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={onChange}
              placeholder={t('common:placeholders.surname')}
            />
          </section>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder={t('common:placeholders.email')}
          />
          <input
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={onChange}
            placeholder={t('common:placeholders.phoneNumber')}
          />
          <textarea
            name="description"
            rows={10}
            value={formData.about}
            onChange={onChange}
            placeholder={t('common:placeholders.selfDescription')}
          />
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
