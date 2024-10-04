import { useAuth } from 'features';

import AdminMenu from './Admin';

import SVGLogout from 'assets/svg/SVGLogout';
import { useTranslation } from 'react-i18next';

const AccountMenu = () => {
  const { user } = useAuth();
  const { t } = useTranslation(['menuHolder']);

  return (
    <nav className="account-container--menu">
      {user?.role === 'admin' && <AdminMenu />}

      <section className="account-container--menu__end">
        <div className="account-container--menu__support flex-center">
          <div className="account-container--menu__support -item flex-col gap-mini">
            <p>
              <b>{t('menuHolder:support.contactUs')}</b>
            </p>
            <p className="text-12 text-secondary">{t('menuHolder:support.customerSupport')}</p>
            <button className="mt-8" onClick={() => {}}>
              {t('menuHolder:support.contactUs')}
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

export default AccountMenu;
