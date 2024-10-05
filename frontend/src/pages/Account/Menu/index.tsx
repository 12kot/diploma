import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuth } from 'features';

import AdminMenu from './Admin';
import ContactUsModal from './ContactUs';

import SVGLogout from 'assets/svg/SVGLogout';

const AccountMenu = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation(['menuHolder']);

  const handleOpenModal = () => {
    setIsModalOpen(v => !v)
  }

  return (
    <nav className="account-container--menu">
      <ContactUsModal isOpen={isModalOpen} setIsOpen={handleOpenModal} />
      {user?.role === 'admin' && <AdminMenu />}

      <section className="account-container--menu__end">
        <div className="account-container--menu__support flex-center">
          <div className="account-container--menu__support -item flex-col gap-mini">
            <p>
              <b>{t('menuHolder:support.contactUs')}</b>
            </p>
            <p className="text-12 text-secondary">{t('menuHolder:support.customerSupport')}</p>
            <button className="mt-8" onClick={handleOpenModal}>
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
