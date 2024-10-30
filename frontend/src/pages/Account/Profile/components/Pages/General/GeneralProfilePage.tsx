import { useTranslation } from 'react-i18next';

import { H2 } from 'components';

import SVGProfileInfo from 'assets/svg/SVGProfileInfo';
import SVGImportant from 'assets/svg/SVGImportant';
import tilesImage from 'assets/img/tiles.png';

export const GeneralProfilePage = () => {
  const { t } = useTranslation(['dashboard', 'common']);

  return (
    <div className="profile-grid">
      <section className="flex-col gap profile-padding profile-grid-first">
        <div className="flex gap-mini align-center">
          <SVGProfileInfo />
          <p>
            <b className="text-14">{t('dashboard:profile.personalInfo')}</b>
          </p>
        </div>
        <form className="flex-col gap profile-grid-first-overflow">
          <section className="flex gap-mini">
            <input type="text" placeholder={t('common:placeholders.name')} className="w-full" />
            <input type="text" placeholder={t('common:placeholders.surname')} className="w-full" />
          </section>
          <input type="email" placeholder={t('common:placeholders.email')} />
          <input type="phone" placeholder={t('common:placeholders.phoneNumber')} />
          <section className="flex gap-mini">
            <input type="text" placeholder={t('common:placeholders.country')} className="w-full" />
            <input type="text" placeholder={t('common:placeholders.city')} className="w-full" />
          </section>
          <textarea rows={10} placeholder={t('common:placeholders.selfDescription')} />
        </form>
      </section>
      <section className="flex-col gap align-center text-center profile-grid-second profile-padding relative">
        <SVGImportant />
        <H2>{t('dashboard:profile.whyIsImportant')}</H2>
        <p>{t('dashboard:profile.whyIsImportantText')}</p>
        <img src={tilesImage} loading="lazy" className="top-0 left-0 absolute w-full z--1" />
      </section>
    </div>
  );
};
