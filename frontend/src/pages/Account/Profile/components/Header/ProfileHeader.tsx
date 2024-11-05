import { useTranslation } from 'react-i18next';

import { H1 } from 'components';

export const ProfileHeader = () => {
  const { t } = useTranslation(['common']);

  return (
    <header className="flex-between gap-mini align-center profile-padding media-flex-col-center-768 media-gap-768">
      <div className="profile-img flex gap w-full media-flex-col-center-768 media-gap-768">
        <img src="https://cdn.openart.ai/published/8EVNpLAOnr5fVQgKrqWw/Tnz4qXWD_lV1v_1024.webp" className="rounded" />
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
