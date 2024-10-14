import { useTranslation } from 'react-i18next';

import { H1 } from 'components';

const ProfileHeader = () => {
  const { t } = useTranslation(['common']);

  return (
    <header className="flex-between gap-mini align-center profile-padding media-flex-col-center-768 media-gap-768">
      <div className="profile-img flex gap w-full media-flex-col-center-768 media-gap-768">
        <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" className="rounded" />
        <section className="flex-col justify-center">
          <div className="flex gap-mini w-full align-center media-gap-768 media-direction-768">
            <H1>Hanna Kisel</H1>
            <p className="indicator h-content">Logistator</p>
          </div>
          <span>yakol.nikita@gmail.com</span>
        </section>
      </div>
      <button className="nowrap h-content ">{t('common:buttons.saveChanges')}</button>
    </header>
  );
};

export default ProfileHeader;
