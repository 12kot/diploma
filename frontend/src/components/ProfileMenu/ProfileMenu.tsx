import { useTranslation } from 'react-i18next';

import { useContactUsModal } from 'features';

import { MenuHandler } from './Container';

import SVGLogout from 'assets/svg/SVGLogout';

export const ProfileMenu = () => {
  const { setContactUsModalOpen } = useContactUsModal();
  const { t } = useTranslation(['menuHolder', 'common']);

  return (
    <nav className="account-container--menu">
      <MenuHandler />

      <section className="account-container--menu__end">
        <div className="account-container--menu__support flex-center">
          <div className="account-container--menu__support -item flex-col gap-mini">
            <p>
              <b>{t('common:buttons.contactUs')}</b>
            </p>
            <p className="text-12 text-secondary">{t('menuHolder:support.customerSupport')}</p>
            <button className="mt-8" onClick={() => setContactUsModalOpen()}>
              {t('common:buttons.contactUs')}
            </button>
          </div>
        </div>
        <button className="account-container--menu__logout --default w-full mt-8">
          <SVGLogout />
          <p>{t('menuHolder:logOut')}</p>
        </button>
      </section>
    </nav>
  );
};

