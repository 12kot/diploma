import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { RigthModal } from 'components';
import { APP_ROUTES } from 'Router';
import {
  EUserRole,
  GeneralNavItems,
  getNavLinksByUserRole,
  INavItem,
  useAuth,
  useContactUsModal,
  useEditUserModal,
  useHandleNavigation,
} from 'features';

import HeaderLng from '../Lng';
import { ProfileCardButton } from '../ProfileCard';

import SVGCreate from 'assets/svg/SVGCreate';
import tilesBottom from 'assets/img/tilesBottom.png';
import SVGContactUs from 'assets/svg/SVGContactUs';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

const AccountModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <RigthModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <nav className="account-container--menu overflow-y-auto h-full">
        <Content setIsOpen={setIsOpen} />
        <img src={tilesBottom} loading="lazy" className="bottom-0 left-0 absolute w-full z--1" />
      </nav>
    </RigthModal>
  );
};

export default AccountModal;

const Content = ({ setIsOpen }: { setIsOpen: () => void }) => {
  const { user } = useAuth();
  const { t } = useTranslation(['menuHolder', 'common']);
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  const { openUserModal } = useEditUserModal();
  const { setContactUsModalOpen } = useContactUsModal();

  const handleOpenUserModal = () => {
    setIsOpen();
    openUserModal(true);
  };

  const handleOpenContactUsModal = () => {
    setIsOpen();
    setContactUsModalOpen();
  };

  return (
    <ul className="pb-header-modal">
      {user && (
        <ProfileCardButton
          className="p-x-32 pb-16 flex-start w-content"
          onClick={() => handleNavigate(APP_ROUTES.PROFILE)}
        />
      )}
      {user?.role && (
        <>
          <p className="text-12 p-x-32 pb-8 text-light">{t('menuHolder:sections.main')}</p>
          <MenuListContainer navItems={getNavLinksByUserRole(user.role, t)} setIsOpen={setIsOpen} />
          {user.role === EUserRole.Admin && (
            <li>
              <button className="--default w-full" onClick={() => handleOpenUserModal()}>
                <div className="active-indicator" />
                <div className="flex gap-8 align-center">
                  <SVGCreate />
                  <p className="clamp">{t('common:buttons.createUser')}</p>
                </div>
              </button>
            </li>
          )}
        </>
      )}
      <p className="text-12 p-x-32 pb-8 pt-16 text-light w-full">{t('menuHolder:sections.about')}</p>
      <li>
        <button className="--default w-full" onClick={() => handleOpenContactUsModal()}>
          <div className="active-indicator" />
          <div className="flex gap-8 align-center">
            <SVGContactUs />
            <p className="clamp">{t('common:buttons.contactUs')}</p>
          </div>
        </button>
      </li>
      <MenuListContainer navItems={GeneralNavItems(t)} setIsOpen={setIsOpen} />
      <section className="w-full flex-center pt-16">
        <HeaderLng />
      </section>
      {!user && (
        <section className="w-full flex-center gap-8 pt-16 p-x-32">
          <button className="--transparent w-full" onClick={() => handleOpenContactUsModal()}>
            {t('common:buttons.contactUs')}
          </button>
          <button className="w-full" onClick={() => handleNavigate(APP_ROUTES.LOGIN)}>
            {t('common:buttons.signIn')}
          </button>
        </section>
      )}
    </ul>
  );
};

interface NavProps {
  navItems: INavItem[];
  setIsOpen: () => void;
}

const MenuListContainer = ({ navItems, setIsOpen }: NavProps) => {
  const location = useLocation();
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  return navItems.map((item) => (
    <li key={item.id}>
      <button
        onClick={() => handleNavigate(item.path)}
        className={`--default w-full ${location.pathname === item.path && '-active'}`}>
        <div className="active-indicator" />
        <div className="flex gap-8 align-center">
          {item.icon()}
          <p className="clamp">{item.name}</p>
        </div>
        {item.count && <p className="indicator text-12 flex-center">{item.count}</p>}
      </button>
    </li>
  ));
};
